import { Bell, Search, UserCircle2 } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6">
      <div className="relative w-96">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          size={18}
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-slate-800 text-white rounded-lg pl-10 pr-4 py-2 outline-none"
        />
      </div>

      <div className="flex items-center gap-5">
        <Bell className="text-white cursor-pointer" />
        <UserCircle2 className="text-white cursor-pointer" size={32} />
      </div>
    </header>
  );
}