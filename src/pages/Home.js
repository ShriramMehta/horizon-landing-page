import React from 'react'
import Carousel from '../components/Carousel'
import Hero from '../components/Hero'
import AppInfo from '../components/AppInfo'

const Home = () => {
  return (
    <section
      id="home"
      data-scroll-section
      className=''
    >
    <Hero/>
    <Carousel />
    <AppInfo/>
    </section>
  )
}

export default Home