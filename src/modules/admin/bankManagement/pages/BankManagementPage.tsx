import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import ModalProvider from "@/providers/ModalProvider";

import BanksList from "../components/BanksList";

import Modal from "@/components/Modal";

import EditBankForm from "../components/EditBankForm";

import Search from "@/components/Search";

import DeleteBankForm from "../components/DeleteBankForm";

export const Component = () => {
  usePageTitle("Bank Management");
  return (
    <ModalProvider>
      <TransitionPage>
        <div className='w-[450px] max-w-full'>
          <Search placeholder='Search in banks' />
        </div>
        <div className='mt-2rem'>
          <BanksList />
        </div>
      </TransitionPage>

      <Modal edit={EditBankForm} delete={DeleteBankForm} />
    </ModalProvider>
  );
};

Component.displayName = "BankManagementPage";
