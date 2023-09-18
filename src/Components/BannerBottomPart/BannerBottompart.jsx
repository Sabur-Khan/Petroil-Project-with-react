import React from 'react'

const BannerBottompart = () => {
  return (
    <div className="max-w-container mx-auto">
        <div className='w-full lg:flex md:flex-col lg:flex-row text-center lg:text-left justify-between items-center py-10'>
            <div className='w-full lg:w-[300px]'>
                <h2 className='text-[36px] lg:text-5xl font-bold font-popin'>
                    The biggest
                    supplier on
                    the country
                </h2>
            </div>
            <div className='w-full lg:w-[50%]'>
                <p className='text-[#6C6C6C] text-base font-popin font-medium'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
            </div>
        </div>
    </div>
  )
}

export default BannerBottompart