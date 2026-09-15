import { Icon } from "@/components/icons";

export function TopBar({ onMenuOpen }: { onMenuOpen: () => void }) {
  return (
    <header className="sticky top-0 z-20 flex h-18 items-center gap-3 border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6 lg:px-8">
      <button type="button" className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-indigo-600 lg:hidden" onClick={onMenuOpen} aria-label="Open menu"><Icon name="menu" className="size-5" /></button>
      <div className="relative w-full max-w-xl">
        <label htmlFor="global-search" className="sr-only">Search issues and projects</label>
        <Icon name="search" className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
        <input id="global-search" type="search" placeholder="Search issues, projects..." readOnly aria-describedby="search-availability" className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-3 focus:ring-indigo-100" />
        <span id="search-availability" className="sr-only">Search is not available yet.</span>
      </div>
      <span className="ml-auto hidden size-9 shrink-0 place-items-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-700 sm:grid" aria-label="Signed in as JunHao">JH</span>
    </header>
  );
}
