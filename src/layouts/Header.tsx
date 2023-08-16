'use client'

import Link from 'next/link'
import React from 'react'
import {BiSolidUserCircle} from "react-icons/bi"
import { useSession, signIn, signOut } from "next-auth/react"


const Header = () => {


//     const { data: session } = useSession()

 

// function handelerGoogleSignIn(){
//     signIn('google', {callbackUrl:'http://localhost:3000'})
//   }



  return (
    <>
        <div>
            <nav className='md:flex items-center justify-between'>
                <menu>
                    <ul className='md:flex items-center'>
                        <li className='mb-3 md:mb-0' ><Link className='p-[8px] text-[14px] pt-[10px] mr-1 duration-100  hover:bg-indigo-100 border border-white hover:border-indigo-800 rounded' href="/">HOME</Link></li>
                        <li  className='mb-3 md:mb-0' ><Link className='p-[8px] text-[14px] pt-[10px] mr-1 duration-100  hover:bg-indigo-100 border border-white hover:border-indigo-800 rounded' href="#about">ABOUT ME</Link></li>
                        <li  className='mb-3 md:mb-0' ><Link className='p-[8px] text-[14px] pt-[10px] mr-1  duration-100  hover:bg-indigo-100 border border-white hover:border-indigo-800 rounded' href="#challenges">CHALLENGES</Link></li>
                        <li  className='mb-3 md:mb-0' ><Link className='p-[8px] text-[14px] pt-[10px] mr-1  duration-100  hover:bg-indigo-100 border border-white hover:border-indigo-800 rounded' href="#priceplan">PLANS & PRICING</Link></li>
                        <li  className='mb-3 md:mb-0' ><Link className='p-[8px] text-[14px] pt-[10px] mr-1  duration-100  hover:bg-indigo-100 border border-white hover:border-indigo-800 rounded' href="#faqs">FAQS</Link></li>
                        <li  className=' mb-3 md:mb-0' ><Link className='p-[8px] text-[14px] pt-[10px] mr-1  duration-100  hover:bg-indigo-100 border border-white hover:border-indigo-800 rounded' href="#contact">CONTACT</Link></li>
                    </ul>
                </menu>
                <div className='flex'>                      
                <Link href="/login" className='font-semibold hover:text-indigo-600 duration-100' type='button'><BiSolidUserCircle className="inline-block text-2xl mb-1"  />Login</Link>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Header