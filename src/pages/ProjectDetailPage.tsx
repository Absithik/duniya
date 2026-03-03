import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, Maximize2, FolderSearch, User, Timer, Calendar, ArrowRight } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Dummy project data mapping
  const projects = [
    { 
      title: "Beginner Hindi", 
      category: "Level 1", 
      client: "All Ages",
      duration: "8 Weeks",
      date: "Ongoing",
      desc: "Learn the basics of Hindi including the Devanagari alphabet, basic vocabulary, and simple sentence formation.",
      img: "https://images.unsplash.com/photo-1588196749597-9ff0464b4431?q=80&w=2158&auto=format&fit=crop" 
    },
    { 
      title: "Conversational Hindi", 
      category: "Level 2", 
      client: "Adults",
      duration: "10 Weeks",
      date: "Ongoing",
      desc: "Enhance your conversational skills, learn complex grammar rules, and expand your vocabulary.",
      img: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2670&auto=format&fit=crop" 
    },
    { 
      title: "Advanced Speaking", 
      category: "Level 3", 
      client: "Professionals",
      duration: "12 Weeks",
      date: "Upcoming",
      desc: "Achieve native-like fluency with advanced vocabulary, idiomatic expressions, and cultural nuances.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
    },
    { 
      title: "Kids Hindi", 
      category: "Specialized", 
      client: "Children 5-12",
      duration: "Ongoing",
      date: "Ongoing",
      desc: "Interactive and playful lessons designed specifically for children to learn Hindi naturally.",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2599&auto=format&fit=crop" 
    }
  ];

  const project = projects[Number(id)] || projects[0];
  const nextProject1 = projects[(Number(id) + 1) % projects.length];
  const nextProject2 = projects[(Number(id) + 2) % projects.length];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 lg:pt-0">
        <div className="flex flex-col lg:flex-row min-h-screen">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 p-8 lg:p-24 flex flex-col justify-center border-r border-black/5">
            <div className="max-w-xl">
              <button 
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 px-6 py-3 bg-black/5 rounded-full hover:bg-black/10 transition-all group mb-16 w-fit shadow-sm"
              >
                <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-bold text-sm">Back</span>
              </button>

              <h1 className="font-display text-[12vw] lg:text-[8vw] uppercase leading-[0.85] tracking-tighter mb-12">
                {project.title}
              </h1>

              <p className="text-xl lg:text-2xl leading-relaxed text-black/60 mb-12">
                {project.desc}
              </p>

              <button className="bg-black text-white px-10 py-5 rounded-full font-bold flex items-center gap-4 group hover:bg-accent transition-all shadow-2xl shadow-black/20 w-fit">
                Enroll Now 
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></span>
              </button>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="w-full lg:w-1/2 lg:h-screen p-6 lg:p-12 flex items-center justify-center bg-black/[0.02]">
            <div className="w-full h-full bg-black/40 rounded-[3rem] lg:rounded-[4rem] relative flex flex-col items-center justify-center overflow-hidden group shadow-2xl shadow-black/10">
              
              {/* Mockup Monitor */}
              <div className="relative w-full max-w-[85%] flex flex-col items-center">
                {/* Screen */}
                <div className="relative w-full aspect-[16/10] bg-white rounded-2xl shadow-2xl overflow-hidden border-[10px] border-black/10 z-10">
                  {/* Browser Top Bar */}
                  <div className="absolute top-0 left-0 w-full h-8 bg-black/5 border-b border-black/5 flex items-center px-4 gap-2 z-20">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#ff5f57]"></div>
                      <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-2 h-2 rounded-full bg-[#28c840]"></div>
                    </div>
                    <div className="flex-1 mx-4 h-4 bg-white rounded-md border border-black/5"></div>
                  </div>
                  
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover pt-8"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Monitor Stand */}
                <div className="relative flex flex-col items-center -mt-1">
                  {/* Neck */}
                  <div className="w-16 h-12 bg-black/20 shadow-inner"></div>
                  {/* Base */}
                  <div className="w-48 h-4 bg-black/10 rounded-t-xl shadow-md"></div>
                  {/* Bottom shadow */}
                  <div className="w-64 h-6 bg-black/10 blur-xl rounded-full -mt-2"></div>
                </div>
              </div>

              {/* Maximize Icon */}
              <div className="absolute bottom-8 right-8 w-14 h-14 bg-black/40 backdrop-blur-xl rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110 border border-white/20">
                <Maximize2 size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Project Meta Section */}
        <section className="border-y border-black/5 bg-white relative">
          {/* Corner Markers */}
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-black rotate-45 z-10"></div>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-black rotate-45 z-10"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-black rotate-45 z-10"></div>
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-black rotate-45 z-10"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-black/5">
            <div className="p-8 lg:p-12 flex flex-col gap-4">
              <div className="w-10 h-10 bg-black/5 rounded-lg flex items-center justify-center">
                <FolderSearch size={20} className="text-black" />
              </div>
              <div>
                <p className="font-bold text-lg uppercase tracking-tight">Level</p>
                <p className="text-black/40 font-medium">{project.category}</p>
              </div>
            </div>
            
            <div className="p-8 lg:p-12 flex flex-col gap-4">
              <div className="w-10 h-10 bg-black/5 rounded-lg flex items-center justify-center">
                <User size={20} className="text-black" />
              </div>
              <div>
                <p className="font-bold text-lg uppercase tracking-tight">Target Audience</p>
                <p className="text-black/40 font-medium">{project.client}</p>
              </div>
            </div>

            <div className="p-8 lg:p-12 flex flex-col gap-4">
              <div className="w-10 h-10 bg-black/5 rounded-lg flex items-center justify-center">
                <Timer size={20} className="text-black" />
              </div>
              <div>
                <p className="font-bold text-lg uppercase tracking-tight">Duration</p>
                <p className="text-black/40 font-medium">{project.duration}</p>
              </div>
            </div>

            <div className="p-8 lg:p-12 flex flex-col gap-4">
              <div className="w-10 h-10 bg-black/5 rounded-lg flex items-center justify-center">
                <Calendar size={20} className="text-black" />
              </div>
              <div>
                <p className="font-bold text-lg uppercase tracking-tight">Date</p>
                <p className="text-black/40 font-medium">{project.date}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mockups Section */}
        <section className="border-b border-black/5 bg-white relative">
          {/* Corner Markers */}
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-black rotate-45 z-10"></div>
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-black rotate-45 z-10"></div>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45 z-10 hidden lg:block"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-black/5">
            {/* Left Mockup (Desktop) */}
            <div className="p-8 lg:p-16 flex items-center justify-center min-h-[500px] lg:min-h-[700px]">
              <div className="w-full h-full bg-black/30 rounded-[2rem] relative flex flex-col items-center justify-center p-8 shadow-xl group">
                {/* Desktop Mockup */}
                <div className="relative w-full max-w-lg flex flex-col items-center">
                  <div className="relative w-full aspect-[16/10] bg-white rounded-xl shadow-2xl overflow-hidden border-[8px] border-black/10 z-10">
                    <div className="absolute top-0 left-0 w-full h-6 bg-black/5 border-b border-black/5 flex items-center px-3 gap-1.5 z-20">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ff5f57]"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#28c840]"></div>
                    </div>
                    <img src={project.img} alt="Desktop view" className="w-full h-full object-cover pt-6" referrerPolicy="no-referrer" />
                  </div>
                  {/* Stand */}
                  <div className="relative flex flex-col items-center -mt-1">
                    <div className="w-12 h-8 bg-black/20 shadow-inner"></div>
                    <div className="w-32 h-3 bg-black/10 rounded-t-lg shadow-md"></div>
                  </div>
                </div>
                
                {/* Expand Button */}
                <button className="absolute bottom-6 right-6 w-10 h-10 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors">
                  <Maximize2 size={16} />
                </button>
              </div>
            </div>

            {/* Right Mockup (Mobile) */}
            <div className="p-8 lg:p-16 flex items-center justify-center min-h-[500px] lg:min-h-[700px]">
              <div className="w-full h-full bg-black/30 rounded-[2rem] relative flex items-center justify-center p-8 shadow-xl group overflow-hidden">
                
                {/* Mobile Mockups Container */}
                <div className="relative w-full max-w-md flex items-center justify-center gap-4 lg:gap-6">
                  
                  {/* Left Phone */}
                  <div className="w-[28%] aspect-[9/19] bg-white rounded-[1.5rem] shadow-2xl border-[4px] border-black/10 overflow-hidden relative translate-y-4">
                    <div className="absolute top-2 inset-x-0 h-4 bg-black rounded-full w-1/3 mx-auto z-20"></div>
                    <img src={project.img} alt="Mobile view" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>

                  {/* Center Phone */}
                  <div className="w-[34%] aspect-[9/19] bg-white rounded-[1.5rem] shadow-2xl border-[4px] border-black/10 overflow-hidden relative -translate-y-4 z-10">
                    <div className="absolute top-2 inset-x-0 h-4 bg-black rounded-full w-1/3 mx-auto z-20"></div>
                    <img src={project.img} alt="Mobile view" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>

                  {/* Right Phone */}
                  <div className="w-[28%] aspect-[9/19] bg-white rounded-[1.5rem] shadow-2xl border-[4px] border-black/10 overflow-hidden relative translate-y-8">
                    <div className="absolute top-2 inset-x-0 h-4 bg-black rounded-full w-1/3 mx-auto z-20"></div>
                    <img src={project.img} alt="Mobile view" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>

                </div>

                {/* Expand Button */}
                <button className="absolute bottom-6 right-6 w-10 h-10 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors z-40">
                  <Maximize2 size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Dual Monitor Section */}
        <section className="border-b border-black/5 bg-white p-4 lg:p-12">
          <div className="w-full bg-black/30 rounded-[2rem] p-8 lg:p-24 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 perspective-[2000px] overflow-hidden min-h-[500px] lg:min-h-[800px] shadow-inner">
            
            {/* Left Monitor (Angled Right) */}
            <div 
              className="relative w-full max-w-xl flex flex-col items-center z-10 transition-transform duration-700 hover:!transform-none"
              style={{ transform: 'rotateY(12deg) translateX(5%) scale(0.95)' }}
            >
              <div className="relative w-full aspect-[16/10] bg-white rounded-2xl shadow-2xl overflow-hidden border-[12px] border-black/10">
                <div className="absolute top-0 left-0 w-full h-6 bg-black/5 border-b border-black/5 flex items-center px-3 gap-1.5 z-20">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#28c840]"></div>
                </div>
                <img src={project.img} alt="Desktop view 1" className="w-full h-full object-cover pt-6" referrerPolicy="no-referrer" />
              </div>
              <div className="relative flex flex-col items-center -mt-1">
                <div className="w-16 h-12 bg-black/20 shadow-inner"></div>
                <div className="w-48 h-4 bg-black/10 rounded-t-xl shadow-md"></div>
                <div className="w-64 h-6 bg-black/20 blur-xl rounded-full -mt-2"></div>
              </div>
            </div>

            {/* Right Monitor (Angled Left, Pushed Back) */}
            <div 
              className="relative w-full max-w-xl flex flex-col items-center z-0 transition-transform duration-700 hover:!transform-none"
              style={{ transform: 'rotateY(-15deg) translateX(-5%) scale(0.85)' }}
            >
              <div className="relative w-full aspect-[16/10] bg-white rounded-2xl shadow-2xl overflow-hidden border-[12px] border-black/10">
                <div className="absolute top-0 left-0 w-full h-6 bg-black/5 border-b border-black/5 flex items-center px-3 gap-1.5 z-20">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#28c840]"></div>
                </div>
                <img src={project.img} alt="Desktop view 2" className="w-full h-full object-cover pt-6" referrerPolicy="no-referrer" />
              </div>
              <div className="relative flex flex-col items-center -mt-1">
                <div className="w-16 h-12 bg-black/20 shadow-inner"></div>
                <div className="w-48 h-4 bg-black/10 rounded-t-xl shadow-md"></div>
                <div className="w-64 h-6 bg-black/20 blur-xl rounded-full -mt-2"></div>
              </div>
            </div>

          </div>
        </section>

        {/* More Projects Section */}
        <section className="bg-white p-8 lg:p-16 relative border-b border-black/5">
          {/* Corner Markers */}
          <div className="absolute top-0 left-0 w-2 h-2 bg-black rotate-45 -translate-x-1/2 -translate-y-1/2 z-10"></div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-black rotate-45 translate-x-1/2 -translate-y-1/2 z-10"></div>

          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 border-b border-black/5 pb-10 relative">
              <h2 className="font-display text-[14vw] md:text-[8vw] uppercase leading-[0.8] tracking-tighter">
                More Courses
              </h2>
              <button 
                onClick={() => navigate('/projects')}
                className="bg-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-black/80 transition-colors shadow-2xl shadow-black/20 whitespace-nowrap w-fit"
              >
                View all Courses
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Card 1 */}
              <div 
                className="group cursor-pointer"
                onClick={() => navigate(`/project/${(Number(id) + 1) % projects.length}`)}
              >
                <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 bg-black/5">
                  <img src={nextProject1.img} alt={nextProject1.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="flex items-center justify-between px-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-3xl font-display uppercase tracking-tight">{nextProject1.title}</h3>
                    <span className="text-black/40 text-lg font-medium">• {nextProject1.category}</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div 
                className="group cursor-pointer"
                onClick={() => navigate(`/project/${(Number(id) + 2) % projects.length}`)}
              >
                <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 bg-black/5">
                  <img src={nextProject2.img} alt={nextProject2.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="flex items-center justify-between px-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-3xl font-display uppercase tracking-tight">{nextProject2.title}</h3>
                    <span className="text-black/40 text-lg font-medium">• {nextProject2.category}</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
