import usePageTitle from "@/hooks/usePageTitle";
import useQuery from "@/hooks/useQuery";
import { apiGetBuyCoin } from "../services";
import TransitionPage from "@/components/TransitionPage";
import Head from "../components/Head";
import Modal from "@/components/Modal";
import BuyCoinForm from "../components/BuyCoinForm";
import ModalProvider from "@/providers/ModalProvider";

export const Component = () => {
  usePageTitle("Buy Coin");
  const { data } = useQuery({
    queryFn: apiGetBuyCoin,
    queryKey: ["user-buy-coin"],
  })

  return (
    <ModalProvider>
      <TransitionPage>
        <Head coins={data?.coins || []} />

        <Modal
          add={BuyCoinForm}
        />
      </TransitionPage>
    </ModalProvider>
  )
};

Component.displayName = "BuyCoinPage";
