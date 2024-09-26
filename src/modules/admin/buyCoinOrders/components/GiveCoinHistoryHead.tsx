import Search from "@/components/Search";

import Button from "@/components/Button";

import useModal from "@/hooks/useModal";

import {EnumModals} from "@/enums";

import IconPlus from "@/components/icons/IconPlus";

const GiveCoinHistoryHead = () => {
  const {show} = useModal();

  return (
    <div className='flex items-center justify-between'>
      <div className='w-[450px] max-w-full'>
        <Search placeholder='Search in give coin History' />
      </div>

      <Button type='button' onClick={() => show(EnumModals.add)}>
        <IconPlus />
        Give Default Coin
      </Button>
    </div>
  );
};

export default GiveCoinHistoryHead;
