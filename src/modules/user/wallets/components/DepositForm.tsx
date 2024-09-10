import ModalBody from "@/components/ModalBody";

import ModalHeader from "@/components/ModalHeader";

import ImageQrCode from "@/assets/qrcode.svg";

import IconRefresh from "@/components/icons/IconRefresh";

import Label from "@/components/Label";

import useCopy from "@/hooks/useCopy";

import CopyButton from "@/components/CopyButton";

const DepositForm = () => {
  const {elementRef, copied, copy} = useCopy();

  return (
    <>
      <ModalHeader title='Deposit' />
      <ModalBody>
        <div className='flex gap-1.5rem'>
          <img src={ImageQrCode} alt='scan qr code' className='w-full max-w-[12rem]' />
          <div className='w-full pt-1.5rem'>
            <Label>Wallet Address</Label>
            <div className='flex h-3rem items-center justify-between rounded-0.5rem bg-base-300 pe-0.25rem ps-1rem'>
              <div className='fill-1 text-12' ref={elementRef}>
                MX5hPdwypVSkx43umowoWcRRV4xnSeuyuM
              </div>
              <CopyButton copied={copied} copy={copy} />
            </div>

            <button
              type='button'
              className='mt-1rem flex items-center gap-0.75rem text-14 text-neutral-400'
            >
              <IconRefresh /> Generate new address
            </button>
          </div>
        </div>
      </ModalBody>
    </>
  );
};

export default DepositForm;
