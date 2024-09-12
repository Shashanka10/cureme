import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-6 m-auto min-w-[340px] md:min-w-[500px] border-2 border-secondary rounded-xl p-8 md:p-10 shadow-lg text-zinc-600">
        <div className="space-y-2 text-center">
          <p className="text-3xl font-semibold text-secondary">
            {state === "Sign Up" ? "Create Account" : "Get Started"}
          </p>
          <p className="text-gray-500">
            Please {state === "Sign Up" ? "signup" : "login"} to book an
            appointment.
          </p>
        </div>
        <div className="space-y-4">
          {state === "Sign Up" && (
            <div className="flex flex-col space-y-1">
              <p>Full Name</p>
              <input
                type="text"
                onChange={(e) => setUserName(e.target.userName)}
                value={userName}
                placeholder="Enter your fullname"
                required
                className="border-2 rounded-lg p-3 border-secondary"
              />
            </div>
          )}

          <div className="flex flex-col space-y-1">
            <p>Email</p>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.email)}
              value={email}
              placeholder="Enter your email"
              required
              className="border-2 rounded-lg p-3 border-secondary"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <p>Password</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.password)}
              value={password}
              placeholder="Enter your password"
              required
              className="border-2 rounded-lg p-3 border-secondary"
            />
          </div>
        </div>
        <div className="py-2">
          <button className="bg-secondary text-white text-lg font-semibold p-3 rounded-xl w-full hover:scale-x-105 hover:text-gray-200 transition-all duration-500">
            {state === "Sign Up" ? "SignUp" : "LogIn"}
          </button>
        </div>
        {state === "Sign Up" ? (
          <p className="text-gray-500">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-secondary underline cursor-pointer"
            >
              Login
            </span>
          </p>
        ) : (
          <p className="text-gray-500">
            Don't have an account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-secondary underline cursor-pointer"
            >
              Signup
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
