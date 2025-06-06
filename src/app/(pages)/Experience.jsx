import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '@/styles'
import { experiences } from '@/constants'
import { SectionWrapper } from '@/hoc'
import { textVariant } from '@/utils/motion'

const ExperienceCard = ({ experience }) => {

  const [elementClicked, setElementClicked] = useState(false)
  
  return (
    <VerticalTimelineElement contentStyle={{ background: '#1d1836', color: '#fff' }}
      date={experience.date}
      contentArrowStyle={{ borderRight: '7px solid #232631'}}
      iconStyle={{ background: experience.iconBg }}
      onTimelineElementClick={
        () => {
          setElementClicked(!elementClicked)
        }
      }
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain' />
        </div>
      }>
      <div className='cursor-pointer hover:scale-105 transition-all duration-300'>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-gray-300 text-[16px] font-semibold' style={{ margin: 0 }}>{experience.company_name}</p>
      </div>
      {elementClicked && <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li key={index} className='text-white-100 text-[14px] pl-1 tracking-wider'>{point}</li>
        ))}
      </ul>}
    </VerticalTimelineElement>)
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`&{styles.sectionSubText} text-white`}>Whta I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')