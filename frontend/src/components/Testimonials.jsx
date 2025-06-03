import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const testimonials = [
  { text: "TamperDetect saved our company from a major fraud case. The AI detection is incredibly accurate!", author: "Rajesh Sharma", color: "text-purple-400" },
  { text: "I use this tool daily for verifying contracts. It's fast and reliable.", author: "Priya Mehta", color: "text-blue-400" },
  { text: "A must-have for digital security! It detects even the slightest tampering.", author: "Anil Verma", color: "text-green-400" },
  { text: "Highly efficient fraud detection system. Helped secure our business!", author: "Neha Joshi", color: "text-red-400" },
  { text: "Seamless integration and great accuracy!", author: "Amit Kumar", color: "text-yellow-400" },
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
  { text: "The AI capabilities of TamperDetect are truly impressive.", author: "Gaurav Malhotra", color: "text-yellow-600" },
  { text: "It detected tampered signatures instantly!", author: "Neeta Agarwal", color: "text-pink-600" },
  { text: "Perfect for businesses handling sensitive contracts.", author: "Amit Trivedi", color: "text-indigo-600" },
  { text: "TamperDetect gives us peace of mind in document verification.", author: "Sonia Rajan", color: "text-cyan-600" },
  { text: "We reduced fraudulent transactions significantly using this tool.", author: "Vivek Iyer", color: "text-teal-600" },
  { text: "I use this tool to verify important legal papers.", author: "Suhani Deshpande", color: "text-orange-600" },
  { text: "TamperDetect has enhanced our security measures.", author: "Arvind Kashyap", color: "text-lime-600" },
  { text: "Great for organizations looking for top-notch security solutions.", author: "Tanya Bhatt", color: "text-emerald-600" },
  { text: "Excellent tool for ensuring data authenticity.", author: "Yashwant Rao", color: "text-blue-700" },
  { text: "Highly reliable fraud detection software.", author: "Kiran Joshi", color: "text-purple-700" },
  { text: "Great for forensic investigations.", author: "Sakshi Verma", color: "text-green-700" },
  { text: "A life-saver for preventing document fraud.", author: "Naveen Choudhary", color: "text-red-700" },
  { text: "TamperDetect makes fraud detection effortless.", author: "Pooja Ghosh", color: "text-yellow-700" },
];



const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-black w-full">
      <div className=" mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-10">
          What Our Users Say
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Trusted by professionals and businesses for fraud detection & security.
        </p>

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
                <FaQuoteLeft className={`${testimonial.color} text-4xl mb-4`} />
                <p className="italic text-center">"{testimonial.text}"</p>
                <h4 className={`mt-4 font-semibold ${testimonial.color}`}>- {testimonial.author}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;