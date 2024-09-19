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

import useApiUrlFilter from "@/hooks/useApiUrlFilter";

import {apiGetWalletData} from "../services";

export const Component = () => {
  usePageTitle("My Wallets");
  const {limitSearchParams, pageSearchParams, searchSearchParams} = useApiUrlFilter();

  const {data, isLoading} = useQuery({
    queryFn: () => apiGetWalletData(pageSearchParams, limitSearchParams, searchSearchParams),
    queryKey: ["my-wallets", pageSearchParams, limitSearchParams, searchSearchParams],
    retry: false,
    refetchOnWindowFocus: false,
  });

  const totalPages = data?.recordsTotal ? Math.ceil(data.recordsTotal / limitSearchParams) : 1;

  return (
    <ModalProvider>
      <TransitionPage>
        <MyWalletHead />
        <div className='mt-2rem'>
          <MyWalletList />
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
