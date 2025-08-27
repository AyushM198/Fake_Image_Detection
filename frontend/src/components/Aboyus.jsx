import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-25">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl font-bold "
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-3 text-lg max-w-2xl mx-auto text-gray-400"
        >
          Revolutionizing fraud detection with AI-powered authenticity verification for images and documents.
        </motion.p>
      </section>

      {/* About the Project */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-4xl font-semibold text-gray-300">What is TamperDetect?</h2>
        <p className="mt-4 text-gray-500 text-lg">
          TamperDetect is an AI-powered fraud detection system designed to analyze, verify, and authenticate images and documents.
          It helps businesses, financial institutions, and government agencies detect forgeries, ensuring data integrity and security.
        </p>
        {/* <img src="https://source.unsplash.com/800x400/?cybersecurity" alt="Fraud Detection" className="mt-6 mx-auto rounded-lg shadow-lg" /> */}
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 text-center md:text-left">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-900  rounded-lg "
          >
            <h3 className="text-4xl font-semibold text-gray-200 p-2">Our Mission</h3>
            <p className="mt-6 text-gray-300 text-lg">
              Our mission is to build a cutting-edge AI fraud detection system that safeguards digital documents
              and prevents unauthorized tampering.
            </p>
            <img src="https://img.freepik.com/free-vector/cyber-attack-concept-illustration_114360-1996.jpg" alt="Mission" className="mt-4 rounded-lg shadow-md" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-900 rounded-lg shadow-md"
          >
            <h3 className="text-4xl font-semibold text-gray-200 p-2">Our Vision</h3>
            <p className="mt-6 text-gray-300 text-lg">
              To become the most trusted AI-driven fraud detection solution globally, helping organizations prevent digital manipulation.
            </p>
            <img src="https://c8.alamy.com/comp/2WJENB0/digital-virus-threat-concept-tech-savvy-woman-analyzes-menacing-skull-on-monitor-signifying-malware-attack-immediate-response-required-flat-vector-illustration-2WJENB0.jpg" alt="Vision" className="mt-4 rounded-lg shadow-md" />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us? */}
      <section className="max-w-6xl mx-auto py-18 px-6">
        <h2 className="text-4xl font-semibold text-gray-200 text-center">Why Choose TamperDetect?</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {[
            { title: "AI-Powered Accuracy", text: "Our deep learning models detect even the smallest signs of fraud.", img: "/img/a1.png" },
            { title: "Real-Time Analysis", text: "Instant document verification with high-speed AI processing.", img: "/img/a2.png" },
            { title: "Trusted by Experts", text: "Used by banks, legal firms, and government agencies worldwide.", img: "/img/a3.png" },
          ].map((item, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md text-center transition-transform duration-300"
            >
              <img src={item.img} alt={item.title} className="w-full h-40 object-contain rounded-lg" />
              <h3 className="text-xl font-semibold text-green-400 mt-4">{item.title}</h3>
              <p className="mt-2 text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-semibold text-gray-200 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8 mt-8 max-w-6xl mx-auto">
          {[
            { name: "Ayush ", role: "Backend & AI Engineer", img: "https://via.placeholder.com/100" },
            { name: "Divyansh ", role: "UI / UX", img: "https://via.placeholder.com/100" },
            { name: "Ganesh", role: "Frontend Engineer", img: "https://via.placeholder.com/100" },
            { name: "Neha", role: "AI Engineer", img: "https://via.placeholder.com/100" },
          ].map((team, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md text-center transition-transform duration-300"
            >
              <img src={team.img} alt={team.name} className="w-24 h-24 mx-auto rounded-full" />
              <h3 className="text-xl font-semibold mt-4">{team.name}</h3>
              <p className="text-gray-400">{team.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-semibold text-gray-200 text-center">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-6xl mx-auto">
          {[
            { name: "Alex Johnson", feedback: "TamperDetect transformed the way we authenticate documents in our legal firm." },
            { name: "Sophia Williams", feedback: "A must-have solution for fraud prevention in the banking sector!" },
          ].map((client, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md text-center"
            >
              <p className="text-lg text-gray-300">"{client.feedback}"</p>
              <h3 className="text-lg font-semibold text-blue-400 mt-4">{client.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-semibold text-gray-200">Secure Your Documents with AI-Powered Fraud Detection</h2>
        <p className="mt-3 text-lg max-w-2xl mx-auto text-gray-300">
          Join thousands of users protecting their documents with TamperDetect.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
          Get Started Now
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
