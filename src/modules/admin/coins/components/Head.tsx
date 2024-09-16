import Button from "@/components/Button";

import IconPlus from "@/components/icons/IconPlus";

import Search from "@/components/Search";

const Head = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-1.5rem'>
        <div className='w-[450px] max-w-full'>
          <Search placeholder='Search in coins' />
        </div>
      </div>
      <Button type='button' onClick={() => console.log("Add Coin")}>
        <IconPlus />
        Adjust coin with coinPayment
      </Button>
    </div>
  );
};

export default Head;
