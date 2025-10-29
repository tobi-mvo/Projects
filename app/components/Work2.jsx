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
        className="grid grid-cols-1 [@media(min-width:2000px)]:grid-cols-2 gap-8 py-8 px-2 sm:px-0"
      >
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
            <p className="text-slate-600 dark:text-white/70 text-center text-2xl font-medium">Project on Fluid-Rock Thermodynamics </p>
          </div>
          <div className="p-2 bg-slate-950/40 overflow-y-auto overflow-x-visible max-h-[calc(100vh-88px)]">
            <PdfViewer
              fileUrl="/Projects/docs/Abridged-project.pdf"
              className="w-full"
            />
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-2xl max-h-[100vh]">
          <div className='bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center px-6 py-4 border-b backdrop-blur border-white/10 dark:bg-none'>
            <p className="text-slate-600 dark:text-white/70 text-center text-2xl font-medium">CAD Model: 2DModel for Apartment Space Planning</p>
          </div>
          <div className="p-2 bg-slate-950/40 flex items-center justify-center h-[calc(100vh-120px)]">
            <Image
              src="/Projects/Aletheas-place.png"
              alt="CAD"
              width={360}
              height={600}
              className="w-auto h-full object-contain"
              priority
            />
          </div>
        </div>

{/*     <div className='w-full aspect-auto [@media(min-width:460px)]:aspect-video'>
          <p className="text-slate-600 dark:text-white/70 text-center text-2xl font-medium">
            3D Structural Geological Model Using <a href="https://www.gempy.org/" target='_blank' rel="noopener noreferrer" 
              className='text-blue-500 underline hover:text-blue-400/60 hover:translate-y-1'>Gempy</a>
          </p>
          <iframe 
            src="/Cross_Sec.html" 
            allowFullScreen 
            className='w-full p-2 bg-slate-950/40 h-[100vh+32px] [@media(min-width:460px)]:h-full rounded-xl shadow-2xl backdrop-blur-sm border border-white/10'
          />
        </div> */}

        <div className='w-full grid grid-cols-1 gap-3'>
          <h2 className='text-slate-600 dark:text-white/70 text-center text-2xl font-medium mb-4'>
            3D Structural Geological Model Using <a href="https://www.gempy.org/" target='_blank' rel="noopener noreferrer" 
                className='text-blue-500 underline hover:text-blue-400/60 hover:translate-y-1'>Gempy</a>
          </h2>
          <div className='w-full grid grid-cols-1 [@media(min-width:1024px)]:grid-cols-2 gap-6'>
            {/* 3D Model */}
            <div className='w-full aspect-auto [@media(min-width:460px)]:aspect-video'>
              <p className="text-slate-700 dark:text-white/70 text-center text-lg font-medium mb-2">
                3D Model (Interactive) 
              </p>
              <iframe 
                src="/Projects/Cross_Sec.html" 
                allowFullScreen 
                aria-label='Drag to interact with 3D model'
                className='w-full p-2 bg-white/5 h-[100vh+32px] [@media(min-width:460px)]:h-full rounded-xl shadow-2xl backdrop-blur-sm border border-white/10'
              />
            </div>

            {/* Profile Image */}
            <div className='w-full flex flex-col items-center justify-center'>
              <p className="text-slate-700 dark:text-white/70 text-center text-lg font-medium mb-2">
                Cross-Section Profile
              </p>
              <div className='w-full h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-2xl p-4 flex items-center justify-center overflow-y-auto'>
                <Image
                  src="/Projects/output.png"
                  alt="Cross-Section Profile"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
          </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Work2
