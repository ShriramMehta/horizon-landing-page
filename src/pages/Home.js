import React from 'react'
import Carousel from '../components/Carousel'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <section
      id="home"
      data-scroll-section
      className=''
    >
    <Hero/>
    <Carousel />
    </section>
  )
}

export default Home