import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import React, {useEffect, useRef} from "react";

gsap.registerPlugin(ScrollTrigger);

const GetStartedSection = () => {
  const allCardsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      allCardsRef.current,
      {
        translateY: 100,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 0.8,
        // ease: "power1.inOut",
        scrollTrigger: {
          trigger: allCardsRef.current,
          start: "50% 110%",
        },
      }
    );
  }, []);

  return (
    <div className='bg-header-gradient w-full lg:py-10 lg:pt-20'>
      <div className='md:px-10 lg:px-32'>
        <div className='grid items-center justify-center gap-20 py-20 lg:grid-cols-[2fr_1fr]'>
          <div className='grid items-center justify-center lg:grid-cols-3'>
            <div className='relative flex w-full flex-col items-center justify-center p-4'>
              <img
                src='/landing/Rigister.png'
                alt=''
                className='absolute left-1/2 top-6 w-20 -translate-x-1/2 lg:-top-24 lg:w-40'
              />

              <div className='flex w-full flex-col items-center justify-center rounded-md bg-[#54482F] p-3 pt-28 text-center lg:grid lg:h-72 lg:pt-20'>
                <h3 className='text-3xl font-bold text-white'>Register</h3>
                <p className='mt-5 font-light lg:text-base'>
                  Create an account via our intuitive, user-friendly desktop & App platforms.
                </p>
              </div>
            </div>
            <div className='relative flex w-full flex-col items-center justify-center p-4'>
              <img
                src='/landing/Fund.png'
                alt=''
                // className="absolute w-32 -translate-x-1/2 lg:w-48 lg:-top-16 -top-6 left-1/2"
                className='absolute left-1/2 top-8 w-24 -translate-x-1/2 lg:-top-16 lg:w-48'
              />

              <div className='flex h-72 w-full flex-col items-center justify-center rounded-md bg-[#54482F] p-3 pt-20 text-center'>
                <h3 className='text-3xl font-bold text-white'>Fund</h3>
                <p className='mt-5 text-base font-light'>
                  Make your first deposit! Choose from a variety of deposit methods, including bank
                  transfer, credit/debit card, and digital wallets.
                </p>
              </div>
            </div>
            <div className='relative flex w-full flex-col items-center justify-center p-4'>
              <img
                src='/landing/Trade.png'
                alt=''
                // className="absolute -translate-x-1/2 lg:w-40 -top-24 left-1/2"
                className='absolute left-1/2 top-8 w-20 -translate-x-1/2 lg:-top-24 lg:w-40'
              />

              <div className='flex h-72 flex-col items-center justify-center rounded-md bg-[#54482F] p-3 pt-20 text-center'>
                <h3 className='text-3xl font-bold text-white'>Trade</h3>
                <p className='mt-5 text-base font-light'>
                  Start trading on SVS Coin with confidence with the most fast and secure platform.
                </p>
              </div>
            </div>
          </div>
          <div className='relative z-10 hidden items-center justify-center px-10 lg:flex lg:px-0'>
            <img src='/landing/get-started.png' alt='' className='lg:scale-125' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
