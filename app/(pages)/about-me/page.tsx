'use client';

import TransitionPage from '@/app/ui/animation/TransitionPage';
import { Avatar } from '@/app/ui/components/Avatar';
import Container from '@/app/ui/components/Container';
import CounterServices from '@/app/ui/about-me/CounterServices';
import TimeLine from '@/app/ui/about-me/TimeLine';
import { useLanguageStore } from '@/app/store/language';
import { dataAboutPageTimeLineEnglish, dataCounterEnglish, dataTitlesEnglish } from '@/app/ui/about-me/data/dataEnglish';
import { dataAboutPageTimeLine, dataCounter, dataTitles } from '@/app/ui/about-me/data/data';

const AboutMePage = () => {
  const language = useLanguageStore((state) => state.isEnglish);
  const getTextLanguage = (isEnglish: boolean) => {
    let data = {
      dataTitles: dataTitles,
      dataAboutPageTimeLine: dataAboutPageTimeLine,
      dataCounter: dataCounter,
    };

    if (isEnglish === false) {
      data = {
        dataTitles: dataTitles,
        dataAboutPageTimeLine: dataAboutPageTimeLine,
        dataCounter: dataCounter,
      };
      return data;
    }

    if (isEnglish === true) {
      data = {
        dataTitles: dataTitlesEnglish,
        dataAboutPageTimeLine: dataAboutPageTimeLineEnglish,
        dataCounter: dataCounterEnglish,
      };

      return data;
    }

    return data;
  };

  return (
    <>
      <TransitionPage />
      <Container>
        <Avatar />
        <h1 className='text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10'>
            {getTextLanguage(language).dataTitles.title}
          <span className='font-bold text-secondary'>
            {getTextLanguage(language).dataTitles.subtitle}
          </span>
        </h1>

        <CounterServices dataCounter={getTextLanguage(language).dataCounter} />

        <TimeLine dataAboutPageTimeLine={getTextLanguage(language).dataAboutPageTimeLine}/>
      </Container>
    </>
  );
};

export default AboutMePage;
