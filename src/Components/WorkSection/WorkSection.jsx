import React from 'react'
import workItemOne from '../../assets/work-item-one.jpg'
import workItemTwo from '../../assets/work-item-two.jpg'
import workItemThree from '../../assets/work-item-three.jpg'
import { IoIosArrowForward } from "react-icons/io";
const WorkSection = () => {
  return (
    <div className='py-[110px] '>
        <div className="max-w-container mx-auto">
            <div className='grid grid-cols-1 md:grid-cols-3 gap-11'>
                <div className='relative'>
                    <div className='absolute px-6 py-24 top-0 left-0 w-full h-full bg-black/50'>
                        <p className='mb-5 text-base font-popin text-white font-medium'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                        <button className='bg-white/25 px-8 py-3 text-base font-popin font-semibold text-white'>Read more</button>
                    </div>
                    <img src={workItemOne} alt="workItemOne" />
                </div>
                <div className='relative'>
                    <div className='absolute px-6 py-24 top-0 left-0 w-full h-full bg-black/50'>
                        <p className='mb-5 text-base font-popin text-white font-medium'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                        <button className='bg-white/25 px-8 py-3 text-base font-popin font-semibold text-white'>Read more</button>
                    </div>
                    <img src={workItemTwo} alt="workItemTwo" />
                </div>
                <div className='relative'>
                    <div className='absolute px-6 py-24 top-0 left-0 w-full h-full bg-black/50'>
                        <p className='mb-5 text-base font-popin text-white font-medium'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                        <button className='bg-white/25 px-8 py-3 text-base font-popin font-semibold text-white'>Read more</button>
                    </div>
                    <img src={workItemThree} alt="workItemThree" />
                </div>
            </div>
            <div className='mt-7 flex justify-end'>
               <a href="#"> <h2 className='flex items-center font-bold text-lg font-popin'>MORE FROM THE BLLOG<IoIosArrowForward/></h2></a>
            </div>
        </div>
    </div>
  )
}

export default WorkSection