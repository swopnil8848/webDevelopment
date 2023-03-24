import React from 'react'
import About1 from './about/About1'
import About2 from './about/About2'
import About3 from './about/About3'
import Home7 from './home/Home7'

const About = () => {
  return (
    <div>
      <About1/>
      <div className='relative'><About2/></div>
      <div className='mt-80 h-screen'><About3/></div>
      <Home7/>
    </div>
  )
}

export default About