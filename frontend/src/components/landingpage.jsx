import React from "react";
import { FaFileImage, FaFileAlt } from "react-icons/fa"; // Import icons
import { FaBrain, FaRocket, FaShieldAlt } from "react-icons/fa"; // Import icons
import SingleImagePricing from "./Singlepricingimage";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigator = useNavigate();
    return (
        <div className="bg-gray-50  max-h-full">
     {/* Hero Section */}
<section className="text-center py-20 bg-black text-white h-screen flex flex-col">
    <h1 className="text-6xl font-extrabold mb-4 leading-tight">
        Detect Digital Tampering Instantly
    </h1>
    <p className="text-2xl max-w-3xl mx-auto text-gray-300">
        A powerful AI-based system for verifying the authenticity of images and documents in real-time.
    </p>

    {/* Upload Buttons */}
    <div className="mt-8 flex justify-center space-x-6"> 
        <button className="flex items-center gap-3 text-lg bg-purple-600 text-white px-8 py-4 rounded-xl shadow-xl hover:bg-purple-700 transition-all transform hover:scale-105" onClick={()=>navigator("/singleimagepricing")}>
            <FaFileImage className="text-2xl" /> Upload Image 
        </button>

        <button className="flex items-center gap-3 text-lg bg-blue-600 text-white px-8 py-4 rounded-xl shadow-xl hover:bg-blue-700 transition-all transform hover:scale-105" onClick={()=>navigator("/singledocument")}>
            <FaFileAlt className="text-2xl" /> Upload Document
        </button>
    </div>
</section>



            {/* Features Section */}
        <section id="features" className="py-16 bg-black text-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 animate-fadeIn">Key Features</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    
                    {/* Feature 1 */}
                    <div className="p-6 bg-gray-900 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:bg-purple-700 hover:shadow-2xl">
                        <div className="flex items-center gap-4 mb-4">
                            <FaBrain className="text-purple-400 text-4xl" />
                            <h3 className="text-2xl font-semibold">AI-Powered Detection</h3>
                        </div>
                        <p className="text-gray-300">
                            Our advanced AI models analyze images and documents, detecting even the most sophisticated forgeries and manipulations.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="p-6 bg-gray-900 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-2xl">
                        <div className="flex items-center gap-4 mb-4">
                            <FaRocket className="text-blue-400 text-4xl" />
                            <h3 className="text-2xl font-semibold">Real-Time Processing</h3>
                        </div>
                        <p className="text-gray-300">
                            Get instant verification results, allowing you to quickly determine the authenticity of your files without long waits.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="p-6 bg-gray-900 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:bg-green-700 hover:shadow-2xl">
                        <div className="flex items-center gap-4 mb-4">
                            <FaShieldAlt className="text-green-400 text-4xl" />
                            <h3 className="text-2xl font-semibold">Secure & Reliable</h3>
                        </div>
                        <p className="text-gray-300">
                            Your privacy matters. Our encryption ensures your data remains protected while undergoing verification.
                        </p>
                    </div>
                    
                </div>
            </div>
        </section>

        </div>
    );
};

export default LandingPage;
