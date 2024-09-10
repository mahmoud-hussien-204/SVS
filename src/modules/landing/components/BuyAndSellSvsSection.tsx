import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import React, {useEffect, useRef} from "react";
import {HiArrowLongRight} from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger);

const BuyAndSellSvsSection = () => {
  const rightCardsRef = useRef(null);
  const leftCardsRef = useRef(null);
  const mobileRef = useRef(null);

  const data1 = [
    {
      image: "/landing/bank.png",
      title: "Bank Transfers",
    },
    {
      image: "/landing/wallet.png",
      title: "Online Wallets",
    },
  ];

  const data2 = [
    {
      image: "/landing/cash.png",
      title: "Cash Payment",
    },
    {
      image: "/landing/debit.png",
      title: "Debit/Credit Cards",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      leftCardsRef.current,
      {
        translateY: 100,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 1.5,
        // ease: "power1.inOut",
        scrollTrigger: {
          trigger: leftCardsRef.current,
          start: "70% 100%",
        },
      }
    );

    gsap.fromTo(
      rightCardsRef.current,
      {
        translateY: 100,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 1.5,
        // ease: "power1.inOut",
        scrollTrigger: {
          trigger: rightCardsRef.current,
          start: "70% 110%",
        },
      }
    );

    gsap.fromTo(
      mobileRef.current,
      {
        translateY: -500,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 1.5,
        // ease: "power1.inOut",
        scrollTrigger: {
          trigger: rightCardsRef.current,
          start: "70% 110%",
        },
      }
    );
  }, []);

  return (
    <div className='bg-header-gradient w-full py-10 lg:py-16'>
      <div className='px-5 md:px-10 lg:p-32'>
        <div className='grid w-full gap-10 lg:grid-cols-2 lg:gap-20'>
          <div className='flex justify-end'>
            <img src='/landing/BuyAndSell.png' alt='' className='lg:scale-125' />
          </div>
          <div>
            <div className='flex flex-col'>
              <p className='text-5xl font-bold -tracking-wider lg:text-[9rem] lg:leading-[8rem]'>
                How to
              </p>
              <p className='text-5xl font-bold leading-8 -tracking-wider lg:text-[5.5rem] lg:leading-[4rem]'>
                <span className='text-[#3AAA35]'>BUY</span> &
                <span className='text-[#FFBD59]'>SELL</span>
              </p>
              <p className='text-5xl font-bold -tracking-wider lg:text-[5.5rem] lg:leading-[5rem]'>
                <span className='text-[#FFBD59]'>SVS</span>
                COIN
              </p>
            </div>
            <div className='jus mt-8 flex items-center gap-2 lg:justify-start lg:gap-8'>
              <div>
                <img src='/landing/Group 14.png' alt='' />
              </div>
              <div>
                <img src='/landing/Group 15.png' alt='' />
              </div>
              <div>
                <img src='/landing/Clip path group (5).png' alt='' />
              </div>
              <div>
                <img src='/landing/Clip path group (6).png' alt='' />
              </div>
            </div>
            <p className='mt-8 lg:text-lg'>
              Register and verify your account on the platform. Deposit funds using various payment
              methods such as bank transfer, credit/debit card, online wallets or cash payment.
              Navigate to your wallet on the exchange, place a buy or sell order, and choose a
              withdrawal method compatible with your payment preferences. Use the exchange’s link
              for withdrawals to transfer your funds back to your bank account or payment method.
            </p>
            <button className='mt-5 flex items-center rounded-full bg-white px-4 text-xl font-bold text-[#FFBD59]'>
              <span>Learn more</span>
              <HiArrowLongRight className='text-5xl' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const BuyAndSellCard = ({img, title}: {img: string; title: string}) => {
  return (
    <div className='z-40 flex bg-[#1e2739]'>
      <div className='flex px-10'>
        <div className='relative z-40 flex items-end'>
          <img src={img} alt={title} className='relative z-40 block' />
        </div>

        <div className='flex items-center justify-center p-6'>
          <h3 className='text-base font-medium lg:text-xl'>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default BuyAndSellSvsSection;
