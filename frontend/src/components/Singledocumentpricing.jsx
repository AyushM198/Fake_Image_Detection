import React from "react";
import { FaCheckCircle, FaFileAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



const SingleDocumentPricing = () => {
  const navigator = useNavigate();
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-6">Document Verification Pricing</h1>
        <p className="text-xl text-gray-300 mb-10">
          Upload and verify a single document with our AI-powered system.
        </p>

        {/* Pricing Card */}
        <div className="bg-white text-black p-10 rounded-3xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-blue-500">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Single Document Verification</h2>
          <p className="text-gray-600 mb-6">One-time analysis for fraud detection</p>

          <h3 className="text-5xl font-bold mb-2">₹20</h3>
          <p className="text-gray-500 text-sm">One-time payment</p>

          <ul className="mt-6 space-y-3 text-gray-700 text-left">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-blue-600" /> AI-Powered Verification
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-blue-600" /> Instant Fraud Detection
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-blue-600" /> Secure & Encrypted Analysis
            </li>
          </ul>

          <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-medium transition transform hover:scale-105 flex items-center justify-center gap-2" onClick={()=>navigator("/uploadingimage")}>
            <FaFileAlt className="text-xl" /> Proceed To Payment
          </button>
        </div>

        <p className="text-gray-400 mt-8">Need bulk verification? <a href="/Pricing" className="text-blue-400 underline">Check our enterprise plans</a></p>
      </div>
    </section>
  );
};

export default SingleDocumentPricing;
