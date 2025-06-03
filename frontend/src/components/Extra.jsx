import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://media.istockphoto.com/id/2155517833/vector/ai-powered-fraud-detection-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=WGk-eQ5NFNfbDdYmj7077qlc6fXDK2z84XBCXy1knwU=",
    title: "Digital Identity:",
    description:
      "Paravision Deepfake Detection powers high-trust authenticity checks for digital identity verification use cases such as banking, payments, and travel.",
  },
  {
    image: "https://media.istockphoto.com/id/2155517833/vector/ai-powered-fraud-detection-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=WGk-eQ5NFNfbDdYmj7077qlc6fXDK2z84XBCXy1knwU=",
    title: "Government Programs:",
    description:
      "Increasing prevalence of deepfaked imagery is undermining the public’s understanding of what is real and what is not.",
  },
  {
    image: "https://media.istockphoto.com/id/2155517833/vector/ai-powered-fraud-detection-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=WGk-eQ5NFNfbDdYmj7077qlc6fXDK2z84XBCXy1knwU=",
    title: "Cybersecurity:",
    description:
      "Deepfake detection helps businesses and governments identify fraudulent activities in cybersecurity operations.",
  },
  {
    image: "https://media.istockphoto.com/id/1182334923/vector/fraud-prevention-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=bP6-7lHGmYJwLgLREAF8tBHV0C3pWJm2uGg0TVskSoU=",
    title: "Fraud Prevention:",
    description:
      "AI-powered fraud detection ensures businesses can verify customers securely, reducing identity theft risks.",
  },
  {
    image: "https://media.istockphoto.com/id/1277822892/vector/biometric-identification-verification-and-face-recognition-system-technology-concept.jpg?s=612x612&w=0&k=20&c=yxjC5QjTB29LJX9qVo5h0JwoBqTh9mH-RiF1-f7oxRE=",
    title: "Biometric Security:",
    description:
      "Enhancing facial recognition and biometric authentication to prevent unauthorized access and deepfake attacks.",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full bg-black max-w-full mx-auto p-8">
      <div className="flex items-center justify-between">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="p-3 bg-gray-300 rounded-full  hover:bg-gray-400 transition"
        >
          <ChevronLeft size={36} />
        </button>

        {/* Slide Content */}
        <div className="flex items-center space-x-8 bg-white  p-8 max-w-6xl">
          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            className="w-80 h-80 rounded-xl object-cover shadow-md transition-all duration-300"
          />
          <div className="max-w-lg">
            <p className="text-gray-500 text-lg font-medium">Use Cases:</p>
            <h2 className="text-3xl font-bold text-gray-800">
              {slides[currentIndex].title}
            </h2>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              {slides[currentIndex].description}
            </p>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="p-3   bg-gray-300 rounded-full hover:bg-gray-400 transition"
        >
          <ChevronRight size={36} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              currentIndex === index
                ? "bg-gray-900 scale-110 shadow-lg"
                : "bg-gray-200 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
