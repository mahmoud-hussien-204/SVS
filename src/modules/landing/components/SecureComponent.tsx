import React, {useEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const SecureComponent = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const allCardsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        translateY: 100,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "70% 100%",
        },
      }
    );

    gsap.fromTo(
      descRef.current,
      {
        translateY: 100,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: descRef.current,
          start: "50% 100%",
        },
      }
    );

    gsap.fromTo(
      allCardsRef.current,
      {
        translateY: 100,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: allCardsRef.current,
          start: "50% 110%",
        },
      }
    );
  }, []);

  return (
    <div className='bg-header-gradient w-full px-3 lg:px-0 lg:py-10'>
      <div className='w-full md:px-10 lg:px-32'>
        <div className='grid w-full gap-10 lg:grid-cols-2'>
          <div className='flex w-full items-center justify-center text-left lg:text-left'>
            <div className='flex w-full flex-col'>
              <p className='text-lg font-bold md:text-5xl lg:leading-[3rem]'>POWERED BY</p>
              <p className='text-lg font-bold md:text-5xl lg:leading-[3rem]'>CUTTING-EDGE</p>
              <p className='text-xl font-bold text-[#ffbd58] md:text-8xl lg:text-[12rem] lg:leading-[10rem]'>
                BLOCK
              </p>
              <p className='text-xl font-bold md:text-8xl lg:text-[12rem] lg:leading-[10rem]'>
                CHAIN
              </p>
              <div className='max-w-full'>
                <p className='mt-5 text-sm md:text-base lg:ml-3 lg:mt-auto lg:text-xl'>
                  The technology that ensures the highest level of security and transparency in
                  transactions. By decentralizing data storage and processing
                </p>
              </div>
            </div>
          </div>

          <div className='flex w-full flex-col items-center justify-center gap-10'>
            <div className='relative flex justify-end text-center md:text-left'>
              <div className='absolute left-1/2 z-10 hidden -translate-y-1/2 items-center md:left-12 md:top-1/2 md:flex lg:left-36'>
                <img src='/landing/safe.png' alt='' className='' />
              </div>

              <div className='relative flex w-full flex-col rounded-md bg-[#FFBD59] p-6 md:w-10/12 md:flex-row md:pl-32 lg:w-9/12'>
                <div className='md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-1 md:-rotate-90'>
                  <span className='w-8 text-xl font-bold uppercase tracking-wide md:text-6xl'>
                    SAFE
                  </span>
                </div>
                <p className='text-sm text-black md:text-xl'>
                  Our platform utilizes state-of-the-art security protocols to safeguard your funds
                  and personal data. We understand the importance of trust and take every measure to
                  ensure your transactions and information are re protected.
                </p>
              </div>
            </div>

            <div className='relative flex justify-end text-center md:text-left'>
              <div className='absolute left-1/2 z-10 hidden -translate-y-1/2 items-center md:left-12 md:top-1/2 md:flex lg:left-36'>
                <img src='/landing/protected.png' alt='' className='' />
              </div>

              <div className='relative flex w-full flex-col rounded-md bg-[#FFBD59] p-6 md:w-10/12 md:flex-row md:pl-32 lg:w-9/12'>
                <div className='-left-24 top-1/2 -translate-y-1/2 md:absolute md:-rotate-90'>
                  <span className='w-8 text-xl font-bold uppercase tracking-wide md:text-6xl'>
                    PROTECTED
                  </span>
                </div>
                <p className='text-sm text-black md:text-xl'>
                  Your funds and assets held on our platform are insured against a range of risks,
                  including theft, cyberattacks, and operational errors. We employ multi-factor
                  authentication (MFA) to add an extra layer of security to your account. This means
                  that even if someone knows your password, they will not be able to access your
                  account without a second form of verification, such as a code sent to your device.
                  We understand the importance of trust and take every measure to ensure your
                  transactions and information are protected
                </p>
              </div>
            </div>

            <div className='relative flex justify-end text-center md:text-left'>
              <div className='absolute left-1/2 z-10 hidden -translate-y-1/2 items-center md:left-12 md:top-1/2 md:flex lg:left-36'>
                <img src='/landing/easy.png' alt='' className='' />
              </div>

              <div className='relative flex w-full flex-col rounded-md bg-[#FFBD59] p-6 md:w-10/12 md:flex-row md:pl-32 lg:w-9/12'>
                <div className='left-0 top-1/2 -translate-y-1/2 translate-x-1 md:absolute md:-rotate-90'>
                  <span className='w-8 text-xl font-bold uppercase tracking-wide md:text-6xl'>
                    Easy
                  </span>
                </div>
                <p className='text-sm text-black md:text-xl'>
                  Rest assured that your withdrawals are protected by robust security measures.
                  Users can quickly access their funds when needed, providing a hassle-free
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <h2
          className="text-center md:text-4xl text-xl px-5 md:leading-snug font-semibold"
          ref={titleRef}
        >
          Secure And Transparent Transactions Powered By Cutting-Edge Blockchain
        </h2>
        <p
          className="md:max-w-[70ch] text-center text-gray-400 mt-3 md:leading-7 text-base md:mx-auto font-light"
          ref={descRef}
        >
          Blockchain technology ensures the highest level of security and
          transparency in transactions. By decentralizing data storage and
          processing
        </p>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-24 gap-14 mt-16 md:px-20 px-5"
          ref={allCardsRef}
        >
          <div className="flex gap-4">
            <div className="w-40 flex items-start justify-center">
              <img
                src="/landing/secure.png"
                width={60}
                height={60}
                alt="Safe Platform"
              />
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-5">Safe platform</h3>
              <p className="text-base text-gray-400">
                Our platform employs state-of-the-art security protocols to
                safeguard your funds and personal data.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-40 flex items-start justify-center">
              <img
                src="/landing/insurance.png"
                width={60}
                height={60}
                alt="Safe Platform"
              />
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-5">
                Protected by insurance
              </h3>
              <p className="text-base text-gray-400">
                Your funds and assets held on our platform are insured against a
                range of risks, including theft, cyberattacks, and operational
                errors
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-40 flex items-start justify-center">
              <img
                src="/landing/Easy-to-withdraw.png"
                width={60}
                height={60}
                alt="Safe Platform"
              />
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-5">Easy to withdraw</h3>
              <p className="text-base text-gray-400">
                Rest assured that your withdrawals are protected by robust
                security measures
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SecureComponent;
