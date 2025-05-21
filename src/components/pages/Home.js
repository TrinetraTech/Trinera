import React from 'react'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Hero from './Hero'
import { Element } from "react-scroll";


const Home = () => {
  return (
    <>
      <Element name="hero">
        <Hero/>
      </Element>
      <Element name="service">
        <Services/>
      </Element>
      <Element name="contact">
        <Contact/>
      </Element>
      <Element name="About">
        <About/>
      </Element>
      
    </>
    
  )
}

export default Home
