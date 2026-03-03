import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function TestimonialSlider() {
  const testimonials = [
    {
      text: "Best designer I've worked with! Fast, professional, and the website looks incredible. Highly recommend!",
      author: "Sarah Mitchell",
      role: "Founder of Bloom Studio",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
      text: "Dean completely transformed our digital presence. His attention to detail and design sense is unmatched.",
      author: "James Wilson",
      role: "CEO at TechFlow",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
    },
    {
      text: "The process was seamless and the results exceeded our expectations. A true professional.",
      author: "Elena Rodriguez",
      role: "Marketing Director",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="relative overflow-hidden min-h-[600px] flex flex-col h-full">
      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="absolute inset-0 p-12 md:p-20 flex flex-col items-center justify-center text-center"
          >
            <div className="flex gap-1 mb-8">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-accent text-xl">★</span>
              ))}
            </div>
            <p className="font-display text-4xl md:text-5xl uppercase leading-tight mb-12 max-w-lg">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-2 border-accent p-1 mb-4">
                <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].author} className="w-full h-full rounded-full bg-black/5" />
              </div>
              <h4 className="font-display text-2xl uppercase">{testimonials[currentIndex].author}</h4>
              <p className="text-black/40 text-sm font-medium">{testimonials[currentIndex].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Pagination Dots */}
      <div className="p-8 flex justify-center gap-3 border-t border-black/5">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all ${currentIndex === idx ? 'bg-accent w-8' : 'bg-black/10 hover:bg-black/20'}`}
          />
        ))}
      </div>
    </div>
  );
}
