import React from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { IPortfolioData } from './data/interface';
import { MdEmojiObjects } from 'react-icons/md';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import { FiFigma } from 'react-icons/fi';

interface ModalPortfolioProps {
  isVisible: boolean | null;
  modalInfo: IPortfolioData;
  onClose: () => void;
}

const ModalPortfolio: React.FC<ModalPortfolioProps> = ({
  isVisible,
  onClose,
  modalInfo,
}) => {
  if (!isVisible) return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === 'wrapperModal') onClose();
  };

  return (
    <div
      className='fixed inset-0 bg-inherit bg-opacity-0 backdrop-blur-sm flex justify-center items-center z-50'
      id='wrapperModal'
      onClick={handleClose}
    >
      <div className='lg:w-[900px] flex flex-col'>
        <button
          className='text-white text-xl place-self-end'
          onClick={() => onClose()}
        >
          <IoCloseCircleOutline color='#f5741c' size={30} />
        </button>
        <div className='bg-darkBg p-2 rounded'>
          <div className='p-6'>
            <h3 className='text-3xl font-semibold text-secondary mb-5'>
              {modalInfo.title}
            </h3>
            <Image
              src={modalInfo.image}
              alt='Image'
              className='rounded-2xl imageContainerPortfolio'
              priority={true}
              width={1000}
              height={1000}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
            <p className='mb-5 mt-5 text-white text-xl'>
              {modalInfo.description}
            </p>
            <div className='flex justify-between p-2 gap-2'>
              <Link
                href={modalInfo.urlGithub}
                target='_blank'
                className='p-3 text-lg transition duration-150 rounded-lg bg-slate-600 hover:bg-slate-600/80 w-1/2 text-center justify-center items-center flex gap-2'
              >
                <FaGithub size={30} /> Github
              </Link>
              <Link
                href={modalInfo.urlDemo}
                target='_blank'
                className='p-3 text-lg transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80 w-1/2 text-center justify-center items-center flex gap-2'
              >
                <MdEmojiObjects />
                Link
              </Link>
              {modalInfo.subLink && (
                <Link
                  href={modalInfo.subLink}
                  target='_blank'
                  className='p-3 text-lg transition duration-150 rounded-lg bg-cyan-500 hover:bg-cyan-500/80 w-1/2 text-center justify-center items-center flex gap-2'
                >
                  <FiFigma />
                  Figma
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPortfolio;
