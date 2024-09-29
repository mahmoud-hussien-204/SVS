import Label from "@/components/Label";

import Select, {TOptionItem} from "@/components/Select";

import Input from "@/components/Input";

import AppHelper from "@/helpers/appHelper";

import {useFormContext} from "react-hook-form";

import {apiPostBuyCoinRate} from "../services";

import useMutation from "@/hooks/useMutation";

import {useCallback, useEffect, useMemo} from "react";

function CoinPaymentForm({coins}: {coins: ICoin[]}) {
  const form = useFormContext();

  const {mutate, data} = useMutation({
    mutationFn: apiPostBuyCoinRate,
    mutationKey: ["user-buy-coin-rate"],
  });

  const handleChange = useCallback(() => {
    const [coin, paymentCoinType, paymentType] = form.getValues([
      "coin",
      "payment_coin_type",
      "payment_type",
    ]);
    const payload = {
      amount: coin,
      pay_type: +paymentType,
      payment_type: paymentCoinType,
    };
    const formData = AppHelper.toFormData(payload);
    mutate(formData);
  }, []);

  const options = useMemo(
    () => AppHelper.handleSelectBoxOptions<ICoin>(coins, "type", "type") as TOptionItem[],
    [coins]
  );

  const coinValue = form.watch("coin");

  useEffect(() => {
    handleChange();
  }, [coinValue]);

  useEffect(() => {
    handleChange();
  }, [handleChange]);

  return (
    <div className='flex w-full items-center justify-between gap-4'>
      <div className='mb-1.25rem'>
        <Label htmlFor='payable-coin'>Payable Coin</Label>
        <Input
          defaultValue={data?.btc_dlr}
          type='text'
          placeholder='0.00000'
          id='payable-coin'
          readOnly
        />
      </div>

      <div className='mb-1.25rem w-full'>
        <Label htmlFor='send-request-wallet'>Select Coin</Label>
        <Select
          options={options}
          id='send-request-wallet'
          defaultValue=''
          {...form.register("payment_coin_type")}
          onChange={(e) => {
            form.register("payment_coin_type").onChange(e);
            handleChange();
          }}
        />
      </div>
    </div>
  );
}

export default CoinPaymentForm;
