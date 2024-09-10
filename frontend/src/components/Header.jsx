import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row items-center flex-wrap bg-secondary rounded-3xl px-6 md:px-10 lg:px-20'>
      <div className='md:w-1/2 flex flex-col gap-10'>
        <span className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight flex flex-col gap-3'>
            Book Appointment <span>With Trusted Doctors</span>
        </span>
        <div className='flex flex-col md:flex-row items-center gap-4 text-white text-sm font-medium'>
            <img 
                src={assets.group_profiles}
                alt='appointmentimg'
                className='w-28'
            />
            <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block'/>schedule your appointment</p>
        </div>
        <a href='#speciality' className='flex justify-center items-center gap-3 hover:scale-105 transition-all duration-300 bg-white p-3 font-semibold text-secondary rounded-full w-[250px]'>
            Book appointment <img src={assets.arrow_icon} alt='arrowimg' className='w-4 h-4'/>
        </a>
      </div>

      <div className='md:w-1/2'>
        <img 
            src={assets.header_img} 
            alt='headerimg'
            className=' w-full'
        />
      </div>
    </div>
  )
}

export default Header
