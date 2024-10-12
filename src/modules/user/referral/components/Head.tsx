import Button from "@/components/Button";

import IconReferral from "@/components/icons/IconReferral";

import Search from "@/components/Search";

import {EnumModals} from "@/enums";

import useModal from "@/hooks/useModal";

const Head = ({url}: {url: string}) => {
  const {show} = useModal();

  return (
    <div className='flex flex-wrap items-center justify-between gap-1.25rem'>
      <div className='w-full max-w-full sm:w-[450px]'>
        <Search placeholder='Search...' />
      </div>
      <Button type='button' onClick={() => show(EnumModals.invite, {url})}>
        <IconReferral />
        Invite Friend
      </Button>
    </div>
  );
};

export default Head;
