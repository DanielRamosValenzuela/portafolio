import Image from 'next/image';
import { Motion } from '../animation/Motion';

const AvatarEducation = () => {
  return (
    <Motion
      position='right'
      className='bottom-0 left-0 hidden md:inline-block md:absolute'
    >
      <Image
        src='/education.png'
        width='400'
        height='400'
        className='w-[350px] h-full '
        alt='Particles'
        priority={true}
      />
    </Motion>
  );
};

export default AvatarEducation;
