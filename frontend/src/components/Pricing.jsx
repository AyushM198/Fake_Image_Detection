import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PricingPlans = () => {
   const navigator = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  const [billingCycle, setBillingCycle] = useState("monthly");

  const faqs = [
    { 
      question: "Is it accessible?", 
      answer: "Yes, our platform is fully accessible. We ensure compliance with WCAG standards, making it easy to navigate using screen readers, keyboard shortcuts, and high-contrast modes for visually impaired users." 
    },
    { 
      question: "What features does the software offer?", 
      answer: "Our platform offers AI-powered fraud detection, deepfake verification, biometric analysis, real-time fraud alerts, API integration, and customizable security reports for enhanced fraud prevention." 
    },
    { 
      question: "How does the pricing work?", 
      answer: "We offer three pricing tiers—Personal, Business, and Enterprise. The pricing is based on the number of users and document scans required. You can choose a monthly or annual subscription with no hidden charges." 
    },
    { 
      question: "Can I upgrade or downgrade my plan?", 
      answer: "Yes, you can easily switch between plans from your account settings. If you upgrade, the changes will be applied immediately. If you downgrade, the changes will take effect at the start of the next billing cycle." 
    },
    { 
      question: "Is there customer support available?", 
      answer: "Absolutely! We offer 24/7 customer support through email, live chat, and phone. Our dedicated support team is always available to help with technical issues, billing inquiries, and general questions." 
    },
    { 
      question: "What payment methods do you accept?", 
      answer: "We accept a variety of payment methods, including credit cards, debit cards, PayPal, UPI, and direct bank transfers. All transactions are secured with end-to-end encryption." 
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const plans = {
    monthly: {
      personal: "₹99/month",
      business: "₹499/month",
      enterprise: "₹1999/month",
    },
    yearly: {
      personal: "₹999/year",
      business: "₹4999/year",
      enterprise: "₹19999/year",
    },
  };

  const planDetails = [
    {
      title: "Personal Plan",
      color: "purple",
      description: "For individuals & freelancers",
      priceKey: "personal",
      features: [
        "✔ AI-powered document fraud detection",
        "✔ Image tampering analysis",
        "✔ Up to 50 document scans/month",
        "✔ Basic reporting & insights",
      ],
    },
    {
      title: "Business Plan",
      color: "blue",
      description: "For startups & small businesses",
      priceKey: "business",
      features: [
        "✔ AI-powered document & image fraud detection",
        "✔ Advanced deepfake detection",
        "✔ Up to 500 scans/month",
        "✔ Real-time fraud alerts",
        "✔ API access for business integration",
      ],
    },
    {
      title: "Enterprise Plan",
      color: "green",
      description: "For large corporations & banks",
      priceKey: "enterprise",
      features: [
        "✔ AI-driven fraud detection & verification",
        "✔ Unlimited scans & real-time monitoring",
        "✔ Deep learning-based forgery detection",
        "✔ Custom fraud analysis reports",
        "✔ Enterprise-grade security & compliance",
        "✔ 24/7 dedicated customer support",
      ],
    },
  ];

  return (
    <section className="bg-black py-16 text-white mt-25">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-6xl font-bold text-center mb-6">
          Choose the Best Plan for Fraud Detection
        </h1>
        <p className="text-center text-gray-300 mb-22">
          Get advanced AI-driven fraud detection for your documents and images. Choose a plan that fits your security needs.
        </p>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          {["monthly", "yearly"].map((cycle) => (
            <button
              key={cycle}
              className={`px-4 py-2 font-medium transition ${
                billingCycle === cycle ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-400"
              } ${cycle === "monthly" ? "rounded-l-lg" : "rounded-r-lg"}`}
              onClick={() => setBillingCycle(cycle)}
            >
              {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 ">
          {planDetails.map((plan, index) => (
            <div key={index} className="p-5 bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition">
              <h2 className={`text-xl  font-semibold text-${plan.color}-400`}>{plan.title}</h2>
              <p className="text-gray-400 mt-1">{plan.description}</p>
              <h3 className="text-2xl font-bold mt-3">{plans[billingCycle][plan.priceKey]}</h3>
              <button className={`mt-5 w-full bg-${plan.color}-600 hover:bg-${plan.color}-700 text-white py-2 rounded-lg font-medium transition`} onClick={()=>navigator("/Payment")}>
                Get Started →
              </button>
              <ul className="mt-5 text-gray-400 space-y-2 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        
          {/* FAQ Section */}
          <div className="mt-16 bg-black text-white p-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-center">Frequently Asked Questions</h2>
              <p className="text-gray-400 text-center mt-2">
                Here are some of the most common questions we get asked. If you have a question that isn't answered here, feel free to reach out to us.
              </p>

              <div className="mt-8 space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-700">
                    <button
                      className="w-full flex justify-between items-center py-4 text-lg font-medium focus:outline-none"
                      onClick={() => toggleFAQ(index)}
                    >
                      {faq.question}
                      <ChevronDown size={20} className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                      <p className="text-gray-400 pb-4">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default PricingPlans;
