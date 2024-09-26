import usePageTitle from "@/hooks/usePageTitle";

import TransitionPage from "@/components/TransitionPage";

import BuyCoinForm from "../components/BuyCoinForm";

export const Component = () => {
  usePageTitle("Buy Coin");

  return (
    <TransitionPage>
      <div className='grid grid-cols-2 gap-3rem px-8'>
        <BuyCoinForm />
        <div className='flex justify-center'>
          <img
            src='/buy-coin-vector.svg'
            alt='buy-coin-vector'
            className=''
            width={430}
            height={430}
          />
        </div>
      </div>
    </TransitionPage>
  );
};

Component.displayName = "BuyCoinPage";
