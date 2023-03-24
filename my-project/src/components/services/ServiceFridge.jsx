import React from 'react'
import fridgeRepair from '/fridgeRepair.jpg'
import pastrieCabinet from '/pastrieCabinet.jpeg'
import fourdoorFridge from '/fourdoorFridge.jpg'
import vigiCooler from '/vigiCooler.jpg'
import chestFridge from '/chestFridge.jpg'
import VegiFridge from '/VegiFridge.jpg'


const ServiceFridge = () => {
  return (
    <div>
        

        <div className='lg:flex justify-evenly w-fit mr-16 ml-16'>
            <div className='m-12 lg:w-1/3 md:flex lg:block'>
                <div>
                    <img src={fridgeRepair}  className="rounded-xl  w-fit"  />
                </div>
                <div className='my-auto text-center md:px-5 lg:px-0'>
                    <h1 className='font-semibold text-2xl text-center py-2'>Installation</h1>
                    <h1 className='text-gray-700 px-2 text-center'>We also provide emergency service for those days when you need it most! ! yes it most</h1>
                </div>
            </div>

            <div className='m-12 lg:w-1/3 md:flex lg:block'>
                <div>
                    <div className='w-fit'><img src={pastrieCabinet}  className=' rounded-lg w-fit ' /></div>
                </div>
                <div className='my-auto text-center md:px-5 lg:px-0'>
                    <h1 className='font-semibold text-2xl text-center py-2'>Maintenance</h1>
                    <div><h1 className='text-gray text-center'>Thermostat learn what temperatures you like and program themselves to adjust the temperature just for you.</h1></div>
                </div>
            </div>

            <div className='my-12 mx-6 lg:w-1/3 md:flex lg:block'>
                <div>
                    <img src={fourdoorFridge}  className=' rounded-lg w-fit ' />
                </div>
                <div className='my-auto text-center md:px-5 lg:px-0'>
                    <h1 className='font-semibold text-2xl text-center py-2'>Temperature Controller</h1>
                    <h1 className='text-gray-700 px-2 text-center'>Like any major appliance, your air conditioner works best with regular care and maintenance.</h1>
                </div>
            </div>
        </div>

        
        <div className='lg:flex justify-evenly w-fit mr-16 ml-16'>
            <div className='m-12 lg:w-1/3 md:flex lg:block'>
                <div>
                    <img src={vigiCooler}  className="rounded-xl  w-fit"  />
                </div>
                <div className='my-auto text-center md:px-5 lg:px-0'>
                    <h1 className='font-semibold text-2xl text-center py-2'>Installation</h1>
                    <h1 className='text-gray-700 px-2 text-center'>We also provide emergency service for those days when you need it most! ! yes it most</h1>
                </div>
            </div>

            <div className='m-12 lg:w-1/3 md:flex lg:block'>
                <div>
                    <div className='w-fit'><img src={chestFridge}  className=' rounded-lg w-fit ' /></div>
                </div>
                <div className='my-auto text-center md:px-5 lg:px-0'>
                    <h1 className='font-semibold text-2xl text-center py-2'>Maintenance</h1>
                    <div><h1 className='text-gray text-center'>Thermostat learn what temperatures you like and program themselves to adjust the temperature just for you.</h1></div>
                </div>
            </div>

            <div className='my-12 mx-6 lg:w-1/3 md:flex lg:block'>
                <div>
                    <img src={VegiFridge}  className=' rounded-lg w-fit ' />
                </div>
                <div className='my-auto text-center md:px-5 lg:px-0'>
                    <h1 className='font-semibold text-2xl text-center py-2'>Temperature Controller</h1>
                    <h1 className='text-gray-700 px-2 text-center'>Like any major appliance, your air conditioner works best with regular care and maintenance.</h1>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ServiceFridge