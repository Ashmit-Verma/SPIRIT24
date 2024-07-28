import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  const containerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const circleVariants = {
    start: {
      y: '0%',
    },
    end: {
      y: '100%',
    },
  };

  const circleTransition = {
    duration: 0.5,
    yoyo: Infinity,
    ease: 'easeInOut',
  };

  return (
    <motion.div
      className="loading-spinner"
      variants={containerVariants}
      initial="start"
      animate="end"
    >
      {[...Array(3)].map((_, i) => (
        <motion.span
          key={i}
          className="circle"
          variants={circleVariants}
          transition={circleTransition}
        />
      ))}
    </motion.div>
  );
};

export default LoadingSpinner;