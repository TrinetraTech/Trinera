import React from 'react'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Hero from './Hero'
import { Element } from "react-scroll";
import { Box } from '@mui/material'


const Home = () => {
  return (
     <Box sx={{ overflow: 'hidden' }}>
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="service">
        <Services />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Element name="About">
        <About />
      </Element>
    </Box>
  )
}

export default Home
