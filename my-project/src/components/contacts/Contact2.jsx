import React from 'react'
import { useForm } from 'react-hook-form';
import {BsArrowUpRight} from 'react-icons/Bs'


const Contact2 = () => {
    const {register,handleSubmit,watch,setValue} = useForm({
        defaultValues:{
            name:'',
            email:'',
            services:''
        }
    })
  return (
    <div className='flex h-fit mt-7 mb-20'>
        <div className='w-1/2 my-auto text-center font-semibold text-lg text-gray-500 px-10 pb-10'>
            " We educate customer’s, with complete knowledge about the appliances they are using and the problem it is going through. So that no other fraud service provider can cheat on the customer’s interest. "
            <div className='mt-10  rounded-full shadow-lg w-fit p-2 flex mx-auto '><h1>contact us </h1> </div>
            <div className="flex justify-center">
                <div className="text-4xl m-2 mt-3"><ion-icon name="logo-facebook"></ion-icon></div>
                <div className="text-4xl m-2 mt-3"><ion-icon name="logo-instagram"></ion-icon></div>
                <div className="text-4xl m-2 mt-3"><img  width={38} src="https://i.pinimg.com/originals/5c/a9/8c/5ca98c73b2bb7a02bf8350933c7ca443.png" alt="" /></div>
            </div>
        </div>
        <div className=' drop-shadow-xl shadow-2xl p-2 border-box rounded-xl w-1/2 mr-12'>
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
                <button type='submit' className='font-bold text-white bg-blue-700 px-5 py-3 rounded-full m-3 mx-5'>SUBMIT</button>
            </form>
        </div>
    </div>
  )
}

export default Contact2