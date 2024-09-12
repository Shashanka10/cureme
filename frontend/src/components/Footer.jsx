import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-12 py-3 gap-6 bg-gray-100">

      <div className="flex flex-col gap-8 md:flex-row justify-around w-full px-6 md:px-12 lg:px-16">

        <div className="flex flex-col items-center md:items-start gap-5 md:w-1/3">
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src={assets.LogoCure}
              alt="footerlogo"
              className="w-12 h-12"
            />
            <p className="text-xl font-semibold">CureMe</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 leading-6 text-center md:text-left">
              <span className="font-semibold">CureMe</span> is a seamless doctor appointment booking app that allows patients to quickly find doctors, check availability, and book appointments.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <p className="text-xl font-semibold mb-5">Get In Touch</p>
          <ul className="flex flex-col items-center md:items-start gap-2 text-gray-600">
            <li>+ XXXXXXXXXX</li>
            <li>cureme100@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="w-full">
        <hr className="border border-gray-300" />
        <p className="text-gray-600 text-center mt-2 text-xs sm:text-sm lg:text-base">
          Copyright 2024 © CureMe - All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
