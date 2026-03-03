import { Plus } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

const courses = [
  {
    section: "Foundation Section",
    levels: [
      {
        title: "Parichaya",
        skills: ["Alphabet", "Basic words", "Reading confidence"],
        who: "Absolute beginners starting their Hindi journey.",
        batch: "Weekly Regular Batch",
      },
      {
        title: "Prathmic",
        skills: ["Grammar basics", "Paragraph writing"],
        who: "Students who know the alphabet and basic words.",
        batch: "Weekly Regular Batch",
      },
      {
        title: "Madhyama",
        skills: ["Story writing", "Sentence structure"],
        who: "Learners ready to form complex sentences.",
        batch: "Weekly Regular Batch",
      },
      {
        title: "Rashtrabhasha",
        skills: ["Essay writing", "Translation basics"],
        who: "Students preparing for intermediate fluency.",
        batch: "Weekly Regular Batch",
      }
    ]
  },
  {
    section: "Intermediate Section",
    levels: [
      {
        title: "Praveshika",
        subtitle: "10th Equivalent",
        skills: ["Detailed grammar", "Formal writing"],
        who: "Students aiming for 10th standard equivalent certification.",
        batch: "Weekly or Weekend Batch",
      }
    ]
  },
  {
    section: "Higher Secondary Section",
    levels: [
      {
        title: "Visharad (Purvardh)",
        skills: ["Advanced grammar", "Poetry introduction"],
        who: "Students pursuing 12th standard equivalent certification.",
        batch: "Weekend Deep-Dive Batch",
      },
      {
        title: "Visharad (Uttarardh)",
        skills: ["Literary analysis", "Prose study"],
        who: "Advanced learners focusing on Hindi literature.",
        batch: "Weekend Deep-Dive Batch",
      }
    ]
  },
  {
    section: "Degree Section",
    levels: [
      {
        title: "Praveen (Purvardh)",
        skills: ["Advanced prose", "Translation mastery"],
        who: "Students aiming for degree-equivalent proficiency.",
        batch: "Weekend Deep-Dive Batch",
      },
      {
        title: "Praveen (Uttarardh)",
        skills: ["Literary criticism", "Hindi language history"],
        who: "Scholars and professionals mastering the language.",
        batch: "Weekend Deep-Dive Batch",
      }
    ]
  }
];

export function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-[40vh] border-b border-black/5 pb-20">
            {/* Corner Markers */}
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2">
              <Plus size={20} className="rotate-45 text-black" />
            </div>
            <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2">
              <Plus size={20} className="rotate-45 text-black" />
            </div>

            {/* Left: PROJECTS Text */}
            <div className="z-10">
              <h1 className="font-display text-[12vw] lg:text-[10vw] uppercase leading-none tracking-tighter">
                Courses
              </h1>
              <p className="mt-6 text-2xl text-black/60 max-w-2xl">
                Explore our 9-level structured pathway from beginner to degree-equivalent certification.
              </p>
            </div>
          </div>

          <div className="mt-20 space-y-32">
            {courses.map((section, sIdx) => (
              <div key={sIdx}>
                <h2 className="font-display text-5xl uppercase tracking-tighter mb-12 border-b border-black/10 pb-4">
                  {section.section}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {section.levels.map((level, lIdx) => (
                    <div key={lIdx} className="bg-black/5 p-10 rounded-3xl border border-black/5 hover:border-accent transition-colors flex flex-col h-full">
                      <div className="mb-6">
                        <h3 className="font-display text-4xl uppercase">{level.title}</h3>
                        {level.subtitle && (
                          <div className="inline-block mt-2 bg-black text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                            {level.subtitle}
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-6 flex-grow">
                        <div>
                          <h4 className="font-bold text-sm uppercase tracking-widest text-black/40 mb-2">Skills Gained</h4>
                          <ul className="space-y-2">
                            {level.skills.map((skill, i) => (
                              <li key={i} className="flex items-center gap-3 text-lg font-medium">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></div>
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-sm uppercase tracking-widest text-black/40 mb-2">Who is it for?</h4>
                          <p className="text-black/80 text-lg">{level.who}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-sm uppercase tracking-widest text-black/40 mb-2">Recommended Batch</h4>
                          <p className="text-black/80 text-lg">{level.batch}</p>
                        </div>
                      </div>
                      
                      <div className="mt-10 pt-6 border-t border-black/10">
                        <Link to="/contact" className="inline-flex bg-black text-white px-8 py-4 rounded-full font-bold text-sm btn-black-glow items-center justify-center w-full gap-3">
                          Book Free Demo <span className="w-2 h-2 bg-accent rounded-full"></span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </main>
      <Footer />
    </div>
  );
}
