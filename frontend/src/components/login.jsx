import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Invalid email");
      setSuccess("");
      return;
    } else if (!password) {
      setError("Password cannot be empty");
      setSuccess("");
      return;
    }

    setError("");

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("userEmail", email);
        localStorage.setItem("token", data.token);
        navigate("/");
        setSuccess("Login successful!");
        setError("");
        console.log("Login successful", data);
      } else {
        setError(data.message || "Login failed");
        setSuccess("");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-purple-400 text-center mb-6">
          Welcome Back
        </h1>
        <p className="text-gray-400 text-center mb-6">
          Login to your account to continue
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full mt-1 px-4 py-2 border rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-green-400 focus:outline-none ${
                error === "Invalid email" ? "border-red-500" : "border-gray-600"
              }`}
              placeholder="Enter your email"
            />
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
              className="w-full mt-1 px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
  type="submit"
  className="w-full py-2 rounded-lg text-white bg-purple-600"
>
  Login
</button>

        </form>

        {/* Error Message */}
        {error && <p className="text-sm text-red-500 text-center mt-4">{error}</p>}

        {/* Success Message */}
        {success && <p className="text-sm text-green-500 text-center mt-4">{success}</p>}

        <p className="text-sm text-gray-400 text-center mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-400 font-medium hover:underline">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
