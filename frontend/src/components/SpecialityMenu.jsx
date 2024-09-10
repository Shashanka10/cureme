import React from 'react'
import { specialityData } from '../assets/assets_frontend/assets'
import {Link} from "react-router-dom"

const SpecialityMenu = () => {
  return (
    <div id='speciality' className='flex flex-col items-center gap-5 text-gray-800 py-16'>
      <h1 className='text-3xl font-medium'>Find by Speciality</h1>
      <p className='text-wrap sm:w-1/3 text-center text-base font-normal'>Browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
      <div className='flex sm:justify-center items-center gap-4 md:gap-6 pt-5 w-full overflow-scroll'>
        {specialityData.map((item, index)=>(
            <Link className='flex flex-col items-center text-xs sm:text-sm md:text-base cursor-pointer flex-shrink-0 hover:translate-y-[-8px] transition-all duration-500' key={index} to={`/doctors/${item.speciality}`}>
                <img 
                    src={item.image}
                    alt='specimg'
                    className='w-16 sm:w-24 md:w-32 mb-2'
                />
                <p>{item.speciality}</p>
            </Link>            
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
