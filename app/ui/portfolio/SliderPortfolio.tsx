'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { IPortfolioData } from './data/interface';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { MdEmojiObjects } from 'react-icons/md';

interface SliderPortfolioProps {
  portfolioData: IPortfolioData[];
  handleModal: () => void;
  setModalInfo: (info: IPortfolioData) => void;
}

const SliderPortfolio: React.FC<SliderPortfolioProps> = ({
  portfolioData,
  handleModal,
  setModalInfo,
}) => {
  const handleModalInfo = (info: IPortfolioData) => {
    setModalInfo(info);
    handleModal();
  };

  return (
    <Swiper
      spaceBetween={50}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[440px]'
      freeMode={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
    >
      <div
        className='swiper-pagination'
        style={{ position: 'absolute', bottom: '10px', width: '100%' }}
      ></div>
      {portfolioData.map((item, index) => (
        <SwiperSlide
          key={index}
          className='flex flex-col items-center justify-center h-full bg-transparent relative'
        >
          <div className='p-4 rounded-xl overflow-hidden flex flex-col items-center justify-center'>
            <h3 className='mb-4 text-xl text-center'>{item.title}</h3>
            <div
              style={{
                height: '300px',
                width: '300px',
                position: 'relative',
              }}
            >
              <Image
                src={item.image}
                alt='Image'
                className='rounded-2xl imageContainerPortfolio cursor-pointer transition duration-150 hover:opacity-30'
                onClick={() => handleModalInfo(item)}
                priority={true}
                width={1000}
                height={1000}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
              <div className='absolute bottom-0 left-0 right-0 flex justify-between p-2 gap-2'>
                <Link
                  href={item.urlGithub}
                  target='_blank'
                  className='p-3 text-lg transition duration-150 rounded-lg bg-slate-600 hover:bg-slate-600/80 w-1/2 text-center justify-center items-center flex gap-2'
                >
                  <FaGithub size={30} /> Github
                </Link>
                <Link
                  href={item.urlDemo}
                  target='_blank'
                  className='p-3 text-lg transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80 w-1/2 text-center justify-center items-center flex gap-2'
                >
                  <MdEmojiObjects />
                  Link
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderPortfolio;
