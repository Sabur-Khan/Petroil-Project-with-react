import React, { useState } from 'react'
import logo from '../../assets/Logo.png'
import {VscThreeBars} from 'react-icons/vsc'
import {RxCross2} from 'react-icons/rx'

const Navbar = () => {

    const [show, setShow] = useState(true);

    const handleClick = () =>{
       setShow(!show)
    }

  return (
    <div className='bg-[#F40404] pt-4 pb-4'>
        <div className='max-w-container mx-auto'>
            <nav className='flex md:flex lg:flex justify-between items-center gap-8'>

                <div className='md:w-[20%]'>
                    <a href="#"><img src={logo} alt="Logo"/></a>
                </div>

                <div className={`w-full md:w-full z-50 lg:w-[80%] lg:flex justify-end items-center p-5 lg:p-0 text-center gap-[47px] absolute md:static duration-700 bg-slate-900 lg:bg-inherit  ${show? 'top-[-230px]' : 'top-[151px]'}`}>
                    <ul className='lg:flex  justify-end gap-[47px] md:text-center text-center'>
                        <li>
                            <a className='text-white font-popin text-[16px] font-semibold' href="#">Home</a>
                        </li>
                        <li>
                            <a className='text-white font-popin text-[16px] font-semibold' href="#">About</a>
                        </li>
                        <li>
                            <a className='text-white font-popin text-[16px] font-semibold' href="#">Services</a>
                        </li>
                        <li>
                            <a className='text-white font-popin text-[16px] font-semibold' href="#">Gallery</a>
                        </li>
                        <li>
                            <a className='text-white font-popin text-[16px] font-semibold' href="#">Blog</a>
                        </li>
                    </ul>
                    <button className='text-white font-popin text-[16px] font-semibold border-2 px-3 py-3'>CONTACT</button>
                </div>

                <div className='lg:hidden' onClick={handleClick}>
                    {
                        show == true? <VscThreeBars className='text-3xl text-white cursor-pointer '/> : <RxCross2 className=' cursor-pointer text-3xl text-white'/>
                    }
                </div>

            </nav>
        </div>
    </div>
  )
}

export default Navbar