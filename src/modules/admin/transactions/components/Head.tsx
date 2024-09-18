import {constantRequestStatus} from "../constants";

import Search from "@/components/Search";

import PageFilterSelect from "@/components/PageFilterSelect";

const Head = () => {
  return (
    <div className='flex items-center gap-1.5rem'>
      <div className='w-[450px] max-w-full'>
        <Search placeholder='Search in withdrawals' />
      </div>
      <PageFilterSelect options={constantRequestStatus} />
    </div>
  );
};

export default Head;
