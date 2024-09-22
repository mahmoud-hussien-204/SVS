// import { constantRequestCoinStatus } from "../constants";

import Search from "@/components/Search";

import Button from "@/components/Button";

import IconSendRequest from "@/components/icons/IconSendRequest";

// import PageFilterSelect from "@/components/PageFilterSelect";

import useModal from "@/hooks/useModal";

import { EnumModals } from "@/enums";

const Head = () => {
  const { show } = useModal();
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-1.5rem'>
        <div className='w-[450px] max-w-full'>
          <Search placeholder='Search in sent coin history' />
        </div>
        {/* <PageFilterSelect options={constantRequestCoinStatus} /> */}
      </div>
      <Button type='button' onClick={() => show(EnumModals.add)}>
        <IconSendRequest />
        Send Request
      </Button>
    </div>
  );
};

export default Head;
