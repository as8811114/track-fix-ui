import { Icon } from "@/components/icons";
import type { DashboardStat, StatTone } from "../types";

const toneStyles: Record<StatTone, { icon: string; trend: string }> = {
  indigo: { icon: "bg-indigo-50 text-indigo-600", trend: "text-indigo-600" },
  amber: { icon: "bg-amber-50 text-amber-600", trend: "text-amber-700" },
  blue: { icon: "bg-blue-50 text-blue-600", trend: "text-blue-600" },
  emerald: { icon: "bg-emerald-50 text-emerald-600", trend: "text-emerald-600" },
};

export function StatCard({ stat }: { stat: DashboardStat }) {
  const styles = toneStyles[stat.tone];
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/40">
      <div className="flex items-start justify-between gap-4">
        <div><p className="text-sm font-medium text-slate-500">{stat.label}</p><p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{stat.value}</p></div>
        <span className={`grid size-10 place-items-center rounded-xl ${styles.icon}`}><Icon name={stat.icon} className="size-5" /></span>
      </div>
      <p className={`mt-4 text-xs font-medium ${styles.trend}`}>{stat.trend}</p>
    </article>
  );
}
