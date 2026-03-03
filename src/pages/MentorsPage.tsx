import { motion } from "motion/react";
import { Plus, ArrowRight, Award, BookOpen, GraduationCap } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ValuePropBar } from "../components/ValuePropBar";
import { useNavigate } from "react-router-dom";

const faculty = [
  {
    name: "Foundation Specialist",
    role: "Parichaya to Rashtrabhasha",
    bio: "Expert in building strong fundamentals for beginners and young learners.",
    icon: <BookOpen size={24} />,
    img: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=2574&auto=format&fit=crop"
  },
  {
    name: "Visharad Specialist",
    role: "Higher Secondary Level",
    bio: "Specializes in advanced literature, poetry interpretation, and professional writing.",
    icon: <Award size={24} />,
    img: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=2670&auto=format&fit=crop"
  },
  {
    name: "Praveen Specialist",
    role: "Degree Level",
    bio: "Guides students through thesis writing, public speaking, and Hindi mastery.",
    icon: <GraduationCap size={24} />,
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
  }
];

export function MentorsPage() {
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
                Meet Our <br/>
                <span className="text-black/40">Mentors</span>
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
                  Learn from the <span className="text-red-500">Best</span>
                </div>
                {/* Bubble Tail */}
                <div className="absolute -bottom-2 right-10 w-6 h-6 bg-black/[0.03] border-r border-b border-black/5 rotate-45"></div>
              </motion.div>

              {/* Character on Beanbag */}
              <div className="relative w-full max-w-md aspect-square">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mentor&mood[]=happy&style=transparent" 
                  alt="Mentor on Beanbag" 
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

          {/* Academic Director Profile */}
          <div className="mt-20 relative">
            <h2 className="font-display text-[8vw] md:text-[5vw] uppercase leading-none tracking-tighter mb-12 flex items-center gap-6">
              Academic Director
              <div className="flex-1 h-px bg-black/10"></div>
            </h2>

            <div className="bg-black/5 rounded-[3rem] p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/3 aspect-square rounded-[2rem] overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2574&auto=format&fit=crop" 
                  alt="Academic Director" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border-4 border-black/10 rounded-[2rem]"></div>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-4xl md:text-5xl font-display uppercase tracking-tight mb-2">Dr. Sharma</h3>
                <p className="text-red-500 font-bold uppercase tracking-widest text-sm mb-6">Head of Hindi Department</p>
                <p className="text-black/60 text-lg leading-relaxed mb-8 max-w-2xl">
                  With over 20 years of experience in Hindi literature and education, Dr. Sharma leads our curriculum development and faculty training. Her vision is to make Hindi learning accessible, engaging, and deeply rooted in cultural understanding.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white px-6 py-3 rounded-full text-sm font-bold border border-black/5 shadow-sm">
                    Ph.D. in Hindi Literature
                  </div>
                  <div className="bg-white px-6 py-3 rounded-full text-sm font-bold border border-black/5 shadow-sm">
                    20+ Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Line Divider */}
          <div className="flex flex-col items-center mt-20">
            <div className="w-px h-20 bg-black/5"></div>
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
          </div>

          {/* Faculty Cards */}
          <div className="mt-20 relative">
            <h2 className="font-display text-[8vw] md:text-[5vw] uppercase leading-none tracking-tighter mb-12 flex items-center gap-6">
              Faculty Specialists
              <div className="flex-1 h-px bg-black/10"></div>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {faculty.map((member, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex flex-col bg-white border border-black/10 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-black/5 transition-all duration-500"
                >
                  <div className="w-full aspect-[4/3] relative overflow-hidden bg-black/5">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-lg">
                      {member.icon}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl font-display uppercase tracking-tight mb-1">{member.name}</h3>
                    <p className="text-red-500 font-bold uppercase tracking-widest text-xs mb-4">{member.role}</p>
                    <p className="text-black/60 text-sm leading-relaxed flex-1">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-32 pt-20 border-t border-black/5 flex flex-col items-center text-center">
            <h2 className="font-display text-[8vw] md:text-[6vw] uppercase leading-none tracking-tighter mb-8">
              Passionate about teaching?
            </h2>
            <p className="text-black/60 text-lg max-w-xl mb-12">
              We are always looking for dedicated educators to join our growing team of Hindi language mentors.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-black text-white px-10 py-5 rounded-full font-bold text-lg btn-black-glow flex items-center gap-3"
            >
              Join as Mentor <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
