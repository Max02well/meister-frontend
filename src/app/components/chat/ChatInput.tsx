"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import clsx from "clsx";
import { useChatStore } from "../../store/chatStore";

export default function ChatInput() {
    const [value, setValue] = useState("");
    const sendMessage = useChatStore((s) => s.sendMessage);
    const hasText = value.trim().length > 0;

    function handleSend() {
        if (!value.trim()) return;
        sendMessage(value);
        setValue("");
    }

    return (
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2.5 shadow-sm">
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask a follow-up question..."
                className="flex-1 text-sm outline-none bg-transparent"
            />
            <button
                onClick={handleSend}
                disabled={!hasText}
                aria-label="Send message"
                className={clsx(
                    "flex items-center justify-center w-7 h-7 rounded-full transition-colors duration-150",
                    hasText ? "bg-[#0B0F19] cursor-pointer" : "bg-gray-100 cursor-not-allowed"
                )}
            >
                <Send size={14} className={hasText ? "text-white" : "text-gray-400"} />
            </button>
        </div>
    );
}