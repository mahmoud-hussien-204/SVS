import Label from "@/components/Label";

import Select, {TOptionItem} from "@/components/Select";

import Input from "@/components/Input";

import AppHelper from "@/helpers/appHelper";

function CoinPaymentForm({coins}: {coins: ICoin[]}) {
  return (
    <div className='flex items-center justify-between w-full gap-4'>
      <div className='mb-1.25rem'>
        <Label htmlFor='payable-coin'>Payable Coin</Label>
        <Input type='text' placeholder='0.00000' id='payable-coin' readOnly />
      </div>

      <div className='mb-1.25rem w-full'>
        <Label htmlFor='send-request-wallet'>Select Coin</Label>
        <Select
          options={AppHelper.handleSelectBoxOptions<ICoin>(coins, "type", "id") as TOptionItem[]}
          id='send-request-wallet'
          defaultValue=''
        />
      </div>
    </div>
  );
}

export default CoinPaymentForm;
