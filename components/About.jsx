import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.section 
      id='about' 
      className='w-full py-10 scroll-mt-20 flex justify-center'
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
    >
      <div className='max-w-[1400px] w-[88%]'>
        <motion.h4 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-Poppins'>Introduction</motion.h4>
        <motion.h2 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center text-5xl font-Poppins'>About Me</motion.h2>

        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
          <motion.div 
          initial={{opacity: 0, scale: 0.9}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 0.6}}
          className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.profile_picture} alt='user' className='w-full rounded-3xl' />
          </motion.div>
          <motion.div 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay: 0.8}}
          className='flex-1'>
            <p className='mb-10 max-w-2xl font-Poppins'>From building an AI assistant that automates daily tasks to shipping production features at startups, I'm a Full Stack Developer who thrives on creating technology that makes a real difference. Armed with a BBA in CIS from Baruch College and hands-on experience across the entire stack, I bring ideas to life through clean, scalable code.</p> 

            <motion.ul 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8, delay: 1}}
            className='grid -grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
              {infoList.map(({icon, iconDark, title, description}, index)=>(
                <motion.li 
                whileHover={{scale:1.05}}
                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' key={index}>
                  <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                  <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                  <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About