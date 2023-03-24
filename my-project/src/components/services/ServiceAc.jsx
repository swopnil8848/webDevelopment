import React from 'react'
import sercice1_emmergency from '/services1_emmergency.jpg'
import ACmaintainance from '/ACmaintainance.jpg'
import termostat from '/thermostat.png'
import DuctCleaning from '/Air-Duct-Cleaning.jpg'
import ACrepair from '/ACrepair.jpg'
import AC from '/AC.jpg'

const ServiceAc = () => {
  return (
    <div>
        <div>
        <div className='lg:flex justify-evenly w-fit mr-16 ml-16'>

          <div className='m-12 lg:w-1/3 md:flex lg:block'>
            <div>
              <img src={sercice1_emmergency}  className="rounded-xl  w-fit"  />
            </div>
            <div className='my-auto text-center md:px-5 lg:px-0'>
              <h1 className='font-semibold text-2xl text-center py-2'>24/7 Emergency</h1>
              <h1 className='text-gray-700 px-2 text-center'>We also provide emergency service for those days when you need it most! ! yes it most</h1>
            </div>
          </div>

          <div className='my-12 mx-6 lg:w-1/3 md:flex lg:block'>
            <div>
              <img src={ACmaintainance}  className=' rounded-lg w-fit ' />
            </div>
            <div className='my-auto text-center md:px-5 lg:px-0'>
              <h1 className='font-semibold text-2xl text-center py-2'>Maintenance</h1>
              <h1 className='text-gray-700 px-2 text-center'>Like any major appliance, your air conditioner works best with regular care and maintenance.</h1>
            </div>
          </div>


          <div className='m-12 lg:w-1/3 md:flex lg:block'>
            <div>
              <div className='w-fit'><img src={termostat}  className=' rounded-lg w-fit ' /></div>
            </div>
            <div className='my-auto text-center md:px-5 lg:px-0'>
              <h1 className='font-semibold text-2xl text-center py-2'>Thermostats Installation</h1>
              <div><h1 className='text-gray text-center'>Thermostat learn what temperatures you like and program themselves to adjust the temperature just for you.</h1></div>
            </div>
          </div>

        </div>


        <div className='lg:flex justify-evenly w-fit mr-16 ml-16'>
          <div className='m-12 lg:w-1/3 md:flex lg:block'>
            <div>
            <img src={DuctCleaning} className="rounded-xl w-fit" />
            </div>
            <div  className='my-auto text-center md:px-5 lg:px-0'>
              <h1 className='font-semibold text-2xl text-center py-2'>Duct Services</h1>
              <h1 className='text-gray-700 px-2 text-center'>Clean air ducts improve the quality of the air in your home, which is important if you have allergies or asthma.</h1>
            </div>
          </div>

          <div className='my-12 mx-6 lg:w-1/3 md:flex lg:block'>
            <div>
              <img src={ACrepair} className="rounded-xl w-fit" />
            </div>
            <div className='my-auto text-center md:px-5 lg:px-0'>
              <h1 className='font-semibold text-2xl text-center py-2'>Air Conditioner Repair</h1>
              <h1 className='text-gray-700 px-2 text-center'>After years of performance, it can break down and you may need air conditioning system repair.</h1>
            </div>
          </div>

          <div className='m-12 lg:w-1/3 md:flex lg:block'>
            <div>
              <img src={AC} className="rounded-xl w-fit" />
            </div>
            <div className='my-auto text-center md:px-5 lg:px-0'>
              <h1 className='font-semibold text-2xl text-center py-2'>Air Conditioning</h1>
              <h1 className='text-gray-700 px-2 text-center'>Your comfort needs are of top priority and that everyone’s essentials are different, which is why we’ve got you covered.</h1>
            </div>
            </div>
          <div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ServiceAc