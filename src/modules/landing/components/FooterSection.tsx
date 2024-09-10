import {FaLocationDot, FaRegCopyright} from "react-icons/fa6";
import {GoMail} from "react-icons/go";
import {IoClose, IoSearchOutline} from "react-icons/io5";
import {LuClock10} from "react-icons/lu";
import {MdPhone} from "react-icons/md";
import {SlPaperClip} from "react-icons/sl";

const FooterSection = () => {
  const links = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "#partners",
      name: "Buy Sell",
    },
    {
      link: "#news",
      name: "news",
    },
    {
      link: "#listing",
      name: "listing",
    },
    {
      link: "#roadmap",
      name: "Board Advisor",
    },
    {
      link: "#contactus",
      name: "Contact",
    },
  ];

  return (
    <div className='bg-header-gradient flex w-full flex-col items-center justify-center p-10 text-white'>
      <div className='w-full md:px-10 lg:px-32'>
        <div className='flex w-full flex-col gap-8 lg:flex-row'>
          <div className='flex w-full flex-col lg:w-9/12'>
            <h2 className='mb-4 text-xl font-bold text-[#FFBD59] lg:text-6xl'>
              How can we help you ?
            </h2>

            <div className='relative flex w-full lg:w-9/12'>
              <IoSearchOutline
                fontSize={40}
                fill='#FFBD59'
                className='absolute left-2 top-1/2 z-10 -translate-y-1/2 text-[#FFBD59]'
              />
              <input
                type='text'
                className='w-full rounded-2xl border border-[#FFBD59] bg-white px-3 py-5 pl-16 text-black outline-[#FFBD59]'
              />
              <IoClose
                fontSize={40}
                fill='#FFBD59'
                className='absolute right-2 top-1/2 z-10 -translate-y-1/2 text-[#FFBD59]'
              />
            </div>

            <div className='flex w-full flex-col lg:w-96'>
              <div className='mt-8 flex w-full flex-col gap-3 rounded-2xl bg-[#FFBD59] p-2'>
                <h3 className='text-2xl font-bold text-white'>Submit a request</h3>

                <input type='text' name='' placeholder='Name' className='bg-white p-2' />

                <input type='text' name='' placeholder='Phone' className='bg-white p-2' />

                <input type='email' name='' placeholder='Email Address' className='bg-white p-2' />

                <input type='text' name='' placeholder='Subject' className='bg-white p-2' />

                <textarea
                  cols={5}
                  rows={3}
                  className='w-full bg-white p-2'
                  placeholder='Message'
                ></textarea>
              </div>

              <div className='mr-2 mt-5 flex justify-end gap-4'>
                <SlPaperClip fill='#FFBD59' fontSize={30} />

                <button className='rounded-full bg-[#FFBD59] px-2 text-3xl font-bold text-white'>
                  Send
                </button>
              </div>
            </div>
          </div>
          <div className='flex w-full flex-col gap-4 lg:w-3/12'>
            <div className='flex items-start justify-start gap-4'>
              <FaLocationDot fontSize={70} fill='#FFBD59' />
              <p>
                Century 21 Bldg., Office 103 Abu baker Al Sidiqque Rd Deira Dubai, United Arab
                Emirates P.O Box: 181241
              </p>
            </div>
            <div className='flex items-center gap-4'>
              <GoMail fontSize={30} fill='#FFBD59' />
              <a href='#' className='text-lg'>
                info@bullseyebrokerage.com
              </a>
            </div>
            <div className='flex items-center gap-4'>
              <MdPhone fontSize={35} fill='#FFBD59' />
              <div className='flex flex-col'>
                <p>971 43245732</p>
                <p>971 42230622</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <LuClock10 fontSize={35} className='text-[#FFBD59]' />
              <div className='flex flex-col'>
                <h5 className='text-lg font-bold'>WORKING HOURS:</h5>
                <p>Monday to Saturday</p>
                <p>09:00am - 06:00pm</p>
              </div>
            </div>
            <div className='h-[251px] w-full'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus'
                width='100%'
                height='100%'
                loading='lazy'
                className='relative z-40'
              ></iframe>
            </div>

            <div className='flex gap-2'>
              <FaRegCopyright fontSize={25} className='text-[#FFBD59]' />
              <p>COPYRIGHT 2024 SVS | ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
