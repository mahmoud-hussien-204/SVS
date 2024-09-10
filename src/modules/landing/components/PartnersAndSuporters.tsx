import TitleWithThe from "./TitleWithThe";

const PartnersAndSuporters = () => {
  const images = [
    "/landing/partners/1.png",
    "/landing/partners/2.png",
    "/landing/partners/3.png",
    "/landing/partners/4.png",
    "/landing/partners/5.png",
    "/landing/partners/6.png",
    "/landing/partners/7.png",
    "/landing/partners/8.png",
    "/landing/partners/9.png",
  ];

  return (
    <div className='bg-header-gradient flex min-h-screen w-full items-center justify-center'>
      <div className='px-5 lg:px-20 lg:px-32'>
        <div className='flex w-full flex-col items-center justify-center lg:text-left'>
          <TitleWithThe
            title='PARTNERS &'
            theClassName='lg:text-5xl text-2xl lg:translate-x-5 translate-x-1'
            titleClassName='lg:text-8xl text-3xl'
          />
          <p className='font-bold text-white lg:text-[6rem] lg:leading-[4rem]'>COLLABORATIONS</p>
        </div>

        <div className='mt-10 grid gap-5 lg:mt-44 lg:grid-cols-5 lg:gap-24'>
          {images.map((image, index) => (
            <div key={index} className='flex items-center justify-center lg:justify-start'>
              <img src={image} alt='' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersAndSuporters;
