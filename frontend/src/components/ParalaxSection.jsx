import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ParallaxSections = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = containerRef.current?.querySelectorAll("section");
    if (!sections) return;

    const getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

    sections.forEach((section, i) => {
      const bg = section.querySelector(".bg");
      if (!bg) return;

      bg.style.backgroundImage = `url(https://picsum.photos/1600/800?random=${i})`;

      gsap.fromTo(
        bg,
        {
          backgroundPosition: () =>
            i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px",
        },
        {
          backgroundPosition: () =>
            `50% ${window.innerHeight * (1 - getRatio(section))}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: () => (i ? "top bottom" : "top top"),
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    });
  }, []);

  const titles = [
    "Simple parallax sections",
    "Hey look, a title",
    "They just keep coming",
    "So smooth though",
    "Nice, right?",
  ];

  return (
    <div ref={containerRef}>
      {titles.map((title, index) => (
        <section key={index} className="relative h-screen flex items-center justify-center">
          <div className="bg absolute top-0 left-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat"></div>
          <h1 className="text-white text-4xl sm:text-5xl font-normal drop-shadow-md z-10 text-center">
            {title}
          </h1>
        </section>
      ))}
    </div>
  );
};

export default ParallaxSections;
