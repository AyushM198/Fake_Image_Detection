import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SingleImagePricing = () => {
  const navigator = useNavigate();
  return (
    <section className="bg-black text-white py-24 ">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-6">Image Verification Pricing</h1>
        <p className="text-xl text-gray-300 mb-10">
          Upload and verify a single image with our AI-powered system.
        </p>

        {/* Pricing Card */}
        <div className="bg-white text-black p-10 rounded-3xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-purple-500">
          <h2 className="text-3xl font-bold text-purple-600 mb-4">Single Image Verification</h2>
          <p className="text-gray-600 mb-6">One-time analysis for fraud detection</p>

          <h3 className="text-5xl font-bold mb-2">₹15</h3>
          <p className="text-gray-500 text-sm">One-time payment</p>

          <ul className="mt-6 space-y-3 text-gray-700 text-left">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-purple-600" /> AI-Powered Verification
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-purple-600" /> Instant Fraud Detection
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-purple-600" /> Secure & Encrypted Analysis
            </li>
          </ul>

          <button className="mt-8 w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl font-medium transition transform hover:scale-105" onClick={()=>navigator("/uploadingimage")} >
           Proceed To Payment
          </button>
        </div>

        <p className="text-gray-400 mt-8">Need bulk verification? <a href="/Pricing" className="text-purple-400 underline">Check our enterprise plans</a></p>
      </div>
    </section>
  );
};

export default SingleImagePricing;
