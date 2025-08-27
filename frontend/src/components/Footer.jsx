
import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-[#141414] to-black text-gray-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand / Title */}
        <div>
          <h2 className="text-2xl font-bold text-white">Temper Detect</h2>
          <p className="mt-3 text-sm text-gray-400">
            AI-powered tool to verify authenticity of images & documents in seconds.
          </p>
        </div>

        {/* Quick Links */}
        <div >
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/#" className="hover:text-purple-400 transition">Home</a></li>
            <li><a href="/homepage" className="hover:text-purple-400 transition">How it Works</a></li>
            <li><a href="/Pricing" className="hover:text-purple-400 transition">Pricing</a></li>
            <li><a href="/about" className="hover:text-purple-400 transition">About</a></li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div >
          <h3 className="text-lg font-semibold text-white mb-3">Connect with Us</h3>
          <div className="flex space-x-5 text-2xl ml-30">
            <a href="https://github.com/AyushM198/Fake_Image_Detection" className="hover:text-purple-400"><FaGithub /></a>
            <a href="https://twitter.com" className="hover:text-purple-400"><FaTwitter /></a>
            <a href="https://linkedin.com" className="hover:text-purple-400"><FaLinkedin /></a>
          </div>
          <p className="mt-4 text-sm text-gray-400">support@temperdetect.ai</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Temper Detect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
