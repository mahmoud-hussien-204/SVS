import Label from "@/components/Label"
import Select from "@/components/Select"
import { ICoin } from "../../wallets/interfaces"

function CoinPaymentForm({ coins }: { coins: ICoin[] }) {

  const handelOpthions = () => {

    return coins?.map((data) => ({ label: data.type, value: data.id })) || []
  }
  return (
    <div className="w-full flex items-center justify-between">

      <div className='mb-1.25rem w-full'>
        <Label htmlFor='send-request-wallet'>Select Coin</Label>
        <Select
          options={handelOpthions()}
          id='send-request-wallet'
          defaultValue=''
        />
      </div>
    </div>
  )
}

export default CoinPaymentForm