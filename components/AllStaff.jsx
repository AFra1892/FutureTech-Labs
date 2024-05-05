import React from 'react'
import Staff from './Staff'

const AllStaff = () => {
    const allStaffMember = [
        {
            id:1,
            role:"AI Executive",
            desc:"Revenue – Get more ROI from your ML program investment Progress – Stop starting over – works with your existing stack Productivity – Improve efficiency with an enterprise-wide solution",
            imgUrl:"staff1.jpg"
        },
        {
            id:2,
            role:"Data Scientists",
            desc:"Revenue – Get more ROI from your ML program investment Progress – Stop starting over – works with your existing stack Productivity – Improve efficiency with an enterprise-wide solution",
            imgUrl:"staff2.jpg"
        },
        {
            id:3,
            role:"ML Engineering ",
            desc:"Revenue – Get more ROI from your ML program investment Progress – Stop starting over – works with your existing stack Productivity – Improve efficiency with an enterprise-wide solution",
            imgUrl:"staff3.jpg"
        }
    ]
  return (
    <div className='flex justify-center items-center flex-col p-8 my-12'>
    
    <h1 className='text-[45px] mb-8'>Datatron Solves<span className='text-purple-400'>YOUR</span>  AI Problem</h1>
    <div className='flex flex-col lg:flex-row justify-center items-center gap-8 '>
        {
            allStaffMember.map((single)=>(
                <Staff imgUrl={single.imgUrl} role={single.role} desc={single.desc}/>
            ))
        }
        
    </div>
    </div>
  )
}

export default AllStaff