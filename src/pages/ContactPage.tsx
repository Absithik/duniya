import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FAQItem } from "../components/FAQItem";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="font-display text-[12vw] lg:text-[10vw] uppercase leading-none tracking-tighter mb-6">Get in Touch</h1>
            <p className="text-2xl text-black/60 max-w-2xl mx-auto">
              Ready to start your structured Hindi learning journey? Book a free demo or contact us.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left Column: Form */}
            <div className="bg-black/5 p-10 lg:p-12 rounded-3xl">
              <h2 className="font-display text-4xl uppercase mb-8">Book Free Demo</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-black/60 mb-2">Name</label>
                  <input type="text" className="w-full bg-white border border-black/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-black/60 mb-2">Email</label>
                  <input type="email" className="w-full bg-white border border-black/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-black/60 mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-white border border-black/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors" placeholder="Your phone number" />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-black/60 mb-2">Current Level</label>
                  <select className="w-full bg-white border border-black/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors appearance-none">
                    <option value="">Select your level</option>
                    <option value="beginner">Absolute Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-accent text-white px-8 py-5 rounded-xl font-bold text-lg btn-glow mt-4">
                  Request Demo
                </button>
              </form>
            </div>

            {/* Right Column: Contact Info & FAQ */}
            <div className="space-y-20">
              <div>
                <h2 className="font-display text-4xl uppercase mb-8">Contact Info</h2>
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center text-3xl">
                      📱
                    </div>
                    <div>
                      <div className="text-sm font-bold uppercase tracking-widest text-black/40 mb-1">WhatsApp</div>
                      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold hover:text-accent transition-colors">
                        +91 12345 67890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl">
                      ✉️
                    </div>
                    <div>
                      <div className="text-sm font-bold uppercase tracking-widest text-black/40 mb-1">Email</div>
                      <a href="mailto:hello@knowledgeduniya.com" className="text-2xl font-bold hover:text-accent transition-colors break-all">
                        hello@knowledgeduniya.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display text-4xl uppercase mb-8">FAQ</h2>
                <div className="space-y-4">
                  {[
                    { q: "Is the demo class really free?", a: "Yes, the demo class is completely free and comes with no obligations." },
                    { q: "How do I join the online classes?", a: "Classes are conducted via Google Meet or Zoom. You will receive a link before each session." },
                    { q: "What if I miss a class?", a: "We offer flexible rescheduling options, especially for our 1-on-1 sessions." }
                  ].map((faq, idx) => (
                    <FAQItem key={idx} faq={faq} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
