import React from 'react'
import brandOne from '../../assets/brand-one.png'
import brandTwo from '../../assets/brand-two.png'
import brandThree from '../../assets/brand-three.png'
import brandFour from '../../assets/brand-four.png'
const BrandSection = () => {
  return (
    <div className='bg-white'>
        <div className='max-w-container mx-auto'>
            <div className='py-[100px] grid grid-cols-2 md:grid-cols-4'>
                <img src={brandOne} alt="" srcset="" />
                <img src={brandTwo} alt="" srcset="" />
                <img src={brandThree} alt="" srcset="" />
                <img src={brandFour} alt="" srcset="" />
            </div>
        </div>
    </div>
  )
}

export default BrandSection