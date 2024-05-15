'use client';

import Image from 'next/image';
import { Motion } from '../animation/Motion';

const AvatarPortfolio = () => {
  return (
    <Motion
      position='bottom'
      className='bottom-0 left-0 hidden md:inline-block md:absolute '
    >
      <Image
        src='/avatar-works.png'
        width='300'
        height='300'
        className='w-full h-full '
        alt='Particles '
        priority={true}
      />
    </Motion>
  );
};

export default AvatarPortfolio;
