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
      <div className='mb-2rem grid grid-cols-4 gap-1.5rem'>
        <div className='row-span-2'></div>
        <StatsBox
          title='Available Coin'
          value='9,013,326.45'
          className='from-indigo-400 to-indigo-300'
        />
        <StatsBox
          title='Total Blocked Coin'
          value='114,880.99'
          className='from-violet-500 to-violet-400'
        />
        <StatsBox
          title='Total Buy Coin'
          value='86,251,105.99'
          className='from-fuchsia-500 to-fuchsia-400'
        />

        <StatsBox
          title='Available Coin'
          value='9,013,326.45'
          className='from-indigo-400 to-indigo-300'
        />
        <StatsBox
          title='Total Blocked Coin'
          value='114,880.99'
          className='from-violet-500 to-violet-400'
        />
        <StatsBox
          title='Total Buy Coin'
          value='86,251,105.99'
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
