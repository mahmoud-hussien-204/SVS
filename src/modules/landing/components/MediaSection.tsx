import React from "react";

const MediaSection = () => {
  return (
    <div className='bg-header-gradient flex min-h-screen w-full items-center justify-center'>
      <div className='px-3 md:px-10 lg:px-32'>
        <div className='flex flex-col lg:flex-row'>
          <div className='relative flex items-center'>
            <div className='absolute top-5 rounded-full bg-black px-6 text-3xl font-bold lg:-left-6 lg:top-20 lg:text-7xl'>
              <span>
                M<span className='text-[#FFBD59]'>EDIA</span>
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
          <div className='mt-5 flex items-center justify-center rounded-md bg-[#FFBD59] p-2 lg:mt-0 lg:w-96'>
            <div className='flex flex-col gap-3 px-3'>
              <div className='relative h-52 w-full lg:w-96'>
                <img
                  src='/landing/Group 34 (1).png'
                  alt=''
                  className='h-full w-full rounded-3xl object-cover'
                />
              </div>
              <div className='relative h-52 w-full rounded-2xl lg:w-96'>
                <img
                  src='/landing/Group 34 (1).png'
                  alt=''
                  className='h-full w-full rounded-3xl object-cover'
                />
              </div>
              <div className='relative h-52 w-full rounded-3xl lg:w-96'>
                <img
                  src='/landing/Group 34 (1).png'
                  alt=''
                  className='h-full w-full rounded-3xl object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSection;
