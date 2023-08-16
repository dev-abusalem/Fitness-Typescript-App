import Button from '@/layouts/Button'
import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='md:flex items-center min-h-[90vh] '>
        <div className='md:w-1/2'>
            <h1 style={{fontStyle:'italic'}} className='font-bold md:text-8xl text-3xl text-white'>TRAIN WITH<br/>RILEY</h1>

            <p className='text-2xl my-3 text-white '>Im a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>

            <div className='pt-5'>
            <Button url="/" className=' shadow-sm'>Watch Now</Button>
            </div>
        </div>
        <div className='md:w-1/2'>

        </div>
    </div>
    </>
  )
}

export default Hero