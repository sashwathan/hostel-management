import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineQuestion, AiOutlineArrowUp } from 'react-icons/ai';
import { FaHouseChimneyUser, FaBowlFood, FaWallet, FaStar } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const navigate = useNavigate();

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center'>
         <div className='cursor-pointer' onClick={()=> setNav(!nav)}>
            <AiOutlineMenu size={30}/>
            </div>
            <div onClick={()=>{navigate("/")}} className='cursor-pointer'  >
         <h1 className='text-xl sm:text-3xl lg:text-4xl px-2 text-green-500'>Hostel<span className='font-bold text-black'> Management</span></h1>
         </div>
       </div>
       
       

       {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
       

       <div  className={nav ? 'bg-white fixed w-[300px] duration-300 h-screen z-10 top-0 left-0' : 'bg-white fixed w-[300px] duration-300 h-screen z-10 top-0 left-[-100%]'}>
        <AiOutlineClose onClick={()=> setNav(!nav)} size={25} className='absolute right-4 top-4 cursor-pointer duration-300 text-slate-400 hover:text-black'/>
        <ul>
            <li className='text-xl py-4 flex ml-4 cursor-pointer'><FaHouseChimneyUser size={25}  className='mr-4 '/> Our Hostels</li>
            <li className='text-xl py-4 flex ml-4 cursor-pointer'><FaBowlFood  size={25} onClick={()=>{navigate("/displaymenu")}} className='mr-4 '/>Food</li>
            <li className='text-xl py-4 flex ml-4 cursor-pointer'><FaWallet  size={25} onClick={()=>{navigate("/payments")}} className='mr-4 '/> Payments</li>
            <li className='text-xl py-4 flex ml-4 cursor-pointer'><FaStar size={25} onClick={()=>{navigate("/faculty")}} className='mr-4 '/> Faculty</li>
            <li className='text-xl py-4 flex ml-4 cursor-pointer'><AiOutlineQuestion size={25} onClick={()=>{navigate("/contactus")}} className='mr-4 '/> Contact us</li>
            <li className='text-xl py-4 flex ml-4 cursor-pointer'><AiOutlineArrowUp size={25} className='mr-4 '/> Updates</li>
        </ul>
       </div>

    </div>
  )
}

export default Navbar;
