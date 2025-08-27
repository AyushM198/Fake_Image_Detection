import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GrayBox = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const texts = containerRef.current?.querySelectorAll(".fade-in");
        if (!texts) return;

        texts.forEach((text, index) => {
            gsap.fromTo(
                text,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    delay: index * 0.2,
                    scrollTrigger: {
                        trigger: text,
                        start: "top bottom",
                        end: "top 60%",
                        scrub: true,
                    },
                }
            );
        });
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative h-dvh bg-black flex justify-end items-start px-8 py-30 mb-20 mt-10"
        >
            <div className="absolute top-0 right-0 w-full h-full bg-[#999] -z-10" />

            <div className="w-full max-w-2xl text-white space-y-16 pr-8 fade-in text-right">
                <div className="fade-in">
                    <h2 className=" md:text-5xl w-full font-bold leading-snug pb-8">
                        Our vision is a future where <br />
                        everyone can be an entrepreneur.
                    </h2>
                    <p className="mt-6 text-lg  text-white/90">
                        We believe design is the ultimate competitive advantage.<br/> We build
                        products that help entrepreneurs stand out<br/> and succeed.
                    </p>
                </div>

                <div className="fade-in text-right mt-5 ">
                    <h3 className="text-5xl font-bold">2003</h3>
                    <p className="mt-2 text-base">
                        Squarespace was founded in Anthony's <br/>dorm room at the University of Maryland.
                    </p>
                </div>

                <div className="fade-in">
                    <h3 className="text-5xl font-bold">1,760</h3>
                    <p className="mt-2 text-base">
                        Squarespace has grown to a team of more<br/> than 1,760 talented individuals.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GrayBox;




// new try


// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const AboutUs = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const sections = containerRef.current.querySelectorAll(".fade-in");

//     sections.forEach((el, index) => {
//       gsap.fromTo(
//         el,
//         { y: 50, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1.2,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: el,
//             start: "top 85%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="min-h-screen bg-[#999999] text-white px-8 md:px-24 py-24 font-sans"
//     >
//       <div className="max-w-5xl ml-auto space-y-20">
//         <div className="fade-in space-y-6">
//           <h1 className="text-4xl md:text-5xl font-bold leading-snug">
//             Our vision is a future where <br />
//             everyone can be an entrepreneur.
//           </h1>
//           <p className="text-lg max-w-xl text-white/90">
//             We believe design is the ultimate competitive advantage. We build
//             products that help entrepreneurs stand out and succeed.
//           </p>
//         </div>

//         <div className="fade-in space-y-4">
//           <h2 className="text-5xl font-bold">2003</h2>
//           <p className="text-white/90">
//             Squarespace was founded in Anthony’s dorm room at the University of Maryland.
//           </p>
//         </div>

//         <div className="fade-in space-y-4">
//           <h2 className="text-5xl font-bold">1,760</h2>
//           <p className="text-white/90">
//             Squarespace has grown to a team of more than 1,760 talented individuals.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;