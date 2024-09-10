import React from "react";

const SingleNewSection = () => {
  return (
    <div className='bg-header-gradient mt-5 min-h-screen w-full lg:mt-0'>
      <div className='px-3 lg:px-32'>
        <div className='flex flex-col gap-5 lg:flex-row lg:gap-0'>
          <div className='relative flex items-start'>
            <div className='absolute -top-4 z-10 rounded-full bg-black px-6 text-3xl font-bold lg:-right-10 lg:text-7xl'>
              <span>
                N<span className='text-[#FFBD59]'>EWS</span>
              </span>
            </div>
            <div className='w-full rounded-2xl bg-[#FFBD59] p-5 lg:rounded-l-2xl'>
              <div className='grid w-full bg-white p-2 lg:grid-cols-[2fr_1fr]'>
                <div className='w-full'>
                  <img
                    src='/landing/Group 34 (1).png'
                    alt=''
                    className='w-full object-cover lg:h-80'
                  />
                </div>
                <div className='flex flex-col lg:ml-6'>
                  <p className='font-semibold text-gray-500'>News</p>
                  <p className='font-semibold text-blue-800'>July 29, 2024</p>
                  <h3 className='font-bold text-black lg:text-3xl'>
                    Bill Morgan Debunks Viral Rumors On Ripple vs SEC Case
                  </h3>
                  <p className='text-sm text-black lg:text-lg'>
                    The Ripple vs SEC legal battles continues with Various rumors, speculations, and
                    uncertainties on this matter. Previously, it was expected that the case would
                    finally b...
                  </p>

                  <a href='#' className='mt-5 font-semibold text-black'>
                    <span>Read this Article</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center rounded-md bg-[#FFBD59] p-2 lg:w-96'>
            <div className='flex flex-col gap-3'>
              <div className='relative h-52 lg:w-96'>
                <img
                  src='/landing/Group 34 (1).png'
                  alt=''
                  className='h-full w-full rounded-3xl object-cover'
                />
              </div>
              <div className='relative h-52 rounded-2xl lg:w-96'>
                <img
                  src='/landing/Group 34 (1).png'
                  alt=''
                  className='h-full w-full rounded-3xl object-cover'
                />
              </div>
              <div className='relative h-52 rounded-3xl lg:w-96'>
                <img
                  src='/landing/Group 34 (1).png'
                  alt=''
                  className='h-full w-full rounded-3xl object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default SingleNewSection;
