import Modal from "@/components/Modal";

import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import ModalProvider from "@/providers/ModalProvider";

import Head from "../components/Head";

import DepositsRequestsList from "../components/DepositsRequestsList";

import AcceptForm from "../components/AcceptForm";

import RejectForm from "../components/RejectForm";
export const Component = () => {
  usePageTitle("Deposits Requests");
  return (
    <ModalProvider>
      <TransitionPage>
        <Head />
        <div className='mt-2rem'>
          <DepositsRequestsList />
        </div>
      </TransitionPage>

      <Modal accept={AcceptForm} reject={RejectForm} />
    </ModalProvider>
  );
};

Component.displayName = "DepositsRequests";
