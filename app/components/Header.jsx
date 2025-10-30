import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Header = () => {
  return (
    <div className='w-full max-w-3xl text-center mx-auto flex flex-col items-center justify-center gap-4 pt-24 sm:pt-20 min-h-[calc(100vh+5rem)] sm:min-h-screen'>
      <motion.div
      initial={{scale: 0}}
      whileInView={{scale: 1}}
      transition={{duration: 0.8, type: "spring", stiffness: 100}}
      >
        <Image src={assets.profile_img} alt='Profile_img' className='h-40 rounded-full object-cover object-[35%_center] w-40'/>
      </motion.div>
      
      <motion.h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.6, delay: 0.3}}
      >
        Hi! I'm Tobi <Image src={assets.hand_icon} alt='' className='w-6'/>
      </motion.h3>

      <motion.h2 
      initial={{y: -30, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.8, delay: 0.5}}
      className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
        Exploring Earth’s secrets — with qualifications from Germany and Nigeria.
      </motion.h2>

      <motion.p
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.6, delay: 0.7}}
      className='max-w-2xl mx-auto font-ovo'>
        Combining geology and data science to extract insights from the Earth — one dataset at a time.
      </motion.p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
          <motion.a 
          initial={{y: 30, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.6, delay: 1}}
 
          href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>
            contact me <Image src={assets.right_arrow_white} alt='' className='w-4'/>
            </motion.a>

          <motion.a 
          initial={{y: 30, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.6, delay: 1.2}}
 
           href="/Projects/Oluwatobiloba_Odukoya_CV.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
          my cv <Image src={assets.download_icon} alt='' className='w-4'/>
          </motion.a>
      </div>
    </div>
  )
}

export default Header
