import Modal from "@/components/Modal";

import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import ModalProvider from "@/providers/ModalProvider";

import InviteForm from "../components/InviteForm";

import Head from "../components/Head";

import { Navigate, useSearchParams } from "react-router-dom";

import Tabs from "@/components/Tabs";

import { constantTabs } from "../constants";

import MyReferralsList from "../components/MyReferralsList";

import MyReferencesList from "../components/MyReferencesList";

import MyEarningsList from "../components/MyEarningsList";

import Box from "@/components/Box";

export const Component = () => {
  usePageTitle("My Referral");

  const [searchParams] = useSearchParams();

  const isTab = searchParams.get("tab");

  if (!isTab) return <Navigate to='?tab=my-referrals' replace />;

  return (
    <ModalProvider>
      <TransitionPage>
        <div className='mb-1.5rem'>
          <Tabs tabs={constantTabs} />
        </div>
        <Head />
        <div className='mt-2rem'>
          <Box>
            {isTab === "my-referrals" ? (
              <MyReferralsList />
            ) : isTab === "my-references" ? (
              <MyReferencesList />
            ) : (
              <MyEarningsList />
            )}
          </Box>
        </div>
      </TransitionPage>

      <Modal invite={InviteForm} />
    </ModalProvider>
  );
};

Component.displayName = "ReferralPage";
