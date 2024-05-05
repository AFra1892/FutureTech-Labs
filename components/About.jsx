import React from 'react'

const About = () => {
    
  return (
    <div className='p-8'>
        <div className='flex flex-col justify-center items-center gap-y-8'>
            <p className=''>We-Bridge Security Solutions</p>
            <h1 className='text-[33px] md:text-[55px]'>Simple. Secure. Connected.</h1>
            <p className='w-[300px] sm:w-[500px] lg:w-[900px] text-center'>Businesses today need to protect their digital assets and information - without complicated and expensive setup. We-Bridge partners with only the best companies to serve you a complete and curated platform of cybersecurity and data management solutions. </p>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-8'>
                <div className='flex flex-row items-center justify-center gap-x-4'>
                    <img src='about1.png' alt='about1'/>
                    <p className='w-[300px]'>One stop shop for the best cybersecurity and data management products </p>
                </div>
                <div className='flex flex-row items-center justify-center gap-x-4'>
                    <img src='about2.png' alt='about1'/>
                    <p className='w-[300px]'>One stop shop for the best cybersecurity and data management products </p>
                </div>
                <div className='flex flex-row items-center justify-center gap-x-4'>
                    <img src='about3.png' alt='about1'/>
                    <p className='w-[300px]'>One stop shop for the best cybersecurity and data management products </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About