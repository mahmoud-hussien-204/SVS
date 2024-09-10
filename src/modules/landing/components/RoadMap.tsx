import React from "react";
import TimeLine from "./TimeLine";
import TitleWithThe from "./TitleWithThe";

const RoadMap = () => {
  return (
    <div className='bg-header-gradient w-full px-4 py-10 md:px-0 md:py-20' id='roadmap'>
      <div className='px-5 md:px-32'>
        <div className='flex flex-col items-center justify-center gap-20 md:gap-32'>
          <TitleWithThe
            title='ROAD MAP'
            titleClassName='md:text-8xl text-5xl'
            theClassName='text-4xl translate-x-8'
          />

          <div className='flex w-full items-center justify-center px-8 md:px-0'>
            <img src='/landing/Group 30.png' alt='' className='scale-150 md:scale-125' />
          </div>

          <p className='text-sm text-white md:text-xl'>
            From conceptualization, and market research to design, develop, testing, launch, and
            continuous maintenance, each stage is critical for the success of SVS Coin. By this
            comprehensive roadmap, SVS Network secures efficient, and valuable ecosystem that meets
            the need of its users and stands out in the competitive market
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
