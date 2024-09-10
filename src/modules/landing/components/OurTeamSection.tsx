import {FaFacebookF, FaInstagram, FaLinkedin} from "react-icons/fa6";
import {FaXTwitter} from "react-icons/fa6";
import {memberType} from "../dummy/data";
import TitleWithThe from "./TitleWithThe";
import {TfiLinkedin} from "react-icons/tfi";
import {Link} from "react-router-dom";

const OurTeamSection = () => {
  return (
    <div className='bg-header-gradient w-full py-32'>
      <div className='flex flex-col items-center px-5 lg:px-32'>
        <div className='flex w-full flex-col justify-center lg:w-10/12'>
          <div className='flex justify-center lg:justify-end'>
            <TitleWithThe
              title='TEAM'
              titleClassName='text-4xl lg:text-8xl text-[#FFBD59]'
              theClassName='translate-x-2 lg:translate-x-5'
            />
          </div>
          <div className='relative mt-5 flex flex-col items-center lg:mt-0 lg:flex-row'>
            <img
              src='/landing/88888.png'
              className='-left-72 w-40 lg:absolute lg:h-[277px] lg:w-[277px] lg:translate-x-2/3'
              alt=''
            />
            <div className='flex flex-col rounded-2xl bg-[#FFBD59] p-4 lg:h-[277px] lg:rounded-l-3xl lg:pl-48'>
              <p className='text-sm lg:text-base'>
                With over 20 years of experience in the market, Nader is a seasoned business owner
                known for his strategic vision, innovative leadership, and profound industry
                expertise. Throughout his illustrious career, he have successfully navigated
                numerous economic cycles and industry shifts, demonstrating remarkable resilience
                and adaptability. Nader’s deep understanding of market dynamics, combined with a
                commitment to customer satisfaction and operational excellence, has driven the
                sustained growth and success of their ventures. Renowned for their financial acumen,
                ethical business practices, and effective communication, Nader has built a strong
                reputation as a trusted leader and mentor, continually inspiring and developing the
                next generation of business talent.
              </p>

              <div className='mt-4 flex flex-col items-center justify-start gap-5 lg:ml-4 lg:flex-row lg:justify-between'>
                <div className='flex flex-col'>
                  <h3 className='font-bold lg:text-5xl'>NADER SAID</h3>
                  <p className='text-lg font-bold lg:text-2xl'>CEO | Chief Executive Officer</p>
                </div>
                <div className='flex items-center gap-3'>
                  <a href=''>
                    <FaFacebookF fontSize={25} />
                  </a>
                  <a href=''>
                    <FaInstagram fontSize={25} />
                  </a>
                  <a href=''>
                    <TfiLinkedin fontSize={25} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-20 grid w-full gap-10 lg:w-10/12 lg:grid-cols-2 lg:gap-40'>
          <div className='relative flex w-full flex-col items-center lg:flex-row'>
            <img
              src='/landing/Group 32.png'
              className='-left-36 w-40 lg:absolute lg:h-[277px] lg:min-w-[277px]'
              alt=''
            />
            <div className='flex h-[277px] w-full min-w-full flex-col justify-between rounded-2xl bg-[#FFBD59] p-4 lg:rounded-l-3xl lg:pl-48'>
              <p className='text-sm lg:text-base'>
                Seasoned Chief Technology Officer with over 15 years of experience in driving
                technology innovation and excellence. His extensive expertise, strategic vision and
                leadership skills have been instumental in advancing the company’s mission and
                achiecing significant milestones.
              </p>

              <div className='flex flex-col items-center justify-between lg:flex-row'>
                <div className='flex flex-col'>
                  <h3 className='font-bold lg:text-3xl'>YAZAN ABASSI</h3>
                  <p className='font-bold lg:text-xl'>CTO | Chief Technology Officer</p>
                </div>
                <div className='mt-5 flex items-center gap-3 lg:mt-0'>
                  <a href=''>
                    <FaFacebookF fontSize={25} />
                  </a>
                  <a href=''>
                    <FaInstagram fontSize={25} />
                  </a>
                  <a href=''>
                    <TfiLinkedin fontSize={25} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='relative flex w-full flex-col items-center lg:flex-row'>
            <img
              src='/landing/Clip path group (9).png'
              className='-left-36 w-40 object-cover lg:absolute lg:h-[277px] lg:w-[277px]'
              alt=''
            />
            <div className='flex w-full flex-col justify-between rounded-2xl bg-[#FFBD59] p-4 lg:h-[277px] lg:rounded-l-3xl lg:pl-48'>
              <p className='text-sm lg:text-base'>
                Seasoned Chief Technology Officer with over 15 years of experience in driving
                technology innovation and excellence. His extensive expertise, strategic vision and
                leadership skills have been instumental in advancing the company’s mission and
                achiecing significant milestones.
              </p>

              <div className='mt-4 flex flex-col items-center justify-between lg:ml-4 lg:flex-row'>
                <div className='flex flex-col'>
                  <h3 className='font-bold lg:text-3xl'>YAZAN ABASSI</h3>
                  <p className='font-bold lg:text-xl'>CTO | Chief Technology Officer</p>
                </div>
                <div className='mt-5 flex items-center gap-3 lg:mt-0'>
                  <a href=''>
                    <FaFacebookF fontSize={25} />
                  </a>
                  <a href=''>
                    <FaInstagram fontSize={25} />
                  </a>
                  <a href=''>
                    <TfiLinkedin fontSize={25} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TeamCard = ({image, name, position, desc, socialMedia, id}: memberType) => {
  return (
    <Link to={`/team/${id}`}>
      <div className='flex flex-col items-center justify-center gap-4'>
        <div className='relative z-40 h-[300px] w-[300px] overflow-hidden rounded-3xl px-6 lg:h-[400px] lg:w-[400px] lg:px-0'>
          <img src={image || ""} alt='' className='' />
        </div>
        <h3 className='text-2xl font-bold'>{name}</h3>
        <div className='flex gap-4'>
          {socialMedia.facebook && (
            <a
              href={socialMedia.facebook}
              className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-300'
            >
              <FaFacebookF color='#111827' fontSize={18} />
            </a>
          )}

          {socialMedia.instagram && (
            <a
              href={socialMedia.instagram}
              className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-300'
            >
              <FaInstagram color='#111827' fontSize={18} />{" "}
            </a>
          )}

          {socialMedia.twitter && (
            <a
              href={socialMedia.twitter}
              className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-300'
            >
              <FaXTwitter color='#111827' fontSize={18} />
            </a>
          )}

          {socialMedia.linkedin && (
            <a
              href={socialMedia.linkedin}
              className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-300'
            >
              <FaLinkedin color='#111827' fontSize={18} />
            </a>
          )}
        </div>
        <p className='text-base'>{position}</p>
      </div>
    </Link>
  );
};

export default OurTeamSection;
