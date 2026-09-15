import { mockDashboardData } from "@/mocks/dashboard";
import type { DashboardData } from "../types";

export async function getDashboardData(): Promise<DashboardData> {
  return structuredClone(mockDashboardData);
}
