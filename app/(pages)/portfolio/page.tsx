'use client';

import { useLanguageStore } from '@/app/store/language';
import { CoverSlowParticles } from '@/app/ui/animation/CoverSlowParticles';
import TransitionPage from '@/app/ui/animation/TransitionPage';
import CircleImage from '@/app/ui/components/CircleImage';
import Container from '@/app/ui/components/Container';
import AvatarPortfolio from '@/app/ui/portfolio/AvatarPortfolio';
import { dataText, portfolioData } from '@/app/ui/portfolio/data/data';
import { dataTextEnglish, portfolioDataEnglish } from '@/app/ui/portfolio/data/dataEnglish';
import ModalPortfolio from '@/app/ui/portfolio/ModalPortfolio';
import SliderPortfolio from '@/app/ui/portfolio/SliderPortfolio';
import { useState } from 'react';

const PortfolioPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    id: 1,
    title: '',
    image: '',
    description:'',
    urlGithub: '',
    urlDemo: '',
  });

  const language = useLanguageStore((state) => state.isEnglish);
  const getTextLanguage = (isEnglish: boolean) => {
    let data = {
      portfolioData: portfolioData,
      dataText: dataText,
    };

    if (isEnglish === false) {
      data = {
        portfolioData: portfolioData,
        dataText: dataText,
      };
      return data;
    }

    if (isEnglish === true) {
      data = {
        portfolioData: portfolioDataEnglish,
        dataText: dataTextEnglish,
      };

      return data;
    }

    return data;
  };

  const handleModalOn = () => {
    setShowModal(true);
  };

  return (
      <Container>
        <TransitionPage />
        <AvatarPortfolio />
        <CircleImage />
        <div className='flex flex-col justify-center h-full'>
          <h1 className='text-4xl leading-tight text-center md:text-4xl md:mb-5 '>
            {getTextLanguage(language).dataText.titleOne}{' '}
            <span className='font-bold text-secondary'>{getTextLanguage(language).dataText.titleTwo}</span>
          </h1>
          <span className='mb-5 mt-5 text-justify text-xl'>
          {getTextLanguage(language).dataText.textDescription}
          </span>
          <div className='md:flex justify-center items-center'>
            <SliderPortfolio
              portfolioData={getTextLanguage(language).portfolioData}
              handleModal={handleModalOn}
              setModalInfo={setModalInfo}
            />
          </div>
        </div>
        <CoverSlowParticles />
        <ModalPortfolio
          isVisible={showModal}
          modalInfo={modalInfo}
          onClose={() => setShowModal(false)}
        />
      </Container>
  );
};

export default PortfolioPage;
