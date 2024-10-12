import {constantWalletType} from "../constants";

import Search from "@/components/Search";

import Button from "@/components/Button";

import PageFilterSelect from "@/components/PageFilterSelect";

import useModal from "@/hooks/useModal";

import {EnumModals} from "@/enums";

import IconPlus from "@/components/icons/IconPlus";

import {ICoin} from "../interfaces";

const MyWalletHead = ({coinsData}: {coinsData: ICoin[]}) => {
  const {show} = useModal();
  return (
    <div className='flex flex-wrap items-center justify-between gap-1.25rem'>
      <div className='flex flex-wrap items-center gap-1.5rem'>
        <div className='w-full max-w-full sm:w-[450px]'>
          <Search placeholder='Search in wallets' />
        </div>
        <PageFilterSelect options={constantWalletType} />
      </div>
      <Button type='button' onClick={() => show(EnumModals.add, coinsData)}>
        <IconPlus />
        Add Wallet
      </Button>
    </div>
  );
};

export default MyWalletHead;
