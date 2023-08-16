import Container from '@/layouts/Container'
import Image from 'next/image'
import React from 'react'
import aboutimg from "../../../public/images/about.webp"
import {RxLapTimer} from "react-icons/rx"
import Button from '@/layouts/Button'
import {FiCheck} from "react-icons/fi"

const Program = () => {
  return (
    <section id="program" className='my-16'>
        <Container className=''>
            <div className='md:flex md:gap-16 '>
                
                <div className='md:w-1/3 flex items-center'>
                    <div className='pr-10'>
                        <RxLapTimer className="text-5xl font-semibold text-indigo-600" />
                        <h2 className='font-semibold text-5xl tracking-tight py-4 '>
                        GET WITH
                        THE PROGRAM</h2>

                        <div>
                            <p className='text-[14px] my-2' ><FiCheck className=" inline-block mr-2 text-indigo-600 text-2xl font-semibold" />24/7 UNLIMITED ACCESS</p>
                            <p className='text-[14px] my-2' ><FiCheck className=" inline-block mr-2 text-indigo-600 text-2xl font-semibold" />INSTRUCTED BY TOP TRAINER RILEY OLSON</p>
                            <p className='text-[14px] my-2' ><FiCheck className=" inline-block mr-2 text-indigo-600 text-2xl font-semibold" />OVER 50 VIDEOS AVAILABLE</p>
                            <p className='text-[14px] my-2' > <FiCheck className=" inline-block mr-2 text-indigo-600 text-2xl font-semibold" />CARDIO, STRENGTH & STRETCH WORKOUTS</p>
                        </div>

                        <div className='pt-10'>
                            <Button url="/" className=' shadow-sm'>EXPLORE  VIDEO COURSES</Button>
                        </div>
                    
                    </div>
                </div>
                <div className='md:w-2/3'>
                    <Image src={aboutimg} alt='about' width={0} height={0}   style={{ width: '100%', height: 'auto' }} />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Program