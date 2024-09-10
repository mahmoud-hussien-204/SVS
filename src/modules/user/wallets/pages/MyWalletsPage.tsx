import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import ModalProvider from "@/providers/ModalProvider";

import Modal from "@/components/Modal";

import AddWalletForm from "../components/AddWalletForm";

import DepositForm from "../components/DepositForm";

import WithdrawForm from "../components/WithdrawForm";

import SwapForm from "../components/SwapForm";

import MyWalletHead from "../components/MyWalletHead";

import MyWalletList from "../components/MyWalletList";

import ConfirmationForm from "@/components/ConfirmationForm";

export const Component = () => {
  usePageTitle("My Wallets");
  return (
    <ModalProvider>
      <TransitionPage>
        <MyWalletHead />
        <div className='mt-2rem'>
          <MyWalletList />
        </div>
      </TransitionPage>

      <Modal
        add={AddWalletForm}
        deposit={DepositForm}
        withdraw={WithdrawForm}
        swap={SwapForm}
        confirmation={ConfirmationForm}
      />
    </ModalProvider>
  );
};

Component.displayName = "MyWalletsPage";
