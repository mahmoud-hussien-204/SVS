import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import ModalProvider from "@/providers/ModalProvider";

import Modal from "@/components/Modal";

import SendRequestForm from "../components/SendRequestForm";

import Head from "../components/Head";

import List from "../components/List";

export const Component = () => {
  usePageTitle("Sent and Receive Coins");
  return (
    <ModalProvider>
      <TransitionPage>
        <Head />
        <div className='mt-2rem'>
          <List />
        </div>
      </TransitionPage>

      <Modal add={SendRequestForm} />
    </ModalProvider>
  );
};

Component.displayName = "RequestCoinPage";
