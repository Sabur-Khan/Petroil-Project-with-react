import React from 'react'
import itemFive from '../../assets/item-five.jpg'
import itemSix from '../../assets/item-six.jpg'
import itemSeven from '../../assets/item-seven.png' 

const Services = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        <div className='p-3 w-full lg:w-[60%]'>
            <h1 className='text-[50px] lg:text-[64px] font-popin font-bold'>Our Services</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className='relative'>
            <div className='absolute top-0 left-0 h-full w-full bg-black/60 py-10 md:py-40'>
                <h2 className='text-center text-white font-popin font-bold md:text-[20px] lg:text-4xl '>Modern natural oil and gas refineries.</h2>
                <button className='mx-5 md:mx-[52px] font-popin text-base text-white py-3.5 px-6 bg-[#F40404] mmd:t-3'>Learn More</button>
            </div>
            <img className='w-full' src={itemFive} alt="" srcset="" />
        </div>
        <div className='relative'>
            <div className='absolute top-0 left-0 h-full w-full bg-black/20 py-10 md:py-40'>
                <h2 className='text-center text-white font-popin font-bold md:text-[20px] lg:text-4xl '>Supply of national industries.</h2>
                <button className='mx-14 md:mx-[125px] font-popin text-base text-white py-3.5 px-6 bg-[#F40404] md:mt-3'>Learn More</button>
            </div>
            <img className='w-full' src={itemSix} alt="" srcset="" />
        </div>
        <div className='relative'>
            <div className='absolute top-0 left-0 h-full w-full bg-black/20 py-10 md:py-40'>
                <h2 className='text-center text-white font-popin font-bold md:text-[20px] lg:text-4xl '>National fuel distribution and supply.</h2>
                <button className='mx-6 md:mx-[52px] font-popin text-base text-white py-3.5 px-6 bg-[#F40404] '>Learn More</button>
            </div>
            <img className='w-full' src={itemSeven} alt="" srcset="" />
        </div>
    </div>
  )
}

export default Services