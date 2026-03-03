import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";

export function FAQItem({ faq }: any) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="group">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-12 md:p-16 flex items-center justify-between text-left hover:bg-black/[0.01] transition-colors"
      >
        <h3 className="font-display text-3xl uppercase max-w-md">{faq.q}</h3>
        <div className={`w-10 h-10 rounded-full border border-black/10 flex items-center justify-center transition-all ${isOpen ? 'rotate-45 bg-black text-white' : ''}`}>
          <Plus size={20} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-12 md:px-16 pb-12 md:pb-16 text-black/60 text-lg leading-relaxed">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
