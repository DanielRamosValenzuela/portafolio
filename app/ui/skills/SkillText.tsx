'use client';

import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromTop } from '@/utils/motionTransition';
import { SparklesIcon } from '@heroicons/react/24/solid';
import { useLanguageStore } from '@/app/store/language';
import { textData } from './data/data';
import { textDataEnglish } from './data/dataEnglish';

const SkillText = () => {
  const language = useLanguageStore((state) => state.isEnglish);
  const getTextLanguage = (isEnglish: boolean) => {
    let data = {
      textData: textData,
    };

    if (isEnglish === false) {
      data = {
        textData: textData,
      };
      return data;
    }

    if (isEnglish === true) {
      data = {
        textData: textDataEnglish,
      };

      return data;
    }

    return data;
  };

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center mt-10'>
      <motion.div
        variants={slideInFromTop}
        className='skill-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
      >
        <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
        <h1 className='skill-text text-[20px]'>
          {getTextLanguage(language).textData.textTitle}
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
      >
        {getTextLanguage(language).textData.textSubtitle}
      </motion.div>
    </div>
  );
};

export default SkillText;
