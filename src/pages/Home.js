import React from 'react'
import Carousel from '../components/Home/Carousel'
import Hero from '../components/Home/Hero'

const Home = () => {
  return (
    <section
      id="home"
      data-scroll-section
      className='overflow-x-hidden'
    >
    <Hero/>
    <Carousel />
    </section>
  )
}

export default Home