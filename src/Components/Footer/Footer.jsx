import React from 'react'
import Logo from '../../assets/Logo.png'
import { IoMdMailUnread } from 'react-icons/io';
import { FiPhoneCall } from 'react-icons/fi';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BsInstagram } from 'react-icons/bs';
import Cart1 from '../../assets/Cert1.jpg'
import Cart2 from '../../assets/Cert2.jpg'

const Footer = () => {
  return (
    <div className='bg-[#1F1F1F] py-[100px]'>
        <div className="max-w-container mx-auto">
            <div className='flex-row gap-4 md:flex-row lg:flex justify-between items-center'>
                <div className=''>
                    <img src={Logo} alt="logo"/>
                    <div className='w-full md:w-full lg:w-full'>
                        <small className='flex items-center mt-7 text-white font-popin font-medium text-[14px]'>
                           <IoMdMailUnread className='mr-2'/> mail@yourcompany.com
                        </small>
                        <small className='flex items-center mt-3 text-white font-popin font-medium text-[14px]'>
                           <FiPhoneCall className='mr-2'/> +896 120 5889 (Toll free)
                        </small>
                        <small className='flex items-center mt-3 text-white font-popin font-medium text-[14px]'>
                           <FaMapMarkedAlt className='mr-2'/> 101 Baker Street, New York, USA, 12345
                        </small>
                    </div>
                    <div className=' flex md:flex lg:flex items-center gap-4 mt-9'>
                        <span className='bg-[#F40404] p-4 rounded-full text-white text-2xl'>
                            <a href="#"><FaFacebookF/></a>
                        </span>
                        <span className='bg-[#F40404] p-4 rounded-full text-white text-2xl'>
                            <a href="#"><FaTwitter/></a>
                        </span>
                        <span className='bg-[#F40404] p-4 rounded-full text-white text-2xl'>
                            <a href="#"><BiLogoLinkedin/></a>
                        </span>
                        <span className='bg-[#F40404] p-4 rounded-full text-white text-2xl'>
                            <a href="#"><BsInstagram/></a>
                        </span>
                    </div>
                </div>
                <div className='md:flex-row flex justify-between w-full items-center mt-4 lg:w-[30%]'>
                    <div className='w-1/2 md:w-1/2 lg:w-[20%]'>
                        <h2 className='text-[16px] font-bold text-white font-popin'>Company</h2>
                        <li className='list-none'>
                            <a className=' text-white text-[14px] font-popin font-normal ' href="#">Home</a>
                        </li>
                        <li className='list-none'>
                            <a className='text-white text-[14px] font-popin font-normal ' href="#">About</a>
                        </li>
                        <li className='list-none'>
                            <a className='text-white text-[14px] font-popin font-normal ' href="#">Services</a>
                        </li>
                        <li className='list-none'>
                            <a className='text-white text-[14px] font-popin font-normal ' href="#">Gallery</a>
                        </li>
                    </div>
                    <div className='w-1/2 md:w-1/2 lg:w-[20%]'>
                        <h2 className='text-[16px] font-bold text-white font-popin'>Others</h2>
                        <li className='list-none'>
                            <a className='text-white text-[14px] font-popin font-normal' href="#">Blog</a>
                        </li>
                        <li className='list-none'>
                            <a className='text-white text-[14px] font-popin font-normal' href="#">Contact</a>
                        </li>
                        <li className='list-none'>
                            <a className='text-white text-[14px] font-popin font-normal' href="#">Terms & Conditions</a>
                        </li>
                        <li className='list-none'>
                            <a className='text-white text-[14px] font-popin font-normal' href="#">Privacy Policy</a>
                        </li>
                    </div>
                </div>
                <div className='w-1/2 md:w-1/2 lg:w-[20%]'>
                    <h2 className='mb-5 text-[16px] font-bold text-white font-popin'>Certificate</h2>
                    <div className='flex gap-5'>
                        <img src={Cart1} alt="" srcset="" />
                        <img src={Cart2} alt="" srcset="" />
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer