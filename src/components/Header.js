"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import LoginSvg from './svg/LoginSvg'
import PostDataSvg from './svg/PostDataSvg'

const USER_DEFAULT_IMAGE = 'https://jeffjbutler.com//wp-content/uploads/2018/01/default-user.png'

function Header() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

  return (
    <div className={`flex flex-col md:flex-row justify-between p-5 bg-white/70 fixed w-full z-10 transition-colors duration-300 border-b-4 ${isScrolled ? 'bg-white/70 border-brown-700/70' : 'bg-white border-brown-700'}`}>
      <img src='./images/logo.png' alt='Food Logo' className=' w-36 h-auto object-contain' />
      <div className='flex flex-col md:flex-row items-center md:align-middle gap-2 mt-6 md:mt-0'>
        
        <button
            type="button"
            className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:hover:ring-[FF9119]/40 me-2 md:mb-2 order-2 md:order-1"
        >
        
            <PostDataSvg />
            Post Data
        </button>
        <button className=' text-gray-900 bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 md:mb-2 order-3 md:order-2'>
            <LoginSvg />
            Login
        </button>

        <Image
            src={USER_DEFAULT_IMAGE}
            width={30}
            height={30}
            alt='User default image'
            className='rounded-full object-contain order-1 md:order-3 md:mb-2'/>
      </div>
    </div>
  )
}

export default Header
