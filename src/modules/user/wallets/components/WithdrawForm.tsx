import ModalBody from "@/components/ModalBody";

import ModalFooter from "@/components/ModalFooter";

import ModalHeader from "@/components/ModalHeader";

import useWithdrawForm from "../hooks/useWithdrawForm";

import Label from "@/components/Label";

import ErrorMessage from "@/components/ErrorMessage";

import Input from "@/components/Input";

import Textarea from "@/components/Textarea";
import { IWallet } from "../interfaces";
import { useEffect } from "react";
import useQuery from "@/hooks/useQuery";
import { apiGetWalletDetailsWithdraw } from "../services";

const WithdrawForm = ({ data }: IModalComponentProps) => {
  const walletData = data as IWallet;

  const { data: deatilsWallet, isLoading } = useQuery({
    queryFn: () => apiGetWalletDetailsWithdraw(walletData?.id),
    queryKey: ["wallet-details-deposits", walletData?.id],
    enabled: Boolean(walletData?.id),
  })

  const { form, handleSubmit, isPending } = useWithdrawForm(deatilsWallet);

  useEffect(() => {
    if (!walletData) return;
    form.setValue("wallet_id", walletData.id);
  }, [walletData, form]);


  return (
    <form noValidate name='withdraw-form' id='withdraw-form' onSubmit={handleSubmit}>
      <ModalHeader title='Withdraw' />
      <ModalBody>
        <div className='mb-1.25rem'>
          <Label htmlFor='withdraw-form-wallet-address'>Wallet Address</Label>
          <Input
            type='text'
            {...form.register("address")}
            placeholder='Enter wallet address'
            id='withdraw-form-wallet-address'
            isError={!!form.formState.errors.address}
          />
          <ErrorMessage>{form.formState.errors.address?.message}</ErrorMessage>
          <p className='ml-2 mt-2 text-xs text-warning'>
            Warning : Please input your BTC Coin address carefully. Because of wrong address if coin
            is lost, we will not responsible for that.
          </p>
        </div>
        <div className='mb-1.25rem'>
          <Label htmlFor='withdraw-form-amount'>Amount</Label>
          <Input
            type='text'
            {...form.register("amount")}
            placeholder='Enter amount'
            id='withdraw-form-amount'
            isError={!!form.formState.errors.amount}
          />
          <ErrorMessage>{form.formState.errors.amount?.message}</ErrorMessage>
          <p className='ml-2 mt-2 text-xs'>
            Minimum withdrawal amount : {isLoading ? <span className="loading loading-xs" /> : deatilsWallet?.wallet?.minimum_withdrawal} BTC <br />
            Maximum withdrawal amount : {isLoading ? <span className="loading loading-xs" /> : deatilsWallet?.wallet?.maximum_withdrawal} BTC
          </p>
        </div>

        {deatilsWallet && deatilsWallet["2fa_enabled"] && <div className='mb-1.25rem'>
          <Label htmlFor='withdraw-form-amount'>2FA Code</Label>
          <Input
            type='text'
            {...form.register("code")}
            placeholder='Enter amount'
            id='withdraw-form-amount'
            isError={!!form.formState.errors.code}
          />
          <ErrorMessage>{form.formState.errors.code?.message}</ErrorMessage>
        </div>}

        <div className='mb-1.25rem'>
          <Label htmlFor='withdraw-form-comment'>Note</Label>
          <Textarea
            {...form.register("message")}
            placeholder='Type your message here'
            id='withdraw-form-comment'
            isError={!!form.formState.errors.message}
          />
          <ErrorMessage>{form.formState.errors.message?.message}</ErrorMessage>
        </div>
      </ModalBody>
      <ModalFooter isLoading={isPending} title='Withdraw' />
    </form>
  );
};

export default WithdrawForm;
