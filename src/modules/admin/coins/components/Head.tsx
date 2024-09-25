import Button from "@/components/Button";

import IconPlus from "@/components/icons/IconPlus";

import Search from "@/components/Search";
import useMutation from "@/hooks/useMutation";
import { apiAdjustCoin } from "../../users/services";

const Head = () => {

  const { mutate, isPending } = useMutation({
    mutationFn: apiAdjustCoin,
    mutationKey: ["admin-adjust-coin-list-with-coin-payment"],
  })
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-1.5rem'>
        <div className='w-[450px] max-w-full'>
          <Search placeholder='Search in coins' />
        </div>
      </div>
      <Button type='button' onClick={() => mutate(null)} isLoading={isPending}>
        <IconPlus />
        Adjust coin with coinPayment
      </Button>
    </div>
  );
};

export default Head;
