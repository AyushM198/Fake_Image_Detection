import React from "react";
import { FaFileUpload, FaBrain, FaCheckCircle } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-3">How it works</h2>
        <p className="text-lg text-gray-400 mb-12">
          3 Simple Steps to Verify Authenticity
        </p>

        <div className="space-y-12">
          {/* Step 1 - Upload */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:text-left">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold text-purple-600">Step 1: Upload Your Content</h3>
              <p className="text-gray-400 mt-2">
                Click the "Upload" button and select the image or PDF file you want to verify from your device.
                Once your file is chosen, simply hit "Submit" to begin the analysis.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src="https://img.lovepik.com/free-png/20220127/lovepik-online-dating-fraud-png-image_401953118_wh1200.png" alt="Upload Step" className="w-70" />
            </div>
          </div>

          {/* Step 2 - AI Analysis */}
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start md:text-left">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold text-blue-600">Step 2: AI-Powered Analysis</h3>
              <p className="text-gray-400 mt-2">
                Once your file is submitted, our smart AI tool takes over.
                It carefully examines your image or PDF for any signs of manipulation or inconsistencies,
                ensuring a thorough check for authenticity.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src="https://media.istockphoto.com/id/2155517833/vector/ai-powered-fraud-detection-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=WGk-eQ5NFNfbDdYmj7077qlc6fXDK2z84XBCXy1knwU=" className="w-70" />
            </div>
          </div>

          {/* Step 3 - Instant Results */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:text-left">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-2xl font-semibol text-green-600">Step 3: Instant Results</h3>
              <p className="text-gray-400 mt-2">
                After our AI completes its analysis, you'll immediately see the results.
                The system clearly indicates whether your uploaded file is authentic or manipulated,
                along with extra details to help you understand the outcome.
              </p>
            </div> 
            <div className="md:w-1/2 flex justify-center">
              <img src="https://lh5.googleusercontent.com/86-r01BYvP2LNl3p4hhagclPXgw0W4vaaoTi2Lm_LvihiypFk_z6F5oK0Ko4cN0ZXmpqllnh2F2G2VYQcApB0M0oeUX39SBo8rD9NSTuEXIvPBtfW35ACP4HvFKpqzcNERt2Xjg--w5IXE5EEbXgdpvqYAcy" alt="Results Step" className="w-70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
