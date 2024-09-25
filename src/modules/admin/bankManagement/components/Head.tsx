import Button from "@/components/Button";

import IconPlus from "@/components/icons/IconPlus";

import Search from "@/components/Search";

import {EnumModals} from "@/enums";

import useModal from "@/hooks/useModal";

const Head = () => {
  const {show} = useModal();
  return (
    <div className='flex items-center justify-between'>
      <div className='w-[450px] max-w-full'>
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
