import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
import PdfViewer from '@/app/components/PdfViewer'

const Work2 = (isDark) => {
  return (
    <motion.div id='work' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    >
      <motion.h4 className='font-ovo text-center mb-2 text-lg'
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.3}}      
      >What I have done</motion.h4>
      
      <motion.h2 className='text-center text-5xl font-ovo'
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.5}}        
      >My Portfolio</motion.h2>
      
      <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo:'
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.5, delay: 0.7}}              
      >
        I am always trying to learn something new and increase my knowledge! Explore a collection of some of my educational and personal projects.
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
                    <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-200 transition'>
                        <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                    </div>
                </div>
            </motion.div>
        ))}
      </motion.div>

      <motion.a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 
      border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lila duration-500]
      dark:text-white dark:border-white dark:hover:bg-darkHover'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1.1, duration: 0.5 }}
      >
        Show more <Image src={isDark ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4'/></motion.a>
      
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1.3, duration: 0.5 }}
      className="grid grid-cols-1 [@media(min-width:1685px)]:grid-cols-2 gap-8 py-8">
      {/* First PDF */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-2xl max-h-[100vh]">
          <div className="bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center px-6 py-4 border-b backdrop-blur border-white/10 dark:bg-none">
          <p className="text-slate-600 text-center dark:text-white/70 text-2xl font-medium">Master's Thesis</p>
          </div>
          <div className="p-8 bg-slate-950/40 overflow-y-auto max-h-[calc(100vh-88px-53px)]">
          <PdfViewer
              fileUrl="/docs/Abridged-Thesis.pdf"
              className="w-full"
          />
          </div>
      </div>

      {/* Second PDF */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-2xl max-h-[100vh]">
          <div className='bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center px-6 py-4 border-b backdrop-blur border-white/10 dark:bg-none'>
          <p className="text-slate-600  dark:text-white/70 text-center text-2xl font-medium">Project on Fluid-Rock Thermodynamics</p>
          </div>
          <div className="p-8 bg-slate-950/40 overflow-y-auto max-h-[calc(100vh-88px-53px)]">
          <PdfViewer
              fileUrl="/docs/project.pdf"
              className="w-full"
          />
          </div>
      </div>
      </motion.div>
    </motion.div>
  )
}

export default Work2
