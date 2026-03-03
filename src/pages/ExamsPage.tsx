import { motion } from "motion/react";
import { Plus, ArrowRight, BookOpen, GraduationCap, Award, FileText, Languages, BookMarked, CheckCircle2, ShieldCheck } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ValuePropBar } from "../components/ValuePropBar";
import { useNavigate } from "react-router-dom";

export function ExamsPage() {
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
              <h1 className="font-display text-[12vw] lg:text-[8vw] uppercase leading-[0.9] tracking-tighter">
                DBHPS Exam <br/>
                <span className="text-black/40">Structure</span> <br/>
                Explained
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
                  Clear Your <span className="text-red-500">Doubts</span>
                </div>
                {/* Bubble Tail */}
                <div className="absolute -bottom-2 right-10 w-6 h-6 bg-black/[0.03] border-r border-b border-black/5 rotate-45"></div>
              </motion.div>

              {/* Character on Beanbag */}
              <div className="relative w-full max-w-md aspect-square">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Exam&mood[]=happy&style=transparent" 
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

          {/* What is DBHPS? */}
          <div className="mt-20 relative">
            <h2 className="font-display text-[8vw] md:text-[5vw] uppercase leading-none tracking-tighter mb-12 flex items-center gap-6">
              What is DBHPS?
              <div className="flex-1 h-px bg-black/10"></div>
            </h2>

            <div className="bg-black/5 rounded-[3rem] p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/3 aspect-square rounded-[2rem] bg-white flex items-center justify-center border border-black/5 shadow-sm overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop" 
                  alt="DBHPS Institution" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-display uppercase tracking-tight mb-6">Dakshina Bharat Hindi Prachar Sabha</h3>
                <p className="text-black/60 text-lg leading-relaxed mb-8 max-w-2xl">
                  Established by Mahatma Gandhi in 1918, DBHPS is an institution of national importance. It conducts highly respected Hindi certification exams across Southern India. These certifications are widely recognized by educational institutions and government bodies.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Nationally Recognized",
                    "Government Approved",
                    "Standardized Curriculum",
                    "Valuable for Career Growth"
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-black/5">
                      <ShieldCheck size={18} className="text-red-500" />
                      <span className="text-sm font-bold">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Line Divider */}
          <div className="flex flex-col items-center mt-20">
            <div className="w-px h-20 bg-black/5"></div>
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
          </div>

          {/* Level Equivalency Table */}
          <div className="mt-20 relative">
            <h2 className="font-display text-[8vw] md:text-[5vw] uppercase leading-none tracking-tighter mb-12 flex items-center gap-6">
              Level Equivalency
              <div className="flex-1 h-px bg-black/10"></div>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { level: "Parichaya", eq: "Basics", icon: <BookOpen size={32} /> },
                { level: "Praveshika", eq: "10th Std", icon: <Award size={32} /> },
                { level: "Visharad", eq: "12th Std", icon: <BookMarked size={32} /> },
                { level: "Praveen", eq: "Degree", icon: <GraduationCap size={32} /> }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white border border-black/10 rounded-[2rem] p-8 flex flex-col items-center text-center hover:shadow-xl hover:shadow-black/5 transition-all duration-300 group"
                >
                  <div className="w-20 h-20 bg-black/5 rounded-full flex items-center justify-center text-black mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-display uppercase tracking-tight mb-2">{item.level}</h3>
                  <div className="flex items-center gap-2 text-black/40 mb-2">
                    <ArrowRight size={16} />
                  </div>
                  <span className="text-lg font-bold text-red-500 uppercase tracking-widest">{item.eq}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Vertical Line Divider */}
          <div className="flex flex-col items-center mt-20">
            <div className="w-px h-20 bg-black/5"></div>
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
          </div>

          {/* Exam Pattern Overview & Why Coaching Matters */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Exam Pattern Overview */}
            <div className="bg-black text-white rounded-[3rem] p-10 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-10">
                <FileText size={160} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                  <FileText size={32} className="text-white" />
                </div>
                <h3 className="text-4xl font-display uppercase tracking-tight mb-6">Exam Pattern Overview</h3>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  The DBHPS exams are comprehensive, testing multiple facets of language proficiency. Understanding the pattern is key to scoring high marks.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Grammar", icon: <BookOpen size={20} /> },
                    { title: "Essay", icon: <FileText size={20} /> },
                    { title: "Translation", icon: <Languages size={20} /> },
                    { title: "Literature", icon: <BookMarked size={20} /> }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/10 px-6 py-4 rounded-xl border border-white/10 backdrop-blur-sm">
                      <div className="text-red-400">{item.icon}</div>
                      <span className="font-bold tracking-wide">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Structured Coaching Matters */}
            <div className="bg-white border border-black/10 rounded-[3rem] p-10 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <GraduationCap size={160} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-black/5 rounded-2xl flex items-center justify-center mb-8">
                  <GraduationCap size={32} className="text-black" />
                </div>
                <h3 className="text-4xl font-display uppercase tracking-tight mb-6">Why Structured Coaching Matters</h3>
                <p className="text-black/60 text-lg leading-relaxed mb-8">
                  Self-study can only take you so far. The DBHPS syllabus is vast, and the evaluation is strict. Structured coaching provides the roadmap to success.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Targeted syllabus coverage without wasting time",
                    "Expert evaluation of essays and translations",
                    "Mock exams to build time-management skills",
                    "Personalized feedback on weak areas"
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="mt-1">
                        <CheckCircle2 size={20} className="text-accent" />
                      </div>
                      <p className="font-medium text-black/80">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* CTA Section */}
          <div className="mt-32 pt-20 border-t border-black/5 flex flex-col items-center text-center">
            <h2 className="font-display text-[8vw] md:text-[6vw] uppercase leading-none tracking-tighter mb-8">
              Ready for your next level?
            </h2>
            <p className="text-black/60 text-lg max-w-xl mb-12">
              Join thousands of successful students who have cleared their DBHPS exams with our expert guidance.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-accent text-white px-10 py-5 rounded-full font-bold text-lg btn-glow flex items-center gap-3"
            >
              Prepare with Knowledge Duniya <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
