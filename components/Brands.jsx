import React from 'react'

const Brands = () => {
  return (
    <div className='p-8'>
        <div className='flex flex-col lg:flex-row gap-x-28 gap-y-12  justify-center items-center'>
            <img className='w-[75px] h-auto' src='brand1.png' alt='brand'/>
            <img className='w-[75px] h-auto' src='brand2.png' alt='brand'/>
            <img className='w-[75px] h-auto' src='brand3.png' alt='brand'/>
            <img className='w-[75px] h-auto' src='brand4.png' alt='brand'/>
            <img className='w-[75px] h-auto' src='brand5.png' alt='brand'/>
        </div>
    </div>
  )
}

export default Brands