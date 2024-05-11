'use client';

import { fadeIn } from '@/app/utils/motionTransition';
import { motion } from 'framer-motion';

export type MotionProps = {
  children: React.ReactNode;
  className?: string;
  position: 'right' | 'bottom';
};

export function Motion(props: MotionProps) {
  const { children, className, position } = props;

  return (
    <motion.div
      variants={fadeIn(position)}
      initial='hidden'
      animate='visible'
      exit='hidden'
      className={className}
    >
      {children}
    </motion.div>
  );
}
