import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function ProjectCard({ project, idx }: any) {
  const navigate = useNavigate();
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className="group cursor-pointer"
      onClick={() => navigate(`/projects/${idx}`)}
    >
      <div className="aspect-[4/3] bg-black/5 rounded-[40px] overflow-hidden mb-8 relative flex items-center justify-center p-12 transition-transform duration-500 group-hover:scale-[0.98]">
        <img 
          src={project.img} 
          alt={project.title} 
          className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
      </div>
      
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <h3 className="font-display text-4xl group-hover:text-accent transition-colors">{project.title}</h3>
          <span className="text-black/20 text-2xl">•</span>
          <p className="text-black/40 font-medium text-lg">{project.category}</p>
        </div>
        
        <div className="w-14 h-14 bg-black/5 rounded-full flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
          <ArrowRight size={28} />
        </div>
      </div>
    </motion.div>
  );
}
