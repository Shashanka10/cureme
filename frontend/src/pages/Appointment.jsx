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

    //getting current date
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      //getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      //setting and time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      //setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        //add slot to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        //increment current date by 30 mins
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return (
    docInfo && (
      <div className="flex flex-col gap-8">
        <div className="flex gap-10">
          <div className="flex justify-center w-[400px] shadow-md bg-primary rounded-3xl">
            <img src={docInfo.image} alt="docimg" className="object-contain"/>
          </div>
          <div className="w-full border border-blue-500 rounded-3xl shadow-md flex flex-col space-y-3 justify-center px-12">
            <p className="flex items-center text-xl font-semibold gap-4">
              {docInfo.name}
              <img src={assets.verified_icon} alt="verifiedicon" />
            </p>
            <div className="flex items-center gap-4">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="flex cursor-default items-center border border-secondary rounded-full px-4 py-2">
                {docInfo.experience}
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <p className="flex font-semibold text-lg items-center gap-2">
                About <img src={assets.info_icon} alt="infoicon" />
              </p>
              <p className="text-justify text-wrap">{docInfo.about}</p>
            </div>
            <div>
              <p className="text-base flex items-center gap-2 font-semibold">
                Appointment Fee <HandCoins /> :{" "}
                <span className="font-bold text-primary text-lg">
                  {currencySymbol}
                  {docInfo.fees}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col ml-96 gap-5">
          <p className="text-xl font-semibold">Booking slots</p>
          <div className="flex items-center w-full overflow-x-scroll gap-6">
            {docSlots.length &&
              docSlots.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-primary text-white"
                      : "border-gray-400 border"
                  }`}
                >
                  <p>{daysOfWeek[(new Date().getDay() + index) % 7]}</p>
                  <p>{new Date().getDate() + index}</p>
                </div>
              ))}
          </div>
          <div className="flex items-center gap-3 overflow-x-scroll">
          {docSlots.length && docSlots[slotIndex].length > 0 ? (
              docSlots[slotIndex].map((item, index) => (
                <p
                  key={index}
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime
                      ? "bg-primary text-white"
                      : "text-gray-400 border border-gray-300"
                  }`}
                >
                  {item.time.toLowerCase()}
                </p>
              ))
            ) : (
              <p className="text-gray-500">Slots not available</p> // This will show if no slots are available
            )}
          </div>
          <div className="mt-4">
            <button className="bg-secondary text-white text-base font-semibold px-8 py-4 rounded-full hover:scale-x-105 hover:text-gray-200 transition-all duration-500">
              Book an appointment
            </button>
          </div>
        </div>
        <div>
          <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
        </div>
      </div>
    )
  );
};

export default Appointment;
