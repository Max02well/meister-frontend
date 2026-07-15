
import HudPanel from "./components/layout/HudPanel";
import ChatPanel from "./components/chat/ChatPanel";
import Sidebar from "./components/layout/Sidebar";

export default function Home() {
  return (
    <div className="grid grid-cols-[200px_1fr_220px] h-screen border border-gray-200 rounded-xl overflow-hidden">
      <Sidebar />
      <div className="flex flex-col bg-gray-50 px-6 py-5 min-h-0">
        <ChatPanel />
      </div>
      <HudPanel />
    </div>
  );
}
