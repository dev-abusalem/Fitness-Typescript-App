import Button from '@/layouts/Button'
import Container from '@/layouts/Container'
import React from 'react'
import { FiCheck } from 'react-icons/fi'

const PricePlan = () => {
  return (
    <section id="priceplan" className='my-20'>
        <div className='text-center'>
            <h1 style={{fontStyle:'italic'}} className='font-bold md:text-8xl text-3xl'>PLANS & PRICING</h1>
            <p>Im a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </div>
        <Container className=''>
            <div className='grid grid-cols-3 gap-8 text-center'>
                <div className='m-6 p-10 border border-gray-300 shadow rounded'>
                    <h3 className='font-semibold text-2xl'>Silver Membership</h3>
                    <h2 className='font-bold text-6xl my-5 text-indigo-600'><sup><small>$</small></sup>30</h2>
                    <p>Short-term trial for beginners</p>
                    <small>Valid for one month</small>
                    <div className='mt-10'>
                        <p className='text-[14px] my-2' ><FiCheck className=" inline-block mr-2 text-indigo-600 text-2xl font-semibold" />24/7 UNLIMITED ACCESS</p>
                        <p className='text-[14px] my-2' ><FiCheck className=" inline-block mr-2 text-indigo-600 text-2xl font-semibold" />24/7 UNLIMITED ACCESS</p>
                        <p className='text-[14px] my-2' ><FiCheck className=" inline-block mr-2 text-indigo-600 text-2xl font-semibold" />24/7 UNLIMITED ACCESS</p>
                    </div>
                    <div className='mt-10'>
                        <Button url='/' className='block' >BUY NOW</Button>
                    </div>
                </div>
                
                
                <div className='m-6 p-10 border border-gray-300 bg-indigo-100 shadow rounded'>
                    <h3 className='font-semibold text-2xl'>Gold Membership</h3>
                    <h2 className='font-bold text-6xl my-5 text-indigo-600'><sup><small>$</small></sup>25</h2>
                    <p>Ideal for advanced trainers</p>
                    <small>Valid for 12 months</small>
                    <div className='mt-10'>
                        <p className='text-[14px] my-2' ><FiCheck className=" inline-block mr-2 text-indigo-600 text-2xl font-semibold" />24/7 UNLIMITED ACCESS</p>
                        <p className='text-[14px] my-2' ><FiCheck className=" inline-block mr-2 text-indigo-600 text-2xl font-semibold" />24/7 UNLIMITED ACCESS</p>
                        <p className='text-[14px] my-2' ><FiCheck className=" inline-block mr-2 text-indigo-600 text-2xl font-semibold" />24/7 UNLIMITED ACCESS</p>
                    </div>
                    <div className='mt-10'>
                        <Button url='/' className='block' >BUY NOW</Button>
                    </div>
                </div>


                <div className='m-6 p-10 border border-gray-300 bg-indigo-600 text-white shadow rounded'>
                    <h3 className='font-semibold text-2xl'>Platinum Membership</h3>
                    <h2 className='font-bold text-6xl my-5 text-white'><sup><small>$</small></sup>40</h2>
                    <p>Perfect for committed trainers</p>
                    <small>Valid for one month</small>
                    <div className='mt-10'>
                        <p className='text-[14px] my-2' ><FiCheck className=" inline-block mr-2 text-white text-2xl font-semibold" />24/7 UNLIMITED ACCESS</p>
                        <p className='text-[14px] my-2' ><FiCheck className=" inline-block mr-2 text-white text-2xl font-semibold" />24/7 UNLIMITED ACCESS</p>
                        <p className='text-[14px] my-2' ><FiCheck className=" inline-block mr-2 text-white text-2xl font-semibold" />24/7 UNLIMITED ACCESS</p>
                    </div>
                    <div className='mt-10'>
                        <Button url='/' className='block' >BUY NOW</Button>
                    </div>
                </div>

               
            </div>
        </Container>
    </section>
  )
}

export default PricePlan