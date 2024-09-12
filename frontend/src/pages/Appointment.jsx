import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";
import { HandCoins } from "lucide-react";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  return (
    docInfo && (
      <div className="flex flex-col gap-8 p-4 md:p-8">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex justify-center w-full md:w-[400px] shadow-md bg-primary rounded-3xl">
            <img src={docInfo.image} alt="Doctor" className="object-contain w-full h-auto" />
          </div>
          <div className="w-full border border-blue-500 rounded-3xl shadow-md flex flex-col space-y-3 justify-center px-6 md:px-12 py-4">
            <p className="flex items-center text-xl font-semibold gap-4">
              {docInfo.name}
              <img src={assets.verified_icon} alt="Verified" className="w-6" />
            </p>
            <div className="flex items-center gap-4">
              <p>{docInfo.degree} - {docInfo.speciality}</p>
              <button className="flex items-center border border-secondary rounded-full px-4 py-2">
                {docInfo.experience}
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <p className="flex font-semibold text-lg items-center gap-2">
                About <img src={assets.info_icon} alt="Info" className="w-5" />
              </p>
              <p className="text-justify text-base">{docInfo.about}</p>
            </div>
            <div>
              <p className="text-base flex items-center gap-2 font-semibold">
                Appointment Fee <HandCoins className="w-5" /> :{" "}
                <span className="font-bold text-primary text-lg">
                  {currencySymbol}
                  {docInfo.fees}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-6">
          <p className="text-xl font-semibold">Booking slots</p>
          <div className="flex items-center overflow-x-auto gap-6">
            {docSlots.length > 0 &&
              docSlots.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-4 min-w-[80px] rounded-full cursor-pointer ${slotIndex === index ? "bg-primary text-white" : "border border-gray-400"}`}
                >
                  <p>{daysOfWeek[(new Date().getDay() + index) % 7]}</p>
                  <p>{new Date().getDate() + index}</p>
                </div>
              ))}
          </div>
          <div className="flex items-center gap-3 overflow-x-auto">
            {docSlots.length > 0 && docSlots[slotIndex].length > 0 ? (
              docSlots[slotIndex].map((item, index) => (
                <p
                  key={index}
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? "bg-primary text-white" : "text-gray-400 border border-gray-300"}`}
                >
                  {item.time.toLowerCase()}
                </p>
              ))
            ) : (
              <p className="text-gray-500">Slots not available</p>
            )}
          </div>
          <div className="mt-4">
            <button className="bg-secondary text-white text-base font-semibold px-8 py-4 rounded-full hover:scale-105 hover:text-gray-200 transition-all duration-500">
              Book an appointment
            </button>
          </div>
        </div>
        <div>
          <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
        </div>
      </div>
    )
  );
};

export default Appointment;
