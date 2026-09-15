import { Icon, type IconName } from "@/components/icons";
import Link from "next/link";

const primaryNavigation: { label: string; icon: IconName; href: string; available: boolean }[] = [
  { label: "Dashboard", icon: "dashboard", href: "/", available: true },
  { label: "Projects", icon: "folder", href: "/projects", available: false },
  { label: "Issues", icon: "issues", href: "/issues", available: false },
  { label: "My Tasks", icon: "clipboard", href: "/tasks", available: false },
  { label: "Calendar", icon: "calendar", href: "/calendar", available: false },
  { label: "Reports", icon: "reports", href: "/reports", available: false },
];

type SidebarProps = { currentPath: string; isOpen: boolean; onClose: () => void };

export function Sidebar({ currentPath, isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-slate-950/30 lg:hidden"
          onClick={onClose}
          aria-label="Close navigation"
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[248px] flex-col border-r border-slate-200 bg-white transition-transform duration-200 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        aria-label="Application sidebar"
      >
        <div className="flex h-18 items-center justify-between border-b border-slate-100 px-5">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600"
            aria-label="Track Fix dashboard"
          >
            <span className="grid size-9 place-items-center rounded-xl bg-indigo-600 text-sm font-bold text-white shadow-sm">TF</span>
            <span className="text-lg font-semibold tracking-tight text-slate-950">Track Fix</span>
          </Link>
          <button type="button" className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden" onClick={onClose} aria-label="Close menu">
            <Icon name="x" className="size-5" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col px-3 py-5" aria-label="Primary navigation">
          <ul className="space-y-1">
            {primaryNavigation.map((item) => (
              <li key={item.label}>
                {item.available ? (
                  <Link
                    href={item.href}
                    aria-current={currentPath === item.href ? "page" : undefined}
                    className={currentPath === item.href
                      ? "flex items-center gap-3 rounded-lg bg-indigo-50 px-3 py-2.5 text-sm font-semibold text-indigo-700"
                      : "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900"}
                  >
                    <Icon name={item.icon} className="size-5" />
                    {item.label}
                  </Link>
                ) : (
                  <span aria-disabled="true" className="flex cursor-default items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500">
                    <Icon name={item.icon} className="size-5" />
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-auto border-t border-slate-100 pt-4">
            <div className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500"><Icon name="settings" className="size-5" />Settings</div>
          </div>
        </nav>
        <div className="border-t border-slate-100 p-4">
          <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
            <span className="grid size-9 place-items-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700">JH</span>
            <div><p className="text-sm font-semibold text-slate-900">JunHao</p><p className="text-xs text-slate-500">Frontend Developer</p></div>
          </div>
        </div>
      </aside>
    </>
  );
}
