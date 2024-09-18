import PageFilterSelect from "@/components/PageFilterSelect";

import Search from "@/components/Search";

import {constantBuyCoinOrdersStatus} from "../constants";

const Head = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-1.5rem'>
        <div className='w-[450px] max-w-full'>
          <Search placeholder='Search in buy coin orders' />
        </div>
        <PageFilterSelect options={constantBuyCoinOrdersStatus} />
      </div>
    </div>
  );
};

export default Head;
