import { services } from '@/constants'
import { styles } from '@/styles'
import { fadeIn, textVariant } from '@/utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { Tilt } from 'react-tilt'
import { SectionWrapper } from '@/hoc'


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="lg:w-[400px] md:w-[350px] sm:w-[300px] w-max-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        onViewportEnter={() => console.log("Text is now visible")}
        className='w-full p-[1px] rounded-[20px] shadow-card bg-blue-300'>
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-blue-950 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-center items-center flex-col'>
          <Image src={icon} alt='title' width={100} height={100} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <div className='text-white'>
      <motion.div 
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        onViewportEnter={() => console.log("Text is now visible")}>
        <p className={'sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'}>Introducation</p>
        <h2 className={'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1,)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        onViewportEnter={() => console.log("Text is now visible")}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente debitis illum quos, enim veniam dolores odit harum repellat eligendi, ab magnam accusantium consectetur unde repellendus vel deserunt mollitia commodi porro.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quam magnam cum exercitationem ea facere voluptate voluptas totam sed! Nihil laudantium inventore voluptatibus consequatur tempore ut amet illum necessitatibus at, laboriosam nulla totam minima sed, quibusdam, ad vero eaque iure minus pariatur debitis culpa exercitationem nobis. Earum cupiditate temporibus nihil?
      </motion.p>

      {/* <div className='w-full bg-gray-200 flex grid-2'> */}
      <div className='my-20 gap-10 grid md:grid-cols-2 grid-cols-1'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index}{...service} />
        ))}
      </div>
      {/* </div> */}
    </div>
  )
}

export default SectionWrapper(About, "about")