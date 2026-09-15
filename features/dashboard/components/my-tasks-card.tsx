import type { DashboardTask } from "../types";
import { PriorityIndicator } from "./status-badge";

export function MyTasksCard({ tasks }: { tasks: DashboardTask[] }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-200/40">
      <div className="border-b border-slate-100 px-5 py-5 sm:px-6"><h2 className="font-semibold text-slate-950">My Tasks</h2><p className="mt-1 text-sm text-slate-500">Your assigned work</p></div>
      <ul className="divide-y divide-slate-100 px-5 sm:px-6">{tasks.map((task) => <li key={task.id} className="flex gap-3 py-4"><input type="checkbox" checked={task.completed} disabled aria-label={`${task.title} completion status`} className="mt-0.5 size-4 shrink-0 accent-indigo-600 disabled:opacity-100" /><div className="min-w-0 flex-1"><p className={`text-sm font-medium ${task.completed ? "text-slate-400 line-through" : "text-slate-900"}`}>{task.title}</p><div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1"><span className="text-xs text-slate-500">#{task.id} · {task.context}</span><PriorityIndicator priority={task.priority} /></div></div></li>)}</ul>
    </section>
  );
}
