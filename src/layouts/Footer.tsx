import React from 'react'
import Container from './Container'
import { BiMobileAlt } from 'react-icons/bi'
import {MdEmail} from 'react-icons/md'
import Link from 'next/link'
import { BsFillPinMapFill } from 'react-icons/bs'
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-indigo-700 text-white py-10'>
      <Container className='' >
        <div className='md:grid md:grid-cols-3 gap-16'>
          <div>
            <h4 className='font-bold text-2xl'>About us</h4>
            <p className='py-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempora harum laboriosam, rem eum vel perspiciatis voluptatum qui eos aut quisquam illo nostrum ullam magni hic est aspernatur accusantium ad.</p>
            <p className='mt-1'>
              <BiMobileAlt className="inline-block mb-1 text-2xl mr-2" />
              <Link href='/' >+00000000000</Link>
            </p>
            <p className='mt-1'>
              <MdEmail className="inline-block mb-1 text-2xl mr-2" />
              <Link href='/'>example@compay.com</Link>
            </p>
            <p className='mt-1'>
              <BsFillPinMapFill className="inline-block mb-2 text-2xl mr-2" />
              <Link href='/'>23,NY,South Caroline , USA</Link>
            </p>
          </div>
          <div>
            <h4 className='font-bold text-2xl'>Quick links</h4>
            <ul>
              <li><Link className='mb-2 hover:text-slate-400 duration-100 block pb-2 mt-3' href="">HOME</Link></li>
              <li><Link className='mb-2 hover:text-slate-400 duration-100 block pb-2' href="">ABOUT</Link></li>
              <li><Link className='mb-2 hover:text-slate-400 duration-100 block pb-2' href="">CHALLENGES</Link></li>
              <li><Link className='mb-2 hover:text-slate-400 duration-100 block pb-2' href="">PLANS & PRICING</Link></li>
              <li><Link className='mb-2 hover:text-slate-400 duration-100 block pb-2' href="">FAQS</Link></li>
              <li><Link className='mb-2 hover:text-slate-400 duration-100 block pb-2' href="">CONTACT</Link></li>
            </ul>
          </div>

          <div>
          <h4 className='font-bold text-2xl'>Subscribe Newsletter</h4>

          <div className='mt-3'>
            <input type="text" placeholder='Name' className='py-2 pt-3 rounded px-5 border text-indigo-800 border-slate-300 md:w-full outline-none focus:bg-indigo-50' />
            <div className='mt-2'>
              <input type="submit" value="SUBMIT" className='py-2 px-5 md:w-full text-white font-semibold cursor-pointer hover:bg-indigo-100 hover:text-indigo-700 duration-100 outline-none  border border-white rounded' />
            </div>

            <div className='mt-6'>
              <Link href='/'><FaFacebookF className='text-5xl p-3 inline-block mr-2 border border-white  hover:bg-white hover:text-indigo-600 duration-100 ' /></Link>
              <Link href='/'><FaTwitter className='text-5xl p-3 inline-block mr-2 border border-white  hover:bg-white hover:text-indigo-600 duration-100 ' /></Link>
              <Link href='/'><FaLinkedinIn className='text-5xl p-3 inline-block mr-2 border border-white  hover:bg-white hover:text-indigo-600 duration-100 ' /></Link>
              <Link href='/'><FaInstagram className='text-5xl p-3 inline-block mr-2 border border-white  hover:bg-white hover:text-indigo-600 duration-100 ' /></Link>
            </div>
          </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer