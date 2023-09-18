import React from 'react'
import itemEight from '../../assets/item-eight.jpg'
const Lernmore = () => {
  return (   
    <div className='bg-[#F0F0F0]'>
        <div className='max-w-container mx-auto'>
            <div className='md:grid grid grid-cols-1 md:grid-cols-2 py-6 md:py-40 md:px-36'>
                <div className='md:w-full p-5 md:p-10 bg-[#F40404] text-center'>
                    <h1 className='text-white font-popin md:text-[36px] font-bold'>Learn more about our company</h1>
                </div>
                <div className='relative'>
                    <div className='absolute top-0 left-0 w-full h-full bg-black/20 text-center flex justify-center items-center'>
                        <button className='bg-white text-base font-popin px-3.5 py-2  text-red-500'>Learn More</button>
                    </div>
                    <img src={itemEight} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Lernmore