import React from "react";
import {IoMdMailUnread} from 'react-icons/io'
import {LuPhoneCall} from 'react-icons/lu'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
const Header = () => {
  return (
    <div className="bg-[#282828] px-4 py-4 border-b-[#FFB800] border-b-4 ">
        <div className="max-w-container mx-auto">
            <div className="flex md:flex lg:flex  justify-between items-center">

                
                <div className="w-full md:w-full lg:w-[37%] block  md:flex lg:flex justify-between items-center relative lg:after:absolute lg:after:content-[''] lg:after:top-0 lg:after:right-[217px] lg:after:w-[1px] lg:after:h-5 lg:after:bg-[#5C6A92]">
                    <small className="text-white flex md:justify-start lg:justify-center items-center md:gap-5 lg:gap-2 font-popin md:text-lg lg:text-[12px]"> <IoMdMailUnread/> mail@yourcompany.com</small>
                    <small className="text-white flex md:justify-start lg:justify-center items-center md:gap-5 lg:gap-2 font-popin md:text-lg lg:text-[12px]"> <LuPhoneCall/> +896 120 5889 (Toll free)</small>
                </div>

                <div className="md:w-full lg:w-[60%] flex justify-between items-center text-white">
                    <div className="w-[100%] flex justify-center lg:justify-end gap-4">
                        <a className="text-[18px]" href="#"><FaFacebookF/></a>
                        <a className="text-[18px]" href="#"><AiOutlineTwitter/></a>
                        <a className="text-[18px]" href="#"><FaLinkedinIn/></a>
                        <a className="text-[18px]" href="#"><FaInstagram/></a>
                    </div>
                </div>

            </div>
        </div>
    </div> 
  );
};

export default Header;
