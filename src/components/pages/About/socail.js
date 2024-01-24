import Image from 'next/image';
import { motion } from 'framer-motion';
import { socailDataIcon } from '@constants/mocks/about';
import { containerVariants, childVariants } from '@constants/mocks/motion';

const App = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      viewport={{ once: true }}
      whileInView='show'
      className=' relative lg:h-[50vh] md:h-[40vh] h-[30vh]  '
    >
      {socailDataIcon.map((load) => (
        <motion.div variants={childVariants} key={load.id}>
          <motion.div
            initial={{ rotate: 0, y: 0, x: 0 }}
            animate={{ rotate: [-10, 10, -10, 10, 0], y: [0, 10, 8, 0], x: [0, 10, 8, 0] }}
            transition={{ yoyo: Infinity, duration: 5 }}
            className={`xl:w-[130px] md:w-[100px] w-[50px] ${load.class}`}
          >
            <Image
              src={load.image.url}
              alt={load.image.alt}
              layout='responsive'
              width={139}
              height={139}
            />
            <p>{load.animate}</p>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default App;
