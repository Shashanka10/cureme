import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {

  const navigate = useNavigate();
  const { speciality } = useParams();
  const[filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);

  const applyFilter = ()=> {
    if(speciality){
      setFilterDoc(doctors.filter(doc=> doc.speciality === speciality))
    }else{
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{
    applyFilter()
  },[doctors, speciality])

  return (
    <div>
      <p className="text-gray-500 pb-4 text-xl font-medium text-center">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-12 mt-5">
        <div className="flex flex-col text-wrap gap-2 md:gap-4 text-sm md:text-lg text-gray-600">
          <p onClick={()=> speciality === 'General physician' ? navigate('/doctors'): navigate('/doctors/General physician') } className={`pl-3 py-1.5 md:py-2 pr-16 border-2 border-secondary rounded-lg transition-all cursor-pointer hover:scale-105 delay-100 ${speciality === "General physician" ? "bg-secondary border-secondary text-white" : ""}`}>General Physician</p>
          <p onClick={()=> speciality === 'Gynecologist' ? navigate('/doctors'): navigate('/doctors/Gynecologist') } className={`pl-3 py-1.5 md:py-2 pr-16 border-2 border-secondary rounded-lg transition-all cursor-pointer hover:scale-105 delay-100 ${speciality === "Gynecologist" ? "bg-secondary border-secondary text-white" : ""}`}>Gynecologist</p>
          <p onClick={()=> speciality === 'Dermatologist' ? navigate('/doctors'): navigate('/doctors/Dermatologist')} className={`pl-3 py-1.5 md:py-2 pr-16 border-2 border-secondary rounded-lg transition-all cursor-pointer hover:scale-105 delay-100 ${speciality === "Dermatologist" ? "bg-secondary border-secondary text-white" : ""}`}>Dermatologist</p>
          <p onClick={()=> speciality === 'Pediatricians' ? navigate('/doctors'): navigate('/doctors/Pediatricians')} className={`pl-3 py-1.5 md:py-2 pr-16 border-2 border-secondary rounded-lg transition-all cursor-pointer hover:scale-105 delay-100 ${speciality === "Pediatricians" ? "bg-secondary border-secondary text-white" : ""}`}>Pediatricians</p>
          <p onClick={()=> speciality === 'Neurologist' ? navigate('/doctors'): navigate('/doctors/Neurologist')} className={`pl-3 py-1.5 pr-16 md:py-2 border-2 border-secondary rounded-lg transition-all cursor-pointer hover:scale-105 delay-100 ${speciality === "Neurologist" ? "bg-secondary border-secondary text-white" : ""}`}>Neurologist</p>
          <p onClick={()=> speciality === 'Gastroenterologist' ? navigate('/doctors'): navigate('/doctors/Gastroenterologist')} className={`pl-3 py-1.5 md:py-2 pr-16 border-2 border-secondary rounded-lg transition-all cursor-pointer hover:scale-105 delay-100 ${speciality === "Gastroenterologist" ? "bg-secondary border-secondary text-white" : ""}`}>Gastroenterologist</p>
        </div>
        <div className='flex items-center flex-wrap gap-16 justify-center '>
          {filterDoc.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border w-[250px] border-blue-200 shadow-lg rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-8px] transition-all duration-500"
            >
              <img src={item.image} alt="docimg" className="bg-blue-200" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-base text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-lg font-semibold text-wrap">{item.name}</p>
                <p className="text-base font-medium text-wrap text-gray-500">
                  {item.speciality}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
