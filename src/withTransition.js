import { motion } from 'framer-motion';

const withTransition = ({ children }) => {
  return (
    <motion.div
      className='page-transition'
      initial={{ opacity: 0, translateY: 100 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: 100 }}
      transition={{ duration: 0.6 }}>
      <motion.div
        className='page-transition-shadow'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 1 }}></motion.div>
      {children}
    </motion.div>
  );
};

export default withTransition;
