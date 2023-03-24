import React from 'react'
import Cool from '/cool.png'
import Location from '/Location.jpg'

const Home7 = () => {
  return (
    <div>
        <div className='flex justify-evenly lg:text-xl md:text-lg text-center font-semibold bg-gray-300 py-4'>
            <h1 className='px-5 my-auto'><span className='text-blue-700'>24/7</span> Hour Emergency Service</h1>
            <h1 className='px-4 my-auto'><span className='text-blue-700 font-bold'>Free</span> Consultations</h1>
            <div className='text-blue-900 lg:font-bold font-semibold lg:text-xl text-lg PX-5 my-auto'><span className='font-bold lg:text-2xl'><ion-icon name="call-outline"></ion-icon></span>  <span>9808589912</span></div>
        </div>

            
        <div className='lg:flex lg:justify-around bg-gray-600'>
            <div className='flex justify-center text-center'>
            <div className=''>
            <div className=' text-white py-5'>
                <div className='flex'>
                    <div className='h-fit'>
                        <img src={Cool} width={50} alt="" />
                    </div>
                    <div className='my-auto p-1 px-4'>
                        <h1 className='font-semibold text-2xl text-blue-400 leading-3'>Cool Care Service</h1>
                        <h1 className='text-md text-gray-400'>best service provider</h1>
                    </div>
                </div>

                <div className="flex justify-center text-black pt-5">
                    <div className="text-4xl m-2 mt-3"><ion-icon name="logo-facebook"></ion-icon></div>
                    <div className="text-4xl m-2 mt-3"><ion-icon name="logo-instagram"></ion-icon></div>
                    <div className="text-4xl m-2 mt-3"><img  width={38} src="https://i.pinimg.com/originals/5c/a9/8c/5ca98c73b2bb7a02bf8350933c7ca443.png" alt="" /></div>
                </div>

                <div className='py-5'>
                    <h1>2020 © Cool & Care.</h1>
                    <h1>All rights reserved.</h1>
                </div>
                </div>
            </div>
            </div >

            <div className='flex justify-center text-center'>
                <div className='text-white font-semibold text-xl py-10'>
                    <div><h1><span className='text-blue-500 font-bold'>P</span>hone:   9808589912</h1></div>
                    <div><h1><span className='text-blue-500 font-bold'>e</span>mail:   swopnilm515@gmail.com</h1></div>
                    <h1><span>a</span>dress:  Satungal,kathmandu</h1>
                    <h1><span>Mon-Fri 8:00 AM - 8:00 PM, Sat-Sun</span></h1>
                </div>
            </div>

                <div className='lg:w-1/3  box-sizing: border-box flex justify-center'>
                    <div className=' w-fit h-fit align-middle py-10'>
                        <img src={Location} className='w-fit h-60'  alt="" />
                    </div>
                </div>

        </div>
    </div>
  )
}

export default Home7