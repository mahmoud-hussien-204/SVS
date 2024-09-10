import TransitionPage from "@/components/TransitionPage";

import {fakeDataPlans} from "@/fakeData";

import usePageTitle from "@/hooks/usePageTitle";

import PlanItem from "../components/PlanItem";

import ModalProvider from "@/providers/ModalProvider";

import Modal from "@/components/Modal";

import TransferCoinForm from "../components/TransferCoinForm";

import Head from "../components/Head";
export const Component = () => {
  usePageTitle("Membership Plans");

  return (
    <ModalProvider>
      <TransitionPage>
        <Head />
        <div className='mt-2rem grid grid-cols-1 gap-x-1.5rem gap-y-5rem sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
          {fakeDataPlans.map((plan) => (
            <PlanItem key={plan.id} data={plan} />
          ))}
        </div>
      </TransitionPage>
      <Modal transfer={TransferCoinForm} />
    </ModalProvider>
  );
};

Component.displayName = "PlansPage";
