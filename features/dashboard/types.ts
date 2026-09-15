import type { IconName } from "@/components/icons";

export type IssueStatus = "todo" | "in_progress" | "done";
export type IssuePriority = "low" | "medium" | "high";
export type StatTone = "indigo" | "amber" | "blue" | "emerald";
export type PriorityCategory = IssuePriority | "none";
export interface DashboardStat { label: string; value: number; trend: string; icon: IconName; tone: StatTone; }
export interface IssueTrendPoint { date: string; open: number; inProgress: number; completed: number; }
export interface PriorityDistribution { priority: PriorityCategory; value: number; }
export interface Issue { id: number; title: string; project: string; status: IssueStatus; priority: IssuePriority; createdAt: string; }
export interface DashboardTask { id: number; title: string; context: string; priority: IssuePriority; completed: boolean; }
export interface DashboardData { stats: DashboardStat[]; issueTrend: IssueTrendPoint[]; priorityDistribution: PriorityDistribution[]; recentIssues: Issue[]; tasks: DashboardTask[]; }
