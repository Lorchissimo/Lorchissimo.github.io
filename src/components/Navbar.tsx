import { motion } from "motion/react";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-6 glass">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
          D
        </div>
        <span className="text-lg font-bold tracking-tight text-white">Dev.Studio</span>
      </div>
      
      <div className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-400">
        {["Home", "Projects", "Architect", "Stack"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`hover:text-white transition-colors ${item === "Home" ? "text-white border-b border-indigo-500 pb-1" : ""}`}
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden sm:flex items-center gap-4">
          <a href="#" className="text-slate-500 hover:text-white transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors">
            <Twitter className="w-4 h-4" />
          </a>
        </div>
        <button className="px-5 py-2 bg-white text-black text-[11px] font-black rounded-full uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-white/5">
          Hire Me
        </button>
      </div>
    </nav>
  );
}
