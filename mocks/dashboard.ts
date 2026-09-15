import type { DashboardData } from "@/features/dashboard/types";

export const mockDashboardData: DashboardData = {
  stats: [
    { label: "Total Issues", value: 24, trend: "+6 from last week", icon: "issues", tone: "indigo" },
    { label: "Open Issues", value: 12, trend: "+2 from last week", icon: "circle-dot", tone: "amber" },
    { label: "In Progress", value: 8, trend: "+1 from last week", icon: "activity", tone: "blue" },
    { label: "Completed", value: 4, trend: "+3 from last week", icon: "check", tone: "emerald" },
  ],
  issueTrend: [
    { date: "Sep 8", open: 7, inProgress: 3, completed: 1 }, { date: "Sep 9", open: 8, inProgress: 4, completed: 1 },
    { date: "Sep 10", open: 7, inProgress: 5, completed: 2 }, { date: "Sep 11", open: 10, inProgress: 5, completed: 2 },
    { date: "Sep 12", open: 9, inProgress: 7, completed: 3 }, { date: "Sep 13", open: 11, inProgress: 7, completed: 3 },
    { date: "Sep 14", open: 12, inProgress: 8, completed: 4 },
  ],
  priorityDistribution: [{ priority: "high", value: 6 }, { priority: "medium", value: 10 }, { priority: "low", value: 6 }, { priority: "none", value: 2 }],
  recentIssues: [
    { id: 24, title: "Fix login error on mobile", project: "Track Fix UI", status: "todo", priority: "high", createdAt: "Sep 15, 2026" },
    { id: 23, title: "Add dark mode support", project: "Track Fix UI", status: "in_progress", priority: "medium", createdAt: "Sep 14, 2026" },
    { id: 22, title: "Update README", project: "Documentation", status: "todo", priority: "low", createdAt: "Sep 14, 2026" },
    { id: 21, title: "Fix responsive layout", project: "Track Fix UI", status: "done", priority: "medium", createdAt: "Sep 13, 2026" },
    { id: 20, title: "Add unit tests for components", project: "Track Fix UI", status: "in_progress", priority: "high", createdAt: "Sep 12, 2026" },
  ],
  tasks: [
    { id: 24, title: "Fix login error on mobile", context: "Track Fix UI", priority: "high", completed: false },
    { id: 22, title: "Update README", context: "Documentation", priority: "low", completed: true },
    { id: 19, title: "Design project settings page", context: "Track Fix UI", priority: "medium", completed: false },
    { id: 20, title: "Add unit tests for components", context: "Track Fix UI", priority: "high", completed: false },
  ],
};
