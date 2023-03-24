import React from "react";
import Logo from "/cool.png";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import ScrollNav from "./ScrollNav";
import {GiHamburgerMenu, GiHidden} from 'react-icons/Gi'



// import Call from 'C:\Users\sofni\Desktop\cooler_website_react\my-project\src\call.svg'
export default function Navbar() {
  const [active,setActive] = useState(false)
  const [nav,setNav] = useState(false);

  window.addEventListener("scroll",()=>{

    setActive(false);
  })
  
  window.addEventListener('scroll',(event) => {
    // console.log(window.event.scroll)
    let scroll = window.scrollY;
    // console.log("scroll::",window.scrollY)
    if(scroll>=140){
      setNav(true);
    }else{
      setNav(false);
    }
  });

  return (
    <>
    <div className={`scrollnav ${nav?"lg:block active":"hidden"}  bg-white  w-full fixed z-50 top-0 xsm:hidden  `}><ScrollNav/></div>
    <div className="flex justify-between lg:hidden sticky top-0 z-50 bg-white w-full">
        <div className="flex">
        <div className="text-2xl  top-0"><img src={Logo} width={60}/></div>
        <div className="m-1 p-1">
          <div className="text-2xl font-bold text-blue-800"> <span className="text-blue-900 font-extrabold text-2xl">C</span>ool <span className="text-blue-900 font-extrabold text-2xl">C</span>are <span className="text-blue-900 font-extrabold">S</span>ervice</div>
          <div> Best services in valley</div>
        </div>
        </div>
        <div className="flex justify-end text-3xl my-auto mr-1 px-3" onClick={()=>{setActive(!active)}}>{!active?<GiHamburgerMenu/>:"x"}</div>
    </div>
    <div className="flex py-6 mx-7 my-5 justify-evenly xxsm:hidden sm:hidden md:hidden lg:flex">
    
    <div>

    </div>

     <div className="flex"> 
        <div className="text-2xl mt-2"><ion-icon name="location-outline"></ion-icon></div>
        <div className="m-1 p-1">
          <div> kathmandu,Nepal</div>
          <div> 4450</div>
        </div>
      </div>

      <div className="flex">
        <div className="text-2xl mt-2"><ion-icon name="time-outline"></ion-icon></div>
        <div className="m-1 p-1">
          <div> 7 days a week</div>
          <div> 8:00 am to 8:00 pm</div>
        </div>
      </div>

      <div className="flex">
      <div className="text-2xl  top-0"><img src={Logo} width={60}/></div>
      <div className="m-1 p-1">
        <div className="text-2xl font-bold text-blue-800"> <span className="text-blue-900 font-extrabold text-2xl">C</span>ool <span className="text-blue-900 font-extrabold text-2xl">C</span>are <span className="text-blue-900 font-extrabold">S</span>ervice</div>
        <div> Best services in valley</div>
      </div>
      </div>

      <div className="flex">
      <div className="m-1 p-1">
        <div className="text-gray-600"> 24/7 emmergency services</div>
        <div className="font-semibold"><span><ion-icon name="call-outline"></ion-icon></span> 9183-3242-432</div>
      </div>
      </div>

      <div className="flex">
        <div className="text-4xl m-2 mt-3"><ion-icon name="logo-facebook"></ion-icon></div>
        <div className="text-4xl m-2 mt-3"><ion-icon name="logo-instagram"></ion-icon></div>
        <div className="text-4xl m-2 mt-3"><img  width={38} src="https://i.pinimg.com/originals/5c/a9/8c/5ca98c73b2bb7a02bf8350933c7ca443.png" alt="" /></div>
      </div>

      <div>

      </div>

      <div>
        <div>

        </div>
      </div>
    </div>
    <div className="shadow-2xl bg-gray-700 py-7 text-white -m-5 w-full -mt-7">
      <ul className={`lg:flex ${active?"":"hidden"} text-lg font-semibold xsm:fixed lg:relative xxsm:bg-gray-700 xxsm:w-full z-50 w-screen`}>
        <li className="py-3"><NavLink to='/home'  className={({isActive})=>`${isActive?'text-blue-500 border-b-2 border-blue-500' :'btn-off' } m-5 mx-10  lg:ml-24 text-xl  my-10`}>Home</NavLink></li>
        <li className="py-3"><NavLink  to='/services' className={({isActive})=>`${isActive?'text-blue-500 border-b-2 border-blue-500' :'btn-off' } m-5 mx-10 text-xl my-10`}>Services</NavLink></li>
        <li className="py-3"><NavLink to='/contact'  className={({isActive})=>`${isActive?'text-blue-500 border-b-2 border-blue-500' :'btn-off' } m-5 mx-10 text-xl my-10`}>Contact</NavLink></li>
        <li className="py-3"><NavLink to='/about'  className={({isActive})=>`${isActive?'text-blue-500 border-b-2 border-blue-500' :'btn-off' } m-5 mx-10 text-xl my-10`}>About</NavLink></li>
      </ul>
    </div>

    </>
  );
}
