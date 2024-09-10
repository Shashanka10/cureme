import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({docId, speciality}) => {
    const{doctors} = useContext(AppContext)
    const[relDoc, setRelDoc] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        if(doctors.length > 0 && speciality){
            const doctorsData  = doctors.filter((doc)=> doc.speciality === speciality && doc._id !== docId)
            setRelDoc(doctorsData)
        }
    },[doctors,speciality,docId])
  return (
    <div className='flex flex-col gap-2 ml-96 text-gray-800 py-3'>
    <h1 className='text-3xl font-semibold'>Related Doctors</h1>
    <p className='text-wrap text-gray-500 text-sm font-medium'>Simply browse through our extensive list of trusted doctors.</p>
    <div className='flex flex-wrap gap-10 mt-4'>
      {relDoc.slice(0,5).map((item,index)=>(
        <div 
          key={index}
          onClick={()=>{navigate(`/appointment/${item._id }`); scrollTo(0,0)}}
          className="border w-[220px] border-blue-200 shadow-lg rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-8px] transition-all duration-500"
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
        className='bg-blue-200 text-base py-3 px-8 text-gray-600 font-semibold rounded-3xl mt-6 hover:scale-x-105 hover:text-black transition-all duration-500'>
          More
      </button>
    </div>
  </div>
  )
}

export default RelatedDoctors
