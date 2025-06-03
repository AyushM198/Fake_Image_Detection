import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-10 text-center md:text-left">
        
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-purple-500">TamperDetect</h3>
          <p className="text-gray-300 mt-3">
            AI-powered fraud detection for images & documents. Secure, fast, and reliable.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-purple-500 mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            {/* <li><a href="" className="hover:text-purple-400 transition">Features</a></li> */}
            <li><a href="/Pricing" className="hover:text-purple-400 transition">Plans & Pricing</a></li>
            <li><a href="/About" className="hover:text-purple-400 transition">About Us</a></li>
            <li><a href="/Privacy" className="hover:text-purple-400 transition">Privacy Policy</a></li>
            {/* <li><a href="#terms" className="hover:text-purple-400 transition">Terms & Conditions</a></li> */}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-purple-500 mb-4">Stay Updated</h3>
          <p className="text-gray-300  text-sm mb-3">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex justify-center md:justify-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-2/3 px-4 py-3 rounded-l-lg text-white focus:outline-none"
            />
            <button className="px-5 py-3 bg-purple-600 hover:bg-purple-700 rounded-r-lg transition">
              <FaEnvelope />
            </button>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-purple-500 mb-4">Follow Us</h3>
          <p className="text-gray-300 text-sm mb-3">Connect with us on social media.</p>
          <div className="flex justify-center md:justify-start gap-5">
            <a href="#" className="text-gray-300 hover:text-purple-400 transition text-2xl"><FaFacebook /></a>
            <a href="#" className="text-gray-300 hover:text-purple-400 transition text-2xl"><FaTwitter /></a>
            <a href="#" className="text-gray-300 hover:text-purple-400 transition text-2xl"><FaLinkedin /></a>
            <a href="#" className="text-gray-300 hover:text-purple-400 transition text-2xl"><FaInstagram /></a>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold text-purple-500 mb-4">Contact Us</h3>
          <p className="text-gray-300 text-sm flex items-center gap-2">
            <FaMapMarkerAlt /> 123 AI Street, Tech City, India
          </p>
          <p className="text-gray-300 text-sm flex items-center gap-2 mt-2">
            <FaPhone /> +91 98765 43210
          </p>
          <p className="text-gray-300 text-sm flex items-center gap-2 mt-2">
            <FaEnvelope /> support@tamperdetect.com
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-300">
        <p>&copy; 2025 TamperDetect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
