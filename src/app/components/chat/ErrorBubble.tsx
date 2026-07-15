import { AlertCircle, RotateCw } from "lucide-react";
import { useChatStore } from "../../store/chatStore";

export default function ErrorBubble() {
    const error = useChatStore((s) => s.error);
    const retry = useChatStore((s) => s.retry);

    if (!error) return null;

    return (
        <div className="flex items-center gap-2.5 max-w-[85%] bg-red-50 border border-red-100 rounded-xl px-3 py-2.5">
            <AlertCircle size={16} className="text-red-500 shrink-0" />
            <p className="text-sm text-red-700 flex-1">{error}</p>
            <button
                onClick={retry}
                className="flex items-center gap-1 text-xs font-medium text-red-600 hover:text-red-700 shrink-0"
            >
                <RotateCw size={12} />
                Retry
            </button>
        </div>
    );
}