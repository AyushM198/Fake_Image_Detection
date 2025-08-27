// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const ParallaxSections = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const sections = containerRef.current?.querySelectorAll("section");
//     if (!sections) return;

//     const getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

//     sections.forEach((section, i) => {
//       const bg = section.querySelector(".bg");
//       if (!bg) return;

//       bg.style.backgroundImage = `url(https://picsum.photos/1600/800?random=${i})`;

//       gsap.fromTo(
//         bg,
//         {
//           backgroundPosition: () =>
//             i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px",
//         },
//         {
//           backgroundPosition: () =>
//             `50% ${window.innerHeight * (1 - getRatio(section))}px`,
//           ease: "none",
//           scrollTrigger: {
//             trigger: section,
//             start: () => (i ? "top bottom" : "top top"),
//             end: "bottom top",
//             scrub: true,
//             invalidateOnRefresh: true,
//           },
//         }
//       );
//     });
//   }, []);

//   const titles = [
//     "Simple parallax sections",
//     "Hey look, a title",
//     "They just keep coming",
//     "So smooth though",
//     "Nice, right?",
//   ];

//   return (
//     <div ref={containerRef}>
//       {titles.map((title, index) => (
//         <section key={index} className="relative h-screen flex items-center justify-center">
//           <div className="bg absolute top-0 left-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat"></div>
//           <h1 className="text-white text-4xl sm:text-5xl font-normal drop-shadow-md z-10 text-center">
//             {title}
//           </h1>
//         </section>
//       ))}
//     </div>
//   );
// };

// export default ParallaxSections;




//static Bg

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StaticBackgroundScrollContent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = containerRef.current?.querySelectorAll(".scroll-section");
    if (!sections) return;

    sections.forEach((section, i) => {
      const content = section.querySelector(".inner");

      gsap.fromTo(
        content,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            end: "top 20%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  const titles = [
    {
      heading: "Hagi's Barbershop",
      text: "A premium grooming experience rooted in tradition and refined with modern flair.",
    },
    {
      heading: "Craftsmanship Matters",
      text: "Each haircut is a statement—shaped with skill, passion, and attention to detail.",
    },
    {
      heading: "Classic Meets Modern",
      text: "Combining timeless styles with today’s trends for the perfect balance.",
    },
    {
      heading: "Precision is Art",
      text: "From beard trims to fades, our barbers treat every cut like a masterpiece.",
    },
    {
      heading: "Feel the Vibe",
      text: "Step into a space that blends style, music, and community under one roof.",
    },
  ];

  return (
    <div ref={containerRef}>
      {titles.map((item, index) => (
        <section
          key={index}
          className="scroll-section relative h-[50vh] overflow-hidden"
        >
          {/* Fixed Background Layer */}
          <div
            className="fixed top-0 left-0 w-full h-screen -z-10 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://picsum.photos/id/${index + 10}/1600/900)`,
            }}
          ></div>

          {/* Scrollable Dark Box Content on Right */}
          <div className="inner absolute right-10 top-1/2 transform -translate-y-1/2 bg-black/80 text-white p-8 max-w-md rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4">{item.heading}</h1>
            <p className="text-gray-300 text-base leading-relaxed">{item.text}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default StaticBackgroundScrollContent;


