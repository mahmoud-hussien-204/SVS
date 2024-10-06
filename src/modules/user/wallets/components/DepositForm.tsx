import ModalBody from "@/components/ModalBody";

import ModalHeader from "@/components/ModalHeader";

import Label from "@/components/Label";

import useCopy from "@/hooks/useCopy";

import CopyButton from "@/components/CopyButton";

import useQuery from "@/hooks/useQuery";

import {apiGetWalletDetailsDeposits} from "../services";

import {IWallet} from "../interfaces";

import QRCode from "react-qr-code";

import WithLoading from "@/components/WithLoading";

const DepositForm = ({data}: IModalComponentProps) => {
  const {elementRef, copied, copy} = useCopy();

  const walletData = data as IWallet;

  const {data: detailsWallet, isFetching: isLoading} = useQuery({
    queryFn: () => apiGetWalletDetailsDeposits(walletData?.id),
    queryKey: ["wallet-details-deposits"],
    enabled: Boolean(walletData?.id),
  });

  return (
    <>
      <ModalHeader title='Deposit' />
      <ModalBody>
        <WithLoading isLoading={isLoading}>
          <div className='flex items-center gap-1.5rem'>
            <div style={{background: "white", padding: "10px"}}>
              <QRCode value={detailsWallet?.address || ""} size={150} />
            </div>

            <div className='w-full'>
              <Label>Wallet Address</Label>
              <div className='flex h-3rem items-center justify-between rounded-0.5rem bg-base-300 pe-0.25rem ps-1rem'>
                <div className='max-w-full truncate text-12' ref={elementRef}>
                  {detailsWallet?.address}
                </div>
                <CopyButton copied={copied} copy={copy} />
              </div>
            </div>
          </div>
        </WithLoading>
      </ModalBody>
    </>
  );
};

export default DepositForm;
