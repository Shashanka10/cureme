import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-12 py-3 gap-6'>
      <div className='flex flex-col gap-8 md:flex-row justify-between'>
        <div className='flex flex-col items-center md:items-start px-3 gap-5 md:w-1/3'>
            <div className='flex items-center gap-3 cursor-pointer'>
            <img 
                src={assets.LogoCure}
                alt='footerlogo'
                className='w-12 h-12'
            />
            <p className="text-xl font-semibold">CureMe</p>
            </div>
            <div>
                <p className='text-sm text-gray-600 leading-6 text-justify'><span className='font-semibold'>CureMe</span> is a seamless doctor appointment booking app that allows patients to quickly find doctors, check availability, and book appointments. It simplifies healthcare access, reducing wait times and improving patient care.</p>
            </div>
        </div>
        <div className='flex flex-col items-center'>
            <p className='text-xl font-semibold mb-5'>COMPANY</p>
            <ul className='flex flex-col items-center gap-2 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='flex flex-col items-center'>
            <p className='text-xl font-semibold mb-5'>Get In Touch</p>
            <ul className='flex flex-col items-center gap-2 text-gray-600'>
                <li>+ XXXXXXXXXX</li>
                <li>cureme100@gmail.com</li>
            </ul>
        </div>
      </div>
      <div className='flex flex-col w-full'>
        <hr className='border border-gray-300'/>
        <p className='text-gray-600 text-center mt-2 text-xs sm:text-sm lg:text-base'>Copyright 2024 © CureMe - All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
