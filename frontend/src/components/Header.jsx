import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row items-center bg-secondary rounded-3xl px-4 sm:px-6 md:px-10 lg:px-20 pt-10 gap-8 md:gap-0'>
      
      <div className='md:w-1/2 flex flex-col items-center md:items-start gap-6 sm:gap-8 lg:gap-10'>
        <div className='text-center md:text-left'>
          <h1 className='text-xl sm:text-3xl md:text-2xl lg:text-4xl xl:text-5xl text-white font-semibold leading-tight'>
            Book Appointment <br />
            With Trusted Doctors
          </h1>
        </div>

        <div className='flex flex-col md:flex-row items-center gap-4 text-white text-sm sm:text-base md:text-xs font-medium'>
          <img 
            src={assets.group_profiles} 
            alt='appointmentimg' 
            className='w-24 sm:w-28 md:w-24 lg:w-36'
          />
          <p className='text-center md:text-left'>
            Simply browse through our extensive list of trusted doctors,
            <br className='hidden sm:block' />
            schedule your appointment
          </p>
        </div>

        <a 
          href='#speciality' 
          className='flex justify-center items-center gap-3 hover:scale-105 transition-all duration-300 bg-white py-3 md:py-2 md:px-4 lg:py-3 lg:px-6 font-semibold text-secondary rounded-full w-full md:w-[230px] lg:w-[260px]'
        >
          Book appointment <img src={assets.arrow_icon} alt='arrowimg' className='w-4 h-4' />
        </a>
      </div>

      <div className='md:w-1/2 md:mt-0'>
        <img 
          src={assets.header_img} 
          alt='headerimg' 
          className='rounded-lg object-contain w-[250px] sm:w-[350px] md:w-full'
        />
      </div>
    </div>
  );
};

export default Header;
