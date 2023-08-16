import Container from '@/layouts/Container'
import Link from 'next/link'
import React from 'react'
import {AiOutlinePlus} from "react-icons/ai"
import {BsPlayCircle} from "react-icons/bs"

const Challenge = () => {
  return (
    <section id="challenge" className='challenge_background'>
        <div style={{
            backgroundColor:"#000",
            opacity:0.7,
            backgroundSize:"cover",
            width:"100%",
            minHeight:"50vh"

        }}>
        <Container className=''>
            <div className='flex justify-center items-center min-h-[50vh]'>
                <div className='text-center'>
                    <h2 className='font-bold text-white text-3xl'>The 3 MONTH CHALLENGE</h2>

                    <div className='my-6 flex gap-10'>
                        <div>     
                            <p className='text-xl text-white font-semibold'><BsPlayCircle className="inline-block text-4xl text-white mr-3" /><Link href="/" className='underline'>Watch Preview</Link></p>
                        </div>
                        <div>     
                            <p className='text-xl text-white font-semibold'><Link href="/" className='underline'>Subscribe $12.99/mo.</Link></p>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <Link href="/" className='py-3 px-8 border border-white hover:bg-white font-semibold hover:text-indigo-600 duration-100 text-white'>All Videos <AiOutlinePlus className="mb-1  inline-block hover" /></Link>
                    </div>
                </div>
            </div>
        </Container>
        </div>
    </section>
  )
}

export default Challenge