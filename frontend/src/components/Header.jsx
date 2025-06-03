import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    }
    const handleSignup = () => {
        navigate("/signup");
    }
    return (
        <div>
            {/* Header */}
            <header className="bg-black shadow-md py-6 px-6 flex justify-between items-center">
                <a href="/" className="text-4xl font-bold  text-white">TamperDetect</a >

                
                {/* Desktop Navigation & Auth Buttons */}
<div className="hidden md:flex items-center gap-6">
    <nav className="flex gap-6 text-white">
        <a href="/Pricing" className="hover:text-gray-300 hover:underline transition transform hover:scale-120 active:scale-95">Plans & Pricing</a>
        <a href="/homepage" className="hover:text-gray-300 hover:underline transition transform hover:scale-120 active:scale-95">How it works</a>
        <a href="/About" className="hover:text-gray-300 hover:underline transition transform hover:scale-120 active:scale-95">About Us</a>
        <a href="#" className="hover:text-gray-300 hover:underline transition transform hover:scale-120 active:scale-95">Use Cases</a>
       
    </nav>


                    {/* Auth Buttons */}
                    <div className="flex gap-4">
                        <button className="text-black font-bold px-4 py-2 rounded-md 
          bg-white 
          transition transform hover:scale-108" onClick={handleLogin}>
                            Login
                        </button>

                        <button className="text-black font-bold px-4 py-2 rounded-md 
          bg-white 
          transition transform hover:scale-108" onClick={handleSignup}>
                            Sign Up
                        </button>

                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button onClick={toggleMenu} className="md:hidden text-2xl">
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </header>

            {/* Mobile Navigation */}
            {menuOpen && (
                <nav className="md:hidden bg-white shadow-md py-4">
                    <div className="flex flex-col items-center gap-4">
                        <a href="#features" className="hover:text-blue-500 transition">Features</a>
                        <a href="#about" className="hover:text-blue-500 transition">About</a>
                       
                        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md 
          bg-gradient-to-r from-blue-500 to-blue-800 hover:from-blue-200 hover:to-blue-400 transition">
                            Login
                        </button>

                        <button className="text-white px-4 py-2 rounded-md 
          bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition">
                            Sign Up
                        </button>


                    </div>
                </nav>
            )}
        </div>
    )
}

export default Header
