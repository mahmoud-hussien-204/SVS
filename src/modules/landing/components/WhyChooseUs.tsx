import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import React, {useEffect, useRef} from "react";
import TitleWithThe from "./TitleWithThe";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const imageRef = useRef(null);
  const leftCardsRef = useRef(null);
  const rightCardsRef = useRef(null);

  const data1 = [
    {
      image: "/landing/icon-4 (1).png",
      title: "Experience:",
      desc: "With SVS COIN years of experience in the crypto industry, we bring deep expertise and a proven track record of delivering results.",
    },
    {
      image: "/landing/icon-6 (1).png",
      title: "Range of Services:",
      desc: "Whether you're a seasoned investor or new to cryptocurrencies, we offer a comprehensive range of services tailored to meet your needs.",
    },
  ];

  const data2 = [
    {
      image: "/landing/icon-6 (1).png",
      title: "Approach:",
      desc: "We prioritize our clients' needs above all else, offering personalized support and guidance every step of the way.",
    },
    {
      image: "/landing/icon-5 (1).png",
      title: "Innovation and Vision:",
      desc: "Beyond the present, we envision the future ol finance. Our innovative solutions pave the way for tomorrow's digital economy:",
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
        duration: 1,
        // ease: "power1.inOut",
        scrollTrigger: {
          trigger: leftCardsRef.current,
          start: "70% 170%",
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
        duration: 1,
        // ease: "power1.inOut",
        scrollTrigger: {
          trigger: rightCardsRef.current,
          start: "70% 170%",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      {
        translateY: -500,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 1,
        // ease: "power1.inOut",
        scrollTrigger: {
          trigger: rightCardsRef.current,
          start: "70% 170%",
        },
      }
    );
  }, []);

  return (
    <div className='flex w-full flex-col'>
      <WhyExperienceSection />
      <WhyApproachSection />
      <WhyInnovationSection />
      <WhyServiceSection />
    </div>
  );
};

const WhyExperienceSection = () => {
  return (
    <div className='bg-header-gradient flex min-h-screen w-full items-center justify-center py-10 lg:min-h-[80vh]'>
      <div className='px-5 lg:px-32'>
        <div className='grid gap-10 lg:grid-cols-2'>
          <div className='relative flex flex-col items-center text-center lg:items-end lg:gap-8 lg:text-right'>
            <TitleWithThe title='Why' theClassName='' titleClassName='lg:text-8xl text-6xl' />
            <h5 className='font-bold tracking-wider lg:text-5xl'>EXPERIENCE</h5>
            <p className='mt-5 text-left lg:max-w-[33ch] lg:text-2xl'>
              A dynamic and evolving experience that blends financial innovation with technology
              advancements. We have team of experienced blockchain developers, cryptographers and
              software engineers who understand the complexities of blockchain technology, consensus
              mechanisms, and smart contract development.
            </p>
            <button
              type='button'
              className='mt-2 rounded-xl bg-[#FFBD59] p-1 font-bold lg:mt-0 lg:text-4xl'
            >
              WATCH VIDEO
            </button>
          </div>
          <div className='relative w-full'>
            <img src='/landing/why-image.png' alt='' className='' />
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyApproachSection = () => {
  return (
    <div className='bg-header-gradient relative flex min-h-screen w-full items-center justify-center py-10 lg:min-h-[80vh]'>
      <div className='px-5 lg:px-32'>
        <div className='grid gap-10 lg:grid-cols-2'>
          <div className='relative flex flex-col items-center text-right lg:items-end lg:gap-8'>
            <TitleWithThe title='Why' theClassName='' titleClassName='lg:text-8xl text-6xl' />
            <h5 className='font-bold tracking-wider lg:text-5xl'>APPROACH</h5>
            <p className='mt-5 text-left lg:mt-0 lg:max-w-[35ch] lg:text-2xl'>
              We prioritize our clients' needs above all else, offering personalized support and
              guidance every step of the way. Focusing on creating user-friendly interfaces and
              seamless user experience. Maintaining transparency in operations, development process,
              and decision-making
            </p>
            <button
              type='button'
              className='mt-2 rounded-xl bg-[#FFBD59] p-1 font-bold lg:mt-0 lg:text-4xl'
            >
              WATCH VIDEO
            </button>
          </div>
          <div className='relative w-full'>
            <img src='/landing/Group 16.png' alt='' className='' />
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyInnovationSection = () => {
  return (
    <div className='bg-header-gradient flex min-h-screen w-full items-center justify-center py-10 lg:min-h-[80vh]'>
      <div className='px-5 lg:px-32'>
        <div className='grid gap-10 lg:grid-cols-2'>
          <div className='flex flex-col items-center text-right lg:items-end lg:gap-8'>
            <TitleWithThe title='Why' theClassName='' titleClassName='lg:text-8xl text-6xl' />
            <h5 className='font-bold tracking-wider lg:text-5xl'>INNOVATION</h5>
            <p className='mt-5 text-left lg:mt-0 lg:max-w-[33ch] lg:text-2xl'>
              Beyond the present, we envision the future of finance. Our innovative solutions pave
              the way for tomorrow's digital economy. Leveraging technology, such as scalable
              consensus algorithms, layer 2 solution, and privacy-enhancement techniques. Innovating
              in areas like interoperability and cross-chain solutions to increase utility.
            </p>
            <button
              type='button'
              className='mt-2 rounded-xl bg-[#FFBD59] p-1 font-bold lg:mt-0 lg:text-4xl'
            >
              WATCH VIDEO
            </button>
          </div>
          <div className='relative w-full'>
            <img src='/landing/Group 17.png' alt='' className='' />
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyServiceSection = () => {
  return (
    <div className='bg-header-gradient relative flex min-h-screen w-full items-center justify-center py-10 lg:min-h-[80vh]'>
      <div className='px-5 lg:px-32'>
        <div className='grid gap-10 lg:grid-cols-2'>
          <div className='flex flex-col items-center text-center lg:items-end lg:gap-8 lg:text-right'>
            <TitleWithThe title='Why' theClassName='' titleClassName='lg:text-8xl text-6xl' />
            <h5 className='font-bold tracking-wider lg:text-5xl'>SERVICE</h5>
            <p className='mt-5 lg:max-w-[33ch] lg:text-2xl'>
              Whether you're a seasoned investor or new to cryptocurrencies, we offer a
              comprehensive range of services tailored to meet your needs. Building partnerships
              with other blockchain projects, financial institutions, and technology companies to
              expand SVS ecosystem.,
            </p>
            <button
              type='button'
              className='mt-2 rounded-xl bg-[#FFBD59] p-1 font-bold lg:mt-0 lg:text-4xl'
            >
              WATCH VIDEO
            </button>
          </div>
          <div className='relative w-full'>
            <img src='/landing/Group 18.png' alt='' className='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
