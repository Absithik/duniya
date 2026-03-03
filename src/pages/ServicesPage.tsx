import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-[12vw] lg:text-[10vw] uppercase leading-none tracking-tighter mb-10">Exam Pathway</h1>
          <p className="text-2xl text-black/60 max-w-3xl mb-20">
            Understand the DBHPS ranking system and how our structured coaching prepares you for success.
          </p>
          
          <div className="space-y-32">
            {/* Section 1: What is DBHPS? */}
            <section>
              <h2 className="font-display text-4xl uppercase mb-6">What is DBHPS?</h2>
              <div className="bg-black/5 p-10 rounded-3xl">
                <p className="text-xl text-black/80 leading-relaxed">
                  The Dakshina Bharat Hindi Prachar Sabha (DBHPS) is an organization whose main goal is to improve Hindi literacy among the non-Hindi speaking people of South India. It offers a structured series of examinations that are widely recognized and provide equivalent certifications for various educational levels.
                </p>
              </div>
            </section>

            {/* Section 2: Level Equivalency Table */}
            <section>
              <h2 className="font-display text-4xl uppercase mb-6">Level Equivalency</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-black/10">
                      <th className="py-4 px-6 font-display text-2xl uppercase">DBHPS Level</th>
                      <th className="py-4 px-6 font-display text-2xl uppercase">Equivalent Standard</th>
                    </tr>
                  </thead>
                  <tbody className="text-lg">
                    <tr className="border-b border-black/5 hover:bg-black/5 transition-colors">
                      <td className="py-6 px-6 font-bold">Parichaya to Rashtrabhasha</td>
                      <td className="py-6 px-6 text-black/70">Foundational Basics</td>
                    </tr>
                    <tr className="border-b border-black/5 hover:bg-black/5 transition-colors">
                      <td className="py-6 px-6 font-bold">Praveshika</td>
                      <td className="py-6 px-6 text-black/70">10th Standard Equivalent</td>
                    </tr>
                    <tr className="border-b border-black/5 hover:bg-black/5 transition-colors">
                      <td className="py-6 px-6 font-bold">Visharad</td>
                      <td className="py-6 px-6 text-black/70">12th Standard Equivalent</td>
                    </tr>
                    <tr className="border-b border-black/5 hover:bg-black/5 transition-colors">
                      <td className="py-6 px-6 font-bold">Praveen</td>
                      <td className="py-6 px-6 text-black/70">Degree Equivalent</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Exam Pattern Overview */}
            <section>
              <h2 className="font-display text-4xl uppercase mb-6">Exam Pattern Overview</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {['Written Exam', 'Literature & Grammar', 'Translation', 'Essay Writing'].map((item, i) => (
                  <div key={i} className="bg-white border border-black/10 p-8 rounded-3xl text-center shadow-sm hover:border-accent transition-colors">
                    <h3 className="font-bold text-xl">{item}</h3>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Why Preparation Matters */}
            <section>
              <h2 className="font-display text-4xl uppercase mb-6">Why Preparation Matters</h2>
              <div className="bg-accent text-white p-10 rounded-3xl shadow-lg shadow-accent/20">
                <p className="text-xl leading-relaxed">
                  The difficulty jump from Praveshika onwards is significant. It requires a deep understanding of advanced grammar, literary analysis, and formal writing. Without structured preparation and expert guidance, students often struggle to clear these higher-level exams.
                </p>
              </div>
            </section>

            {/* Section 5: How Knowledge Duniya Helps */}
            <section>
              <h2 className="font-display text-4xl uppercase mb-6">How Knowledge Duniya Helps</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: 'Mock Tests', desc: 'Regular practice exams to build confidence and time management skills.' },
                  { title: 'Structured Notes', desc: 'Comprehensive, easy-to-understand study materials for every level.' },
                  { title: 'Writing Feedback', desc: 'Personalized correction and feedback on essays and translations.' },
                  { title: 'Literature Explanation', desc: 'In-depth analysis of prose and poetry for advanced levels.' }
                ].map((item, i) => (
                  <div key={i} className="border border-black/10 p-8 rounded-3xl hover:border-accent transition-colors bg-black/5">
                    <h3 className="font-bold text-2xl mb-3">{item.title}</h3>
                    <p className="text-black/70 text-lg">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
            
            <section className="text-center pt-10">
              <Link to="/contact" className="inline-flex bg-black text-white px-12 py-6 rounded-full font-bold text-xl btn-black-glow items-center gap-4">
                Book Free Demo <span className="w-3 h-3 bg-accent rounded-full"></span>
              </Link>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
