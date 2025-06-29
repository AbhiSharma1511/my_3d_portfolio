import React, { useState } from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '@/hoc';
import { technologies } from '@/constants';
import { motion } from 'framer-motion';
import { textVariant } from '@/utils/motion';
import { styles } from '@/styles';


const Tech = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-gray-400`}>
          My Skills
        </p>
        <h2 className={styles.sectionHeadText}>
          TECHNOLOGIES.
        </h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
        {technologies.map((technology, index) => (
          <motion.div
            className='w-28 h-28 relative flex flex-col items-center'
            key={index}
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 * index }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            {/* Hover label (above the ball) */}
            {hoveredIndex === index && (
              <div className='absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white text-black text-lg font-semibold px-3 py-1 rounded-xl shadow-md z-20 w-max'>
                {technology.name}
              </div>
            )}

            {/* Ball */}
            <BallCanvas icon={technology.icon.src} />
          </motion.div>
        ))}
      </div>
    </div>

  );
};

export default SectionWrapper(Tech, '');
