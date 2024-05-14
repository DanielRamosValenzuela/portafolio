'use client';

import TransitionPage from '@/app/ui/animation/TransitionPage';
import AvatarEducation from '@/app/ui/education/AvatarEducation';
import CircleImage from '@/app/ui/components/CircleImage';
import SliderEducation from '@/app/ui/education/SliderEducation';
import { useLanguageStore } from '@/app/store/language';
import { educationData, textData } from '@/app/ui/education/data/data';
import {
  educationDataEnglish,
  textDataEnglish,
} from '@/app/ui/education/data/dataEnglish';

const EducationPage = () => {
  const language = useLanguageStore((state) => state.isEnglish);
  const getTextLanguage = (isEnglish: boolean) => {
    let data = {
      educationData: educationData,
      textData: textData,
    };

    if (isEnglish === false) {
      data = {
        educationData: educationData,
        textData: textData,
      };
      return data;
    }
    if (isEnglish === true) {
      data = {
        educationData: educationDataEnglish,
        textData: textDataEnglish,
      };
      return data;
    }
    return data;
  };
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarEducation />
      <div className='grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2'>
        <div className='max-w-[450px] p-10 mt-10'>
          <h1 className='text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5'>
            {getTextLanguage(language).textData.textTitleOne}{' '}
            <span className='font-bold text-secondary'>
              {' '}
              {getTextLanguage(language).textData.textTitleTwo}
            </span>
          </h1>
          <p className='mb-3 text-xl text-gray-300'>
            {getTextLanguage(language).textData.textDescription}
          </p>
          <a
            href='/contact'
            className='px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65'
          >
            {getTextLanguage(language).textData.textContact}
          </a>
        </div>
        <div>
          <SliderEducation
            educationData={getTextLanguage(language).educationData}
          />
        </div>
      </div>
    </>
  );
};

export default EducationPage;
