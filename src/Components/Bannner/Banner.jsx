import React from 'react'
import banner from '../../assets/bg-image.jpg'
const Banner = () => {
  return (
    <div className='relative'>
        <div className='  absolute top-0 left-0 w-full h-full bg-black/[0.7]'>
            <div className="max-w-container mx-auto">
                <div className='w-full mt-10 md:mt-[230px] text-center md:text-left'>
                    <h1 className=' lg:w-[842px] md:text-[20px] lg:text-[64px] font-popin font-bold text-white text-center md:text-left '> We exist since 1975 on the oil and gas industry.</h1>
                    <button className='px-[20px] md:px-[40px] py-[8px] md:py-[15px] bg-[#F40404] text-white text-[14px] md:text-[16px] font-popin font-semibold mt-4 md:mt-7 '>LEARN MORE</button>
                </div>
            </div>
        </div>
        <img className='w-full bg-center bg-no-repeat' src={banner} alt="Banner"/>
    </div>
  )
}

export default Banner