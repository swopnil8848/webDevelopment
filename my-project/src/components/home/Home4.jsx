import React, { useState,useEffect } from 'react'
import ACinstallation from '/ACinstallation.jpg'
import ACmaintainance from '/ACmaintainance.jpg'
import ACrepair from '/ACrepair.jpg'
import ACservice from '/ACservice.jpg'
import hotroom1 from '/hotroom1.jpg'
import hotroom3 from '/hotroom3.jpg'
import hotroom4 from '/hotroom4.jpg'
import fridgeRepair from '/fridgeRepair.jpg'
import pastrieCabinet from '/pastrieCabinet.jpeg'
import fourdoorFridge from '/fourdoorFridge.jpg'
import vigiCooler from '/vigiCooler.jpg'
import hotroomMaintain from '/hotroomMaintain.jpg'
import ColdRoomDesign from '/ColdRoomDesign.jpg'
import ColdRoomInstallation from '/ColdRoomInstallation.jpg'
import ColdRoom from '/ColdRoom.jpg'
import ColdRoomRepair from '/ColdRoomRepair.jpg'

import {AiOutlineLeft,AiOutlineRight} from 'react-icons/Ai'

const Home4 = () => {
    const [number,setNumber] = useState(0);
    const [num,setNum] = useState(0);
    const [left,setLeft] = useState(false);
    const [leftArr,setLeftArr] = useState([{id:1, image:[ACinstallation,hotroom1,fridgeRepair,ColdRoomInstallation,]},
                                           {id:2, image:[ACmaintainance,hotroom3,pastrieCabinet,ColdRoom]},
                                           {id:3, image:[ACrepair,hotroomMaintain,fourdoorFridge,ColdRoomDesign]}])
    const [numb,setNumb] = useState([1,2,3])
    const arr = [
        {id:1, image:[ACinstallation,hotroom1,fridgeRepair,ColdRoomInstallation,]},
        {id:2, image:[ACmaintainance,hotroom3,pastrieCabinet,ColdRoom]},
        {id:3, image:[ACrepair,hotroomMaintain,fourdoorFridge,ColdRoomDesign]},
        {id:4, image:[ACservice,hotroom4,vigiCooler,ColdRoomRepair]}
    ]
    
    function clickLeft(){
        let newArr = []
        numb.map((c,index)=>{
            let x=c+1
            if(x>4){
                x = 1;
            }
            numb[index] = x;
        })
        console.log("numb",numb);

        numb.map((x,index)=>{
            arr.map((c)=>{
                if(x===c.id){
                    console.log(c);
                    newArr = [...newArr,c]
                }
            })
        })
        setLeftArr(newArr);
    }

    function clickright(){
        let newArr = []
        numb.map((c,index)=>{
            let x = c-1
            if(x<1){
                x=4;
            }
            numb[index] = x
        })
        console.log("number fro right",numb);
        numb.map((x,index)=>{
            arr.map((c)=>{
                if(x===c.id){
                    console.log(c);
                    newArr = [...newArr,c];
                }
            })
        })
        console.log("newArr",newArr)
        setLeftArr(newArr);
    }
    
  return (
    <div className='flex justify-center mt-28'>
        <div className='text-center'>
            <h1 className='text-gray-500'>open 24/7 with office staff</h1>
            <h1 className='text-4xl my-9 text-gray-800 justify-center font-bold'>How Can We Help You?</h1>
            <h1 className='text-gray-600'>Choose your service</h1>
            <div className='flex justify-center'>
                <div className='lg:w-fit  bg-white shadow-lg rounded-full lg:m-10 my-10 cursor-pointer '>
                    <div className='flex'>
                        <h1 className='lg:px-10 md:px-7 px-4 lg:text-xl md:text-lg text-md lg:font-bold font-semibold my-auto shadow-inner-xl rounded-full hover:bg-gray-200 p-5' onClick={c=>setNumber(0)}> Air Conditioner</h1>
                        <h1 className='lg:px-10 md:px-7 px-4 lg:text-xl md:text-lg text-md lg:font-bold font-semibold my-auto shadow-inner-xl rounded-full hover:bg-gray-200 p-5' onClick={c=>setNumber(1)}> Heart Room</h1>
                        <h1 className='lg:px-10 md:px-7 px-4 lg:text-xl md:text-lg text-md lg:font-bold font-semibold my-auto shadow-inner-xl rounded-full hover:bg-gray-200 p-5' onClick={c=>setNumber(2)}> Fridger and chiller</h1>
                        <h1 className='lg:px-10 p-full md:px-7 px-4 lg:text-xl md:text-lg text-md lg:font-bold font-semibold my-auto shadow-inner-xl rounded-full hover:bg-gray-200 p-5' onClick={c=>setNumber(3)}> Column </h1>
                    </div>
                </div>
            </div>
            
            <div className='flex overflow-x-hidden justify-evenly w-full relative'>
                <button className='bg-gray-100 rounded-full w-fit p-3 lg:ml-5' onClick={c=>clickLeft()}><AiOutlineLeft/></button>
                    {leftArr.map((c)=>{
                       return( <div key={c.id} className={`rounded-lg w-1/4 ${num==0?"block":"hidden"}`}><img src={c.image[number]} alt="" className='lg:px-10' /></div> )
                    })}
                <button className='bg-gray-100 rounded-full w-fit p-3 lg:mr-5' onClick={c=>clickright()}><AiOutlineRight/></button>
            </div>
            

        </div>
    </div>
  )
}

export default Home4