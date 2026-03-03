import { 
  Trophy, 
  Zap, 
  Monitor, 
  CheckCircle, 
  Lightbulb, 
  MousePointer, 
  Headphones 
} from "lucide-react";

export function ValuePropBar() {
  return (
    <section className="mt-20 relative border-y border-black/5 py-8 overflow-hidden">
      {/* Corner Markers */}
      <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="currentColor"/>
        </svg>
      </div>
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="currentColor"/>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="currentColor"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="flex items-center gap-12 px-4 whitespace-nowrap animate-marquee">
        {[...Array(2)].map((_, idx) => (
          <div key={idx} className="flex items-center gap-12">
            {[
              { icon: <Trophy size={18} />, text: "Expert Instructors" },
              { icon: <Zap size={18} />, text: "Interactive Learning" },
              { icon: <Monitor size={18} />, text: "Structured Curriculum" },
              { icon: <CheckCircle size={18} />, text: "Flexible Schedules" },
              { icon: <Lightbulb size={18} />, text: "Cultural Immersion" },
              { icon: <MousePointer size={18} />, text: "Personalized Feedback" },
              { icon: <Headphones size={18} />, text: "24/7 Support" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-black/60 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                <span className="text-black/40">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
