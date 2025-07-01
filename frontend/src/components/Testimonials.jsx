


import React, { useEffect, useRef } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DecryptedText from './ui/Decrypt';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { text: "TamperDetect saved our company from a major fraud case. The AI detection is incredibly accurate!", author: "Rajesh Sharma", color: "text-purple-400" },
  { text: "I use this tool daily for verifying contracts. It's fast and reliable.", author: "Priya Mehta", color: "text-blue-400" },
  { text: "A must-have for digital security! It detects even the slightest tampering.", author: "Anil Verma", color: "text-green-400" },
  { text: "Highly efficient fraud detection system. Helped secure our business!", author: "Neha Joshi", color: "text-red-400" },
  { text: "This tool gave me peace of mind for document authentication.", author: "Sanya Kapoor", color: "text-pink-400" },
  { text: "A game-changer for fraud prevention in the legal sector.", author: "Rahul Nair", color: "text-indigo-400" },
  { text: "Customer support is fantastic, and the AI is top-notch!", author: "Megha Sinha", color: "text-cyan-400" },
  { text: "Accurate, fast, and extremely reliable!", author: "Vikram Patel", color: "text-teal-400" },
  { text: "Best investment for fraud prevention we've ever made!", author: "Arjun Malhotra", color: "text-orange-400" },
  { text: "TamperDetect is a must-have for every business dealing with digital documents.", author: "Kavita Reddy", color: "text-lime-400" },
  { text: "Easy to use and highly effective!", author: "Sumit Goel", color: "text-emerald-400" },
  { text: "TamperDetect has revolutionized our document verification process!", author: "Manish Pandey", color: "text-blue-500" },
  { text: "I highly recommend this tool for fraud detection.", author: "Ritu Choudhary", color: "text-purple-500" },
  { text: "Excellent product! It identified document forgery we would have missed.", author: "Harish Gupta", color: "text-green-500" },
  { text: "Game-changing technology for financial institutions.", author: "Pallavi Sen", color: "text-red-500" },
  { text: "The best fraud detection software we have used so far.", author: "Rohan Desai", color: "text-yellow-500" },
  { text: "Amazing AI-powered tool for document security.", author: "Sneha Dutta", color: "text-pink-500" },
  { text: "A must-have for professionals dealing with sensitive documents.", author: "Sandeep Yadav", color: "text-indigo-500" },
  { text: "Incredible accuracy in detecting fraudulent images.", author: "Anjali Saxena", color: "text-cyan-500" },
  { text: "Highly recommended for banks and financial firms.", author: "Nitin Bhatia", color: "text-teal-500" },
  { text: "Finally, a fraud detection tool that actually works!", author: "Divya Rao", color: "text-orange-500" },
  { text: "We rely on TamperDetect for all our document verification needs.", author: "Akhil Nair", color: "text-lime-500" },
  { text: "Fraud prevention made easy and accessible.", author: "Varsha Menon", color: "text-emerald-500" },
  { text: "This tool has simplified our compliance process.", author: "Kunal Kapoor", color: "text-blue-600" },
  { text: "TamperDetect helps us maintain document integrity.", author: "Swati Sharma", color: "text-purple-600" },
  { text: "An indispensable tool for cybersecurity professionals.", author: "Abhinav Joshi", color: "text-green-600" },
  { text: "Very user-friendly and efficient fraud detection software.", author: "Meera Chauhan", color: "text-red-600" },

  { text: "It detected tampered signatures instantly!", author: "Neeta Agarwal", color: "text-pink-600" },
  { text: "Perfect for businesses handling sensitive contracts.", author: "Amit Trivedi", color: "text-indigo-600" },
  { text: "TamperDetect gives us peace of mind in document verification.", author: "Sonia Rajan", color: "text-cyan-600" },
  { text: "We reduced fraudulent transactions significantly using this tool.", author: "Vivek Iyer", color: "text-teal-600" },
  { text: "I use this tool to verify important legal papers.", author: "Suhani Deshpande", color: "text-orange-600" },
  { text: "TamperDetect has enhanced our security measures.", author: "Arvind Kashyap", color: "text-lime-500" },
  { text: "Great for organizations looking for top-notch security solutions.", author: "Tanya Bhatt", color: "text-emerald-600" },
  { text: "Excellent tool for ensuring data authenticity.", author: "Yashwant Rao", color: "text-blue-500" },
  { text: "Highly reliable fraud detection software.", author: "Kiran Joshi", color: "text-purple-700" },
  { text: "Great for forensic investigations.", author: "Sakshi Verma", color: "text-green-700" },
  { text: "A life-saver for preventing document fraud.", author: "Naveen Choudhary", color: "text-red-500" },

];
const Testimonials = () => {
  const headingRef = useRef(null);
const paragraphRef = useRef(null);

ScrollTrigger.create({
  trigger: headingRef.current,
  start: 'center center',
  onEnter: () => headingTextRef.current?.startDecryption(),
  once: true,
});


useEffect(() => {
  const animateChars = (ref) => {
    if (!ref.current) return;
    const chars = ref.current.querySelectorAll('span');
    gsap.fromTo(
      chars,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  };

  animateChars(headingRef);
  animateChars(paragraphRef);
}, []);

  return (
    <section id="testimonials" className="py-16 bg-black w-full">
      <div className="max-w-8xl mx-auto">

        <div className="w-full bg-black text-white pb-35 pt-15">
          <div className="max-w-6xl mx-auto">
            {/* <h2 className="text-5xl text-[#f5f5f5] font-bold mb-4 text-left">
              What Our Users Say
          </h2> */}
            <h2
              ref={headingRef}
              className="text-5xl text-purple-400 font-bold mb-4 text-left"
            >
              <DecryptedText
                text="What Our Users Say"
                animateOn="view"
                revealDirection="start"
                sequential
                className="text-5xl font-bold text-white"
                parentClassName="mb-4"
              />
            </h2>

            <p ref={paragraphRef} className="text-2xl text-purple-400 text-left mt-6">
              <DecryptedText
                text="Trusted by professionals and businesses for fraud detection & security."
                animateOn="view"
                revealDirection="start"
                sequential
                className="text-lg text-gray-300"
                parentClassName="mb-8"
              />
            </p>
          </div>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          loop={true}
          speed={4000}
          modules={[Autoplay]}
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex-shrink-0">
              <div className="p-8 bg-gray-900 text-white rounded-lg shadow-lg flex flex-col items-center justify-center h-64">
                <div className="flex items-start gap-2 text-xl mb-4">
                  <FaQuoteLeft className="text-lg text-purple-400" />
                  <p className="italic text-white text-lg leading-relaxed">
                    {testimonial.text}
                  </p>
                  <FaQuoteRight className="text-lg text-purple-400" />
                </div>

                <h4 className="mt-4 font-semibold text-gray-400">
                  – {testimonial.author}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
