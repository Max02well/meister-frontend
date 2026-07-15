"use client";
import { Cpu, Stethoscope, BookOpen, Briefcase, Settings, LogOut } from "lucide-react";
import clsx from "clsx";
import { useChatStore } from "../../store/chatStore";

const NAV_ITEMS = [
    { label: "Diagnostics", icon: Stethoscope, link: "/diagnostics" },
    { label: "Manuals", icon: BookOpen, link: "/manuals" },
    { label: "Jobs", icon: Briefcase, link: "/jobs" },
    { label: "Settings", icon: Settings, link: "/settings" },
];

export default function Sidebar() {
    const activeVehicle = useChatStore((s) => s.activeVehicle);

    return (
        <aside className="bg-gray-50 border-r border-gray-200 p-5 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-4">
                <Cpu size={18} className="text-blue-600" />
                <span className="text-sm font-medium">MeisterAI</span>
            </div>

            <div>
                <p className="text-[11px] text-gray-400 mb-1 font-normal">Active Vehicle</p>
                <p className="text-sm">{activeVehicle}</p>
            </div>

            <nav className="flex flex-col gap-1 mt-4">
                {NAV_ITEMS.map((item, i) => (
                    <button
                        key={item.label}
                        className={clsx(
                            "flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm text-left",
                            i === 0 ? "bg-white" : "text-gray-500 hover:bg-white"
                        )}
                    >
                        <item.icon size={16} />
                        {item.label}
                    </button>
                ))}

            </nav>


            {/* Logout button */}
            {/* Profile info */}
            <div className="mt-auto flex flex-col gap-3">
                <div className="flex items-center gap-2.5 px-1">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-medium flex items-center justify-center shrink-0">
                        MG
                    </div>
                    <div className="flex flex-col min-w-0">
                        <span className="text-sm font-medium truncate">Max Gogo</span>
                        <span className="text-xs text-gray-400 truncate">max.gogo@gmail.com</span>
                    </div>
                </div>
                <button className="flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-lg text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 transition-colors">
                    <LogOut size={14} />
                    Logout
                </button>
            </div>

        </aside>
    );
}