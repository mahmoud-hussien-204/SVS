import Label from "@/components/Label";

import ModalBody from "@/components/ModalBody";

import ModalHeader from "@/components/ModalHeader";

import Select from "@/components/Select";

import {ISwapCoinForm, IWallet} from "../interfaces";

import useQuery from "@/hooks/useQuery";

import {apiGetRate, apiGetSwapCoinDetails} from "../services";

import {useEffect, useMemo} from "react";

import useMutation from "@/hooks/useMutation";

import useSwapForm from "../hooks/useSwapForm";

import ErrorMessage from "@/components/ErrorMessage";

import ModalFooter from "@/components/ModalFooter";

import Input from "@/components/Input";

const SwapForm = ({data: propsData}: IModalComponentProps) => {
  const id = (propsData as IWallet).id;

  const {form, handleSubmit, isPending} = useSwapForm();

  const {data} = useQuery({
    queryFn: () => apiGetSwapCoinDetails(id),
    queryKey: ["wallet-details-deposits"],
    enabled: Boolean(id),
  });

  const handelCoinsOptions = useMemo(() => {
    const coins = data?.map((data) => {
      return {
        value: data["data-to_wallet_id"] ?? "",
        label: data.wallet_name ?? "",
      };
    });

    return [{label: "Select Wallet", value: "", disabled: true}, ...(coins || [])];
  }, [data]);

  const {
    mutate,
    data: rateData,
    isPending: ratePending,
    isIdle,
  } = useMutation({
    mutationFn: apiGetRate,
    mutationKey: ["swap-rate"],
  });

  const toCoinId = form.watch("to_coin_id");

  const amount = form.watch("amount");

  const getRateValues = useMemo(() => {
    return {
      from_coin_id: id,
      ...(toCoinId ? {to_coin_id: toCoinId} : {}),
      ...(amount ? {amount: amount} : {amount: 1}),
    };
  }, [amount, toCoinId, id]);

  useEffect(() => {
    if (!getRateValues.to_coin_id || amount < 1) return;
    mutate(getRateValues as ISwapCoinForm);
  }, [getRateValues, mutate, amount]);

  return (
    <>
      <form noValidate name='swap-form' id='swap-form' onSubmit={handleSubmit}>
        <ModalHeader title='Swap' />
        <ModalBody>
          <div className='mb-1.25rem'>
            <Label htmlFor='swap-with'>Swap with</Label>
            <Select
              {...form.register("to_coin_id")}
              options={handelCoinsOptions}
              id='swap-with'
              isError={!!form.formState.errors.to_coin_id}
              defaultValue=''
            />
            <ErrorMessage>{form.formState.errors.to_coin_id?.message}</ErrorMessage>
          </div>

          {!isIdle && (
            <>
              <p className='mb-1.25rem'>
                Reference Price :{" "}
                {ratePending ? (
                  <span className='loading loading-spinner loading-xs' />
                ) : (
                  `${rateData?.wallet_rate} ${rateData?.from_wallet.coin_type} / ${rateData?.to_wallet.coin_type}`
                )}
              </p>

              <div className='flex items-start justify-between gap-6'>
                <div className='mb-1.25rem w-full'>
                  <Label htmlFor='swap-amount'>Amount</Label>
                  <div className='input input-bordered flex h-3rem w-full items-center justify-between rounded-0.5rem p-0 pr-4'>
                    <div>
                      <Input
                        type='number'
                        {...form.register("amount")}
                        placeholder='Enter amount'
                        id='swap-amount'
                        isError={!!form.formState.errors.amount}
                        className='!border-0 !bg-transparent'
                        min={1}
                      />
                    </div>
                    <span className='text-neutral-400'>
                      <strong>{rateData?.from_wallet.coin_type}</strong>
                    </span>
                  </div>
                  <ErrorMessage>{form.formState.errors.amount?.message}</ErrorMessage>
                </div>

                <div className='mb-1.25rem w-full'>
                  <Label htmlFor='swap-amount'>Convert Rate</Label>
                  <div className='input input-bordered flex h-3rem w-full items-center justify-between rounded-0.5rem p-0 pr-4'>
                    <Input
                      type={rateData ? "number" : "text"}
                      value={rateData?.convert_rate ? rateData?.convert_rate : "Loading..."}
                      disabled
                      className='!border-0 !bg-transparent !text-white'
                    />
                    <span className='text-neutral-400'>
                      <strong>{rateData?.to_wallet.coin_type}</strong>
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </ModalBody>

        <ModalFooter title='Next' isLoading={isPending} />
      </form>
    </>
  );
};

export default SwapForm;
