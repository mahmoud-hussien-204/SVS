import Button from "@/components/Button";

import IconPlus from "@/components/icons/IconPlus";

import PageFilterSelect from "@/components/PageFilterSelect";

import Search from "@/components/Search";

import {EnumModals} from "@/enums";

import useModal from "@/hooks/useModal";

import {constantUsersStatus} from "../constants";

const Head = () => {
  const {show} = useModal();

  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-1.5rem'>
        <div className='w-[450px] max-w-full'>
          <Search placeholder='Search in users' />
        </div>
        <PageFilterSelect options={constantUsersStatus} />
      </div>
      <Button type='button' onClick={() => show(EnumModals.add)}>
        <IconPlus />
        Add User
      </Button>
    </div>
  );
};

export default Head;
