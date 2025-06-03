import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate(); 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    
    if (response.ok) {
      alert("User created successfully");
      navigate("/profile");
    } else {
      alert("User not created");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]+$/; // Allows only letters and spaces
    return nameRegex.test(name);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (!validateName(name)) {
      nameError = "Name must contain only letters and spaces.";
    }

    if (!validateEmail(email)) {
      emailError = "Invalid email address.";
    }

    if (password !== confirmPassword) {
      passwordError = "Passwords do not match.";
    }

    setError({ name: nameError, email: emailError, password: passwordError });

    if (!nameError && !emailError && !passwordError) {
      alert("Sign-up successful!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Create an Account
        </h1>
        <p className="text-gray-400 text-center mb-6">
          Sign up to get started with your journey!
        </p>
        <form onSubmit={handleSignup} className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                error.name ? "border-red-500" : "border-gray-600"
              } bg-gray-700 text-white`}
              placeholder="Enter your name"
              required
            />
            {error.name && <p className="text-sm text-red-500 mt-1">{error.name}</p>}
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                error.email ? "border-red-500" : "border-gray-600"
              } bg-gray-700 text-white`}
              placeholder="Enter your email"
              required
            />
            {error.email && <p className="text-sm text-red-500 mt-1">{error.email}</p>}
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-700 text-white"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                error.password ? "border-red-500" : "border-gray-600"
              } bg-gray-700 text-white`}
              placeholder="Confirm your password"
              required
            />
            {error.password && <p className="text-sm text-red-500 mt-1">{error.password}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full py-2 rounded-lg text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-colors duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-400 text-center mt-4">
          Already have an account? {" "}
          <a href="#" className="text-blue-400 font-medium hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
