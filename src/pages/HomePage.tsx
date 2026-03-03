import { motion } from "motion/react";
import { Plus, CheckCircle2, BookOpen, Users, Target, ArrowRight, Award, Star, Mail, Phone, Instagram, Facebook, Youtube } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ValuePropBar } from "../components/ValuePropBar";
import { TestimonialSection } from "../components/TestimonialSection";
import { CrossMarker } from "../components/CrossMarker";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="relative flex flex-col items-center justify-center min-h-[70vh] border-y border-black/10 py-20 mt-10">
            {/* Corner Markers */}
            <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
              </svg>
            </div>
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
              </svg>
            </div>
            <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
              </svg>
            </div>

            {/* Top Pill */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-black/5 px-6 py-2 rounded-full text-sm font-medium text-black/80 mb-12"
            >
              Hi, Welcome to Knowledge Duniya
            </motion.div>

            {/* Massive Headline with Avatar */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8 w-full">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display text-[20vw] md:text-[12vw] uppercase leading-none tracking-tighter"
              >
                HINDI
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
                className="w-40 h-40 md:w-56 md:h-56 relative z-10 -my-8 md:my-0"
              >
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Teacher&mood[]=happy&style=transparent" 
                  alt="Teacher Avatar" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="font-display text-[20vw] md:text-[12vw] uppercase leading-none tracking-tighter"
              >
                COACHING
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-black/60 text-lg md:text-xl max-w-2xl text-center mb-12 leading-relaxed"
            >
              From Parichaya to Praveen, we provide structured, one-to-one online coaching for DBHPS exams to help you achieve mastery.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <button 
                onClick={() => navigate('/contact')}
                className="bg-accent text-white px-10 py-5 rounded-full font-bold text-lg transition-all btn-glow flex items-center gap-3"
              >
                Book Free Demo <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
              </button>
            </motion.div>
          </div>

          <ValuePropBar />

          {/* Vertical Line Divider */}
          <div className="flex flex-col items-center mt-20">
            <div className="w-px h-20 bg-black/5"></div>
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
          </div>

          {/* Courses Section (Image Style) */}
          <div className="mt-20 relative">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
              <h2 className="font-display text-[12vw] md:text-[8vw] uppercase leading-none tracking-tighter">
                COURSES
              </h2>
              <button 
                onClick={() => navigate('/projects')}
                className="bg-black text-white px-8 py-4 rounded-full font-bold text-sm transition-all hover:scale-105 flex items-center gap-3 shadow-2xl shadow-accent/20"
              >
                View all courses <span className="w-2 h-2 bg-accent rounded-full"></span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Foundation", img: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=2574&auto=format&fit=crop" },
                { title: "Intermediate", img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2670&auto=format&fit=crop" },
                { title: "Degree Level", img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2670&auto=format&fit=crop" }
              ].map((course, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/10 group cursor-pointer"
                  onClick={() => navigate('/projects')}
                >
                  <img 
                    src={course.img} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <h3 className="absolute bottom-8 left-8 font-display text-white text-4xl tracking-tight">
                    {course.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Vertical Line Divider */}
          <div className="flex flex-col items-center mt-20">
            <div className="w-px h-20 bg-black/5"></div>
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
          </div>

          {/* About Us Grid Section */}
          <div className="mt-20 border-t border-black/10 relative bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* LEFT COLUMN */}
              <div className="flex flex-col lg:border-r border-black/10 relative">
                <CrossMarker className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
                <CrossMarker className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />

                <div className="p-10 border-b border-black/10 relative">
                  <h3 className="font-display text-5xl mb-2">1000+</h3>
                  <p className="text-black/60 font-medium">Students Taught</p>
                  <CrossMarker className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
                  <CrossMarker className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
                </div>
                <div className="p-10 border-b border-black/10 relative">
                  <h3 className="font-display text-5xl mb-2">10+</h3>
                  <p className="text-black/60 font-medium">Years of Experience</p>
                  <CrossMarker className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
                  <CrossMarker className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
                </div>
                <div className="p-10 border-b border-black/10 relative">
                  <h3 className="font-display text-5xl mb-2">5</h3>
                  <p className="text-black/60 font-medium">Star Client Reviews</p>
                  <CrossMarker className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
                  <CrossMarker className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="p-8 bg-black/5 border-b border-black/10 relative">
                  <h4 className="font-bold text-lg">Our Levels</h4>
                  <CrossMarker className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
                  <CrossMarker className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="p-8 border-b border-black/10 flex items-center gap-6 relative">
                  <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center shrink-0">
                    <BookOpen size={24}/>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">Foundation</h5>
                    <p className="text-sm text-black/60">Parichaya to Rashtrabhasha</p>
                  </div>
                  <CrossMarker className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
                  <CrossMarker className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="p-8 border-b border-black/10 flex items-center gap-6 relative">
                  <div className="w-14 h-14 bg-accent text-white rounded-2xl flex items-center justify-center shrink-0">
                    <Target size={24}/>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">Intermediate</h5>
                    <p className="text-sm text-black/60">Praveshika to Visharad</p>
                  </div>
                  <CrossMarker className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
                  <CrossMarker className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="p-8 flex items-center gap-6 relative">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shrink-0">
                    <Award size={24}/>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">Advanced</h5>
                    <p className="text-sm text-black/60">Praveen Level</p>
                  </div>
                  <CrossMarker className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
                  <CrossMarker className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
                </div>
              </div>

              {/* CENTER COLUMN */}
              <div className="flex flex-col relative lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] self-start z-10 w-full overflow-hidden">
                <CrossMarker className="top-0 right-0 translate-x-1/2 -translate-y-1/2 hidden lg:block" />

                <div className="h-[140px] border-b border-black/10 flex items-center justify-center relative shrink-0">
                  <h2 className="font-display text-7xl md:text-8xl uppercase tracking-tighter">ABOUT US</h2>
                  <CrossMarker className="bottom-0 right-0 translate-x-1/2 translate-y-1/2 hidden lg:block" />
                </div>

                <div className="flex-1 relative flex justify-center items-end p-10 min-h-[400px] lg:min-h-0 bg-white">
                  {/* Speech Bubble */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="absolute top-20 right-10 lg:right-4 bg-black/5 backdrop-blur-sm px-6 py-3 rounded-3xl rounded-bl-none font-bold text-sm border border-black/10 z-20"
                  >
                    Let Us Introduce <span className="text-accent">Ourselves</span>
                  </motion.div>

                  {/* Avatar */}
                  <div className="relative w-full max-w-lg aspect-square">
                    <img 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Teacher2&mood[]=happy&style=transparent" 
                      alt="Teacher" 
                      className="w-full h-full object-contain relative z-10 drop-shadow-2xl" 
                    />
                    {/* Beanbag Shape */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-accent/10 rounded-[100px] -z-0 border border-black/5 shadow-inner"></div>
                    {/* Laptop/Book prop */}
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-32 h-24 bg-gray-200 rounded-xl z-20 shadow-xl border border-white/50 flex items-center justify-center rotate-[-5deg]">
                       <div className="w-8 h-8 bg-black/10 rounded-full"></div>
                    </div>
                  </div>
                  <CrossMarker className="bottom-0 right-0 translate-x-1/2 translate-y-1/2 hidden lg:block" />
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col relative lg:border-l border-black/10">
                <CrossMarker className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />

                <div className="p-10 border-b border-black/10 relative">
                  <h3 className="font-display text-5xl mb-2">98%</h3>
                  <p className="text-black/60 font-medium">Exam Pass Rate</p>
                  <CrossMarker className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
                </div>
                <div className="p-10 border-b border-black/10 relative">
                  <h3 className="font-display text-5xl mb-2">60+</h3>
                  <p className="text-black/60 font-medium">Expert Mentors</p>
                  <CrossMarker className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
                </div>
                <div className="p-10 border-b border-black/10 relative">
                  <h3 className="font-display text-5xl mb-2">9</h3>
                  <p className="text-black/60 font-medium">Certification Levels</p>
                  <CrossMarker className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="p-8 bg-black/5 border-b border-black/10 relative">
                  <h4 className="font-bold text-lg">Why Choose Us</h4>
                  <CrossMarker className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="p-8 border-b border-black/10 relative">
                  <h5 className="font-bold text-lg mb-4">DBHPS Aligned</h5>
                  <div className="flex items-center gap-3 text-sm text-black/60 mb-3">
                    <span className="w-20">Board</span> <ArrowRight size={14} /> <span className="text-black font-medium">DBHPS</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-black/60">
                    <span className="w-20">Focus</span> <ArrowRight size={14} /> <span className="text-black font-medium">Certification</span>
                  </div>
                  <CrossMarker className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="p-8 border-b border-black/10 relative">
                  <h5 className="font-bold text-lg mb-4">1-on-1 Coaching</h5>
                  <div className="flex items-center gap-3 text-sm text-black/60 mb-3">
                    <span className="w-20">Type</span> <ArrowRight size={14} /> <span className="text-black font-medium">Online</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-black/60">
                    <span className="w-20">Duration</span> <ArrowRight size={14} /> <span className="text-black font-medium">Flexible</span>
                  </div>
                  <CrossMarker className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="p-8 relative">
                  <h5 className="font-bold text-lg mb-4">Expert Faculty</h5>
                  <div className="flex items-center gap-3 text-sm text-black/60 mb-3">
                    <span className="w-20">Quality</span> <ArrowRight size={14} /> <span className="text-black font-medium">Top Tier</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-black/60">
                    <span className="w-20">Support</span> <ArrowRight size={14} /> <span className="text-black font-medium">24/7 Access</span>
                  </div>
                  <CrossMarker className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
                </div>
              </div>

            </div>
            {/* Bottom border line for the whole grid */}
            <div className="w-full h-px bg-black/10 absolute bottom-0 left-0"></div>
          </div>

          {/* Vertical Line Divider */}
          <div className="flex flex-col items-center mt-20">
            <div className="w-px h-20 bg-black/5"></div>
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
          </div>

          {/* Our Programs List Section */}
          <div className="mt-20 relative border border-black/10 bg-white">
            <CrossMarker className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
            <CrossMarker className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />
            <CrossMarker className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
            <CrossMarker className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />

            <div className="flex flex-col">
              {[
                { num: "01", title: "Foundation Course", badge: "Parichaya to Rashtrabhasha" },
                { num: "02", title: "Intermediate Course", badge: "Praveshika to Visharad" },
                { num: "03", title: "Advanced Course", badge: "Praveen Level Mastery" },
                { num: "04", title: "Crash Course", badge: "Exam Revision & Mock Tests" }
              ].map((program, idx) => (
                <div 
                  key={idx} 
                  onClick={() => navigate('/projects')}
                  className="group flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-12 border-b border-black/10 last:border-b-0 relative hover:bg-black/[0.02] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-6 md:gap-12 w-full md:w-auto mb-6 md:mb-0">
                    <span className="font-mono text-xl text-black/40">{program.num}</span>
                    <h3 className="font-display text-4xl md:text-5xl uppercase tracking-tight">{program.title}</h3>
                  </div>
                  <div className="flex items-center justify-between w-full md:w-auto gap-6 md:gap-12">
                    <span className="bg-black/5 px-6 py-2 rounded-full text-sm font-medium text-black/70 whitespace-nowrap">
                      {program.badge}
                    </span>
                    <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors shrink-0">
                      <Plus size={20} />
                    </div>
                  </div>

                  {/* Floating Element (only on the 3rd item for visual interest like the reference) */}
                  {idx === 2 && (
                    <motion.div 
                      initial={{ y: 0 }}
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute right-32 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none z-10"
                    >
                      <div className="text-8xl drop-shadow-2xl rotate-12">🎓</div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Line Divider */}
          <div className="flex flex-col items-center mt-20">
            <div className="w-px h-20 bg-black/5"></div>
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
          </div>

          <TestimonialSection />

          {/* FAQ Section */}
          <div className="border-t border-black/10 relative bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left */}
              <div className="flex flex-col border-b md:border-b-0 md:border-r border-black/10 relative items-center justify-center min-h-[500px] p-10">
                <CrossMarker className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
                <CrossMarker className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="absolute top-1/3 right-10 lg:right-20 bg-black/5 backdrop-blur-sm px-6 py-4 rounded-3xl rounded-tl-none font-bold text-sm border border-black/10 z-20 text-center"
                >
                  Frequently<br/>
                  <span className="text-accent">Answered</span><br/>
                  Questions
                </motion.div>
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jack&mood[]=happy&style=transparent" 
                  alt="FAQ Character" 
                  className="w-64 h-64 object-contain relative z-10 drop-shadow-2xl" 
                />
              </div>
              {/* Right */}
              <div className="flex flex-col relative bg-black/[0.02]">
                <CrossMarker className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />
                <div className="h-[140px] border-b border-black/10 flex items-center p-10 relative bg-white">
                  <h2 className="font-display text-6xl md:text-7xl uppercase tracking-tighter">FAQ</h2>
                  <CrossMarker className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
                  <CrossMarker className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2 hidden md:block" />
                </div>
                <div className="flex-1 p-10 flex flex-col justify-center relative">
                  {[
                    { q: "How long does a typical course take?", active: true },
                    { q: "How much do your services cost?", active: false },
                    { q: "Do you offer mock exams?", active: false },
                    { q: "What do I need to get started?", active: false }
                  ].map((faq, i) => (
                    <div key={i} className="flex items-center gap-3 mb-4 last:mb-0">
                      <div className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium">
                        {faq.q}
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${faq.active ? 'bg-accent text-white' : 'bg-black/10 text-black/40'}`}>
                        <Plus size={16} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="border-t border-black/10 relative bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left */}
              <div className="flex flex-col border-b md:border-b-0 md:border-r border-black/10 relative items-center justify-center min-h-[500px] p-10">
                <CrossMarker className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
                <CrossMarker className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="absolute top-20 right-10 lg:right-32 bg-black/5 backdrop-blur-sm px-6 py-3 rounded-3xl rounded-bl-none font-bold text-sm border border-black/10 z-20"
                >
                  Contact <span className="text-accent">Us</span>
                </motion.div>
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Teacher3&mood[]=happy&style=transparent" 
                  alt="Contact Character" 
                  className="w-64 h-64 object-contain relative z-10 drop-shadow-2xl" 
                />
              </div>
              {/* Right */}
              <div className="flex flex-col relative">
                <CrossMarker className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />
                <div className="h-[140px] border-b border-black/10 flex items-center p-10 relative">
                  <h2 className="font-display text-6xl md:text-7xl uppercase tracking-tighter">CONTACT US</h2>
                  <CrossMarker className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
                  <CrossMarker className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2 hidden md:block" />
                </div>
                <div className="flex-1 p-10 flex flex-col relative">
                  <h3 className="font-display text-4xl mb-4">Let's Work Together</h3>
                  <p className="text-black/60 mb-10 max-w-md">Have a question about our courses? Drop us a message and we'll get back to you within 24 hours.</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                     <div>
                       <div className="flex items-center gap-2 font-bold mb-2"><Mail size={16}/> Email</div>
                       <p className="text-black/60">hello@knowledgeduniya.com</p>
                     </div>
                     <div>
                       <div className="flex items-center gap-2 font-bold mb-2"><Phone size={16}/> Phone</div>
                       <p className="text-black/60">+91 98765 43210</p>
                     </div>
                  </div>

                  <div className="mb-4 font-bold">Socials</div>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-black/5 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 cursor-pointer hover:bg-black/10 transition-colors"><Instagram size={14}/> Instagram</span>
                    <span className="bg-black/5 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 cursor-pointer hover:bg-black/10 transition-colors"><Facebook size={14}/> Facebook</span>
                    <span className="bg-black/5 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 cursor-pointer hover:bg-black/10 transition-colors"><Youtube size={14}/> Youtube</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-px bg-black/10 absolute bottom-0 left-0"></div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
