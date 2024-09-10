import React from "react";
import TitleWithThe from "./TitleWithThe";
import {IoDocumentTextOutline} from "react-icons/io5";

const WhitePaperSection = () => {
  return (
    <div className='bg-header-gradient flex w-full items-center justify-center py-10 lg:h-screen lg:py-0'>
      <div className='px-5 lg:px-32'>
        <div className='flex flex-col'>
          <TitleWithThe
            title={
              <span>
                SVS <span className='text-white'>PROJECT</span>
              </span>
            }
            titleClassName='lg:text-[9rem] text-3xl'
            theClassName='lg:translate-x-5 translate-x-2'
          />

          <div className='mt-10 flex flex-col items-center justify-center gap-5 lg:mt-20 lg:flex-row lg:gap-20'>
            <button
              type='button'
              className='flex items-center justify-center gap-5 rounded-md bg-[#FFBD59] p-2 px-4 font-bold lg:text-5xl'
            >
              <IoDocumentTextOutline />
              <span>WHITE PAPER</span>
            </button>

            <button
              type='button'
              className='flex items-center justify-center gap-5 rounded-md bg-[#FFBD59] p-2 px-4 font-bold lg:text-5xl'
            >
              <IoDocumentTextOutline />
              <span>SVS TOKEN</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhitePaperSection;
