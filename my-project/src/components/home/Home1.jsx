import React from 'react'
import first_img from "/homeimg1.jpg";
import second_img from "/homeimg2.jpg";
import Logo from "/cool.png";


const Home1 = () => {
  return (
    <div>
    <div className='w-full relative'>
        <div className='flex  -z-10 opacity-90'>
            <img src={first_img} className="w-1/2" alt="" />
            <img src={second_img} className="w-1/2" alt="" />
        </div>

        <div className='bottom-0 absolute w-full bg-transparent opacity-90'>
        
        <div className='flex w-full bg-gray-400 h-24 justify-evenly'>
            <div className='py-5 bg-transparent'>
                <div className='text-semibold text-white lg:text-lg md:text-md xsm:text-sm'>Bring comfort to</div>
                <div className='font-bold text-blue-800 bottom-0 top-64 lg:text-3xl md:text-2xl  xsm:text-xl'>to your applainces 24/7</div>
            </div>
            
            <div className='-m-4 relative bg-gray-500 p-2 md:h-20 md:w-20  lg:h-24 lg:w-24 xxsm:h-16 xxsm:w-16 xsm:w-16 xsm:h-16 my-auto rounded-full'>
                <img src={Logo}  className=""/>
            </div>

            <div className='py-5'>
                <div className='text-semibold text-white lg:text-lg md:text-md xsm:text-sm'>High Quality</div>
                <div className='font-bold text-blue-800 bottom-0 top-64 lg:text-3xl md:text-2xl  xsm:text-xl'>Installation and Repairs</div>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Home1