import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import StatsBox from "../components/StatsBox";

import DepositAndWithdrawal from "../components/DepositAndWithdrawal";

import SalesByCategory from "../components/SalesByCategory";

import DailySales from "../components/DailySales";

import TotalOrders from "../components/TotalOrders";

import { apiGetDashboardData } from "../services";

import useQuery from "@/hooks/useQuery";
import { IDashboardData } from "../interfaces";

export const Component = () => {
  usePageTitle("Dashboard");

  const { data, isLoading } = useQuery({
    queryFn: apiGetDashboardData,
    queryKey: ["dashboard-data"],
    refetchOnWindowFocus: false,
    retry: false,
  });

  const dashboardData = data as unknown as IDashboardData

  const handelNumber = (value: number) => {
    return +Number(value).toFixed(2)
  }

  return (
    <TransitionPage>
      <div className='mb-2rem grid grid-cols-3 gap-1.5rem'>
        <StatsBox
          title='Available Coin'
          value={handelNumber(dashboardData?.balance.available_coin) || 0}
          className='from-indigo-400 to-indigo-300 bg-transparent'
          isLoading={isLoading}
        />
        <StatsBox
          title='Total Blocked Coin'
          value={handelNumber(dashboardData?.blocked_coin) || 0}
          className='from-violet-500 to-violet-400'
          isLoading={isLoading}
        />
        <StatsBox
          title='Total Buy Coin'
          value={handelNumber(dashboardData?.total_buy_coin) || 0}
          className='from-fuchsia-500 to-fuchsia-400'
          isLoading={isLoading}
        />
      </div>

      <div className='grid gap-6 xl:grid-cols-3'>
        <DepositAndWithdrawal />
        <SalesByCategory />
      </div>

      <div className='mt-2rem grid gap-6 xl:grid-cols-2'>
        <DailySales />
        <TotalOrders />
      </div>
    </TransitionPage>
  );
};

Component.displayName = "DashboardPage";
