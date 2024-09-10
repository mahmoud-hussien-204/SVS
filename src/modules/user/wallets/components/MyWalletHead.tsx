import {constantWalletType} from "../constants";

import Search from "@/components/Search";

import Button from "@/components/Button";

import PageFilterSelect from "@/components/PageFilterSelect";

import useModal from "@/hooks/useModal";

import {EnumModals} from "@/enums";

import IconPlus from "@/components/icons/IconPlus";

const MyWalletHead = () => {
  const {show} = useModal();
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-1.5rem'>
        <div className='w-[450px] max-w-full'>
          <Search placeholder='Search in wallets' />
        </div>
        <PageFilterSelect options={constantWalletType} />
      </div>
      <Button type='button' onClick={() => show(EnumModals.add)}>
        <IconPlus />
        Add Wallet
      </Button>
    </div>
  );
};

export default MyWalletHead;
