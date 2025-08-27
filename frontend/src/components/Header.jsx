import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';
import { Link } from "react-router-dom";


const Header = ({ heroRef,onAuthClick }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [atTop, setAtTop] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ Track login state

    const navRef = useRef(null);
    const titleRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    const { y: currentScrollY } = useWindowScroll();

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const handleLogin = () => navigate("/login");

    // ✅ Handle logout
    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate("/login");
    };

    // ✅ Check token on route change or mount
    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, [location]);

    useEffect(() => {
        if (!heroRef?.current) return;

        const heroRect = heroRef.current.getBoundingClientRect();
        const heroTop = window.scrollY + heroRect.top;
        const heroHeight = heroRef.current.offsetHeight;
        const threshold = heroTop + heroHeight * 0.04;

        const isNearTop = currentScrollY < threshold;
        setAtTop(isNearTop);

        const midpoint = heroTop + heroHeight * 0.25;
        if (currentScrollY < midpoint) {
            setIsNavbarVisible(true);
        } else if (currentScrollY > lastScrollY) {
            setIsNavbarVisible(false);
        } else if (currentScrollY < lastScrollY) {
            setIsNavbarVisible(true);
        }

        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY, heroRef]);

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

    // useEffect(() => {
    //     if (titleRef.current) {
    //         gsap.fromTo(
    //             titleRef.current,
    //             {
    //                 x: -100,
    //                 scale: 0.8,
    //                 opacity: 0,
    //                 rotate: -5,
    //                 filter: 'blur(4px)',
    //             },
    //             {
    //                 x: 0,
    //                 scale: 1,
    //                 opacity: 1,
    //                 rotate: 0,
    //                 filter: 'blur(0px)',
    //                 duration: 2,
    //                 ease: 'elastic.out(1, 0.5)',
    //                 delay: 0.7,
    //             }
    //         );
    //     }
    // }, []);

    return (
        <div
            ref={navRef}
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${atTop
                ? 'bg-transparent backdrop-blur-0'
                : 'bg-black/30 backdrop-blur-md shadow-md'
                }`}
        >
            <header className="py-6 px-6 flex justify-between items-center">

                <Link className="flex items-center gap-2 space-x-2">

                        {/* <img
                            src="/img/go.png"
                            alt="Logo"
                            className="h-15 object-cover object-center"
                        /> */}

                        <p
                            ref={titleRef}
                            href="/"
                            className="text-[40px] text-transparent bg-clip-text  bg-gradient-to-tr from-purple-600 via-purple-400 to-purple-300"
                        >
                            Tamper Detect
                        </p>                 
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    <nav className="flex gap-6 text-white text-[18px]">
                        <a href="/Pricing" className="hover:text-gray-300 transition">Plans & Pricing</a>
                        <a href="/homepage" className="hover:text-gray-300 transition">How it works</a>
                        <a href="/About" className="hover:text-gray-300 transition">About Us</a>
                    </nav>

                    <div className="flex gap-4">
                        {isLoggedIn ? (
                            <>
                                <a
                                    href="/profile"
                                    className="text-white font-bold px-4 py-2 rounded-md bg-black/40 border border-white hover:scale-105 transition"
                                >
                                    Profile
                                </a>
                                {/* <button
                                    onClick={handleLogout}
                                    className="text-white font-bold px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 transition"
                                >
                                    Logout
                                </button> */}
                            </>
                        ) : (
                            <>
                                <button
                                    className="text-white font-bold px-4 py-2 rounded-md bg-black/40 border border-white hover:scale-105 transition"
                                    onClick={handleLogin}
                                >
                                    Login
                                </button>
                                
                            </>
                        )}
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

                        {isLoggedIn ? (
                            <>
                                <a
                                    href="/profile"
                                    className="text-blue-700 font-bold px-4 py-2 rounded-md hover:bg-blue-100"
                                >
                                    Profile
                                </a>
                                <button
                                    onClick={handleLogout}
                                    className="text-white px-4 py-2 rounded-md bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 transition"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    className="text-blue-700 font-bold border px-4 py-2 rounded-md bg-white hover:bg-blue-100"
                                    onClick={handleLogin}
                                >
                                    Login
                                </button>
                                
                            </>
                        )}
                    </div>
                </nav>
            )}
        </div>
    );
};

export default Header;






