import React from 'react'
import {Button} from "@nextui-org/button";

const Hero = () => {
    
  return (
    <div className='h-[95vh] w-full relative '>
        <div className='hero_section h-full w-full flex flex-col items-center justify-center'>
            <h1 className='text-white text-3xl'>
            Welcome to the Future 
            </h1>
            <h1 className='text-white text-[30px] xl:text-[60px] font-bold pb-6'>
            Where Technology Meets Possibility
            </h1>
            <Button color="secondary" variant="shadow" className='w-[150px] text-2xl font-bold'>
                Action
            </Button> 
        </div>
           
    </div>
  )
}

export default Hero