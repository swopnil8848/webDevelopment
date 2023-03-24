import React from 'react'
import contactmap from '/contact-map.jpg'
import {CiLocationOn} from 'react-icons/Ci'
import {AiOutlineMail} from 'react-icons/Ai'
import {FiPhone} from 'react-icons/Fi'
import {TfiAlarmClock} from 'react-icons/Tfi'

const Contact1 = () => {
  return (
    <div>
        <img src={contactmap} alt="" />
        <div className='bg-gray-200 shadow-b-lg shadow-black w-full h-fit flex justify-around py-4'>

            <div className='flex h-fit'>
                <div className='text-3xl my-auto p-2 bg-white rounded-full'><CiLocationOn/></div>
                <div>
                    <h1>Adress:</h1>
                    <h1>Kathmandu,Nepal</h1>
                </div>
            </div>

            <div className='flex'>
                <div className='text-3xl my-auto p-2 bg-white rounded-full'><AiOutlineMail/></div>
                <div>
                    <h1>Email:</h1>
                    <h1>swopnilm515@gmail.com</h1>
                </div>
            </div>

            <div className='flex'>
                <div className='text-3xl my-auto p-2 bg-white rounded-full'><FiPhone/></div>
                <div>
                    <h1>Phone:</h1>
                    <h1>9881250521</h1>
                </div>
            </div>

            <div className='flex'>
                <div className='text-3xl my-auto p-2 bg-white rounded-full'><TfiAlarmClock/></div>
                <div>
                    <h1>Mon-Fri:</h1>
                    <h1>8:00 AM - 8:00 PM, Sat-Sun</h1>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default Contact1