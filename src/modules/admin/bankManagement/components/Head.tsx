import Button from "@/components/Button";

import IconPlus from "@/components/icons/IconPlus";

import Search from "@/components/Search";

import {EnumModals} from "@/enums";

import useModal from "@/hooks/useModal";

const Head = () => {
  const {show} = useModal();
  return (
    <div className='flex flex-wrap items-center justify-between gap-1.25rem'>
      <div className='w-full max-w-full sm:w-[450px]'>
        <Search placeholder='Search in banks' />
      </div>
      <Button type='button' onClick={() => show(EnumModals.add)}>
        <IconPlus />
        Create New Bank
      </Button>
    </div>
  );
};

export default Head;
