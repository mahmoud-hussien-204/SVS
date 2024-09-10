import React, {useEffect, useRef} from "react";
import {Panel} from "primereact/panel";
import gsap from "gsap";
import TitleWithThe from "./TitleWithThe";
import {IoDocumentTextOutline} from "react-icons/io5";
import {FaPlus} from "react-icons/fa6";

const TokenSVSSection = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const collapseRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      collapseRef.current,
      {
        translateX: -500,
        opacity: 0,
      },
      {
        translateX: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: collapseRef.current,
          start: "70% 120%",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      {
        translateX: 500,
        opacity: 0,
      },
      {
        translateX: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: collapseRef.current,
          start: "70% 120%",
        },
      }
    );
  }, []);

  return (
    <div className='bg-header-gradient flex min-h-screen items-center justify-center py-10'>
      <div className='px-5 lg:px-32'>
        <div className='grid lg:grid-cols-2'>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
              <TitleWithThe
                title={
                  <span>
                    SVS <span className='text-white'>PROJECT</span>
                  </span>
                }
                titleClassName='lg:text-8xl text-3xl'
                theClassName='lg:translate-x-5 translate-x-2'
              />
              <button
                type='button'
                className='mt-2 flex items-center justify-center gap-5 rounded-md bg-[#FFBD59] p-2 px-4 font-bold lg:mt-0 lg:text-5xl'
              >
                <IoDocumentTextOutline />
                <span>SVS TOKEN</span>
              </button>
            </div>
            <p className='mt-8 lg:ml-12'>
              SVS Coin is a token developed for facilitating the payment of the fees, expenses and
              Return of investment ( ROI ) of SVS Network's Projects worldwide . it will be created
              with a strict maximum limit of 5,000 million units, a number that can never be
              increased
            </p>

            {/* <div className="flex flex-col">
              <div className="flex px-5 justify-between">
                <p>What is Token SVS?</p>
                <FaPlus />
              </div>
            </div> */}
          </div>
          <div>
            <img src='/landing/Group 31.png' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenSVSSection;
