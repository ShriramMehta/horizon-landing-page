import React from 'react'
import Carousel from '../components/Carousel'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <section
      id="home"
      className=""
      data-scroll-section
    >
    <Hero/>
    <Carousel />
    </section>
  )
}

export default Home