import { Variants } from 'framer-motion';

// Animations
export const fadeIn = (direction = 'up' || 'down') => {
  return {
    initial: {
      y: direction === 'up' ? 40 : -60,
      opacity: 0,
    },

    animate: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 0.4,
        ease: 'easeIn',
      },
    },
  };
};

export const fadeUp = (direction = 'up' || 'down') => {
  return {
    initial: {
      y: direction === 'up' ? 40 : -60,
      opacity: 0,
    },

    animate: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 1.5,
        ease: 'easeIn',
      },
    },
  };
};

export const fade = (direction = 'up' || 'down') => {
  return {
    initial: {
      y: direction === 'up' ? 40 : -60,
      opacity: 0,
    },

    animate: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 2,
        ease: 'easeIn',
      },
    },
  };
};
