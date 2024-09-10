import React from "react";
import TitleWithThe from "./TitleWithThe";
import {IoDocumentTextOutline} from "react-icons/io5";

const AboutSvsCoin = () => {
  return (
    <div className='bg-header-gradient min-h-screen w-full lg:py-20'>
      <div className='px-5 md:px-10 lg:px-32'>
        <div className='grid gap-10 lg:grid-cols-2 lg:gap-20'>
          <div className='relative h-full w-full'>
            <img
              src='/landing/about-img.png'
              alt=''
              className='right-0 top-0 hidden lg:absolute lg:flex lg:scale-125'
            />

            <div className='flex h-full flex-col items-center justify-center gap-4 lg:-translate-x-1/2 lg:items-end lg:gap-0'>
              <TitleWithThe title='ABOUT' theClassName='' titleClassName='' />
              <button
                type='button'
                className='flex items-center justify-center rounded-lg bg-[#FFBD59] p-1 font-bold lg:p-2 lg:text-3xl'
              >
                <IoDocumentTextOutline fontSize={30} />
                <span>WHITE PAPER</span>
              </button>
            </div>
          </div>

          <div className='flex flex-col gap-8'>
            <p className='text-sm text-white md:text-base lg:text-2xl'>
              The <span className='font-bold'>SVS Coin</span> represents a pioneering digital
              currency designed to streamline fund management across various sectors such as
              investments, travel & tourism, hospitality, healthcare, education, and more. It serves
              the needs of businesses for efficient cash flow management, trade finance, and
              large-scale project funding on a global scale, leveraging advance blockchain
              technologies.
            </p>
            <p className='text-sm text-white lg:text-2xl'>
              The <span className='font-bold'>SVS Coin</span> derives its validity from a blockchain
              technology, a continually expanding ledger of records known as blocks. These blocks
              are interconnected and secured using cryptography, with each containing a hash pointer
              linking to the previous block, along with timestamps and transaction data. This design
              ensures that blockchains are highly resistant to data tampering, ensuring robust data
              integrity. Managed by a peer-to-peer network, blockchains adhere to protocols for
              validating new blocks, with the block time representing the average interval for
              generating each new block.
            </p>
            <p className='text-sm text-white lg:text-2xl'>
              <span className='font-bold'>SVS Coin</span> offers a streamlined and stable solution
              for both personal and business needs. It primarily targets SVS Network members and
              partners, facilitating efficient payments to SVS for a variety of services. On a
              broader scale, <span className='font-bold'>SVS Coin</span> supports short-term trade
              requirements and long-term project funding needs for investments in infrastructure,
              healthcare, education, and humanitarian initiatives associated with SVS.
            </p>

            <p className='text-sm font-bold text-white lg:text-2xl'>
              Backed by the SVS Network, actively involved in global investment and infrastructure
              projects, along with significant humanitarian efforts in Africa, SVS Coin ensures the
              utmost stability and secuirty for its investors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSvsCoin;
