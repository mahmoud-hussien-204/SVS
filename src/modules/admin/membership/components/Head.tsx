import Button from "@/components/Button";

import IconPlus from "@/components/icons/IconPlus";

import PageFilterSelect from "@/components/PageFilterSelect";

import Search from "@/components/Search";

import {EnumModals} from "@/enums";

import useModal from "@/hooks/useModal";

import {constantPlansStatus} from "../constants";

import IconSettings from "@/components/icons/IconSettings";

const Head = () => {
  const {show} = useModal();

  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-1.5rem'>
        <div className='w-[450px] max-w-full'>
          <Search placeholder='Search in plans' />
        </div>
        <PageFilterSelect options={constantPlansStatus} />
      </div>
      <div className='flex items-center gap-1.5rem'>
        <Button type='button' onClick={() => show(EnumModals.add)}>
          <IconPlus />
          Create Plan
        </Button>
        <Button type='button' onClick={() => show(EnumModals.settings)}>
          <IconSettings />
          Membership settings
        </Button>
      </div>
    </div>
  );
};

export default Head;
