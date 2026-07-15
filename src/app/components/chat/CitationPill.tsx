import { Citation } from "../../types/chat";

export default function CitationPill({ citation }: { citation: Citation }) {
  const content = (
    <span className="bg-blue-50 text-blue-800 text-xs px-2.5 py-1 rounded-full">
      {citation.label}
    </span>
  );

  return citation.url ? (
    <a href={citation.url} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}