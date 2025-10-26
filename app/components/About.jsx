import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const About = ({isDark}) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    >
      <motion.h4 className='font-ovo text-center mb-2 text-lg'
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.3}}
      >Introduction</motion.h4>
      <motion.h2 className='text-center text-5xl font-ovo'
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.5}}
      >About me</motion.h2>
        <motion.div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}        
        >
            <motion.div className='w-64 sm:w-80 rounded-3xl max-w-none'
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.6}}
            ><Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/></motion.div>

            <motion.div className='flex-1'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.8}}            
            >
                <p className='mb-10 max-w-2xl font-ovo'>My name is Oluwatobiloba Odukoya (but you can call me Tobi), I come from Nigeria and currently live in Germany. 
        I am a curious being with a keen eye for detail and a passion for learning. Known for being trustworthy, numerate, meticulous, and a reliable team player, I bring enthusiasm and adaptability to every project. I have gained hands-on experience through internships in the construction and aviation industries, and I am eager to grow my portfolio by taking on my next challenging role.</p>
                <motion.ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.8, delay: 1}}                
                >
                   {infoList.map(({icon, iconDark, title, description}, index) =>(
                    <motion.li className='border-[0.5px] border-gray-500 rounded-xl p-6 hover:bg-lila hover:-translate-y-1 duration-500 hover:shadow-brutal dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                     key={index}
                     whileHover={{scale: 1.05}}
                     >  
                        <Image src={isDark ? iconDark : icon} alt={title} className='w-7 mt-3'/>
                        <h3 className='my-4 font-semibold text-gray-800 dark:text-white'>{title}</h3>
                        <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                    </motion.li>
                   ))}
                </motion.ul>
                
                <motion.h4 className='my-6 text-gray-700 font-ovo dark:text-white/80'
                initial={{opacity: 0, y: 20}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.5, delay: 1.3}}                
                
                > Tools I use</motion.h4>
                <motion.ul 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.6, delay: 1.5}}                                
                className='flex items-center gap-3 sm:gap-5'>
                  {toolsData.map((tool,index) => (
                  <motion.li className='flex items-center justify-center w-12 sm:w-14 backdrop-white aspect-square 
                  border border-gray-500 rounded-lg hover:-translate-y-1 duration-500
                  dark:border-white/20 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:shadow-md dark:hover:shadow-white'
                  key={index}
                  whileHover={{scale: 1.1}}
                  >
                      <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                  </motion.li>
                  ))}
                </motion.ul>
            </motion.div>
        </motion.div>
    </motion.div>
  
    
  )
}

export default About
