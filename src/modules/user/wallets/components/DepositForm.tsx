import ModalBody from "@/components/ModalBody";

import ModalHeader from "@/components/ModalHeader";

import Label from "@/components/Label";

import useCopy from "@/hooks/useCopy";

import CopyButton from "@/components/CopyButton";

import useQuery from "@/hooks/useQuery";

import { apiGetWalletDetailsDeposits } from "../services";

import { IWallet } from "../interfaces";

import QRCode from "react-qr-code";

const DepositForm = ({ data }: IModalComponentProps) => {
  const { elementRef, copied, copy } = useCopy();
  const walletData = data as IWallet

  const { data: deatilsWallet, isFetching: isLoading } = useQuery({
    queryFn: () => apiGetWalletDetailsDeposits(walletData?.id),
    queryKey: ["wallet-details-deposits"],
    enabled: Boolean(walletData?.id),
  })

  return (
    <>
      <ModalHeader title='Deposit' />
      <ModalBody>
        {isLoading ?
          <div className="w-full flex items-center justify-center h-8rem">
            <span className="loading loading-spinner w-3rem"></span>
          </div>
          :
          <div className='flex gap-1.5rem items-center'>
            <div style={{ background: 'white', padding: '10px' }}>
              <QRCode
                value={deatilsWallet?.address || ""}
                size={150}
              />
            </div>

            <div className='w-full'>
              <Label>Wallet Address</Label>
              <div className='flex h-3rem items-center justify-between rounded-0.5rem bg-base-300 pe-0.25rem ps-1rem'>
                <div className='text-12 max-w-full truncate' ref={elementRef}>
                  {deatilsWallet?.address}
                </div>
                <CopyButton copied={copied} copy={copy} />
              </div>
            </div>
          </div>
        }
      </ModalBody>
    </>
  );
};

export default DepositForm;
