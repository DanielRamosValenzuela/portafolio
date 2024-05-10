'use client';

import TransitionPage from '@/app/ui/animation/TransitionPage';
import { Avatar } from '@/app/ui/components/Avatar';
import Container from '@/app/ui/components/Container';
import CounterServices from '@/app/ui/components/CounterServices';
import TimeLine from '@/app/ui/components/TimeLine';

const AboutMePage = () => {
  return (
    <>
      <TransitionPage />
      <Container>
        <Avatar />
        <h1 className='text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10'>
          Toda mi{' '}
          <span className='font-bold text-secondary'>
            trayectoria profesional
          </span>
        </h1>

        <CounterServices />

        <TimeLine />
      </Container>
    </>
  );
};

export default AboutMePage;
