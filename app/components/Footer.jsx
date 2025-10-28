import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDark}) => {
  return (
    <div className='mt-20 w-full'>
        <div className='text-center'>
             {/*
            <Image src={assets.logo} alt='' className='w-28 mx-auto mb-2'/> 
            */}

            <div className='w-max flex items-center gap- mx-auto'>
                <Image src={isDark ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
                <a href="mailto:todukoya50@gmail.com"
                className="hover:text-blue-600 hover:underline"
                >               
                    todukoya50@gmail.com
                </a>
            </div>
        </div>

        <div className='flex justify-end sm:flex border-t border-gray-400 mx-[10%] mt-12 py-6'>
            
            <ul className='flex gap-10 items-center mt-4 sm:mt-0'>
                <li>
                    <a target='_blank' href="https://www.linkedin.com/in/oluwatobiloba-odukoya-932873187" rel="noopener noreferrer" className='flex gap-0.5'>
                    Linked
                    <Image src={assets.linkedin} alt='' className='w-4 rounded-md dark:text-white'/>
                    </a>
                </li>
            </ul>
        
        </div>
    </div>
  )
}

export default Footer
