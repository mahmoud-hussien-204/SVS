import React from "react";
import TitleWithThe from "./TitleWithThe";
import {IoDocumentTextOutline} from "react-icons/io5";

const TheSVSProject = () => {
  return (
    <div className='bg-header-gradient w-full py-10 lg:h-screen lg:py-0'>
      <div className='px-5 md:px-10 lg:p-32'>
        <div className='grid lg:grid-cols-2'>
          <div className='flex flex-col items-center justify-center'>
            <TitleWithThe
              title={
                <span>
                  SVS <span className='text-white'>PROJECT</span>
                </span>
              }
              titleClassName='lg:text-[6rem] text-3xl leading-5'
              theClassName='lg:translate-x-4 translate-x-2 lg:-translate-y-3'
            />
            <button
              type='button'
              className='my-5 flex items-center justify-center gap-5 rounded-md bg-[#FFBD59] p-2 px-4 font-bold lg:my-4 lg:text-5xl'
            >
              <IoDocumentTextOutline />
              <span>WHITE PAPER</span>
            </button>
          </div>
          <div className='flex items-center justify-center'>
            <img src='/landing/Clip path group (8).png' alt='' className='lg:scale-110' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheSVSProject;
