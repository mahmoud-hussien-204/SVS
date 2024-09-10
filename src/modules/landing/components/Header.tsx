import gsap from "gsap";

import React, {useEffect, useRef, useState} from "react";

import {useGSAP} from "@gsap/react";

import ThreeDCoin from "./CoinAnimation";

import {TextPlugin} from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

gsap.registerPlugin(useGSAP);

interface CoinData {
  last_price_usd?: number;
  volume_24_usd?: number;
}

const Header: React.FC = () => {
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const logoContainer = useRef(null);
  const volumeRef = useRef(null);
  const priceRef = useRef(null);
  const [volumeCounter, setVolumeCounter] = useState<number | undefined>(0);

  const [, setCoinData] = useState<CoinData | undefined>(undefined);

  useEffect(() => {
    const getCoinData = async () => {
      try {
        const res = await fetch("https://coincodex.com/api/coincodex/get_coin/svs");

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data: CoinData = await res.json();

        data.volume_24_usd && setVolumeCounter(data.volume_24_usd + 69743);

        setCoinData(data);
      } catch (err) {
        console.error(err);
      }
    };

    getCoinData();
  }, [priceRef, volumeCounter]);

  useEffect(() => {
    // ..coin animation
    gsap.to(logoRef.current, {
      rotationY: 360,
      duration: 8,
      repeat: -1,
      ease: "linear",
    });

    // ..text animation
    gsap.to(textRef.current, {
      translateX: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power1.inOut",
    });

    // ..logo container animation
    gsap.to(logoContainer.current, {
      opacity: 1,
      translateY: 0,
      duration: 0.7,
      ease: "power1.inOut",
    });
  }, []);

  useEffect(() => {
    // if (coinData?.volume_24_usd) {
    gsap.to(volumeRef.current, {
      innerText: volumeCounter,
      duration: 2,
      snap: {
        innerText: 5,
      },
    });

    // }
  }, [volumeCounter]);

  return (
    <div className='mt:pt-0 bg-header-gradient min-h-screen w-full overflow-hidden pt-36 md:mt-0'>
      <div className='grid h-full px-5 md:px-32 lg:grid-cols-[2fr_1.5fr]'>
        <div
          className='mb-5 flex -translate-x-60 flex-col items-center justify-center text-center opacity-0 md:mb-0 md:mt-40 md:items-start md:text-left'
          ref={textRef}
        >
          <h2 className='text-2xl font-bold text-[#ffbd58] md:text-[8rem] md:leading-[7rem]'>
            SVS COIN
          </h2>

          <div className={`flex flex-col`}>
            <p className='font-bold md:text-5xl md:leading-[3rem]'>FIRST DECENTRALISED</p>
            <p className='font-bold leading-[4rem] text-[#ffbd58] md:text-8xl'>MARKETING</p>
            <p className='font-bold md:text-8xl'>PLATFORM</p>
            <p className='mb-2 md:text-lg'>
              SVS COIN is the first currency to change the world of transaction
            </p>
          </div>

          <div className='flex w-full gap-4 px-4 md:mb-24 md:mt-16 md:gap-8 md:px-10'>
            <a
              href='/whitepaper'
              target='_blank'
              className='flex w-full flex-col items-center justify-center gap-2 rounded-lg border bg-[#ffbd58] p-1 md:w-auto md:p-3 md:px-6'
            >
              <span className='text-xs font-bold md:text-lg'>MARKET PRICE</span>
              <div className='flex w-full justify-center gap-2 md:justify-between'>
                {/* <div className=""> */}
                <img src='/landing/coin.png' alt='' className='' />
                {/* </div> */}
                <span className='w-full text-center text-lg font-bold md:text-3xl'>1.81</span>
              </div>
            </a>

            <a
              href='/whitepaper'
              target='_blank'
              className='flex w-full flex-col items-center justify-center gap-2 rounded-lg border bg-[#ffbd58] p-2 md:w-auto md:p-3 md:px-6'
            >
              <span className='text-xs font-bold md:text-lg'>MARKET VOLIME</span>
              <div className='flex w-full items-center justify-between md:w-auto'>
                <img src='/landing/coin.png' alt='' />
                <span className='w-full text-center text-base font-bold md:text-3xl'>119,530</span>
              </div>
            </a>
          </div>
        </div>

        <div
          className='header-image-container relative flex-wrap items-center justify-center opacity-0 md:flex'
          ref={logoContainer}
        >
          <ThreeDCoin />
        </div>
      </div>
    </div>
  );
};

export default Header;
