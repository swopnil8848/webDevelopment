import React from 'react'

const Home2 = () => {
  return (
    <div className='lg:flex justify-around'>
        <div className='text-gray-800 m-10 mt-24  p-5 lg:text-center mr-20 shadow-md rounded-xl xxsm:flex lg:block'>
            <div className='text-4xl my-auto p-5 lg:p-0'><ion-icon name="duplicate-outline"></ion-icon></div>
            <div className=''>
              <div className='text-xl font-bold m-2 text-blue-700'>Certified dealer</div>
              <div className='text-lg'>Whether you are looking for quality service our company has you covered.</div>
            </div>
        </div>
        <div className='text-gray-800 m-10 mt-24 mx-14 p-5 lg:text-center shadow-md rounded-xl xxsm:flex lg:block'>
            <div className='text-4xl my-auto p-5 lg:p-0'><ion-icon name="call-outline"></ion-icon></div>
            <div>
              <div className='text-xl font-bold m-2 text-blue-700'>Request A Service Call</div>
              <div className='text-lg'>Having problems with your heating or cooling system. Call us 24/7.</div>
            </div>
        </div>
        <div className='text-gray-800 m-10 mt-24 p-5 lg:text-center ml-20 shadow-md rounded-xl xxsm:flex lg:block'>
            <div className='text-4xl my-auto p-5 lg:p-0'><ion-icon name="card-outline"></ion-icon></div>
            <div>
              <div className='text-xl font-bold m-2 text-blue-700'>Affordable Services</div>
              <div className='text-lg'>We use morden techenology which help us reduce our cost in our services</div>
            </div>
        </div>
    </div>
  )
}

export default Home2