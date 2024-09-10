import React from "react";
import TitleWithThe from "./TitleWithThe";

const TheSvsCoin = () => {
  return (
    <div className='bg-header-gradient w-full lg:py-20'>
      <div className='px-5 md:px-10 lg:px-32'>
        <div className='flex flex-col gap-20'>
          <ValuesSection />
          <VisionSection />
          <MissionSection />
        </div>
      </div>
    </div>
  );
};

const ValuesSection = () => {
  return (
    <div className='grid gap-20 lg:grid-cols-2'>
      <div className='w-full'>
        <div className='flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-2'>
          <div>
            <TitleWithThe
              title='VALUES'
              theClassName='lg:translate-x-5 translate-x-2'
              titleClassName='text-2xl lg:text-8xl bg-[#FFBD59] text-white rounded-md'
            />
          </div>
          <span className='text-base lg:text-xl'>
            At SVS Coin, we are driven by a commitment to innovation, continuously advancing the
          </span>
        </div>

        <p className='text-base lg:text-xl'>
          boundaries of digital finance to create cutting-edge solutions. Integrity is at our core,
          as we maintain transparency and honesty in every interaction. Our focus on security
          ensures the protection of assets and information, while our commitment to sustainability
          guides us to practice responsibly and contribute positively to the global community.
        </p>
      </div>
      <div className='flex justify-center lg:justify-start'>
        <img src='/landing/Clip path group (7).png' />
      </div>
    </div>
  );
};

const VisionSection = () => {
  return (
    <div className='grid gap-20 lg:grid-cols-2'>
      <div className='flex justify-center lg:justify-end'>
        <img src='/landing/Group 19.png' />
      </div>
      <div>
        <div className='flex flex-col-reverse justify-center gap-6 lg:flex-row lg:items-end lg:justify-normal lg:gap-2'>
          <span className='text-base lg:text-xl'>
            Our primary innovation is ensuring our members and partners experience enhanced security
            and
          </span>
          <div>
            <TitleWithThe
              title='VALUES'
              theClassName='lg:translate-x-5 translate-x-2'
              titleClassName='text-2xl lg:text-8xl bg-[#FFBD59] text-black rounded-md'
            />
          </div>
        </div>

        <p className='text-xl'>
          confidentiality, along with seamless global money transfers in record time. Additionally,
          we plan to introduce credit cards for our members and partners, futher simplying worldwide
          transactions.
        </p>
      </div>
    </div>
  );
};

const MissionSection = () => {
  return (
    <div className='grid gap-20 lg:grid-cols-2'>
      <div>
        <div className='flex flex-col items-center justify-center gap-5 lg:flex-row lg:items-end lg:justify-normal lg:gap-2'>
          <div className='flex w-full items-center lg:items-start'>
            <TitleWithThe
              title='VALUES'
              theClassName='lg:translate-x-5 translate-x-2'
              titleClassName='text-2xl lg:text-8xl bg-white text-[#FFBD59] rounded-md'
            />
          </div>
          <span className='text-base lg:text-xl'>
            Our mission is to deliver the most efficient global instant money transfer service to
            our members
          </span>
        </div>

        <p className='text-base lg:text-xl'>
          and partners, enabling seamless receipt of funds from loved ones worldwide. Whether at
          home, work or on the move, quick access to information, especially during emergencies,
          reduces overall stress levels. SVS Coin ensures rapid access to funds when needed urgently
        </p>
      </div>
      <div className='flex justify-center lg:justify-start'>
        <img src='/landing/Group 20.png' />
      </div>
    </div>
  );
};

export default TheSvsCoin;
