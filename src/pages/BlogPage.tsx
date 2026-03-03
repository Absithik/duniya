import { motion } from "motion/react";
import { Plus, ArrowRight, FileText, Mail, BookOpen, Target } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ValuePropBar } from "../components/ValuePropBar";
import { useNavigate } from "react-router-dom";

const resources = [
  {
    title: "Essay Formats",
    description: "Master the structure of Hindi essays with templates for different topics, from descriptive to argumentative writing.",
    icon: <FileText size={24} />,
    tag: "Writing",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=2673&auto=format&fit=crop"
  },
  {
    title: "Letter Writing",
    description: "Learn formal and informal letter writing conventions, including proper salutations and sign-offs in Hindi.",
    icon: <Mail size={24} />,
    tag: "Correspondence",
    img: "https://images.unsplash.com/photo-1579370318443-8da816457e3d?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Grammar Guides",
    description: "Comprehensive breakdowns of complex Hindi grammar rules, tenses, and sentence construction.",
    icon: <BookOpen size={24} />,
    tag: "Fundamentals",
    img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2573&auto=format&fit=crop"
  },
  {
    title: "Exam Strategy",
    description: "Time management tips, common pitfalls to avoid, and strategies for maximizing your score in certification exams.",
    icon: <Target size={24} />,
    tag: "Preparation",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2670&auto=format&fit=crop"
  }
];

export function BlogPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-[50vh] border-b border-black/5 pb-20">
            {/* Corner Markers */}
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2">
              <Plus size={20} className="rotate-45 text-black" />
            </div>
            <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2">
              <Plus size={20} className="rotate-45 text-black" />
            </div>

            {/* Left: Text */}
            <div className="z-10 max-w-3xl">
              <h1 className="font-display text-[12vw] lg:text-[10vw] uppercase leading-[0.9] tracking-tighter">
                Hindi Exam <br/>
                <span className="text-black/40">Resources</span>
              </h1>
            </div>

            {/* Right: Character & Speech Bubble */}
            <div className="relative mt-20 lg:mt-0 flex items-center">
              {/* Speech Bubble */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -left-40 top-0 z-20 hidden xl:block"
              >
                <div className="bg-black/[0.03] backdrop-blur-sm px-8 py-4 rounded-[40px] rounded-br-none text-xl font-bold flex items-center gap-2 border border-black/5 shadow-xl">
                  Ace Your <span className="text-red-500">Exams</span>
                </div>
                {/* Bubble Tail */}
                <div className="absolute -bottom-2 right-10 w-6 h-6 bg-black/[0.03] border-r border-b border-black/5 rotate-45"></div>
              </motion.div>

              {/* Character on Beanbag */}
              <div className="relative w-full max-w-md aspect-square">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Student&mood[]=happy&style=transparent" 
                  alt="Student on Beanbag" 
                  className="w-full h-full object-contain drop-shadow-2xl relative z-10"
                />
                {/* Beanbag Shape */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-accent/10 rounded-[100px] -z-0 border border-black/5 shadow-inner"></div>
                {/* Red Pillow */}
                <div className="absolute bottom-4 -left-10 w-32 h-20 bg-red-500 rounded-3xl rotate-[-15deg] -z-0 shadow-lg"></div>
              </div>
            </div>
          </div>

          <ValuePropBar />

          {/* Vertical Line Divider */}
          <div className="flex flex-col items-center mt-20">
            <div className="w-px h-20 bg-black/5"></div>
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
          </div>

          {/* Resources Grid */}
          <div className="mt-20 relative">
            <h2 className="font-display text-[8vw] md:text-[5vw] uppercase leading-none tracking-tighter mb-12 flex items-center gap-6">
              Study Materials
              <div className="flex-1 h-px bg-black/10"></div>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {resources.map((resource, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex flex-col"
                >
                  <div className="w-full aspect-[16/9] rounded-[2rem] overflow-hidden mb-8 bg-black/5 relative">
                    <img 
                      src={resource.img} 
                      alt={resource.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                    
                    {/* Tag Badge */}
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      {resource.tag}
                    </div>
                  </div>

                  <div className="flex flex-col flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center text-black">
                        {resource.icon}
                      </div>
                      <h3 className="text-3xl font-display uppercase tracking-tight">{resource.title}</h3>
                    </div>

                    <p className="text-black/60 text-lg leading-relaxed mb-8 flex-1">
                      {resource.description}
                    </p>

                    <button 
                      className="flex items-center justify-between w-full px-8 py-4 bg-black/5 rounded-full hover:bg-black hover:text-white transition-all group/btn"
                    >
                      <span className="font-bold text-sm uppercase tracking-widest">Read Guide</span>
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black group-hover/btn:scale-110 transition-transform">
                        <ArrowRight size={16} />
                      </div>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-32 pt-20 border-t border-black/5 flex flex-col items-center text-center">
            <h2 className="font-display text-[8vw] md:text-[6vw] uppercase leading-none tracking-tighter mb-8">
              Need personalized help?
            </h2>
            <p className="text-black/60 text-lg max-w-xl mb-12">
              Self-study is great, but expert guidance makes all the difference. Book a structured coaching session to accelerate your learning.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-accent text-white px-10 py-5 rounded-full font-bold text-lg btn-glow flex items-center gap-3"
            >
              Book Structured Coaching <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
