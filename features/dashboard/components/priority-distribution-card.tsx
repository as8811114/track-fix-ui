import type { PriorityCategory, PriorityDistribution } from "../types";

const presentation: Record<PriorityCategory, { label: string; color: string; dot: string }> = {
  high: { label: "High", color: "#f43f5e", dot: "bg-rose-500" },
  medium: { label: "Medium", color: "#f59e0b", dot: "bg-amber-500" },
  low: { label: "Low", color: "#0ea5e9", dot: "bg-sky-500" },
  none: { label: "None", color: "#cbd5e1", dot: "bg-slate-300" },
};

export function PriorityDistributionCard({ data }: { data: PriorityDistribution[] }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/40 sm:p-6">
      <h2 className="font-semibold text-slate-950">Issues by Priority</h2>
      <p className="mt-1 text-sm text-slate-500">Current issue distribution</p>
      <div className="mt-6 flex items-center justify-center gap-8 xl:gap-10">
        <div className="relative size-36 shrink-0">
          <svg viewBox="0 0 100 100" className="size-full -rotate-90" role="img" aria-label={`${total} issues distributed by priority`}>
            <circle cx="50" cy="50" r="38" fill="none" stroke="#f1f5f9" strokeWidth="12" />
            {data.map((item, index) => {
              const percent = (item.value / total) * 100;
              const currentOffset = data.slice(0, index).reduce(
                (sum, segment) => sum + (segment.value / total) * 100,
                0,
              );

              return <circle key={item.priority} cx="50" cy="50" r="38" pathLength="100" fill="none" stroke={presentation[item.priority].color} strokeWidth="12" strokeDasharray={`${percent} ${100-percent}`} strokeDashoffset={-currentOffset} />;
            })}
          </svg>
          <div className="absolute inset-0 grid place-content-center text-center"><strong className="text-2xl text-slate-950">{total}</strong><span className="text-xs text-slate-500">Total issues</span></div>
        </div>
        <ul className="min-w-28 space-y-3">
          {data.map((item) => (
            <li key={item.priority} className="flex items-center gap-2 text-sm">
              <span className={`size-2 rounded-full ${presentation[item.priority].dot}`} />
              <span className="text-slate-600">{presentation[item.priority].label}</span>
              <strong className="ml-auto text-slate-900">{item.value}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
