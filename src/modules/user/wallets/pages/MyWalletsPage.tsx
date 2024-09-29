import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import ModalProvider from "@/providers/ModalProvider";

import Modal from "@/components/Modal";

import AddWalletForm from "../components/AddWalletForm";

import DepositForm from "../components/DepositForm";

import WithdrawForm from "../components/WithdrawForm";

// import SwapForm from "../components/SwapForm";

import MyWalletHead from "../components/MyWalletHead";

import MyWalletList from "../components/MyWalletList";

// import ConfirmationForm from "@/components/ConfirmationForm";

import useQuery from "@/hooks/useQuery";

import {apiGetWalletData} from "../services";
import useApiUrlFilter from "@/hooks/useApiUrlFilter";
import SwapForm from "../components/SwapForm";

export const Component = () => {
  usePageTitle("My Wallets");
  const {pageSearchParams, limitSearchParams, searchSearchParams, filterSearchParams} =
    useApiUrlFilter();

  const {data, isLoading} = useQuery({
    queryFn: () =>
      apiGetWalletData(pageSearchParams, limitSearchParams, searchSearchParams, filterSearchParams),
    queryKey: [
      "user-my-wallets",
      pageSearchParams,
      limitSearchParams,
      searchSearchParams,
      filterSearchParams,
    ],
    retry: false,
    refetchOnWindowFocus: false,
  });

  const wallets = data?.data.wallets || [];

  const totalPages = data?.recordsTotal ? Math.ceil(data.recordsTotal / limitSearchParams) : 1;

  return (
    <ModalProvider>
      <TransitionPage>
        <MyWalletHead coinsData={data?.coins || []} />
        <div className='mt-2rem'>
          <MyWalletList Wallets={wallets} isLoading={isLoading} totalPages={totalPages} />
        </div>
      </TransitionPage>

      <Modal
        add={AddWalletForm}
        deposit={DepositForm}
        withdraw={WithdrawForm}
        swap={SwapForm}
        // confirmation={ConfirmationForm}
      />
    </ModalProvider>
  );
};

Component.displayName = "MyWalletsPage";
