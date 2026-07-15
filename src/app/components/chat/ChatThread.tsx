"use client";
import { useEffect, useRef } from "react";
import { useChatStore } from "../../store/chatStore";
import MessageBubble from "./MessageBubble";
import ResponseSkeleton from "./ResponseSkeleton";
import ErrorBubble from "./ErrorBubble";

export default function ChatThread() {
    const messages = useChatStore((s) => s.messages);
    const isResponding = useChatStore((s) => s.isResponding);
    const error = useChatStore((s) => s.error);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isResponding, error]);

    return (
        <div className="flex-1 flex flex-col gap-6 overflow-y-auto pr-1 pb-4 min-h-0">
            {messages.map((m) => (
                <MessageBubble key={m.id} message={m} />
            ))}
            {isResponding && <ResponseSkeleton />}
            {error && <ErrorBubble />}
            <div ref={bottomRef} />
        </div>
    );
}