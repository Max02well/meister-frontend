import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Message } from "../../types/chat";
import CitationPill from "./CitationPill";

export default function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === "user";

  if (isUser) {
    return (
      <div className="self-end max-w-[80%] bg-white border border-gray-200 rounded-xl px-3 py-2 text-sm">
        {message.content}
      </div>
    );
  }

  return (
    <div className="max-w-full text-sm leading-7">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.content}</ReactMarkdown>
      {message.citations && message.citations.length > 0 && (
        <div className="flex gap-1.5 flex-wrap mt-2">
          {message.citations.map((c) => (
            <CitationPill key={c.id} citation={c} />
          ))}
        </div>
      )}
    </div>
  );
}