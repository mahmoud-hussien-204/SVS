import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import ModalProvider from "@/providers/ModalProvider";

import Modal from "@/components/Modal";

import AddWalletForm from "../components/AddWalletForm";

import DepositForm from "../components/DepositForm";

import WithdrawForm from "../components/WithdrawForm";

import SwapForm from "../components/SwapForm";

import MyWalletHead from "../components/MyWalletHead";

import MyWalletList from "../components/MyWalletList";

import ConfirmationForm from "@/components/ConfirmationForm";

import useQuery from "@/hooks/useQuery";

import { apiGetWalletData } from "../services";
import useApiUrlFilter from "@/hooks/useApiUrlFilter";

export const Component = () => {
  usePageTitle("My Wallets");
  const { searchSearchParams } = useApiUrlFilter()
  const { data, isLoading } = useQuery({
    queryFn: () => apiGetWalletData(searchSearchParams),
    queryKey: ["my-wallets", searchSearchParams],
    retry: false,
    refetchOnWindowFocus: false,
  });

  const wallets = data?.wallets || [];

  return (
    <ModalProvider>
      <TransitionPage>
        <MyWalletHead coinsData={data?.coins || []} />
        <div className='mt-2rem'>
          <MyWalletList Wallets={wallets} isLoading={isLoading} />
        </div>
      </TransitionPage>

      <Modal
        add={AddWalletForm}
        deposit={DepositForm}
        withdraw={WithdrawForm}
        swap={SwapForm}
        confirmation={ConfirmationForm}
      />
    </ModalProvider>
  );
};

Component.displayName = "MyWalletsPage";
