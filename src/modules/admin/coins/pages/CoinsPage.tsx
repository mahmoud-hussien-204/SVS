import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import ModalProvider from "@/providers/ModalProvider";

import Head from "../components/Head";

import CoinsList from "../components/CoinsList";

import Modal from "@/components/Modal";

import EditCoinForm from "../components/EditCoinForm";

export const Component = () => {
  usePageTitle("Coins List");
  return (
    <ModalProvider>
      <TransitionPage>
        <Head />
        <div className='mt-2rem'>
          <CoinsList />
        </div>
      </TransitionPage>

      <Modal edit={EditCoinForm} />
    </ModalProvider>
  );
};

Component.displayName = "CoinsPage";
