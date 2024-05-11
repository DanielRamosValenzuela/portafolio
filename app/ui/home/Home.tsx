'use client';

import { useLanguageStore } from '@/app/store/language';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { dataText, dataTypeAnimation } from './data/data';
import { dataTextEnglish, dataTypeAnimationEnglish } from './data/dataEnglish';

const Home = () => {
  const language = useLanguageStore((state) => state.isEnglish);
  const getTextLanguage = (isEnglish: boolean) => {
    let data = {
      dataText: dataText,
      dataTypeAnimation: dataTypeAnimation,
    };

    if (isEnglish === false) {
      data = {
        dataText: dataText,
        dataTypeAnimation: dataTypeAnimation,
      };
      return data;
    }

    if (isEnglish === true) {
      data = {
        dataText: dataTextEnglish,
        dataTypeAnimation: dataTypeAnimationEnglish,
      };

      return data;
    }

    return data;
  };

  return (
    <div className='z-20 w-full bg-darkBg/60'>
      <div className='z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2'>
        <Image
          src='/home-4.png'
          priority
          width='800'
          height='800'
          alt='Avatar'
        />
        <div className='flex flex-col justify-center max-w-md'>
          <h1 className='mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10'>
            {getTextLanguage(language).dataText.textOne} <br />
            {language && (
              <TypeAnimation
                sequence={[
                  getTextLanguage(language).dataTypeAnimation.sequenceOne,
                  1000,
                  getTextLanguage(language).dataTypeAnimation.sequenceTwo,
                  1000,
                  getTextLanguage(language).dataTypeAnimation.sequenceThree,
                  1000,
                  getTextLanguage(language).dataTypeAnimation.sequenceFour,
                  1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
                className='font-bold text-secondary'
              />
            )}
            {!language && (
              <TypeAnimation
                sequence={[
                  getTextLanguage(language).dataTypeAnimation.sequenceOne,
                  1000,
                  getTextLanguage(language).dataTypeAnimation.sequenceTwo,
                  1000,
                  getTextLanguage(language).dataTypeAnimation.sequenceThree,
                  1000,
                  getTextLanguage(language).dataTypeAnimation.sequenceFour,
                  1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
                className='font-bold text-secondary'
              />
            )}
          </h1>

          <p className='mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8'>
            {getTextLanguage(language).dataText.textTwo}
          </p>

          <div className='flex items-center justify-center gap-3 md:justify-start md:gap-10'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='./CV_DR.pdf'
              className='px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50'
            >
              {getTextLanguage(language).dataText.downloadCV}
            </a>
            <a
              href='/contact'
              className='px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary'
            >
              {getTextLanguage(language).dataText.contactMe}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
