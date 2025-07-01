

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';

const Header = ({ heroRef }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const navRef = useRef(null);
    const navigate = useNavigate();
    const { y: currentScrollY } = useWindowScroll();

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const handleLogin = () => navigate("/login");
    const handleSignup = () => navigate("/signup");

    // Floating behavior logic
    useEffect(() => {
        const heroBottom = heroRef?.current?.getBoundingClientRect().bottom || 0;
        if (!heroRef?.current) return;

    const heroTop = heroRef.current.getBoundingClientRect().top + window.scrollY;
    const heroHeight = heroRef.current.offsetHeight;
    const midpoint = heroTop + heroHeight / 4;

        
        if (currentScrollY < midpoint) {
            setIsNavbarVisible(true);
        } else if (currentScrollY > lastScrollY) {
            setIsNavbarVisible(false); // scroll down → hide
        } else if (currentScrollY < lastScrollY) {
            setIsNavbarVisible(true); // scroll up → show
        }

        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY, heroRef]);

    // Animate navbar
    useEffect(() => {
        if (navRef.current) {
            gsap.to(navRef.current, {
                y: isNavbarVisible ? 0 : -100,
                duration: 0.3,
                ease: "power2.out",
                opacity: isNavbarVisible ? 1 : 0,
            });
        }
    }, [isNavbarVisible]);

    return (
        <div ref={navRef} className="fixed top-0 inset-x-0 z-50 bg-black shadow-md transition-all">
            <header className="py-6 px-6 flex justify-between items-center">
                <a href="/" className="text-[32px] font-bold text-white">Tamper Detect</a>

                <div className="hidden md:flex items-center  gap-6">
                    <nav className="flex gap-6 text-white text-[18px]">
                        <a href="/Pricing" className="hover:text-gray-300 transition">Plans & Pricing</a>
                        <a href="/homepage" className="hover:text-gray-300 transition">How it works</a>
                        <a href="/About" className="hover:text-gray-300 transition">About Us</a>
                        <a href="#" className="hover:text-gray-300 transition">Use Cases</a>
                    </nav>

                    <div className="flex gap-4">
                        <button className="text-white font-bold px-4 py-2 rounded-md bg-black border border-white hover:scale-105 transition" onClick={handleLogin}>Login</button>
                        <button className="text-black font-bold px-4 py-2 rounded-md bg-white hover:scale-105 transition" onClick={handleSignup}>Sign Up</button>
                    </div>
                </div>

                <button onClick={toggleMenu} className="md:hidden text-2xl text-white">
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </header>

            {menuOpen && (
                <nav className="md:hidden bg-white shadow-md py-4 mt-1">
                    <div className="flex flex-col items-center gap-4">
                        <a href="#features" className="hover:text-blue-500 transition">Features</a>
                        <a href="#about" className="hover:text-blue-500 transition">About</a>
                        <button className="text-blue-700 font-bold border px-4 py-2 rounded-md bg-white hover:bg-blue-100">Login</button>
                        <button className="text-white px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition">Sign Up</button>
                    </div>
                </nav>
            )}
        </div>
    );
};

export default Header;
