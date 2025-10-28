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
         
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.5 }}
      className="grid grid-cols-1 [@media(min-width:2000px)]:grid-cols-2 gap-8 py-8 px-2 sm:px-0">
      {/* First PDF */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-2xl max-h-[100vh]">
          <div className="bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center px-6 py-4 border-b backdrop-blur border-white/10 dark:bg-none">
          <p className="text-slate-600 text-center dark:text-white/70 text-2xl font-medium">Master's Thesis</p>
          </div>
          <div className="p-2 bg-slate-950/40 overflow-y-auto overflow-x-visible max-h-[calc(100vh-88px)]">
          <PdfViewer
              fileUrl="/Projects/docs/Abridged-Thesis2.pdf"
              className="w-full"
          />
          </div>
      </div>

      {/* Second PDF */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-2xl max-h-[100vh]">
          <div className='bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center px-6 py-4 border-b backdrop-blur border-white/10 dark:bg-none'>
          <p className="text-slate-600 dark:text-white/70 text-center text-2xl font-medium">Project on Fluid-Rock Thermodynamics</p>
          </div>
          <div className="p-2 bg-slate-950/40 overflow-y-auto overflow-x-visible max-h-[calc(100vh-88px)]">
          <PdfViewer
              fileUrl="/Projects/docs/Abridged-project.pdf"
              className="w-full"
          />
          </div>
      </div>

      <div>
        <p className="text-slate-600  dark:text-white/70 text-center text-2xl font-medium">3D Structural Geological Model Using <a href="https://www.gempy.org/" target='_blank' rel="noopener noreferrer" className='text-green-700 underline hover:text-green-700/60'>Gempy</a></p>
        <iframe src="/Projects/Cross_Sec.html" frameborder="0" className='w-full p-2 bg-slate-950/40 min-h-[100vh]'></iframe>
      </div>
      </motion.div>
    </motion.div>
  )
}

export default Work2
