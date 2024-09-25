import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import ModalProvider from "@/providers/ModalProvider";

import BanksList from "../components/BanksList";

import Modal from "@/components/Modal";

import EditBankForm from "../components/EditBankForm";

import Search from "@/components/Search";

export const Component = () => {
  usePageTitle("Bank Management");
  return (
    <ModalProvider>
      <TransitionPage>
        <div className='w-[450px] max-w-full'>
          <Search placeholder='Search in coins' />
        </div>
        <div className='mt-2rem'>
          <BanksList />
        </div>
      </TransitionPage>

      <Modal edit={EditBankForm} />
    </ModalProvider>
  );
};

Component.displayName = "BankManagementPage";
