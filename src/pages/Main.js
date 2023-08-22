import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from './Home'
import About from './About'
import Testimonial from '../components/Testimonials'
import Team from './Team'
import Features from '../components/Features'
import GetApp from './GetApp'

const Main = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <Testimonial/>
        <Team/>
        <Features/>
        <GetApp/>
        <Footer/>
    </div>
  )
}

export default Main