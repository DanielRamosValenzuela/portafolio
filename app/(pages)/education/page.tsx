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
import Container from '@/app/ui/components/Container';

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
    <Container>
      <TransitionPage />
      <CircleImage />
      <AvatarEducation />
      <div className='flex flex-col justify-center items-center h-full'>
        <h1 className='text-4xl leading-tight text-center md:text-4xl md:mb-5'>
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
          className='px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65 m-5 text-center w-7/12 text-xl'
        >
          {getTextLanguage(language).textData.textContact}
        </a>
      </div>
      <div>
        <SliderEducation
          educationData={getTextLanguage(language).educationData}
        />
      </div>
    </Container>
  );
};

export default EducationPage;
