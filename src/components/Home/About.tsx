import Container from '@/layouts/Container'
import Image from 'next/image'
import React from 'react'
import aboutimg from "../../../public/images/about.webp"
import {IoIosFitness} from "react-icons/io"
import Button from '@/layouts/Button'
const About = () => {
  return (
    <section id="about" className='my-16'>
        <Container className=''>
            <div className='md:flex md:gap-16 '>
                <div className='md:w-2/3'>
                    <Image src={aboutimg} alt='about' width={0} height={0}   style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className='md:w-1/3 flex items-center'>
                    <div className='px-10'>
                        <IoIosFitness className="text-6xl font-semibold text-indigo-600" />
                        <h2 className='font-semibold text-5xl tracking-tight py-4 '>SLIM DOWN, TONE UP!</h2>
                        <p className='text-lg'>Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                    
                        <div className='pt-10'>
                            <Button url="/" className=' shadow-sm'>ABOUT MORE</Button>
                        </div>
                    
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default About