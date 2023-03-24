import React from 'react'
import Cool from '/cool.png'
import { NavLink } from "react-router-dom";


const ScrollNav = () => {
  return (
    <div className='flex justify-between pt-1 shadow-md '>
        <div className= 'flex pl-14'>
            <div><img src={Cool} alt="" width={60} /></div>
            <div className='m-3'>
                <h1 className='text-blue-700 font-bold text-2xl leading-3 '>Cool Care Service</h1>
                <h1 className='text-gray-400 mt-1'>best service provider</h1>
            </div>
        </div>
        <div className='py-3 pr-24'>
            <ul className="flex text-lg font-semibold ">
                <li><NavLink to='/home'  className={({isActive})=>`${isActive?'text-blue-500 border-b-2 border-blue-500' :'btn-off' } m-5 mx-10 ml-24 text-xl`}>Home</NavLink></li>
                <li><NavLink  to='/services' className={({isActive})=>`${isActive?'text-blue-500 border-b-2 border-blue-500' :'btn-off' } m-5 mx-10 text-xl`}>Services</NavLink></li>
                <li><NavLink to='/contact'  className={({isActive})=>`${isActive?'text-blue-500 border-b-2 border-blue-500' :'btn-off' } m-5 mx-10 text-xl`}>Contact</NavLink></li>
                <li><NavLink to='/about'  className={({isActive})=>`${isActive?'text-blue-500 border-b-2 border-blue-500' :'btn-off' } m-5 mx-10 text-xl`}>About</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default ScrollNav