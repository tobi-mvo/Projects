/* --REMEMBER THAT THIS COMPONENT IS NOT IN THE NAVBAR AND THINK OF WHAT TO DO ABOUT IT LATER-- */
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Services = () => {
  return (
    <motion.div id='services' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
      <motion.h4 className='font-ovo text-center mb-2 text-lg'
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -20 }}
      transition={{ delay: 0.3, duration: 0.5 }}      
      >What I Offer</motion.h4>
      <motion.h2 className='text-center text-5xl font-ovo'
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -20 }}
      transition={{ delay: 0.5, duration: 0.5 }}       
      >My Services</motion.h2>

      <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo:'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}    
      >
        I am a geologist exploring how computational methods can solve geological challenges. 
        My work focuses on using computational tools to analyze data and generate models that deepen our understanding of geological processes 
        and enable better problem-solving.
      </motion.p>
      <motion.div className='grid grid-cols-auto my-10 gap-5 dark:text-black'
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.6, delay: 0.9}}              

      >
        {workData.map((project, index) =>(
            <motion.div key={index} 
            style={{backgroundImage: `url(${project.bgImage})`}} 
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
            whileHover={{scale: 1.05}}
            transition={{duration: 0.3}}       
            >
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 
                py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                    <div className=''>
                        <h2 className='font-semibold'>{project.title}</h2>
                        <p className='text-sm text-gray-700'>{project.description}</p>
                    </div>
                    <div className='border rounded-full border-black w-9 aspect-square flex items-center 
                    justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-200 transition'>
                        <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                    </div>
                </div>
            </motion.div>
        ))}
      </motion.div>

    </motion.div>
  )
}

export default Services
