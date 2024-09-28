import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import ModalProvider from "@/providers/ModalProvider";

import Head from "../components/Head";

import Modal from "@/components/Modal";

import TransferCoinForm from "../components/TransferCoinForm";

import useQuery from "@/hooks/useQuery";

import { apiGetMemberShipHistory, apiGetMemberShipPlans } from "../services";

import useApiUrlFilter from "@/hooks/useApiUrlFilter";

import HistoryList from "../components/HistoryList";

import UserPlan from "./UserPlan";

import LoadingScreen from "@/components/LoadingScreen";
import { useMemo } from "react";

export const Component = () => {
  usePageTitle("My Membership");

  const {
    pageSearchParams: page,
    limitSearchParams: limit,
    searchSearchParams: search,
  } = useApiUrlFilter();

  const { data: walletsData, isLoading: isLoadingPlans } = useQuery({
    queryFn: apiGetMemberShipPlans,
    queryKey: ["membership-plans"],
  });

  const { data, isLoading } = useQuery({
    queryFn: () => apiGetMemberShipHistory(page, limit, search),
    queryKey: ["membership-plans-history", page, limit, search],
  });

  const historyData = data?.MembershipBonusDistributionHistory;
  const totalPages = historyData?.recordsTotal ? Math.ceil(historyData?.recordsTotal / limit) : 1;

  const planData = useMemo(() => [
    {
      label: "Plan Name",
      value: data?.data?.plan?.plan_name ?? ""
    },
    {
      label: "Blocked Amount",
      value: data?.data?.amount ?? ""
    },
    {
      label: "Start Date",
      value: data?.data?.start_date ?? ""
    },
    {
      label: "End Date",
      value: data?.data?.end_date ?? ""
    }
  ], [data])

  const membershipData = useMemo(() => [
    {
      label: "Membership Status",
      value: data?.data?.plan.plan_name ?? ""
    },
    {
      label: "Blocked Amount",
      value: data?.data?.amount ?? ""
    },
    {
      label: "Member Since",
      value: data?.data?.start_date ?? ""
    },
    {
      label: "Earned Bonus",
      value: data?.data?.plan_bonus ?? ""
    }
  ], [data])
  if (isLoadingPlans) {
    return <LoadingScreen />;
  }


  return (
    <ModalProvider>
      <TransitionPage>
        <div className='mb-2rem grid w-full grid-cols-2 gap-1.5rem rounded-box bg-neutral-800 p-4'>
          <UserPlan
            title="My Membership Details"
            data={membershipData}
          />

          <UserPlan
            title="My Plan Details"
            data={planData}
          />
        </div>

        <Head wallets={walletsData?.wallets || []} />

        <div className='mt-2rem w-full'>
          <h2>My Membership Bonus History</h2>
          <HistoryList
            historyData={historyData?.data || []}
            isLoading={isLoading}
            totalPages={totalPages}
          />
        </div>
      </TransitionPage>
      <Modal transfer={TransferCoinForm} />
    </ModalProvider>
  );
};

Component.displayName = "MemberShipHistoryPage";
