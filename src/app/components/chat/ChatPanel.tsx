"use client";
import { useChatStore } from "../../store/chatStore";
import ChatThread from "./ChatThread";
import ChatInput from "./ChatInput";

export default function ChatPanel() {
    const hasMessages = useChatStore((s) => s.messages.length > 0);
    const activeVehicle = useChatStore((s) => s.activeVehicle);

    if (!hasMessages) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center px-4">
                <div className="w-full max-w-xl text-center mb-6">
                    <h1 className="text-lg font-medium text-gray-900 mb-1.5">
                        What&apos;s going on with the {activeVehicle}?
                    </h1>
                    <p className="text-sm text-gray-500">
                        Ask a diagnostic question and I&apos;ll pull specs, tools, and manuals as I answer.
                    </p>
                </div>
                <div className="w-full max-w-xl">
                    <ChatInput />
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1 flex flex-col min-h-0">
            <ChatThread />
            <ChatInput />
        </div>
    );
}