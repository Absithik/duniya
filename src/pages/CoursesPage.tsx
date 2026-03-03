import { motion } from "motion/react";
import { Plus, ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ValuePropBar } from "../components/ValuePropBar";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    section: "Foundation Levels",
    items: [
      {
        title: "Parichaya",
        skills: ["Basic Alphabet", "Simple Words", "Everyday Greetings"],
        batch: "Beginners (Age 5+)",
        img: "https://images.unsplash.com/photo-1588196749597-9ff0464b4431?q=80&w=2158&auto=format&fit=crop"
      },
      {
        title: "Prathmic",
        skills: ["Sentence Formation", "Basic Grammar", "Reading Short Stories"],
        batch: "Level 1 Students",
        img: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2670&auto=format&fit=crop"
      },
      {
        title: "Madhyama",
        skills: ["Intermediate Grammar", "Paragraph Writing", "Conversational Hindi"],
        batch: "Level 2 Students",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
      },
      {
        title: "Rashtrabhasha",
        skills: ["Advanced Vocabulary", "Essay Writing", "Fluent Speaking"],
        batch: "Level 3 Students",
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2599&auto=format&fit=crop"
      }
    ]
  },
  {
    section: "Intermediate",
    items: [
      {
        title: "Praveshika",
        subtitle: "(10th Equivalent)",
        skills: ["Complex Grammar", "Literature Analysis", "Debate & Discussion"],
        batch: "High School Students",
        img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2670&auto=format&fit=crop"
      }
    ]
  },
  {
    section: "Higher Secondary",
    items: [
      {
        title: "Visharad",
        subtitle: "(Purvardh)",
        skills: ["Advanced Literature", "Poetry Interpretation", "Professional Writing"],
        batch: "College Prep",
        img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2574&auto=format&fit=crop"
      },
      {
        title: "Visharad",
        subtitle: "(Uttarardh)",
        skills: ["Critical Analysis", "Essay Writing", "Advanced Grammar"],
        batch: "College Prep",
        img: "https://images.unsplash.com/photo-1546410531-bea4cada6242?q=80&w=2574&auto=format&fit=crop"
      }
    ]
  },
  {
    section: "Degree Level",
    items: [
      {
        title: "Praveen",
        subtitle: "(Purvardh)",
        skills: ["Mastery in Hindi", "Thesis Writing", "Public Speaking"],
        batch: "Degree Equivalency",
        img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2670&auto=format&fit=crop"
      },
      {
        title: "Praveen",
        subtitle: "(Uttarardh)",
        skills: ["Literary Criticism", "Advanced Thesis", "Fluency & Oratory"],
        batch: "Degree Equivalency",
        img: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2670&auto=format&fit=crop"
      }
    ]
  }
];

export function CoursesPage() {
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
                9-Level <br/>
                <span className="text-black/40">Certification</span> <br/>
                Pathway
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
                  Explore Our <span className="text-red-500">Courses</span>
                </div>
                {/* Bubble Tail */}
                <div className="absolute -bottom-2 right-10 w-6 h-6 bg-black/[0.03] border-r border-b border-black/5 rotate-45"></div>
              </motion.div>

              {/* Character on Beanbag */}
              <div className="relative w-full max-w-md aspect-square">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Dhunya&mood[]=happy&style=transparent" 
                  alt="Dhunya on Beanbag" 
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

          {/* Courses Sections */}
          <div className="mt-20 flex flex-col gap-32">
            {courses.map((section, sIdx) => (
              <div key={sIdx} className="relative">
                <h2 className="font-display text-[8vw] md:text-[5vw] uppercase leading-none tracking-tighter mb-12 flex items-center gap-6">
                  {section.section}
                  <div className="flex-1 h-px bg-black/10"></div>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                  {section.items.map((course, cIdx) => (
                    <motion.div 
                      key={cIdx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="group flex flex-col"
                    >
                      <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-8 bg-black/5 relative">
                        <img 
                          src={course.img} 
                          alt={course.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                          referrerPolicy="no-referrer" 
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        
                        {/* Recommended Batch Badge */}
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          {course.batch}
                        </div>
                      </div>

                      <div className="flex flex-col flex-1">
                        <div className="flex items-baseline gap-3 mb-6">
                          <h3 className="text-4xl font-display uppercase tracking-tight">{course.title}</h3>
                          {course.subtitle && (
                            <span className="text-black/40 text-lg font-medium">{course.subtitle}</span>
                          )}
                        </div>

                        <div className="space-y-3 mb-8 flex-1">
                          <p className="text-sm font-bold uppercase tracking-widest text-black/40 mb-4">Skills Covered</p>
                          {course.skills.map((skill, i) => (
                            <div key={i} className="flex items-center gap-3 text-black/70">
                              <CheckCircle2 size={18} className="text-accent" />
                              <span className="font-medium">{skill}</span>
                            </div>
                          ))}
                        </div>

                        <button 
                          onClick={() => navigate('/contact')}
                          className="flex items-center justify-between w-full px-8 py-4 bg-black/5 rounded-full hover:bg-black hover:text-white transition-all group/btn"
                        >
                          <span className="font-bold text-sm uppercase tracking-widest">Enroll Now</span>
                          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black group-hover/btn:scale-110 transition-transform">
                            <ArrowRight size={16} />
                          </div>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-32 pt-20 border-t border-black/5 flex flex-col items-center text-center">
            <h2 className="font-display text-[8vw] md:text-[6vw] uppercase leading-none tracking-tighter mb-8">
              Ready to start?
            </h2>
            <p className="text-black/60 text-lg max-w-xl mb-12">
              Not sure which level is right for you? Book a demo and our mentors will guide you to the perfect starting point.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-accent text-white px-10 py-5 rounded-full font-bold text-lg btn-glow flex items-center gap-3"
            >
              Book Demo for Your Level <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
