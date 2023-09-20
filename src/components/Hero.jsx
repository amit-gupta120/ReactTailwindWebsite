import React from 'react'
import Typed from 'react-typed';

export default function Hero() {
  return (
    <div className='bg-[#2699fb] w-full py-[170px] '>
        <div className='max-w-[1240px] mx-auto my-[40px]  text-center font-bold'>
            <div className=' text-xl md:text-3xl md:p-[20px]'>
                Learn with Me.  
            </div>
            <h2 className='text-white text-3xl md:text-[50px] md:p-[20px]'>Grow Together.</h2>
            <div className=' text-white text-[20px] md:text-[30px]  md:p-[20px]'>
                Learn  <Typed
                    strings={['Web Development','Front End Development','Full Stack Developement']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={50}
                />
                .
            </div>
        </div>
    </div>
  )
}
