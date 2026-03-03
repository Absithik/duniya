import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Dribbble,
  Twitter,
  Instagram,
  Linkedin,
  Facebook,
  Sun,
  Moon,
  Briefcase,
  Menu,
  X
} from "lucide-react";

import logo from "../assets/logo3.png";

export function Navbar() {
  const location = useLocation();
  const isProjects = location.pathname === '/projects';
  const isServices = location.pathname === '/services';
  const isAbout = location.pathname === '/about';
  const isContact = location.pathname === '/contact';

  const isExams = location.pathname === '/exams';
  const isMethod = location.pathname === '/method';
  const isMentors = location.pathname === '/mentors';
  const isBlog = location.pathname === '/blog';

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ||
        localStorage.getItem('theme') === 'dark';
    }
    return false;
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 lg:h-24 flex items-center justify-between relative">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Aurelia Luxe Logo" className="h-20 w-auto object-contain" />
          </Link>
        </div>

        {/* Center: Navigation (Desktop) */}
        <div className="hidden xl:flex absolute left-1/2 -translate-x-1/2 items-center gap-6">
          <Link to="/" className={`text-xs font-bold uppercase tracking-widest transition-colors ${location.pathname === '/' ? 'text-black' : 'text-black/40 hover:text-black'}`}>Home</Link>
          <Link to="/about" className={`text-xs font-bold uppercase tracking-widest transition-colors ${isAbout ? 'text-black' : 'text-black/40 hover:text-black'}`}>About</Link>
          <Link to="/projects" className={`text-xs font-bold uppercase tracking-widest transition-colors ${isProjects ? 'text-black' : 'text-black/40 hover:text-black'}`}>Courses</Link>
          <Link to="/exams" className={`text-xs font-bold uppercase tracking-widest transition-colors ${isExams ? 'text-black' : 'text-black/40 hover:text-black'}`}>Exams</Link>
          <Link to="/method" className={`text-xs font-bold uppercase tracking-widest transition-colors ${isMethod ? 'text-black' : 'text-black/40 hover:text-black'}`}>Method</Link>
          <Link to="/mentors" className={`text-xs font-bold uppercase tracking-widest transition-colors ${isMentors ? 'text-black' : 'text-black/40 hover:text-black'}`}>Mentors</Link>
          <Link to="/blog" className={`text-xs font-bold uppercase tracking-widest transition-colors ${isBlog ? 'text-black' : 'text-black/40 hover:text-black'}`}>Blog</Link>
          <Link to="/contact" className={`text-xs font-bold uppercase tracking-widest transition-colors ${isContact ? 'text-black' : 'text-black/40 hover:text-black'}`}>Contact</Link>
        </div>

        {/* Right: Theme Toggle & Book Demo */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button className="bg-black text-white px-4 py-2 lg:px-6 lg:py-2.5 rounded-full font-bold text-xs lg:text-sm flex items-center gap-2 shadow-lg shadow-black/20 whitespace-nowrap">
            <span className="hidden sm:inline">Book Demo</span>
            <span className="sm:hidden">Demo</span>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </button>

          <div
            onClick={toggleTheme}
            className={`w-12 h-6 bg-black/10 rounded-full p-1 flex items-center border border-black/10 cursor-pointer transition-all ${isDark ? 'justify-start' : 'justify-end'} shrink-0`}
          >
            <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center shadow-sm text-white">
              {isDark ? <Moon size={10} /> : <Sun size={10} />}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden p-2 -mr-2 text-black"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-white border-b border-black/5 shadow-xl py-4 px-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          <Link to="/" onClick={toggleMobileMenu} className={`text-sm font-bold uppercase tracking-widest transition-colors ${location.pathname === '/' ? 'text-black' : 'text-black/40'}`}>Home</Link>
          <Link to="/about" onClick={toggleMobileMenu} className={`text-sm font-bold uppercase tracking-widest transition-colors ${isAbout ? 'text-black' : 'text-black/40'}`}>About</Link>
          <Link to="/projects" onClick={toggleMobileMenu} className={`text-sm font-bold uppercase tracking-widest transition-colors ${isProjects ? 'text-black' : 'text-black/40'}`}>Courses</Link>
          <Link to="/exams" onClick={toggleMobileMenu} className={`text-sm font-bold uppercase tracking-widest transition-colors ${isExams ? 'text-black' : 'text-black/40'}`}>Exams</Link>
          <Link to="/method" onClick={toggleMobileMenu} className={`text-sm font-bold uppercase tracking-widest transition-colors ${isMethod ? 'text-black' : 'text-black/40'}`}>Method</Link>
          <Link to="/mentors" onClick={toggleMobileMenu} className={`text-sm font-bold uppercase tracking-widest transition-colors ${isMentors ? 'text-black' : 'text-black/40'}`}>Mentors</Link>
          <Link to="/blog" onClick={toggleMobileMenu} className={`text-sm font-bold uppercase tracking-widest transition-colors ${isBlog ? 'text-black' : 'text-black/40'}`}>Blog</Link>
          <Link to="/contact" onClick={toggleMobileMenu} className={`text-sm font-bold uppercase tracking-widest transition-colors ${isContact ? 'text-black' : 'text-black/40'}`}>Contact</Link>

          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-black/5">
            {[
              { icon: <Dribbble size={14} />, color: 'bg-pink-100 text-pink-500' },
              { icon: <Twitter size={14} />, color: 'bg-black/5 text-black' },
              { icon: <Instagram size={14} />, color: 'bg-orange-100 text-orange-500' },
              { icon: <Linkedin size={14} />, color: 'bg-blue-100 text-blue-600' },
              { icon: <Facebook size={14} />, color: 'bg-blue-50 text-blue-500' }
            ].map((s, i) => (
              <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center ${s.color}`}>
                {s.icon}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
