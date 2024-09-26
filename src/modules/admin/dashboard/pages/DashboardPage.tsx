import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import StatsBox from "../components/StatsBox";

import DepositAndWithdrawal from "../components/DepositAndWithdrawal";

import SalesByCategory from "../components/SalesByCategory";

import DailySales from "../components/DailySales";

import TotalOrders from "../components/TotalOrders";

import useQuery from "@/hooks/useQuery";

import {apiGetDashboardData} from "../services";

import {useMemo} from "react";

import LoadingScreen from "@/components/LoadingScreen";

export const Component = () => {
  usePageTitle("Dashboard");

  const {data, isLoading} = useQuery({
    queryFn: apiGetDashboardData,
    queryKey: ["admin-dashboard-data"],
  });

  const dashboardData = useMemo(() => data, [data]);

  console.log(dashboardData);

  const handelNumber = (value: number) => {
    return +Number(value).toFixed(2);
  };

  return (
    <TransitionPage>
      {isLoading ? (
        <LoadingScreen />
      ) : dashboardData ? (
        <>
          <div className='mb-2rem grid grid-cols-3 gap-1.5rem'>
            <StatsBox
              title='Total Sold Coin'
              value={handelNumber(dashboardData.total_sold_coin) || 0}
              className='bg-base-300'
            />
            <StatsBox
              title='Total Blocked Coin'
              value={handelNumber(dashboardData.total_blocked_coin) || 0}
              className='bg-base-300'
            />
            <StatsBox
              title='Total User'
              value={handelNumber(dashboardData.total_user) || 0}
              className='bg-base-300'
            />
            <StatsBox
              title='Total Membership'
              value={handelNumber(dashboardData.total_member) || 0}
              className='bg-base-300'
            />
            <StatsBox
              title='Total Distributed Bonus'
              value={handelNumber(dashboardData.bonus_distribution) || 0}
              className='bg-base-300'
            />
            <StatsBox
              title='Total Revenue'
              value={handelNumber(dashboardData.total_income) || 0}
              className='bg-base-300'
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
        </>
      ) : null}
    </TransitionPage>
  );
};

Component.displayName = "DashboardPage";
