import type { IssueTrendPoint } from "../types";

const series = [
  { key: "open", label: "Open", color: "#f59e0b", dot: "bg-amber-500" },
  { key: "inProgress", label: "In Progress", color: "#4f46e5", dot: "bg-indigo-600" },
  { key: "completed", label: "Completed", color: "#10b981", dot: "bg-emerald-500" },
] as const;

export function IssueTrendCard({ data }: { data: IssueTrendPoint[] }) {
  const width = 660, height = 230, left = 34, right = 14, top = 15, bottom = 34, maxValue = 12;
  const chartWidth = width - left - right, chartHeight = height - top - bottom;
  const x = (index: number) => left + (index * chartWidth) / (data.length - 1);
  const y = (value: number) => top + chartHeight - (value / maxValue) * chartHeight;
  const ticks = [0, 4, 8, 12];

  return (
    <section className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/40 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3"><div><h2 className="font-semibold text-slate-950">Issue Trend</h2><p className="mt-1 text-sm text-slate-500">Issue activity over the last 7 days</p></div><div className="flex flex-wrap gap-4">{series.map((item) => <span key={item.key} className="flex items-center gap-2 text-xs font-medium text-slate-600"><span className={`size-2 rounded-full ${item.dot}`} />{item.label}</span>)}</div></div>
      <div className="mt-5 overflow-x-auto">
        <svg viewBox={`0 0 ${width} ${height}`} className="h-auto min-w-[560px] w-full" role="img" aria-labelledby="issue-trend-title">
          <title id="issue-trend-title">Open, in progress, and completed issue counts from September 8 to September 14</title>
          {ticks.map((tick) => <g key={tick}><line x1={left} x2={width-right} y1={y(tick)} y2={y(tick)} stroke="#e2e8f0" strokeDasharray="4 5" /><text x={left-10} y={y(tick)+4} textAnchor="end" fontSize="11" fill="#94a3b8">{tick}</text></g>)}
          {data.map((point, index) => <text key={point.date} x={x(index)} y={height-8} textAnchor="middle" fontSize="11" fill="#64748b">{point.date}</text>)}
          {series.map((item) => {
            const points = data.map((point, index) => `${x(index)},${y(point[item.key])}`).join(" ");
            return <g key={item.key}><polyline points={points} fill="none" stroke={item.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />{data.map((point, index) => <circle key={point.date} cx={x(index)} cy={y(point[item.key])} r="3" fill="white" stroke={item.color} strokeWidth="2" />)}</g>;
          })}
        </svg>
      </div>
    </section>
  );
}
