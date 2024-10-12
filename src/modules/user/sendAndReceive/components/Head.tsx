// import { constantRequestCoinStatus } from "../constants";

import Search from "@/components/Search";

import Button from "@/components/Button";

import IconSendRequest from "@/components/icons/IconSendRequest";

// import PageFilterSelect from "@/components/PageFilterSelect";

import useModal from "@/hooks/useModal";

import {EnumModals} from "@/enums";

const Head = () => {
  const {show} = useModal();
  return (
    <div className='flex flex-wrap items-center justify-between gap-1.25rem'>
      <div className='w-full max-w-full sm:w-[450px]'>
        <Search placeholder='Search in sent coin history' />
      </div>
      <Button type='button' onClick={() => show(EnumModals.add)}>
        <IconSendRequest />
        Send Request
      </Button>
    </div>
  );
};

export default Head;
