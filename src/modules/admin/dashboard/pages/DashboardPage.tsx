import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import StatsBox from "../components/StatsBox";

import DepositAndWithdrawal from "../components/DepositAndWithdrawal";

import SalesByCategory from "../components/SalesByCategory";

import DailySales from "../components/DailySales";

import TotalOrders from "../components/TotalOrders";

export const Component = () => {
  usePageTitle("Dashboard");

  return (
    <TransitionPage>
      <div className='mb-2rem grid grid-cols-3 gap-1.5rem'>
        <StatsBox title='Available Coin' value='9,013,326.45' className='bg-base-300' />
        <StatsBox title='Total Blocked Coin' value='114,880.99' className='bg-base-300' />
        <StatsBox title='Total Buy Coin' value='86,251,105.99' className='bg-base-300' />
        <StatsBox title='Available Coin' value='9,013,326.45' className='bg-base-300' />
        <StatsBox title='Total Blocked Coin' value='114,880.99' className='bg-base-300' />
        <StatsBox title='Total Buy Coin' value='86,251,105.99' className='bg-base-300' />
      </div>

      <div className='grid gap-6 xl:grid-cols-3'>
        <DepositAndWithdrawal />
        <SalesByCategory />
      </div>

      <div className='grid gap-6 mt-2rem xl:grid-cols-2'>
        <DailySales />
        <TotalOrders />
      </div>
    </TransitionPage>
  );
};

Component.displayName = "DashboardPage";
