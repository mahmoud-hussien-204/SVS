import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import StatsBox from "../components/StatsBox";

import DepositAndWithdrawal from "../components/DepositAndWithdrawal";

import SalesByCategory from "../components/SalesByCategory";

import DailySales from "../components/DailySales";

import TotalOrders from "../components/TotalOrders";
import {apiGetDashboardData} from "../services";
import useQuery from "@/hooks/useQuery";

export const Component = () => {
  usePageTitle("Dashboard");

  const {data, isLoading} = useQuery({
    queryFn: apiGetDashboardData,
    queryKey: ["dashboard-data"],
    refetchOnWindowFocus: false,
    retry: false,
  });

  return (
    <TransitionPage>
      <div className='mb-2rem grid grid-cols-3 gap-1.5rem'>
        <StatsBox
          title='Available Coin'
          value={data?.data?.balance.available_coin || "0"}
          className='from-indigo-400 to-indigo-300'
        />
        <StatsBox
          title='Total Blocked Coin'
          value={data?.data?.blocked_coin || "0"}
          className='from-violet-500 to-violet-400'
        />
        <StatsBox
          title='Total Buy Coin'
          value={data?.data?.total_buy_coin || "0"}
          className='from-fuchsia-500 to-fuchsia-400'
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
