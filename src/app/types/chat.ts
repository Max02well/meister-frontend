//  # Message, Citation, HudSpec, HudTool types

export type Role = "user" | "assistant";

export interface Citation {
  id: string;
  label: string;   // e.g. "SSP 401"
  url?: string;
}

export interface Message {
  id: string;
  role: Role;
  content: string;        // markdown
  citations?: Citation[];
  createdAt: string;
}

export interface HudSpec {
  label: string;
  value: string;
}

export interface HudTool {
  code: string;
  description?: string;
}

export interface HudData {
  specs: HudSpec[];
  tools: HudTool[];
  manuals: Citation[];
  loading: boolean;
}