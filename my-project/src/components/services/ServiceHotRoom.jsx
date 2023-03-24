import React from 'react'
import hotroom1 from '/hotroom1.jpg'
import hotroom3 from '/hotroom3.jpg'
import hotroom4 from '/hotroom4.jpg'
import hotroomMaintain from '/hotroomMaintain.jpg'

const ServiceHotRoom = () => {
  return (

    <div>
        <div className='lg:flex justify-evenly w-fit mr-16 ml-16 text-center'>

            <div className='m-12 lg:w-1/3 md:flex lg:block'>
                <div>
                    <img src={hotroom4}  className="rounded-xl  w-fit"  />
                </div>
                <div className='my-auto'>
                    <h1 className='font-semibold text-2xl text-center py-2'>Installation</h1>
                    <h1 className='text-gray-700 px-2 text-center'>We also provide emergency service for those days when you need it most! ! yes it most</h1>
                </div>
            </div>

            <div className='m-12 lg:w-1/3 md:flex lg:block'>
                <div>
                    <img src={hotroomMaintain}  className=' rounded-lg w-fit ' />
                </div>
                <div className='my-auto'>
                    <h1 className='font-semibold text-2xl text-center py-2'>Maintenance</h1>
                    <div><h1 className='text-gray text-center'>Thermostat learn what temperatures you like and program themselves to adjust the temperature just for you.</h1></div>
                </div>
            </div>

            <div className='my-12 mx-6 lg:w-1/3 md:flex lg:block'>
                <div>
                    <img src={hotroom1}  className=' rounded-lg w-fit ' />
                </div>
                <div className='my-auto'>
                    <h1 className='font-semibold text-2xl text-center py-2'>Temperature Controller</h1>
                    <h1 className='text-gray-700 px-2 text-center'>Like any major appliance, your air conditioner works best with regular care and maintenance.</h1>
                </div>
            </div>
        </div>
    </div>



        

  )
}

export default ServiceHotRoom