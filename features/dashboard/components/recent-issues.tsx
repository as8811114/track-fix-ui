import { Icon } from "@/components/icons";
import type { Issue } from "../types";
import { PriorityIndicator, StatusBadge } from "./status-badge";

export function RecentIssues({ issues }: { issues: Issue[] }) {
  return (
    <section className="min-w-0 rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-200/40">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 sm:px-6">
        <div><h2 className="font-semibold text-slate-950">Recent Issues</h2><p className="mt-1 text-sm text-slate-500">Latest updates across your projects</p></div>
        <span aria-disabled="true" className="hidden items-center gap-1 text-sm font-semibold text-indigo-600 sm:flex">View all<Icon name="chevron-right" className="size-4" /></span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[780px] border-collapse text-left text-sm">
          <caption className="sr-only">Five most recently created issues</caption>
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/70 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <th scope="col" className="px-6 py-3">ID</th><th scope="col" className="px-4 py-3">Title</th><th scope="col" className="px-4 py-3">Project</th><th scope="col" className="px-4 py-3">Status</th><th scope="col" className="px-4 py-3">Priority</th><th scope="col" className="px-6 py-3">Created At</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {issues.map((issue) => (
              <tr key={issue.id} className="transition-colors hover:bg-slate-50/70">
                <td className="px-6 py-4 font-mono text-xs font-semibold text-indigo-600">#{issue.id}</td>
                <td className="px-4 py-4 font-medium text-slate-900">{issue.title}</td>
                <td className="px-4 py-4 text-slate-600">{issue.project}</td>
                <td className="px-4 py-4"><StatusBadge status={issue.status} /></td>
                <td className="px-4 py-4"><PriorityIndicator priority={issue.priority} /></td>
                <td className="whitespace-nowrap px-6 py-4 text-slate-500">{issue.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
