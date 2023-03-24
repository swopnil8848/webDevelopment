import React, { useState } from 'react'
import ServiceAc from './ServiceAc'
import ServiceColdRoom from './ServiceColdRoom';
import ServiceFridge from './ServiceFridge';
import ServiceHotRoom from './ServiceHotRoom';


const Services1 = () => {
  const [number,setNumber] = useState(0);


  return (
    
    <div className='mt-16'>
      <div className='text-center'>
        <h1 className='text-gray-500 text-lg'>Open 24/7 with office staff</h1>
        <h1 className='font-bold text-gray-800 text-5xl p-5'>Our Featured Services</h1>
        <h1 className='text-gray-500 text-lg mx-auto lg:px-40 md:px-20 px-10 mt-5'>We offer a variety of cooling and heating services for both residential and commercial properties, including upgrades, repairs, replacements, and installations</h1>
      </div>

      <div className='flex justify-center text-center'>
                <div className='lg:w-fit  bg-white shadow-lg rounded-full lg:m-10 my-10 cursor-pointer '>
                    <div className='flex'>
                        <h1 className='lg:px-10 md:px-7 px-4 lg:text-xl md:text-lg text-md lg:font-bold font-semibold my-auto shadow-inner-xl rounded-full hover:bg-gray-200 p-5' onClick={c=>setNumber(0)}> Air Conditioner</h1>
                        <h1 className='lg:px-10 md:px-7 px-4 lg:text-xl md:text-lg text-md lg:font-bold font-semibold my-auto shadow-inner-xl rounded-full hover:bg-gray-200 p-5' onClick={c=>setNumber(1)}> Heart Room</h1>
                        <h1 className='lg:px-10 md:px-7 px-4 lg:text-xl md:text-lg text-md lg:font-bold font-semibold my-auto shadow-inner-xl rounded-full hover:bg-gray-200 p-5' onClick={c=>setNumber(2)}> Fridger and chiller</h1>
                        <h1 className='lg:px-10 p-full md:px-7 px-4 lg:text-xl md:text-lg text-md lg:font-bold font-semibold my-auto shadow-inner-xl rounded-full hover:bg-gray-200 p-5' onClick={c=>setNumber(3)}> Column </h1>
                    </div>
                </div>
            </div>

      <div className={`${number===0?"block":"hidden"}`}><ServiceAc/></div>
      <div className={`${number===1?"block":"hidden"}`}><ServiceHotRoom/></div>
      <div className={`${number===2?"block":"hidden"}`}><ServiceFridge/></div>
      <div className={`${number===3?"block":"hidden"}`}><ServiceColdRoom/></div>



    </div>
  )
}

export default Services1