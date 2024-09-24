import Label from "@/components/Label";
import Select from "@/components/Select";
import {ICoin} from "../../wallets/interfaces";
import Input from "@/components/Input";

function CoinPaymentForm({coins}: {coins: ICoin[]}) {
  const handelOpthions = () => {
    return coins?.map((data) => ({label: data.type, value: data.id})) || [];
  };

  return (
    <div className='flex w-full items-center justify-between gap-4'>
      <div className='mb-1.25rem'>
        <Label htmlFor='payable-coin'>Payable Coin</Label>
        <Input type='text' placeholder='0.00000' id='payable-coin' readOnly />
      </div>

      <div className='mb-1.25rem w-full'>
        <Label htmlFor='send-request-wallet'>Select Coin</Label>
        <Select options={handelOpthions()} id='send-request-wallet' defaultValue='' />
      </div>
    </div>
  );
}

export default CoinPaymentForm;
