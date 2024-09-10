import React from "react";

const BlogsSection = () => {
  return (
    <div className='bg-header-gradient relative flex min-h-screen w-full items-center justify-center'>
      <div className='lg:px-32'>
        <div className='flex flex-col lg:flex-row'>
          <div className='flex items-center justify-center'>
            <div className='relative lg:w-96'>
              <img src='/landing/Group 34 (1).png' alt='' className='w-full' />
            </div>
          </div>
          <div className='relative flex items-center'>
            <div className='absolute left-1/2 top-2 rounded-full bg-black px-6 text-3xl font-bold lg:-left-6 lg:top-12 lg:text-7xl'>
              <span>
                B<span className='text-[#FFBD59]'>LOGS</span>
              </span>
            </div>
            <div className='mb-5 w-full rounded-2xl bg-[#FFBD59] p-5 lg:mb-0 lg:rounded-r-2xl'>
              <div className='grid h-full items-center justify-center gap-10 lg:grid-cols-4'>
                <div className='mb-2 h-60 rounded-2xl border-4 border-red-500 p-1.5 lg:mb-0 lg:w-60'>
                  <img src='/landing/Group 34 (1).png' alt='' className='h-full w-full' />
                </div>
                <div className='h-60 w-60 rounded-2xl border-4 border-red-500 p-1.5'>
                  <img src='/landing/Group 34 (1).png' alt='' className='h-full w-full' />
                </div>
                <div className='h-60 w-60 rounded-2xl border-4 border-red-500 p-1.5'>
                  <img src='/landing/Group 34 (1).png' alt='' className='h-full w-full' />
                </div>
                <div className='h-60 w-60 rounded-2xl border-4 border-red-500 p-1.5'>
                  <img src='/landing/Group 34 (1).png' alt='' className='h-full w-full' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
