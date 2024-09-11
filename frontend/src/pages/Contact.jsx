import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Contact = () => {
  return (
    <div className="py-5 flex flex-col items-center space-y-14">
      <div className="text-3xl font-semibold text-gray-600">
        <p className="flex justify-center gap-3 tracking-wider">
          CONTACT<span className="text-secondary">US</span>
        </p>
      </div>
      <div className="flex items-center gap-28 text-lg text-justify">
        <img
          src={assets.contact_image}
          alt="abtimg"
          className="w-[380px] rounded-full shadow-xl border-2 border-secondary"
        />
        <div className="flex flex-col space-y-8">
          <div className="flex items-center gap-20">
            <div className="space-y-2">
            <p className="text-xl">
              <strong>Office Location:</strong>
            </p>
            <p>State: California</p>
            <p>Country: USA</p>
            </div>
            <div className="space-y-2">
            <p className="text-xl">
              <strong>Contact Details:</strong>
            </p>
            <p>
              Email: <a href="mailto:info@example.com">cureme@gmail.com</a>
            </p>
            <p>
              Telephone: +1 (555) 123-4567
            </p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="font-semibold text-xl">CARRERS AT CUREME</p>
            <p>Learn more about our team and job openings.</p>
            <button className="bg-secondary text-white text-base font-semibold px-8 py-4 rounded-full hover:scale-x-105 hover:text-gray-200 transition-all duration-500">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
