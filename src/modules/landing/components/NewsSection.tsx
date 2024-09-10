import React, {useEffect, useState} from "react";
import TitleWithThe from "./TitleWithThe";

type SingleNewType = {
  id: number;
  imageurl: string;
  title: string;
  body: string;
};

const NewsSection = () => {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://min-api.cryptocompare.com/data/v2/news/?lang=EN");
      const news = await response.json();

      setNewsData(news.Data);

      return news;
    };
    getData();
  }, []);

  // const data = [
  //   {
  //     image:
  //       "https://svscoin.org/wp-content/uploads/2024/07/medi2-scaled-1.jpg",
  //     title: "Events",
  //     id: 1,
  //   },
  //   {
  //     image:
  //       "https://svscoin.org/wp-content/uploads/2024/07/medi1-scaled-1.jpg",
  //     title: "Media",
  //     id: 2,
  //   },
  //   {
  //     image:
  //       "https://svscoin.org/wp-content/uploads/2024/07/media3-scaled-1.jpg",
  //     title: "News",
  //     id: 3,
  //   },
  // ];

  return (
    <div className='bg-header-gradient w-full py-20'>
      <div className='lg:px-32'>
        <div className='flex items-center justify-center'>
          <TitleWithThe title='News' />
        </div>

        <div className='mt-20 grid items-center justify-center gap-20 lg:grid-cols-3'>
          <div className='flex items-center justify-center'>
            <div className='relative lg:w-96'>
              <img src='/landing/Group 34 (1).png' alt='' className='w-full' />
              <div className='absolute -bottom-3 -right-6 rounded-full bg-black px-6 text-3xl font-bold lg:text-7xl'>
                <span>
                  B<span className='text-[#FFBD59]'>LOGS</span>
                </span>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <div className='relative lg:w-96'>
              <img src='/landing/Group 34 (1).png' alt='' className='w-full' />
              <div className='absolute -bottom-3 -right-6 rounded-full bg-black px-6 text-3xl font-bold lg:text-7xl'>
                <span>
                  M<span className='text-[#FFBD59]'>EDIA</span>
                </span>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <div className='relative lg:w-96'>
              <img src='/landing/Group 34 (1).png' alt='' className='w-full' />
              <div className='absolute -bottom-3 -right-6 rounded-full bg-black px-6 text-3xl font-bold lg:text-7xl'>
                <span>
                  N<span className='text-[#FFBD59]'>EWS</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NewCard = ({
  image,
  title,
  id,
  imageurl,
}: {
  image?: string;
  title: string;
  id: number;
  imageurl: string;
}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-4' id='news'>
      <div className='relative z-40 h-[235px] w-72 lg:w-[353px]'>
        {/* <img
          src={image ? image : imageurl}
          alt={title}
          fill
          objectFit="contain"
        /> */}
        <img src={imageurl} alt={title} className='h-full w-full object-contain' />
      </div>

      <h3 className='text-center text-xl font-semibold lg:text-3xl'>{title}</h3>

      <a href={`/news/${id}`} className='z-40 mt-6 rounded-sm bg-secondary p-2 px-6'>
        Click here
      </a>
    </div>
  );
};

export default NewsSection;
