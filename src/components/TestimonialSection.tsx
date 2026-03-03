import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';
import { CrossMarker } from './CrossMarker';
import animitestimonial from '../assets/animi_testimonial.png'
import animitestimonial1 from '../assets/animi_testimonial1.png'
import animitestimonial2 from '../assets/animi_testimonial2.png'

const testimonials = [
  {
    id: 1,
    quote: "Best coaching I've experienced! Fast, professional, and the teaching style is incredible. Highly recommend!",
    author: "Felix",
    image: animitestimonial,
    bubble: "What my Students said"
  },
  {
    id: 2,
    quote: "The attention to detail and personalized feedback completely transformed my approach to design.",
    author: "Sarah",
    image: animitestimonial1,
    bubble: "Incredible Mentorship!"
  },
  {
    id: 3,
    quote: "I landed my dream job within weeks of completing the program. The portfolio review was a game-changer.",
    author: "Alex",
    image: animitestimonial2,
    bubble: "Got Hired Fast!"
  }
];

const TestimonialItem = ({ testimonial, index, setActiveIndex }: { testimonial: any, index: number, setActiveIndex: (i: number) => void }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: "-20% 0px -20% 0px"
  });

  useEffect(() => {
    if (inView) {
      setActiveIndex(index);
    }
  }, [inView, index, setActiveIndex]);

  return (
    <div
      ref={ref}
      className="min-h-[500px] md:min-h-[70vh] p-10 flex flex-col items-center justify-center text-center relative border-b border-black/5 last:border-b-0"
    >
      <div className="flex gap-1 text-accent mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={20} fill="currentColor" />
        ))}
      </div>
      <p className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight max-w-lg mb-8">
        "{testimonial.quote}"
      </p>
      <p className="font-bold text-black/40 uppercase tracking-widest text-sm">
        — {testimonial.author}
      </p>
    </div>
  );
};

export function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mt-20 border-t border-black/10 relative bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left - Sticky */}
        <div className="relative border-b md:border-b-0 md:border-r border-black/10">
          <div className="sticky top-0 h-[500px] md:h-screen max-h-[800px] flex flex-col items-center justify-center p-10 overflow-hidden">
            <CrossMarker className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
            <CrossMarker className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />

            <AnimatePresence mode="wait">
              <motion.div
                key={`bubble-${activeIndex}`}
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="absolute top-20 right-10 lg:right-20 bg-black/5 backdrop-blur-sm px-6 py-3 rounded-3xl rounded-bl-none font-bold text-sm border border-black/10 z-20"
              >
                {testimonials[activeIndex].bubble.split(' ').map((word, i) => (
                  <span key={i} className={i === 2 ? "text-accent" : ""}>{word} </span>
                ))}
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.img
                key={`img-${activeIndex}`}
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].author}
                initial={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: 20, filter: 'blur(4px)' }}
                transition={{ duration: 0.4 }}
                className="w-64 h-64 md:w-80 md:h-80 object-contain relative z-10 drop-shadow-2xl"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Right - Scrolling */}
        <div className="flex flex-col relative">
          <CrossMarker className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />

          {/* Sticky Header for Right Side */}
          <div className="sticky top-0 z-30 h-[140px] border-b border-black/10 flex items-center p-10 bg-white/90 backdrop-blur-md">
            <h2 className="font-display text-6xl md:text-7xl uppercase tracking-tighter">TESTIMONIAL</h2>
            <CrossMarker className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
            <CrossMarker className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2 hidden md:block" />
          </div>

          {/* Scrolling Items */}
          <div className="flex flex-col">
            {testimonials.map((testimonial, index) => (
              <TestimonialItem
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
