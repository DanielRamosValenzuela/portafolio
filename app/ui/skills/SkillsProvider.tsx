'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  skillName: string;
}

const SkillDataProvider = ({ src, width, height, index, skillName }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      variants={imageVariants}
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt='skill image'
        priority={true}
        className='imageContainer'
      />
      <span className='text-[20px] text-white font-medium mt-[10px] text-center mb-[15px]'>
        {skillName}
      </span>
    </motion.div>
  );
};

export default SkillDataProvider;
