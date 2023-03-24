import React from 'react'
import { ImPriceTags } from 'react-icons/Im';
import about1 from '/about1.jpg'
import {MdMoreTime} from 'react-icons/Md';
import {BsCalculator} from 'react-icons/Bs';
import {MdOutlineManageAccounts} from 'react-icons/Md';
import {GiTruck} from 'react-icons/Gi';
// import { IoIosPricetag } from 'react-icons/fa';

const About2 = () => {
  return (
    <div className='relative mt-20 h-screen '>
        <div className='relative w-full -z-10 opacity-10 h-fit'>
            <img className='w-full absolute h-fit overflow-y-clip' src={about1} alt="" />
        </div>
        
        <div className='text-center pt-52'>
            <h1 className='text-gray-500'>Our experts are ready to help today!</h1>
            <h1 className='text-5xl font-bold py-5 text-gray-700'><span className='text-blue-700'>Our</span> Advantages</h1>
            <h1 className='text-xl text-gray-500 p-10 px-64'>Heating & Cooling Services is your single source for a complete range of high-quality services, including design/build, engineering, construction, start-up, commissioning, operation, and maintenance</h1>
            <div className='flex justify-around mt-4'>
                <div>

                </div>

                <div>
                    <div className='rounded-full w-fit drop-shadow-xl  text-4xl bg-white p-6 text-blue-500 mx-auto'>
                        <MdMoreTime/>
                    </div>
                    <div className='text-2xl font-semibold text-gray-700 text-center mt-8'>
                        24/7 Emergency <div>Services</div>
                    </div>
                </div>

                <div>
                    <div className='rounded-full drop-shadow-xl w-fit text-4xl bg-white p-6 text-blue-500'>
                        <BsCalculator/>
                    </div>
                    <div className='text-2xl font-semibold text-gray-700 mt-8'>
                        Free <div>Estimates</div>
                    </div>
                </div>
                
                <div>
                    <div className='rounded-full drop-shadow-xl w-fit  text-4xl bg-white p-6 text-blue-500'>
                        <ImPriceTags />
                    </div>
                    <div className='text-2xl font-semibold text-gray-700 mt-8'>
                        Low Price <br/> Guarantee
                    </div>
                </div>

                <div>
                    <div className='rounded-full drop-shadow-xl w-fit mx-auto text-4xl bg-white p-6 text-blue-500'>
                        <MdOutlineManageAccounts />
                    </div>
                    <div className='text-2xl font-semibold text-gray-700 mt-8'>
                        Licensed & Insured  <br/> Experts
                    </div>
                </div>

            <div>
                <div className='rounded-full drop-shadow-xl mx-auto w-fit text-4xl bg-white p-6 text-blue-500'>
                    <GiTruck/>
                </div>
                <div className='text-2xl font-semibold text-gray-700 mt-8'>
                    Fast & Reliable <br/> Response Times
                </div>
            </div>

            <div>

            </div>

            </div>
        </div>
        <div className='w-full text-center text-gray-600 pt-24'>
            <h1 className=''>
                BEST COOLER COMPANY@
            </h1>
        </div>
    </div>
  )
}

export default About2