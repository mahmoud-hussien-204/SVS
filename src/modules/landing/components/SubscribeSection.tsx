import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import React, {useEffect, useRef} from "react";
import {AiOutlineMail} from "react-icons/ai";
gsap.registerPlugin(ScrollTrigger);

const SubscribeSection = () => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      {
        translateY: -200,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ref.current,
          start: "70% 90%",
        },
      }
    );
  }, []);

  return (
    <div className='bg-header-gradient flex h-[300px] w-full items-center justify-center md:h-[600px]'>
      <div className='w-full md:px-32'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-center text-2xl font-bold text-[#FFBD59] md:text-6xl'>
            Get our latest updates!
          </h2>

          <div className='flex flex-col items-center justify-center pt-10 md:flex-row lg:w-8/12'>
            <div className='flex w-full lg:w-5/12'>
              <div className='translate-x-12'>
                <div className='flex h-14 w-14 items-center justify-center rounded-full bg-[#FFBD59]'>
                  <AiOutlineMail fontSize={30} />
                </div>
              </div>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email Address'
                className='w-full rounded-full bg-white py-4 pl-16 text-black shadow-none outline-none'
              />
            </div>
            <button
              type='button'
              className='mt-5 rounded-lg bg-[#FFBD59] p-2 px-8 text-xl font-bold text-white md:mt-0'
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
