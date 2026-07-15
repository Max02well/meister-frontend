"use client";
import { FileText } from "lucide-react";
import { useChatStore } from "../../store/chatStore";
import SkeletonBlock from "../../components/ui/SkeletonUI";

export default function HudPanel() {
  const hud = useChatStore((s) => s.hud);

  return (
    <aside className="bg-gray-50 border-l border-gray-200 p-4 flex flex-col gap-6">
      <section>
        <p className="text-[11px] text-gray-600 mb-1.5">Specs</p>
        {hud.loading ? (
          <div className="flex flex-col gap-1.5">
            <SkeletonBlock className="h-3.5 w-4/5" />
            <SkeletonBlock className="h-3.5 w-3/5" />
          </div>
        ) : (
          <div className="flex flex-col gap-1.5 text-xs">
            {hud.specs.map((s) => (
              <div key={s.label} className="flex justify-between">
                <span className="text-gray-500">{s.label}</span>
                <span>{s.value}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <p className="text-[11px] text-gray-600 mb-1.5">Tools</p>
        {hud.loading ? (
          <div className="flex flex-col gap-1.5">
            <SkeletonBlock className="h-[26px]" />
            <SkeletonBlock className="h-[26px]" />
          </div>
        ) : (
          <div className="flex flex-col gap-1.5">
            {hud.tools.map((t) => (
              <div key={t.code} className="border border-gray-200 rounded-lg px-2 py-1.5 text-xs">
                {t.code}
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <p className="text-[11px] text-gray-600 mb-1.5">Manuals</p>
        {hud.loading ? (
          <SkeletonBlock className="h-[26px]" />
        ) : (
          <div className="flex flex-col gap-1.5">
            {hud.manuals.map((m) => (
              <div
                key={m.id}
                className="border border-gray-200 rounded-lg px-2 py-1.5 text-xs flex items-center gap-1.5"
              >
                <FileText size={14} />
                {m.label}
              </div>
            ))}
          </div>
        )}
      </section>
    </aside>
  );
}