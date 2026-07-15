// # zustand: messages[], activeVehicle, hudData

import { create } from "zustand";
import { Message, HudData } from "../types/chat";

// interface ChatState {
//   activeVehicle: string;
//   messages: Message[];
//   hud: HudData;
//   addMessage: (m: Message) => void;
//   setHud: (h: Partial<HudData>) => void;
// }
interface ChatState {
  activeVehicle: string;
  messages: Message[];
  hud: HudData;
  isResponding: boolean;
  error: string | null;
  pendingMessage: string | null;
  addMessage: (m: Message) => void;
  setHud: (h: Partial<HudData>) => void;
  sendMessage: (content: string) => Promise<void>;
  retry: () => void;
}

export const useChatStore = create<ChatState>((set,get) => ({
  activeVehicle: "Audi A4 B8 1.8T",
  messages: [],
  hud: { specs: [], tools: [], manuals: [], loading: false },
  isResponding: false,
  error: null,
  pendingMessage: null,


  addMessage: (m) => set((s) => ({ messages: [...s.messages, m] })),
  setHud: (h) => set((s) => ({ hud: { ...s.hud, ...h } })),


  sendMessage: async (content) => {
    const { activeVehicle, addMessage, setHud } = get();

    addMessage({
      id: crypto.randomUUID(),
      role: "user",
      content,
      createdAt: new Date().toISOString(),
    });

    set({ error: null, isResponding: true, pendingMessage: null });
    setHud({ loading: true });

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: content, vehicle: activeVehicle }),
      });
      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();

      addMessage({
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.content,
        citations: data.citations,
        createdAt: new Date().toISOString(),
      });
      setHud({
        loading: false,
        specs: data.specs ?? [],
        tools: data.tools ?? [],
        manuals: data.manuals ?? [],
      });
    } catch {
      set({
        error: "Couldn't get a response. Check your connection and try again.",
        pendingMessage: content,
      });
      setHud({ loading: false });
    } finally {
      set({ isResponding: false });
    }
  },

  retry: () => {
    const { pendingMessage, sendMessage } = get();
    if (pendingMessage) sendMessage(pendingMessage);
  },
}));