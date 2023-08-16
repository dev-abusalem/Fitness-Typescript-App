import Container from '@/layouts/Container'
import Image from 'next/image'
import React from 'react'
import contactimg from "../../../public/images/contact.webp"
import {IoIosFitness} from "react-icons/io"
import Button from '@/layouts/Button'

const Contact = () => {
  return (
    <section id="contact" className='my-16'>
        <Container className=''>
            <div className='md:flex md:gap-16'>
                <div className='md:w-2/3'>
                    <Image src={contactimg} alt='about' width={0} height={0}   style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className='md:w-1/3 flex items-center'>
                    <div className='md:px-10 px-4'>
                        <IoIosFitness className="text-6xl font-semibold text-indigo-600" />
                        <h2 className='font-semibold md:text-5xl text-2xl tracking-tight md:py-4 py-2 '>CONTACT ME</h2>
                        <p className='text-lg'>Im a paragraph. Click here to add your own text and edit me.
                        Let your users get to know you.</p>
                    
                        <div className='pt-10'>
                           <form>
                            <div className='flex gap-4'>
                                <input type="text" placeholder='Name' className='py-2 px-3 border border-slate-300 outline-none focus:bg-indigo-50' />
                                <input type="gmail" placeholder='Email' className='py-2 px-3 border border-slate-300 outline-none focus:bg-indigo-50' />
                            </div>
                            <div>
                            <input type="tel" placeholder='Phone' className='py-2 mt-3 px-3 w-full border border-slate-300 outline-none focus:bg-indigo-50' />
                                <textarea placeholder='Message' className='py-2 px-3 mt-3 w-full border border-slate-300 outline-none focus:bg-indigo-50'></textarea>
                            </div>
                            <div className='mt-3'>
                                <input type="submit" value="SUBMIT" className='py-2 px-5 pt-3 md:w-full text-indigo-800 font-semibold cursor-pointer hover:bg-indigo-700 hover:text-white duration-100 outline-none bg-indigo-300 border border-indigo-700 rounded' />
                            </div>
                           </form>
                        </div>
                    
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Contact