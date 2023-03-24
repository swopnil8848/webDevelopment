import React from 'react'
import { NavLink } from "react-router-dom";


const Home3 = () => {
  return (
    <div className='h-fit  '>
        <div>
            <img className='w-full h-full absolute opacity-20 -z-10' src="https://png.pngtree.com/background/20210709/original/pngtree-blue-tech-business-building-cool-background-picture-image_963381.jpg" alt="" />
        </div>
        <div className='lg:flex align-middle lg:h-screen place-items-center justify-evenly ml-9'>
            <div className='flex  justify-center'>
                <div className='py-7'>
                    <img className='rounded-lg' src="https://smartdata.tonytemplates.com/heacool/wp-content/uploads/2019/12/img1.jpg" alt="" />
                </div>
                <div className='p-9'>
                    <img className='mb-5 rounded-lg' src="https://smartdata.tonytemplates.com/heacool/wp-content/uploads/2019/12/img2.jpg" alt="" />
                    <img className='mt-2 rounded-lg'   src="https://smartdata.tonytemplates.com/heacool/wp-content/uploads/2019/12/img3.jpg" alt="" />
                </div>
            </div>
            <div className='lg:w-[50%]'>
                <h1 className='text-lg text-gray-500 py-5'>Your home comfort experts</h1>
                <h1 className='md:text-4xl text-3xl font-bold py-5'><span className='text-blue-600'> Quality</span> Cooling Installation and Services</h1>
                <h1 className='text-gray-600 md:text-xl text-lg py-10'>We provide customers with an industry leading 10-year installation warranty and a two-year service and repair warranty. With most companies, you will get a standard manufacturers warranty on installations and a one-year warranty on service and repair work.</h1>
                <h1 className='text-gray-600 md:text-xl text-lg'>We believe our warranties set us apart from our competitors and show our commitment to quality work and service.</h1>
                <div className='my-5'><button className='text-bold text-xl bg-blue-500 p-3 px-7 rounded-3xl text-white font-semibold '><NavLink to='/about'>READ MORE</NavLink></button></div>
            </div>
        </div>
    </div>
  )
}

export default Home3