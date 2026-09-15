import type { DashboardData } from "../types";
import { IssueTrendCard } from "./issue-trend-card";
import { MyTasksCard } from "./my-tasks-card";
import { PriorityDistributionCard } from "./priority-distribution-card";
import { RecentIssues } from "./recent-issues";
import { StatCard } from "./stat-card";

type DashboardProps = { data: DashboardData; userName: string; dateLabel?: string };

export function Dashboard({ data, userName, dateLabel }: DashboardProps) {
  return (
    <div className="min-w-0">
      <header className="flex items-start justify-between gap-6">
        <div><h1 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Welcome back, {userName}!</h1><p className="mt-2 text-sm text-slate-500 sm:text-base">Here&apos;s what&apos;s happening with your projects today.</p></div>
        {dateLabel && <time dateTime="2026-09-15" className="hidden rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm sm:block">{dateLabel}</time>}
      </header>

      <section aria-label="Issue summary" className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{data.stats.map((stat) => <StatCard key={stat.label} stat={stat} />)}</section>
      <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.8fr)_minmax(310px,0.8fr)]"><IssueTrendCard data={data.issueTrend} /><PriorityDistributionCard data={data.priorityDistribution} /></div>
      <div className="mt-6 grid items-start gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(320px,0.75fr)]"><RecentIssues issues={data.recentIssues} /><MyTasksCard tasks={data.tasks} /></div>
    </div>
  );
}
