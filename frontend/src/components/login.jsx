import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const slides = ["/img/ss.jpeg", "/img/signup.jpg", "/img/pp.jpeg"];

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateEmail(email)) {
      setError("Invalid email");
      return;
    }
    if (!password) {
      setError("Password cannot be empty");
      return;
    }

    if (isLogin) {
      try {
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          localStorage.setItem("userEmail", email);
          localStorage.setItem("token", data.token);
          setSuccess("Login successful!");
          navigate("/");
        } else {
          setError(data.message || "Login failed");
        }
      } catch (err) {
        setError("An error occurred. Please try again.");
      }
    } else {
      try {
        const response = await fetch("http://localhost:5000/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ firstName, lastName, email, password }),
        });

        if (response.ok) {
          setSuccess("Account created successfully! Redirecting to login...");
          setTimeout(() => setIsLogin(true), 2000);
        } else {
          const data = await response.json();
          setError(data.message || "User not created. Please try again.");
        }
      } catch (err) {
        setError("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center  bg-gradient-to-r from-[#7a787b]  to-[#1f2937] px-4">
      <div className="flex w-full max-w-5xl h-[570px]  bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Left Image Section */}
        <div className="hidden md:flex md:w-1/2 relative overflow-hidden bg-black text-white">
          {slides.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}

          <div className="absolute top-6 left-0 w-full flex justify-between items-center px-6 z-20">
            <div className="flex items-center gap-2">
              <img src="/img/go.png" alt="Logo" className="w-6 h-6" />
              <span className="font-semibold text-lg tracking-wide">Temper Detect</span>
            </div>
            <a
              href="/"
              className="text-sm border border-white text-white px-4 py-1.5 rounded-full font-medium hover:bg-white hover:text-black transition"
            >
              Back to website →
            </a>
          </div>

          <div className="absolute bottom-16 transform w-full   text-center z-20">
            <p className="text-white text-3xl text-left font-serif ml-10 font-medium leading-tight mb-3">
              <b className="text-5xl">C</b>apturing Moments,<br />Creating Memories
            </p>
            <div className="flex justify-center gap-2">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`h-0.5 w-6 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/40"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-10 bg-white text-black">
          <h2 className="text-3xl font-bold mb-2">
            {isLogin ? "Welcome Back" : "Create your account"}
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            {isLogin ? (
              <>
                Don’t have an account?{' '}
                <button className="text-purple-600 font-medium hover:underline" onClick={() => setIsLogin(false)}>
                  Sign up here
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button className="text-purple-600 font-medium hover:underline" onClick={() => setIsLogin(true)}>
                  Log in
                </button>
              </>
            )}
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-1/2 rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-purple-300 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-1/2 rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-purple-300 focus:outline-none"
                  required
                />
              </div>
            )}

            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-purple-300 focus:outline-none"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-purple-300 focus:outline-none"
              required
            />

            {!isLogin && (
              <div className="flex items-start text-sm mt-1">
                <input
                  type="checkbox"
                  className="mt-1 mr-2 accent-purple-600 focus:ring-2 focus:ring-purple-400"
                  required
                />
                <span>
                  I agree to the{' '}
                  <a href="/Terms" className="text-purple-600 hover:underline font-medium">
                    Terms & Conditions
                  </a>
                </span>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 rounded-xl shadow-md transition"
            >
              {isLogin ? "Login" : "Create account"}
            </button>

            {success && <p className="text-green-600 text-sm text-center">{success}</p>}
            {error && <p className="text-red-600 text-sm text-center">{error}</p>}
          </form>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-200" />
            <span className="px-4 text-gray-400 text-sm">or</span>
            <hr className="flex-grow border-gray-200" />
          </div>

          <button
            type="button"
            onClick={() => {
              window.location.href = "http://localhost:5000/auth/google";
            }}
            className="w-full bg-white border border-gray-300 text-black py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition shadow-sm"
          >
            <img src="/img/google.png" alt="Google" className="w-5 h-5" />
            {isLogin ? "Login with Google" : "Continue with Google"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;


