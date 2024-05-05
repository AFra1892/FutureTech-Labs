import React from 'react'

const Staff = ({imgUrl , role , desc}) => {
  return (
    <div className='p-4 rounded-lg shadow-2xl bg-white text-black h-auto w-[400px]'>
        <div className='flex flex-col justify-center items-center gap-y-8'>
            <img className='rounded-full' src={imgUrl} alt='image'/>
            <h1 className='text-3xl font-bold'>{role}</h1>
            <hr className='bg-black h-1 w-8'/>
            <p className='w-[250px]'>{desc}</p>
            <a href='#'>Get More ROI</a>
        </div>
    </div>
  )
}

export default Staff