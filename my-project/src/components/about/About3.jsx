import React from 'react'
import ACrepair from '/ACrepair.jpg'
import {TiArrowRightOutline} from 'react-icons/Ti';

const About3 = () => {
  return (
    <div className='flex justify-between '>
        <div className='w-1/2 m-10'>
            <div className='font-semibold text-4xl my-4'>Why Choose <span className='text-blue-600'>Quality?</span></div>
            <h1 className='py-5'>Our name says it all. We’re committed to quality in everything we do. The quality of our work lies in our craftsmanship and experience. Our technicians are specialists who take pride in the work they do. We’re not satisfied until our customers are satisfied.</h1>
            <div>
                <h1 className='font-semibold py-5'>Quality influences every part of our business, including:</h1>
                <h1 className='text-md py-1 text-gray-600 flex'><TiArrowRightOutline/><div>Quality Products</div></h1>
                <h1 className='text-md py-1 text-gray-600 flex'><TiArrowRightOutline/><div>Quality Energy Evaluations</div></h1>
                <h1 className='text-md py-1 text-gray-600 flex'><TiArrowRightOutline/><div>Quality Technicians</div></h1>
                <h1 className='text-md py-1 text-gray-600 flex'><TiArrowRightOutline/><div>Quality Installations</div></h1>
                <h1 className='text-md py-1 text-gray-600 flex'><TiArrowRightOutline/><div>Quality Service & Repairs</div></h1>
            </div>
        </div>
        <div className='rounded-xl m-10'>
            <img src={ACrepair} className='rounded-2xl' alt="" />
        </div>
    </div>
  )
}

export default About3