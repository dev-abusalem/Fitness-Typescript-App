import About from '@/components/Home/About'
import Challenge from '@/components/Home/Challenge'
import Contact from '@/components/Home/Contact'
import Hero from '@/components/Home/Hero'
import PricePlan from '@/components/Home/PricePlan'
import Program from '@/components/Home/Program'
import Container from '@/layouts/Container'
import Footer from '@/layouts/Footer'
import Header from '@/layouts/Header'
import Image from 'next/image'


export default function Home() {
  return (
   <>
    <header className='py-3 border-b border-gray-100 sticky z-10'>
      <Container className='' >
        <Header />
      </Container>
    </header>
    <section className='hero_background' >
      <Container className=''>
        <Hero />
      </Container>
    </section>
    <About />
    <Program />
    <Challenge />
    <PricePlan />
    <Contact />
    <Footer />
   </> 
  )
}
