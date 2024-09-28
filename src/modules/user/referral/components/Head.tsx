import Button from "@/components/Button";

import IconReferral from "@/components/icons/IconReferral";

import Search from "@/components/Search";

import { EnumModals } from "@/enums";

import useModal from "@/hooks/useModal";

const Head = ({ url }: { url: string }) => {
  const { show } = useModal();

  return (
    <div className='flex items-center justify-between'>
      <div className='w-[450px] max-w-full'>
        <Search placeholder='Search...' />
      </div>
      <Button type='button' onClick={() => show(EnumModals.invite, { url })}>
        <IconReferral />
        Invite Friend
      </Button>
    </div>
  );
};

export default Head;
