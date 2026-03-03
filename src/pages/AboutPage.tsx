import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import animiabout from '../assets/animi.png'

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-[10vw] uppercase leading-none tracking-tighter mb-20 text-center md:text-left">About Us</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-10 lg:mt-20">
            <div className="aspect-square bg-black/5 rounded-3xl overflow-hidden order-2 lg:order-1">
              <img
                src={animiabout}
                alt="Dhunya"
                className="w-full h-full object-cover p-10"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-4xl uppercase mb-6">Founder's Message</h2>
              <p className="text-2xl font-medium leading-relaxed mb-8">
                Our mission is to bring structured, high-quality Hindi education to South India.
              </p>
              <p className="text-black/60 text-lg leading-relaxed mb-12">
                We believe that learning Hindi shouldn't be a casual, unstructured process. It requires a clear pathway, dedicated attention, and a focus on certification to truly master the language.
              </p>

              <div className="space-y-12">
                <div>
                  <h3 className="font-display text-2xl uppercase mb-3">Our Mission</h3>
                  <p className="text-black/70 text-lg">To provide certification-based Hindi mastery through personalized learning.</p>
                </div>
                <div>
                  <h3 className="font-display text-2xl uppercase mb-3">Our Vision</h3>
                  <p className="text-black/70 text-lg">To build confident Hindi learners progressing from beginner to degree-equivalent level.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            <div className="bg-black/5 p-10 lg:p-12 rounded-3xl">
              <h2 className="font-display text-4xl uppercase mb-6">Why Structure Matters</h2>
              <p className="text-black/80 text-lg leading-relaxed mb-6">
                Without structured progression, students stagnate. A clear, level-based roadmap prevents confusion and ensures steady, measurable progress.
              </p>
              <p className="text-black/80 text-lg leading-relaxed">
                Our 9-level pathway provides clear milestones, from foundational reading to advanced literary criticism.
              </p>
            </div>

            <div className="bg-black text-white p-10 lg:p-12 rounded-3xl">
              <h2 className="font-display text-4xl uppercase mb-8">Our Teaching Philosophy</h2>
              <ul className="space-y-6 text-lg">
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full shrink-0"></div>
                  Personalized Attention
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full shrink-0"></div>
                  Writing Correction
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full shrink-0"></div>
                  Exam-Oriented Training
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full shrink-0"></div>
                  Concept Clarity
                </li>
              </ul>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
