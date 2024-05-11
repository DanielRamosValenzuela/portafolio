'use client';

import Image from 'next/image';

import { Motion } from '../animation/Motion';

export function Avatar() {
  return (
    <Motion
      position='bottom'
      className='bottom-0 right-0 hidden md:inline-block md:absolute '
    >
      <Image
        src='/avatar-1.png'
        width='400'
        height='400'
        className='w-full h-full'
        priority={true}
        alt='Particles '
      />
    </Motion>
  );
}
