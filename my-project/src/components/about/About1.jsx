import React from 'react'
import group_photo from '/group_photo.jpg'

const About1 = () => {
  return (
    <div className='flex justify-between mt-20 ml-5'>
        <div className=' mx-auto px-auto pl-20 h-full w-fit pt-5'>
            <img className='mx-auto rounded-xl h-full w-fit' src={group_photo} alt="" />
        </div>
        <div className='w-1/2 text-lg text-gray-700 text-justify  mr-20'>
            <h1 className='text-gray-500 text-lg'>Excellence has been our hallmark  </h1>
            <h1 className='text-4xl text-gray-800 font-bold py-10'><span className='text-blue-700'>Welcome</span> to Cool Care Services!!</h1>
            <div>
            <div className=' text-gray-500 px-10 pr-20'>
                Cool Care Service PVT Ltd is a home service based company which is your one way solution to repair electrical appliances ranging from small devices such as air conditioners to bigger home appliances like refrigerators, cold storage. We have certified professional workers who will repair the appliance and restore it to its original state.  
                Cool Care Service priorities customer satisfaction over anything and promises to provide the best service available in the market for reasonable pricing. 
            </div>
            <div className=' text-gray-500 px-10 pr-20 pt-4 '>
              Anything you can find in your household to your office that requires to be patched up, serviced, we have experienced manpower capable of repairing it.
              We will help you schedule your repair at your convenient time.
            </div>
            </div>
        </div>
    </div>
  )
}

export default About1