import React from 'react'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Hero from './Hero'
import Testimonials from './Testimonals'
import { Element } from "react-scroll";
import Box from '@mui/material/Box';
import TechStack from './TechStack'
import CallToAction from './CallToAction'

const Home = () => {
  return (
     <Box sx={{ overflow: 'hidden' }}>
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="service">
        <Services />
      </Element>
     
      <Element name="About">
        <About />
      </Element>
      <Element name="Testimonials">
        <Testimonials />
      </Element>
      <Element name="TechStack">
        <TechStack />
      </Element>
      <Element name="CallToAction">
        <CallToAction />
      </Element>
       <Element name="contact">
        <Contact />
      </Element>
    </Box>
  )
}

export default Home
