import React from "react";
import { FaFileImage, FaFileAlt, FaBrain, FaRocket, FaShieldAlt } from "react-icons/fa";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const LandingPage = () => {
    const navigator = useNavigate();
    const { heroRef } = useOutletContext(); // receive the ref
    const featuresHeadingRef = useRef(null); // new ref

    useEffect(() => {
    gsap.fromTo(
        featuresHeadingRef.current,
        {
            opacity: 0,
            y: 100,
        },
        {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: featuresHeadingRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse", // key change here
                markers: false,
            },
        }
    );
}, []);


    return (
        <div className="bg-gray-50 max-h-full">



            <section
                ref={heroRef}
                className="relative h-[100vh] w-full overflow-hidden bg-black "
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                    style={{ backgroundImage: "url('/img/image 1.png')" }}
                ></div>

                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

                <div className="relative z-20 flex flex-col justify-center items-center text-[#f5f5f5] h-full text-center px-4">
                    <h1 className="text-6xl  font-bold mb-4 leading-tight drop-shadow-lg">
                        Detect And Protect
                    </h1>
                    <p className="text-2xl max-w-3xl mx-auto text-gray-300 drop-shadow-md">
                        A powerful AI-based system for verifying the authenticity of images and documents in real-time.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-6">
                        <button
                            className="flex items-center gap-3 text-lg bg-[#0B0B0B] text-white px-8 py-4 rounded-xl shadow-xl  transition-all transform  border border-white-[#f5f5f5] hover:scale-105 bg-gradient-to-r hover:from-purple-600 hover:to-black"
                            onClick={() => navigator("/singleimagepricing")}
                        >
                            <FaFileImage className="text-2xl" /> Upload Image
                        </button>
                        <button
                            className="flex items-center gap-3 text-lg bg-[#0B0B0B] text-white px-8 py-4 rounded-xl shadow-xl bg-gradient-to-r hover:from-blue-700 hover:to-black transition-all transform hover:scale-105  border border-white-[#f5f5f5]"
                            onClick={() => navigator("/singledocument")}
                        >
                            <FaFileAlt className="text-2xl" /> Upload Document
                        </button>
                    </div>
                </div>
            </section>


            {/* Features Section */}
            <section id="features" className="py-16 bg-black text-white pb-30">
                <div className="max-w-6xl mx-auto px-1">
                    {/* <h2 className="text-6xl font-bold text-center mt-10 mb-40 animate-fadeIn text-purple-400">Key Features</h2> */}
                    {/* <h2
                        className="text-6xl font-bold text-center mt-10 mb-40 animate-fadeIn text-transparent bg-gradient-to-b from-purple-400 to-purple-800 bg-clip-text drop-shadow-[0_5px_5px_rgba(0,0,0,0.6)]"
                    >
                        Key Features
                    </h2> */}
                    <h2
                        ref={featuresHeadingRef}
                        className="text-6xl font-bold text-center  mt-10 mb-40 text-transparent bg-gradient-to-b from-purple-400 to-purple-800 bg-clip-text drop-shadow-[0_5px_5px_rgba(0,0,0,0.6)]"
                    >
                        Key Features
                    </h2>





                    <div className="grid md:grid-cols-3  gap-10">

                        {/* <div className="p-6 bg-gray-900 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:bg-purple-700 hover:shadow-2xl "> */}
                        <div className="group w-full h-80 p-6 bg-gray-900 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:bg-gray-700 hover:shadow-2xl hover:shadow-purple-400">

                            <div className=" flex items-center mb-8 gap-4 mb-14">
                                <FaBrain className="text-purple-400 text-5xl group-hover:text-black" />
                                <h3 className="text-3xl  font-semibold">AI-Powered Detection</h3>
                            </div>
                            <p className="text-gray-300 text-xl">
                                Our advanced AI models analyze images and documents, detecting even the most sophisticated forgeries and manipulations.
                            </p>
                        </div>

                        <div className=" group p-6 bg-gray-900 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:bg-gray-700 hover:shadow-2xl  hover:shadow-blue-400">
                            <div className="flex items-center gap-4 mb-14">
                                <FaRocket className="text-blue-400 text-5xl group-hover:text-black" />
                                <h3 className="text-3xl font-semibold">Real-Time Processing</h3>
                            </div>
                            <p className="text-gray-300 text-xl ">
                                Get instant verification results, allowing you to quickly determine the authenticity of your files without long waits.
                            </p>
                        </div>

                        <div className="group p-6 bg-gray-900 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:bg-gray-700 hover:shadow-2xl hover:shadow-green-400">
                            <div className="flex items-center gap-4 mb-14">
                                <FaShieldAlt className="text-green-400 text-4xl group-hover:text-black" />
                                <h3 className="text-3xl font-semibold ml-16"> Secure &<br /> Reliable</h3>
                            </div>
                            <p className="text-gray-300 text-xl">
                                Your privacy matters. Our encryption ensures your data remains protected while undergoing verification.
                            </p>
                        </div>

                    </div>
                </div>
            </section >

        </div >
    );
};

export default LandingPage;
