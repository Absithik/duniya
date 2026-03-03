import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, X } from "lucide-react";

export function ServiceItem({ service }: any) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`transition-colors duration-500 ${isOpen ? 'bg-black/[0.02]' : 'bg-white'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-10 text-left group"
      >
        <div className="flex items-center gap-8">
          <span className="font-display text-xl text-black/40">{service.id}</span>
          <h3 className="font-display text-5xl uppercase tracking-tight group-hover:text-accent transition-colors">
            {service.title}
          </h3>
          <div className="hidden md:block bg-black/5 px-6 py-2 rounded-full text-sm font-bold ml-4">
            {service.pill}
          </div>
        </div>
        
        <div className="relative">
          {/* 3D-like Image Preview (visible when closed) */}
          {!isOpen && (
            <div className="absolute right-20 top-1/2 -translate-y-1/2 w-24 h-24 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
              <img src={service.img} alt="" className="w-full h-full object-contain drop-shadow-xl" />
            </div>
          )}
          
          <div className={`w-12 h-12 rounded-full border border-black/10 flex items-center justify-center transition-all duration-500 ${isOpen ? 'rotate-45 bg-black text-white' : 'hover:border-accent hover:text-accent'}`}>
            {isOpen ? <X size={20} /> : <Plus size={20} />}
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-10 pb-12 pt-0 flex flex-col md:flex-row gap-12 items-start">
              <div className="flex-1">
                <p className="text-xl text-black/60 leading-relaxed max-w-2xl mb-10">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-3">
                  {service.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-black/5 px-6 py-3 rounded-full text-sm font-bold hover:bg-accent hover:text-white transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="w-full md:w-64 aspect-square relative">
                <motion.img 
                  initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  src={service.img} 
                  alt={service.title}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
