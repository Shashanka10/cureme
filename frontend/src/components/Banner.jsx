import React from 'react';
import { assets } from '../assets/assets_frontend/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className="flex my-20 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-24 rounded-3xl bg-secondary">

            <div className="flex-1 py-8 sm:py-10 md:py-12 lg:py-20 xl:py-24">
                <p className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 text-center md:text-left text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
                    Book Appointment <span>With 100+ Trusted Doctors</span>
                </p>
                <div className="text-center md:text-left">
                    <button
                        onClick={() => navigate("/login")}
                        className="bg-white text-sm md:text-lg py-3 px-10 text-gray-600 font-semibold rounded-full mt-6 hover:scale-105 transition-transform duration-500 hover:text-black">
                        Create account
                    </button>
                </div>
            </div>

            <div className="md:w-1/2 lg:w-[400px] relative hidden md:block">
                <img
                    src={assets.appointment_img}
                    alt="bannerimg"
                    className="w-full absolute bottom-0 right-0 max-w-md"
                />
            </div>
        </div>
    );
};

export default Banner;
