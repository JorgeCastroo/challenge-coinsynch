import { ReactElement } from "react";

import { Dashboard } from "@/screens/Dashboard/Dashboard";
import { DashLayout } from "@/components/DashLayout/DashLayout";

const DashboardPage = () => {
  return <Dashboard />;
};
DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <DashLayout>{page}</DashLayout>;
};

export default DashboardPage;
