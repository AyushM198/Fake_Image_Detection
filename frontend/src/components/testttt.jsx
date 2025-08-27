// TestimonialSection.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Henry Yuna',
    company: 'Freemind Co.',
    message: 'Cras fermentum odio eu feugiat pretium. Cursus mattis molestie a iaculis at erat. Viverra vitae congue eu consequat ac felis.',
    image: '/img/avatar1.jpeg',
    stars: 5,
  },
  
  {
    name: 'Victoria Weino',
    company: 'Freemind Oslo Co.',
    message: 'Eget mauris pharetra et ultrices neque ornare aenean. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat est velit egestas dui id ornare arcu.',
    image: '/img/avatar2.jpeg',
    stars: 5,
  },
  {
    name: 'Basil Nishred',
    company: 'Co-Founder Grandad.com',
    message: 'Elit eget lobortis scelerisque fermentum dui faucibus. Sollicitudin tempor id eu nisl nunc mi ipsum. Enim facilisis gravida neque convallis a cras.',
    image: '/img/avatar3.jpeg',
    stars: 4,
  },
  {
    name: 'Heidy Ernshaw',
    company: '@heidylee.fx',
    message: 'Congue mauris rhoncus, donec vel velit. Morbi non nisi risus varius vitae. Suspendisse tincidunt.',
    image: '/img/avatar4.jpeg',
    stars: 5,
  },
  {
    name: 'James Brown',
    company: 'CEO Invision',
    message: 'Sollicitudin tempor id eu nisl nunc mi ipsum. Enim facilisis gravida neque convallis a cras.',
    image: '/img/avatar5.jpeg',
    stars: 4,
  },
];

const TestimonialSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(containerRef);
    gsap.fromTo(
      q('.testimonial-card'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-white mb-20">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="testimonial-card relative p-6 bg-gray-700 rounded-xl shadow-md flex flex-col items-start justify-between"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 92%, 92% 100%, 0 100%)' }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 object-cover rounded-full border-2 border-white shadow"
                />
                <div>
                  <h4 className="font-semibold text-gray-100 text-sm">{t.name}</h4>
                  <span className="text-xs text-gray-400">{t.company}</span>
                </div>
              </div>
              <p className="text-sm text-gray-200 mb-2 flex-1">{t.message}</p>
              {t.stars && (
                <div className="mt-2 flex gap-1 text-yellow-400">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
