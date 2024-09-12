import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Ram Bahadur",
    image: assets.profile_pic,
    email: "rambahadur100@gmail.com",
    phone: "+1 123 456 789",
    address: {
      line1: "Dallas Texas",
      line2: "Arlington, USA",
    },
    gender: "Male",
    dob: "1980-01-20",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="min-h-[70vh] flex justify-center items-center py-5">
      <div className="bg-white shadow-xl border-2 rounded-lg p-8 flex flex-col w-full max-w-[600px] gap-5">
        {/* Profile Image */}
        <div className="flex flex-col items-center gap-3">
          <img
            src={userData.image}
            alt="userimg"
            className="w-[130px] object-cover rounded-full border-2 border-primary"
          />
                  {/* Name */}
          {isEdit ? (
            <input
              type="text"
              value={userData.name}
              className="p-2 border border-secondary rounded-md"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          ) : (
            <p className="text-lg md:text-xl text-gray-600 font-semibold">{userData.name}</p>
          )}
        </div>

        <hr className="w-full border-2 border-primary" />

        {/* Contact Information */}
        <div className="flex flex-col items-center space-y-1">
          <p className="font-semibold mb-2 text-xl text-secondary">
            Contact Information
          </p>
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              <p className="font-semibold">Email: </p>
              <p>{userData.email}</p>
            </div>

            <div className="flex items-center gap-2">
              <p className="font-semibold">Phone: </p>
              {isEdit ? (
                <input
                  type="text"
                  value={userData.phone}
                  className="p-2 border border-secondary rounded-md"
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                />
              ) : (
                <p>{userData.phone}</p>
              )}
            </div>

            <div className="flex items-center gap-2">
              <p className="font-semibold">Address: </p>
              <div className="flex flex-col">
                {isEdit ? (
                  <>
                    <input
                      type="text"
                      value={userData.address.line1}
                      className="p-2 border border-secondary rounded-md mb-2"
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          address: { ...prev.address, line1: e.target.value },
                        }))
                      }
                    />
                    <input
                      type="text"
                      value={userData.address.line2}
                      className="p-2 border border-secondary rounded-md"
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          address: { ...prev.address, line2: e.target.value },
                        }))
                      }
                    />
                  </>
                ) : (
                  <p>
                    {userData.address.line1}
                    <br />
                    {userData.address.line2}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Basic Information */}
        <div className="flex flex-col items-center space-y-1">
          <p className="font-semibold mb-2 text-xl text-secondary">
            Basic Information
          </p>
          <div className="flex flex-col items-center gap-3">
          <div className="flex gap-2 items-center">
            <p className="font-semibold">Gender: </p>
            {isEdit ? (
              <select
                value={userData.gender}
                className="p-2 border border-secondary rounded-md"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <p className="font-semibold">DOB: </p>
            {isEdit ? (
              <input
                type="date"
                value={userData.dob}
                className="p-2 border border-secondary rounded-md"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
              />
            ) : (
              <p>{userData.dob}</p>
            )}
          </div>
          </div>
        </div>

        {/* Edit Button */}
        <div className="flex justify-center mt-2">
          {isEdit ? (
            <button
              onClick={() => setIsEdit(false)}
              className="bg-secondary text-white text-lg font-semibold px-12 py-3 rounded-full w-full hover:scale-x-105 hover:text-gray-200 transition-all duration-500"
            >
              Save Information
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="bg-secondary text-white text-lg font-semibold px-12 py-3 rounded-full w-full hover:scale-x-105 hover:text-gray-200 transition-all duration-500"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
