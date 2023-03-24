import React from 'react'
import Home1 from './Home1'
import Home2 from './Home2'
import Home3 from './Home3'
import Home4 from './Home4'
import Home5 from './Home5'
import Home6 from './Home6'
import Home7 from './Home7'

const Home = () => {
  return (
    <div>
        <div><Home1/></div>
        <div className='shadow-md'><Home2/></div>
        <div className='Home3'><Home3/></div>
        <div className='Home4'><Home4/></div>
        <div className='Home6'><Home6/></div>
        <div className='Home5'><Home5/></div>
        <div className='Home7'><Home7/></div>
    </div>
  )
}

export default Home