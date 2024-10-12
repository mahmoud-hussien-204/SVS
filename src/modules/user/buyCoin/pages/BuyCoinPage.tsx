import usePageTitle from "@/hooks/usePageTitle";

import TransitionPage from "@/components/TransitionPage";

import BuyCoinForm from "../components/BuyCoinForm";

import ModalProvider from "@/providers/ModalProvider";

import Modal from "@/components/Modal";

import BuyCoinFormSuccess from "../components/BuyCoinFormSuccess";

export const Component = () => {
  usePageTitle("Buy Coin");

  return (
    <ModalProvider>
      <TransitionPage>
        <div className='grid gap-3rem px-8 lg:grid-cols-2'>
          <BuyCoinForm />
          {/* <div className='flex justify-center'>
          <img
          src='/buy-coin-vector.svg'
            alt='buy-coin-vector'
            className=''
            width={430}
            height={430}
            />
            </div> */}
        </div>
      </TransitionPage>
      <Modal success={BuyCoinFormSuccess} />
    </ModalProvider>
  );
};

Component.displayName = "BuyCoinPage";
