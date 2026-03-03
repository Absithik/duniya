import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const location = useLocation();

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Offerings", path: "/services" },
    { name: "Courses", path: "/projects" },
    { name: "404", path: "/404" },
  ];

  const socials = [
    { name: "Dribbble", url: "#" },
    { name: "X(Twitter)", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "Linkedin", url: "#" },
    { name: "Facebook", url: "#" },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Email copied to clipboard!");
  };

  return (
    <footer className="bg-white border-t border-black/5">
    
      {/* Marquee Section */}
      <div className="overflow-hidden border-b border-black/5 py-12 cursor-pointer group">
        <div className="flex whitespace-nowrap animate-marquee w-max">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              <h2 className="font-display text-[12vw] uppercase leading-none tracking-tighter group-hover:text-accent transition-colors">
                Start Learning
              </h2>
              <div className="w-[10vw] h-[10vw] rounded-full bg-black flex items-center justify-center text-white group-hover:bg-accent transition-colors">
                <ArrowUpRight size={64} className="w-[60%] h-[60%]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[400px]">
        {/* Column 1: Character */}
        <div className="border-r border-black/5 p-12 flex items-center justify-center bg-black/[0.02]">
          <div className="relative w-full max-w-[240px] aspect-square">
            <img 
              src="https://api.dicebear.com/7.x/notionists/svg?seed=Dhunya&backgroundColor=transparent" 
              alt="Character" 
              className="w-full h-full object-contain drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="border-r border-black/5 flex flex-col">
          {navLinks.map((link, idx) => (
            <Link 
              key={idx}
              to={link.path}
              className="flex-1 border-b border-black/5 p-8 flex items-center justify-between group hover:bg-black/[0.02] transition-colors"
            >
              <span className="font-display text-3xl uppercase group-hover:text-accent transition-colors">{link.name}</span>
              <div className={`w-2 h-2 rounded-full transition-colors ${location.pathname === link.path ? 'bg-accent' : 'bg-black/10 group-hover:bg-accent'}`}></div>
            </Link>
          ))}
          <div className="flex-1 p-8"></div>
        </div>

        {/* Column 3: Socials */}
        <div className="border-r border-black/5 p-8 flex flex-col gap-6">
          <p className="text-black/40 font-bold uppercase tracking-widest text-xs mb-4">Socials</p>
          {socials.map((social, idx) => (
            <a 
              key={idx}
              href={social.url}
              className="font-display text-3xl uppercase hover:text-accent transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>

        {/* Column 4: Contact */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <p className="text-black/40 font-bold uppercase tracking-widest text-xs mb-4">Click to copy</p>
            <button 
              onClick={() => copyToClipboard("hello@dhunyahindi.com")}
              className="font-display text-4xl uppercase hover:text-accent transition-colors text-left break-all"
            >
              hello@dhunyahindi.com
            </button>
          </div>
          
          <div className="flex flex-col gap-2 mt-12">
            <div className="bg-white border border-black/5 px-6 py-3 rounded-xl shadow-sm flex items-center justify-between group cursor-pointer hover:border-black/20 transition-colors">
              <span className="text-sm font-bold">Remix for free</span>
              <ArrowUpRight size={16} className="text-black/20 group-hover:text-black transition-colors" />
            </div>
            <div className="bg-white border border-black/5 px-6 py-3 rounded-xl shadow-sm flex items-center gap-3 group cursor-pointer hover:border-black/20 transition-colors">
              <div className="w-5 h-5 bg-black rounded flex items-center justify-center">
                <div className="w-2 h-2 bg-white rotate-45"></div>
              </div>
              <span className="text-sm font-bold">Made in Framer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black/5 p-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-black/30">
        <p>© 2026 Dhunya Hindi Class. All rights reserved.</p>
        <p>Designed with passion</p>
      </div>
    </footer>
  );
}
