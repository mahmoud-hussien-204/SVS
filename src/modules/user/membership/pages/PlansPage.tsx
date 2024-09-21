import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import PlanItem from "../components/PlanItem";

import ModalProvider from "@/providers/ModalProvider";

import Modal from "@/components/Modal";

import TransferCoinForm from "../components/TransferCoinForm";

import Head from "../components/Head";

import useQuery from "@/hooks/useQuery";

import { apiGetMemberShipPlans } from "../services";

export const Component = () => {
  usePageTitle("Membership Plans");

  const { data, isLoading } = useQuery({
    queryFn: apiGetMemberShipPlans,
    queryKey: ["membership-plans"],
  })

  return (
    <ModalProvider>
      <TransitionPage>
        <Head wallets={data?.wallets || []} />
        {isLoading ? (
          <div className="w-full flex items-center justify-center h-40">
            <span className="loading loading-spinnerc loading-lg" />
          </div>
        ) : (
          <div className='mt-2rem grid grid-cols-1 gap-x-1.5rem gap-y-5rem sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
            {data?.plans.map((data) => (
              <PlanItem key={data.id} {...data} />
            ))}
          </div>
        )}
      </TransitionPage>
      <Modal transfer={TransferCoinForm} />
    </ModalProvider>
  );
};

Component.displayName = "PlansPage";
