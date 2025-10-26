/* --REMEMBER THAT THE SERVICES COMPONENT IS NOT HERE AND REMEMBER TO TRY AND MERGE IT WITH WORK LATER OR SOMETHING-- 
--ALSO REMEMBER TO FIX LOGO ISSUES IN DARK MODE VS LIGHT MODE
*/ 

import { assets } from '@/assets/assets'
import Image from 'next/image'
import { useTheme } from '@/app/context/ThemeContext';
import React, { useEffect, useRef, useState } from 'react'
import ThemeToggle from './ThemeToggle'

const Navbar = ({isDark, setIsDark}) => {

    const [isScroll, setIsScroll] = useState(false)

    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translate(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translate(16rem)'
    }

    useEffect(()=> {
        window.addEventListener('scroll', () => {
            if(scrollY > 50.){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    }, []

    )

  return (
    <>
    <div className="fixed top-0 right-0 w-full -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt='Header_bg_color' className='w-full' priority/>
    </div>
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
            ${isScroll ? "bg-white/35 dark:bg-darkTheme/60 dark:shadow-white/20 backdrop-blur-lg shadow-sm" : ""}`}>
            <a href="#top">
                <Image src={isDark ? assets.logo_dark : assets.logo} alt='Logo' className='w-28 
                cursor-pointer mr-14'/>
            </a>

            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3  
            ${isScroll ?"" : "shadow-sm bg-white/35 dark:border dark:border-white/50 dark:bg-transparent"} `}
            >
                <li><a className='font-Ovo' href='#top'>Home</a></li>
                <li><a className='font-Ovo' href='#about'>About me</a></li>
                <li><a className='font-Ovo' href='#services'>My Services</a></li>
                <li><a className='font-Ovo' href='#work'>My Work</a></li>
                <li><a className='font-Ovo' href='#contact'>Contact me</a></li>
            </ul>
            <div className='flex items-center gap-4'>
                <ThemeToggle className='w-4'/>
                
                <a href="#contact" 
                className='hidden lg:flex items-center gap-3 px-10 py-2.5 border
                 border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>
                    Contact <Image src={isDark ? assets.arrow_icon_dark : assets.arrow_icon} alt='Arrow_icon' className='w-3'/></a>

                <button className='block md:hidden ml-3' onClick={openMenu}>
                    <Image src={isDark ? assets.menu_white : assets.menu_black} alt='' className='w-6'/>
                </button>
            </div>
            {/* ----- Mobile Menu ----- */}
            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64
             z-50 h-screen bg-[#E9E4F8] transition duration-500 dark:bg-darkHover dark:text-white'>
                <div className='absolute right-6 top-6' onClick={closeMenu}>
                    <Image src={isDark ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer'></Image>
                </div>
                <li><a className='font-Ovo' onClick={closeMenu} href='#top'>Home</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href='#about'>About me</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href='#services'>My Services</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href='#work'>My Work</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href='#contact'>Contact me</a></li>
            </ul>
        </nav>
      
    </>
  )
}

export default Navbar
