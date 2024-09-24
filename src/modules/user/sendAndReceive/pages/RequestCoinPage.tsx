import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import ModalProvider from "@/providers/ModalProvider";

import Modal from "@/components/Modal";

import SendRequestForm from "../components/SendRequestForm";

import Head from "../components/Head";

import List from "../components/List";

import Tabs from "@/components/Tabs";

import {constantRequestCoinTaps} from "../constants";

import {Navigate} from "react-router-dom";

import useQuery from "@/hooks/useQuery";

import {apiGetRequestsHistory} from "../services";

import {ENUM_SEND_REQUEST_FORM_TYPE} from "../interfaces";

import useApiUrlFilter from "@/hooks/useApiUrlFilter";

export const Component = () => {
  usePageTitle("Sent and Receive Coins");

  const {
    tabSearchParams: tab,
    pageSearchParams,
    limitSearchParams,
    searchSearchParams,
  } = useApiUrlFilter();

  const {data, isLoading} = useQuery({
    queryFn: () =>
      apiGetRequestsHistory(
        tab as ENUM_SEND_REQUEST_FORM_TYPE,
        pageSearchParams,
        limitSearchParams,
        searchSearchParams
      ),
    queryKey: [
      "get-userrequest-coin-history",
      tab,
      pageSearchParams,
      limitSearchParams,
      searchSearchParams,
    ],
    enabled: !!tab,
  });

  if (!tab) return <Navigate to={`?tab=${constantRequestCoinTaps[0].value}`} replace />;

  const totalPages = data?.recordsTotal ? Math.ceil(data.recordsTotal / limitSearchParams) : 1;

  return (
    <ModalProvider>
      <TransitionPage>
        <Tabs tabs={constantRequestCoinTaps} />
        <div className='mt-2rem'>
          <Head />
          <List data={data?.data || []} isLoading={isLoading} totalPages={totalPages} />
        </div>
      </TransitionPage>

      <Modal add={SendRequestForm} />
    </ModalProvider>
  );
};

Component.displayName = "RequestCoinPage";
