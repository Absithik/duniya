import { motion } from "motion/react";
import { Plus, ArrowRight, Users, Clock, Calendar, LineChart, CheckCircle2, RefreshCw, Lightbulb, PenTool, MessageSquare } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ValuePropBar } from "../components/ValuePropBar";
import { useNavigate } from "react-router-dom";

export function MethodPage() {
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
              <h1 className="font-display text-[12vw] lg:text-[9vw] uppercase leading-[0.9] tracking-tighter">
                Personalized <br/>
                <span className="text-black/40">Coaching</span> <br/>
                Model
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
                  Learn at <span className="text-red-500">Your Pace</span>
                </div>
                {/* Bubble Tail */}
                <div className="absolute -bottom-2 right-10 w-6 h-6 bg-black/[0.03] border-r border-b border-black/5 rotate-45"></div>
              </motion.div>

              {/* Character on Beanbag */}
              <div className="relative w-full max-w-md aspect-square">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Method&mood[]=happy&style=transparent" 
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

          {/* Why Group Tuition Fails */}
          <div className="mt-20 relative">
            <h2 className="font-display text-[8vw] md:text-[5vw] uppercase leading-none tracking-tighter mb-12 flex items-center gap-6">
              Why Group Tuition Fails
              <div className="flex-1 h-px bg-black/10"></div>
            </h2>

            <div className="bg-black/5 rounded-[3rem] p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/3 aspect-square rounded-[2rem] bg-white flex items-center justify-center border border-black/5 shadow-sm">
                <Users size={120} className="text-black/20" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-display uppercase tracking-tight mb-6">The One-Size-Fits-All Trap</h3>
                <p className="text-black/60 text-lg leading-relaxed mb-8 max-w-2xl">
                  In a traditional classroom, the teacher moves at the pace of the average student. Fast learners get bored, and struggling students get left behind. Language acquisition requires active participation, speaking practice, and immediate correction—things impossible in a crowded room.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Limited speaking time per student",
                    "Generic feedback on assignments",
                    "Pacing dictated by the group",
                    "Fear of making mistakes publicly"
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-black/5">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
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

          {/* 45-Minute Session Breakdown */}
          <div className="mt-20 relative">
            <h2 className="font-display text-[8vw] md:text-[5vw] uppercase leading-none tracking-tighter mb-12 flex items-center gap-6">
              45-Minute Session Breakdown
              <div className="flex-1 h-px bg-black/10"></div>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Revision", time: "10 Mins", icon: <RefreshCw size={32} />, desc: "Reviewing previous concepts and homework to ensure retention." },
                { title: "Concept", time: "15 Mins", icon: <Lightbulb size={32} />, desc: "Introduction of new grammar rules, vocabulary, or literature." },
                { title: "Practice", time: "15 Mins", icon: <PenTool size={32} />, desc: "Active application through speaking, writing, or reading exercises." },
                { title: "Feedback", time: "5 Mins", icon: <MessageSquare size={32} />, desc: "Immediate correction and setting goals for the next session." }
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white border border-black/10 rounded-[2rem] p-8 flex flex-col hover:shadow-xl hover:shadow-black/5 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-black/5 rounded-2xl flex items-center justify-center text-black mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                    {step.icon}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-display uppercase tracking-tight">{step.title}</h3>
                    <span className="text-xs font-bold bg-black/5 px-3 py-1 rounded-full">{step.time}</span>
                  </div>
                  <p className="text-black/60 text-sm leading-relaxed flex-1">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Vertical Line Divider */}
          <div className="flex flex-col items-center mt-20">
            <div className="w-px h-20 bg-black/5"></div>
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
          </div>

          {/* 90-Minute Weekend Deep-Dive & Progress Tracking */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Weekend Deep-Dive */}
            <div className="bg-black text-white rounded-[3rem] p-10 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-10">
                <Calendar size={160} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                  <Clock size={32} className="text-white" />
                </div>
                <h3 className="text-4xl font-display uppercase tracking-tight mb-6">90-Minute Weekend Deep-Dive</h3>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  For intensive exam preparation or complex literature analysis, our extended weekend sessions provide the uninterrupted focus needed to master difficult topics.
                </p>
                <ul className="space-y-4">
                  {[
                    "Comprehensive essay writing practice",
                    "Full-length mock oral examinations",
                    "Deep literature and poetry analysis"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 size={20} className="text-red-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Progress Tracking System */}
            <div className="bg-white border border-black/10 rounded-[3rem] p-10 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <LineChart size={160} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-black/5 rounded-2xl flex items-center justify-center mb-8">
                  <LineChart size={32} className="text-black" />
                </div>
                <h3 className="text-4xl font-display uppercase tracking-tight mb-6">Progress Tracking System</h3>
                <p className="text-black/60 text-lg leading-relaxed mb-8">
                  We don't just teach; we measure. Our robust tracking system ensures you are always moving forward and ready for your certification exams.
                </p>
                
                <div className="space-y-6">
                  {[
                    { title: "Mock Tests", desc: "Regular simulated exams under timed conditions." },
                    { title: "Evaluation", desc: "Detailed breakdown of strengths and areas for improvement." },
                    { title: "Performance Review", desc: "Monthly meetings with parents/students to discuss progress." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center shrink-0 font-bold text-sm">
                        0{idx + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{item.title}</h4>
                        <p className="text-black/60 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* CTA Section */}
          <div className="mt-32 pt-20 border-t border-black/5 flex flex-col items-center text-center">
            <h2 className="font-display text-[8vw] md:text-[6vw] uppercase leading-none tracking-tighter mb-8">
              Experience the difference
            </h2>
            <p className="text-black/60 text-lg max-w-xl mb-12">
              Stop struggling in crowded classrooms. Get the focused, one-on-one attention you need to master Hindi.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-accent text-white px-10 py-5 rounded-full font-bold text-lg btn-glow flex items-center gap-3"
            >
              Start Personalized Learning <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
