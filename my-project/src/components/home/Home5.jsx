import React from 'react'

const Home5 = () => {
  return (
    <div className='lg:flex  lg:justify-around pt-44 bg-gray-100 p-9 rounded-lg'>
        <div className='lg:w-1/2 bg-blend-overlay mix-blend-overlay backdrop-contrast-[0.1] bg-white/40'>
            <img className='min-w-full  h-full rounded-lg '  src="https://media.istockphoto.com/id/1308235771/photo/happy-family-with-dog-enjoying-new-home.jpg?s=612x612&w=0&k=20&c=Uga2rXOon5Coq3A6i7gTVjaBpvWiN-gIGFpTQXpxQt8=" alt="img was not found" />
        </div>
        <div className='bg-blend-screen  bg-gray-200 lg:mr-10'>
            <h1 className='text-gray-500 px-5 mt-5'>we are best in our speciality</h1>
                <h1 className='text-5xl font-bold px-7 pb-10'>why <span className='text-blue-700'>choose us</span></h1>
            <div className='py-5 flex'>
                <div className='text-4xl bg-white rounded-full text-blue-700 m-5 p-2'><ion-icon name="person-add-outline"></ion-icon></div>
                <div>
                    <h1 className='font-semibold text-2xl text-gray-900'>We Believe in Maintaining Solid Core Values</h1>
                    <p className=' text-gray-600'>We base our business on honesty, integrity, teamwork, and accountability, and that’s what our customers expect from us</p>
                </div>
            </div>
            <div className='py-5 flex'>
                <div className='text-4xl bg-white rounded-full text-blue-700 m-5 p-2'><ion-icon name="thumbs-up-outline"></ion-icon></div>
                <div>
                    <h1 className='font-semibold text-2xl text-gray-900'>We Treat Every Customer Like Family</h1>
                    <p className=' text-gray-600'>We base our business on honesty, integrity, teamwork, and accountability, and that’s what our customers expect from us.</p>
                </div>
            </div>
            <div className='py-5 flex'>
                <div className='text-4xl bg-white rounded-full text-blue-700 m-5 p-2'><ion-icon  name="trophy-outline"></ion-icon></div>
                <div>
                    <h1 className='font-semibold text-2xl text-gray-900'>We Believe in Setting the Standard Higher</h1>
                    <p className=' text-gray-600'>We base our business on honesty, integrity, teamwork, and accountability, and that’s what our customers expect from us.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home5