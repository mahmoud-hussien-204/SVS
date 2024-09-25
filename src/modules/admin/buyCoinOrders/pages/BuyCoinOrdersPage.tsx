import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import BuyCoinOrdersList from "../components/BuyCoinOrdersList";

import Head from "../components/Head";

import Modal from "@/components/Modal";

import ModalProvider from "@/providers/ModalProvider";

import AcceptForm from "../components/AcceptForm";

import RejectForm from "../components/RejectForm";
import useQuery from "@/hooks/useQuery";
import {apiGetBuyCoinOrders} from "../services";

export const Component = () => {
  usePageTitle("Buy Coin Orders");

  const {data} = useQuery({
    queryKey: ["admin-get-buy-coin-orders"],
    queryFn: () => apiGetBuyCoinOrders(),
  });

  console.log(data);

  return (
    <ModalProvider>
      <TransitionPage>
        <Head />
        <div className='mt-2rem'>
          <BuyCoinOrdersList />
        </div>
      </TransitionPage>

      <Modal accept={AcceptForm} reject={RejectForm} />
    </ModalProvider>
  );
};

Component.displayName = "BuyCoinOrdersPage";
