import React from 'react'
import {assets} from "../assets/assets_frontend/assets"

const About = () => {
  return (
    <div className='py-5 flex flex-col space-y-14'>
      <div className='text-3xl font-semibold text-gray-600'>
        <p className='flex justify-center gap-3 tracking-wider'>ABOUT<span className='text-secondary'>US</span></p>
      </div>
      <div className='flex items-center gap-14 text-lg text-justify'>
        <img 
          src={assets.about_image} 
          alt='abtimg'
          className='w-[380px] rounded-full shadow-xl border-2 border-secondary'
        />
        <div className='flex flex-col space-y-8'>
          <div className='space-y-3'>
        <p>Welcome to <span className='text-secondary font-semibold'>CureMe</span>, your trusted partner in managing your healthcare needs conveniently. With our easy-to-use platform, you can effortlessly browse through a list of qualified doctors, select the one that best fits your requirements, choose a preferred date and time, and book an appointment with just a few clicks. At CureMe, we prioritize your health by offering a seamless and reliable way to connect with medical professionals, ensuring that your healthcare is always in good hands.</p>
        <p>Our platform offers a variety of specialists across different medical fields, giving you access to expert healthcare providers all in one place. Whether you're seeking routine check-ups, consultations, or specialized treatments, CureMe simplifies the process by allowing you to manage appointments based on your schedule. We are committed to making healthcare more accessible and hassle-free, putting you in control of your well-being.</p>
        </div>
        <div className='space-y-2'>
          <p className='font-semibold text-xl'>Our Vision</p>
          <p>At CureMe, our vision is to revolutionize the healthcare experience by providing a seamless, accessible, and user-friendly platform where patients can connect with trusted medical professionals. We aim to empower individuals to take charge of their health by simplifying the appointment process and bridging the gap between patients and doctors. Our ultimate goal is to make quality healthcare accessible to everyone, ensuring that timely care and expert guidance are just a few clicks away.</p>
          </div>
        </div>
      </div>
      <div className='space-y-6'>
          <p className='font-semibold text-3xl text-gray-500 text-center'>Why Choose Us</p>
          <div className='flex items-center justify-between space-x-5 border p-6 py-10 rounded-xl'>
            <div className='border border-primary p-5 rounded-3xl space-y-2 text-center hover:scale-105 hover:cursor-default transition-all duration-500 hover:shadow-lg'>
              <h1 className='font-semibold text-xl'>Efficiency</h1>
              <p className='text-gray-500'>At CureMe, we streamline the entire booking process, making it quick and easy to schedule appointments with just a few clicks.</p>
            </div>
            <div className='border border-primary p-5 rounded-3xl space-y-2 text-center hover:scale-105 hover:cursor-default transition-all duration-500 hover:shadow-lg'>
            <h1 className='font-semibold text-xl'>Convenience</h1>
            <p className='text-gray-500'>Enjoy the flexibility of choosing your preferred doctor, time, and date from anywhere, anytime, using our user-friendly platform.</p>
            </div>
            <div className='border border-primary p-5 rounded-3xl space-y-2 text-center hover:scale-105 hover:cursor-default transition-all duration-500 hover:shadow-lg'>
            <h1 className='font-semibold text-xl'>Personalization</h1>
            <p className='text-gray-500'>We tailor each experience to your unique healthcare needs, ensuring you receive personalized care and attention from the best professionals.</p>
            </div>
          </div>
          </div>
    </div>
  )
}

export default About
