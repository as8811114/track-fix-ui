import type { IssuePriority, IssueStatus } from "../types";

const statusPresentation: Record<IssueStatus, { label: string; className: string }> = {
  todo: { label: "Open", className: "bg-amber-50 text-amber-700 ring-amber-600/20" },
  in_progress: { label: "In Progress", className: "bg-blue-50 text-blue-700 ring-blue-600/20" },
  done: { label: "Completed", className: "bg-emerald-50 text-emerald-700 ring-emerald-600/20" },
};

const priorityPresentation: Record<IssuePriority, { label: string; dot: string }> = {
  high: { label: "High", dot: "bg-rose-500" },
  medium: { label: "Medium", dot: "bg-amber-500" },
  low: { label: "Low", dot: "bg-sky-500" },
};

export function getStatusLabel(status: IssueStatus) { return statusPresentation[status].label; }

export function StatusBadge({ status }: { status: IssueStatus }) {
  const item = statusPresentation[status];
  return <span className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${item.className}`}>{item.label}</span>;
}

export function PriorityIndicator({ priority }: { priority: IssuePriority }) {
  const item = priorityPresentation[priority];
  return <span className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium text-slate-700"><span className={`size-2 rounded-full ${item.dot}`} aria-hidden="true" />{item.label}</span>;
}
