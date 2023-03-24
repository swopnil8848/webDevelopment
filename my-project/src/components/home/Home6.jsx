import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const Home6 = () => {
    const [active,setActive] = useState(1);
    const {register,handleSubmit,watch,setValue} = useForm({
        defaultValues:{
            name:'',
            email:'',
            services:''
        }
    })
    return (
    <div className='lg:flex mt-40'>
        <div className='lg:w-1/2 lg:ml-16 mx-2 overflow-hidden py-auto'>
            <h1 className='text-3xl font-bold text-gray-800 m-5 my-10'>COOL CARE <span className='text-blue-700'> FAQ </span></h1>
            <div className='p-3 rounded-2xl m-2 bg-gray-100'>
                <div className='flex font-bold text-lg '>
                    <div className='text-4xl my-auto'><ion-icon name={`${active===1?"remove":"add"}-circle-outline`}></ion-icon></div>
                    <h1 onClick={c=>setActive(1)}>What is the life expectancy of my HVAC system?</h1>
                </div>
                <p className={`text-gray-500 px-10 ${active===1?"block":"hidden"} text-justify`}>How often you run your system, the system’s age, its make and model, and whether or not it was serviced regularly over the course of its life can all play a significant role in how long your system will last you.d/or air conditioner to last approximately 15 years.</p>
            </div>
            <div className='p-3 rounded-2xl m-2 bg-gray-100'>
                <div className='flex font-bold text-lg '>
                    <div className='text-4xl my-auto'><ion-icon name={`${active===2?"remove":"add"}-circle-outline`}></ion-icon></div>
                    <h1 onClick={c=>setActive(2)} className='pt-1'>What is the life expectancy of my HVAC system?</h1>
                </div>
                <p className={`text-gray-500 px-10 ${active===2?"block":"hidden"}`}>How often you run your system, the system’s age, its make and model, and whether or not it was serviced regularly over the course of its life can all play a significant role in how long your system will last you.d/or air conditioner to last approximately 15 years.</p>
            </div>
            <div className='p-3 rounded-2xl m-2 bg-gray-100'>
                <div className='flex font-bold text-lg '>
                    <div className='text-4xl my-auto'><ion-icon name={`${active===3?"remove":"add"}-circle-outline`}></ion-icon></div>
                    <h1 onClick={c=>setActive(3)}>What is the life expectancy of my HVAC system?</h1>
                </div>
                <p className={`text-gray-500 px-10 ${active===3?"block":"hidden"}`}>How often you run your system, the system’s age, its make and model, and whether or not it was serviced regularly over the course of its life can all play a significant role in how long your system will last you.d/or air conditioner to last approximately 15 years.</p>
            </div>
            <div className='p-3 rounded-2xl m-2 bg-gray-100'>
                <div className='flex font-bold text-lg '>
                    <div className='text-4xl my-auto'><ion-icon name={`${active===4?"remove":"add"}-circle-outline`}></ion-icon></div>
                    <h1 onClick={c=>setActive(4)}>What is the life expectancy of my HVAC system?</h1>
                </div>
                <p className={`text-gray-500 px-10 ${active===4?"block":"hidden"}`}>How often you run your system, the system’s age, its make and model, and whether or not it was serviced regularly over the course of its life can all play a significant role in how long your system will last you.d/or air conditioner to last approximately 15 years.</p>
            </div>
        </div>
        <div className=' drop-shadow-xl shadow-2xl p-2 border-box rounded-xl lg:w-1/2 lg:mr-12 mx-2'>
            <form className='p-5 px-9 rounded-xl'>
                <div>
                    <input className='text-gray-700 border border-gray-400  hover:bg-gray-200 p-4 w-fit rounded-full m-5' type="text" {...register('name')} placeholder='your name '/>
                    <input className='text-gray-700 border border-gray-400  hover:bg-gray-200 p-4 w-fit rounded-full m-5' type="text" {...register('email')} placeholder='your email '/>
                </div>
                <div className='w-full'>
                    <input className='text-gray-700 border border-gray-400  hover:bg-gray-300 p-4 w-full rounded-full m-5' type="text" {...register('services')} placeholder='choose your service' />
                </div>
                <div className='h-fit'>
                    <input className='text-gray-700 border border-gray-400  hover:bg-gray-200 p-4 w-full rounded-2xl m-5 h-24' type="text" {...register('services')} placeholder='your question' />
                </div>
                <button type='submit' className='font-bold text-white bg-blue-700 px-5 py-3 rounded-full m-3 mx-5'>ASK QUESTION</button>
            </form>
        </div>
    </div>
  )
}

export default Home6