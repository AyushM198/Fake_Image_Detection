import React from "react";

const mockTestimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    title: "Designer",
    company: "Creative Studio",
    content: "This tool is a game changer! I saved hours of manual work.",
    description: "Highly recommended for anyone in digital content verification.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    type: "top-left-quote",
  },
  {
    id: 2,
    name: "David Kim",
    title: "Product Manager",
    company: "TechFlow",
    content: "Seamless integration and very user friendly.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    type: "top-left-center-bubble",
  },
  {
    id: 3,
    name: "Sophia Martinez",
    title: "Researcher",
    company: "AI Labs",
    content: "The AI analysis is incredibly accurate.",
    description: "It helped me validate critical research documents instantly.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    type: "hero-center",
  },
  {
    id: 4,
    name: "James Wilson",
    title: "Lawyer",
    company: "LegalEase",
    content: "A must-have tool for legal document verification.",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    type: "top-right-first",
  },
  {
    id: 5,
    name: "Emily Chen",
    title: "Freelancer",
    company: "Self-employed",
    content: "Perfect for freelancers like me who work with lots of clients.",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    type: "top-right-second",
  },
  {
    id: 6,
    name: "Michael Brown",
    title: "Data Scientist",
    company: "Analytics Pro",
    content: "The results are instant and trustworthy.",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
    type: "middle-right",
  },
  {
    id: 7,
    name: "Olivia White",
    title: "Student",
    company: "University",
    content: "Helps me check authenticity of academic papers quickly.",
    avatar: "https://randomuser.me/api/portraits/women/27.jpg",
    type: "middle-left",
  },
  {
    id: 8,
    name: "Multiple Users",
    title: "Team Members",
    company: "Collab Group",
    content: "Our whole team relies on this daily.",
    multipleAvatars: [
      "https://randomuser.me/api/portraits/men/10.jpg",
      "https://randomuser.me/api/portraits/women/11.jpg",
      "https://randomuser.me/api/portraits/men/12.jpg",
    ],
    type: "bottom-left-main",
  },
  {
    id: 9,
    name: "Daniel Lee",
    title: "Entrepreneur",
    company: "Startup Hub",
    content: "Reliable, fast, and easy to use.",
    description: "It gives me confidence when reviewing business documents.",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    type: "bottom-right-final",
  },
];

const TestimonialCard = ({ testimonial }) => {
  const {
    name,
    title,
    company,
    content,
    description,
    avatar,
    type,
    multipleAvatars,
  } = testimonial;

  const baseClasses =
    "bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden border border-gray-100";

  const getCardClasses = () => {
    switch (type) {
      case "top-left-quote":
        return `${baseClasses} p-5 clip-path-speech-left`;
      case "top-left-center-bubble":
        return `${baseClasses} p-5 clip-path-speech-bottom`;
      case "hero-center":
        return `${baseClasses} p-8 bg-gradient-to-br from-orange-50 to-red-50`;
      case "top-right-first":
        return `${baseClasses} p-4 clip-path-speech-right`;
      case "top-right-second":
        return `${baseClasses} p-5`;
      case "middle-right":
        return `${baseClasses} p-5 clip-path-speech-left-small`;
      case "middle-left":
        return `${baseClasses} p-5`;
      case "bottom-left-main":
        return `${baseClasses} p-6`;
      case "bottom-right-final":
        return `${baseClasses} p-5`;
      default:
        return baseClasses;
    }
  };

  const getGridPosition = () => {
    switch (type) {
      case "top-left-quote":
        return "col-start-1 row-start-1 row-span-2";
      case "top-left-center-bubble":
        return "col-start-2 row-start-1";
      case "hero-center":
        return "col-start-3 row-start-1 row-span-3 col-span-1";
      case "top-right-first":
        return "col-start-4 row-start-1";
      case "top-right-second":
        return "col-start-5 row-start-1 row-span-2";
      case "middle-right":
        return "col-start-4 row-start-2";
      case "middle-left":
        return "col-start-1 row-start-3";
      case "bottom-left-main":
        return "col-start-1 row-start-4 col-span-2";
      case "bottom-right-final":
        return "col-start-4 row-start-3 col-span-2 row-span-2";
      default:
        return "";
    }
  };

  return (
    <div className={`${getCardClasses()} ${getGridPosition()}`}>
      {(type === "top-left-quote" || type === "hero-center") && (
        <div className="absolute top-3 left-3 text-5xl text-gray-200 font-serif leading-none">
          "
        </div>
      )}
      {type === "hero-center" && (
        <div className="absolute bottom-3 right-3 text-5xl text-gray-200 font-serif leading-none rotate-180">
          "
        </div>
      )}

      <div className="relative z-10">
        <div className="flex items-center mb-4">
          {type === "bottom-left-main" && multipleAvatars ? (
            <div className="flex -space-x-2 mr-4">
              {multipleAvatars.map((avatarUrl, index) => (
                <img
                  key={index}
                  src={avatarUrl}
                  alt={`Avatar ${index + 1}`}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-white"
                />
              ))}
            </div>
          ) : (
            <img
              src={avatar}
              alt={name}
              className={`rounded-full object-cover mr-4 ring-2 ring-gray-100 ${
                type === "hero-center" ? "w-16 h-16" : "w-12 h-12"
              }`}
            />
          )}
          <div>
            <h4
              className={`font-semibold text-gray-900 ${
                type === "hero-center" ? "text-base" : "text-sm"
              }`}
            >
              {name}
            </h4>
            <p
              className={`text-gray-600 ${
                type === "hero-center" ? "text-sm" : "text-xs"
              }`}
            >
              {title}
            </p>
            {company && (
              <p
                className={`text-gray-500 ${
                  type === "hero-center" ? "text-sm" : "text-xs"
                }`}
              >
                {company}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-3">
          {type === "top-left-center-bubble" || type === "top-right-first" ? (
            <h3 className="font-bold text-lg text-gray-900 mb-2">{content}</h3>
          ) : (
            <p
              className={`text-gray-700 leading-relaxed ${
                type === "hero-center" ? "text-base" : "text-sm"
              }`}
            >
              {content}
            </p>
          )}

          {description && (
            <p
              className={`text-gray-600 leading-relaxed ${
                type === "hero-center" ? "text-sm" : "text-xs"
              }`}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const displayTestimonials = mockTestimonials.slice(0, 9);

  return (
    <section className="py-16 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-5 grid-rows-5 gap-4 h-[1000px]">
          {displayTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
