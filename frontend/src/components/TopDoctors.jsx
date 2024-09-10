import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {

  const navigate = useNavigate();
  const {doctors} = useContext(AppContext)

  return (
    <div className='flex flex-col items-center gap-5 text-gray-800 py-12 md:mx-10'>
      <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
      <p className='text-wrap sm:w-1/3 text-center text-base font-normal'>Browse through our extensive list of trusted doctors.</p>
      <div className='flex items-center flex-wrap gap-10 mt-4 justify-center '>
        {doctors.slice(0,10).map((item,index)=>(
          <div 
            key={index}
            onClick={()=>navigate(`/appointment/${item._id }`)}
            className="border w-[300px] border-blue-200 shadow-lg rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-8px] transition-all duration-500"
            >
            <img 
              src={item.image}
              alt='docimg'
              className='bg-blue-200'
            />
            <div className='p-4'>
              <div className='flex items-center gap-2 text-base text-center text-green-500'>
                <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
              </div>
              <p className='text-lg font-semibold'>{item.name}</p>
              <p className='text-base font-medium text-gray-500'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button 
          onClick={()=>navigate('/doctors')}
          className='bg-blue-200 text-xl py-3 px-16 text-gray-600 font-semibold rounded-full mt-6 hover:scale-x-105 hover:text-black transition-all duration-500'>
            More
        </button>
      </div>
    </div>
  )
}

export default TopDoctors
