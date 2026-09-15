import { Dashboard } from "@/features/dashboard/components/dashboard";
import { getDashboardData } from "@/features/dashboard/services/dashboard-service";

export default async function Home() {
  const dashboardData = await getDashboardData();

  return <Dashboard data={dashboardData} userName="JunHao" dateLabel="Sep 15, 2026" />;
}
