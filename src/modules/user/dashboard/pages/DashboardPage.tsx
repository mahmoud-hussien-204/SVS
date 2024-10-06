import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import StatsBox from "../components/StatsBox";

import DepositAndWithdrawal from "../components/DepositAndWithdrawal";

import DailySales from "../components/BuyCoinReport";

import {apiGetDashboardData} from "../services";

import useQuery from "@/hooks/useQuery";

import {IDashboardData} from "../interfaces";

import LoadingScreen from "@/components/LoadingScreen";

import {lazy, Suspense, useMemo} from "react";

const TradingViewTickerTape = lazy(() => import("../components/Bar"));

export const Component = () => {
  usePageTitle("Dashboard");

  const {data, isLoading} = useQuery({
    queryFn: apiGetDashboardData,
    queryKey: ["dashboard-data"],
    refetchOnWindowFocus: false,
    retry: false,
  });

  const dashboardData = data as unknown as IDashboardData;

  const handelNumber = (value: number) => {
    return +Number(value).toFixed(2);
  };

  const reportData = useMemo(() => {
    if (!dashboardData) return;
    return Object.values(dashboardData?.monthly_buy_coin);
  }, [dashboardData]);

  const hasReportData = useMemo(() => {
    if (!Array.isArray(reportData)) return false;
    const hasData = reportData.find((item) => item > 0);
    return reportData.length > 0 && hasData;
  }, [reportData]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <TransitionPage>
      <Suspense fallback=''>
        <TradingViewTickerTape />
      </Suspense>
      <div className='mb-2rem grid grid-cols-3 gap-1.5rem'>
        <StatsBox
          title='Available Coin'
          value={handelNumber(dashboardData?.balance.available_coin) || 0}
          className='bg-transparent from-indigo-400 to-indigo-300'
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
        <DepositAndWithdrawal
          withdrawals={Object.values(dashboardData?.monthly_withdrawal)}
          deposits={Object.values(dashboardData?.monthly_deposit)}
        />
      </div>

      {hasReportData && (
        <div className='mt-2rem grid gap-6 xl:grid-cols-2'>
          <DailySales data={reportData} />
        </div>
      )}
    </TransitionPage>
  );
};

Component.displayName = "DashboardPage";
