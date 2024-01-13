export const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delay: 0.2,
      type: 'spring', // Adjust this value to control the stagger delay
    },
  },
};

export const childVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
