import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);
  return (
    <div className="flex flex-col gap-10">
      <div className="text-2xl sm:text-3xl font-semibold py-5">
        <p className="text-gray-500 flex justify-center gap-3 tracking-wide">
          MY<span>APPOINTMENTS</span>
        </p>
      </div>
      <div className="flex flex-wrap gap-8 pb-10 justify-around">
        {doctors.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 sm:gap-8 items-center justify-center shadow-lg border border-secondary rounded-3xl p-10 sm:py-5 sm:px-8"
          >
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <img
                src={item.image}
                alt="docimg"
                className="bg-blue-200 rounded-full w-[220px]"
              />
 <div className="text-center sm:text-left">
                <p className="text-xl font-semibold">{item.name}</p>
                <p className="text-gray-500">{item.speciality}</p>
                <div className="flex flex-col text-sm gap-1 mt-2">
                  <p className="font-medium">Address:</p>
                  <p>{item.address.line1}</p>
                  <p>{item.address.line2}</p>
                </div>
                <p className="mt-3 text-sm">
                  <span className="font-medium">Date & Time:</span> 25, Sept, 2024 | 8:30 PM
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-around w-full gap-4">
              <button className="bg-primary text-white text-base font-semibold px-6 py-3 rounded-xl sm:rounded-full hover:scale-105 hover:text-gray-200 transition-transform duration-500">
                Pay Online
              </button>
              <button className="bg-secondary text-white text-base font-semibold px-6 py-3 rounded-xl sm:rounded-full hover:scale-105 hover:text-gray-200 transition-transform duration-500">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
