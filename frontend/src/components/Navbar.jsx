import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { CalendarClock, LogOut, User, Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 relative">
      <div onClick={() => navigate("/")} className="flex items-center gap-3 cursor-pointer z-20">
        <img src={assets.LogoCure} alt="logo" className="w-14 h-14" />
        <h2 className="text-3xl font-bold tracking-wide">CureMe</h2>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden lg:flex items-start gap-8 font-semibold text-xl">
        <NavLink to="/">
          <h1 className="py-1">HOME</h1>
          <hr className="bg-secondary rounded-full border-none h-[4.5px] outline-none w-4/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <h1 className="py-1">ALL DOCTORS</h1>
          <hr className="bg-secondary rounded-full border-none h-[4.5px] outline-none w-4/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <h1 className="py-1">ABOUT</h1>
          <hr className="bg-secondary rounded-full border-none h-[4.5px] outline-none w-4/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <h1 className="py-1">CONTACT</h1>
          <hr className="bg-secondary rounded-full border-none h-[4.5px] outline-none w-4/5 m-auto hidden" />
        </NavLink>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full max-h-full bg-white shadow-lg transition-transform duration-300 ${
          showMenu ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center pt-24 py-5 sm:pt-28 space-y-4">
          <NavLink to="/" onClick={() => setShowMenu(false)} className="text-lg font-semibold">
            HOME
          </NavLink>
          <NavLink to="/doctors" onClick={() => setShowMenu(false)} className="text-lg font-semibold">
            ALL DOCTORS
          </NavLink>
          <NavLink to="/about" onClick={() => setShowMenu(false)} className="text-lg font-semibold">
            ABOUT
          </NavLink>
          <NavLink to="/contact" onClick={() => setShowMenu(false)} className="text-lg font-semibold">
            CONTACT
          </NavLink>
          {!token && (
            <button
              onClick={() => navigate("/login")}
              className="bg-secondary text-white px-6 py-3 rounded-full font-semibold"
            >
              Create Account
            </button>
          )}
        </div>
      </div>

      {/* Profile Menu */}
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              src={assets.profile_pic}
              alt="profilelogo"
              className="w-10 rounded-full"
            />
            <img
              src={assets.dropdown_icon}
              alt="profilelogo"
              className="w-2.5"
            />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-500 hidden group-hover:block">
              <div className="bg-stone-100 rounded-lg min-w-56 flex flex-col gap-6 p-5">
                <span onClick={()=>navigate("/my-profile")} className="hover:text-secondary cursor-pointer flex gap-3 items-center text-base"><User /> My Profile</span>
                <span onClick={()=>navigate("/my-appointments")} className="hover:text-secondary cursor-pointer flex gap-3 items-center text-base"><CalendarClock />My Appointments</span>
                <span onClick={()=>setToken(false)} className="hover:text-secondary cursor-pointer flex gap-3 items-center text-base"><LogOut />Logout</span>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-secondary text-white transition-all hover:translate-y-0.5 hover:ease-in-out px-6 py-3 rounded-full font-semibold hidden md:block"
          >
            Create Account
          </button>
        )}
      </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center z-20">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="p-2 text-gray-600 hover:text-gray-900"
        >
          {showMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
