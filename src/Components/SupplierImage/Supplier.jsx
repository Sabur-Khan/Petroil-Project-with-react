import React from 'react'
import itemOne from '../../assets/item-one.png'
import itemTwo from '../../assets/item-two.png'
import itemThree from '../../assets/item-three.png'
import itemFour from '../../assets/item-four.png'
const Supplier = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 py-4'>
        <div>
            <img className='w-full' src={itemOne} alt="" srcset="" />
        </div>
        <div>
            <img className='w-full' src={itemTwo} alt="" srcset="" />
        </div>
        <div>
            <img className='w-full' src={itemThree} alt="" srcset="" />
        </div>
        <div>
            <img className='w-full' src={itemFour} alt="" srcset="" />
        </div>
    </div>
  )
}

export default Supplier