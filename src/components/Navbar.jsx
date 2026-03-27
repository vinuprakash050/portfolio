import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar({ currentSection, enableAnimations }) {

  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (

    <nav className="fixed w-full bg-black/80 backdrop-blur-md text-white z-50 shadow-2xl">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-black bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          Vinu.dev
        </h1>

        <div className="hidden md:flex gap-6">
          {navLinks.slice(1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`hover:text-primary transition-all px-3 py-2 rounded-lg font-medium relative group ${
                currentSection === link.href.slice(1) 
                  ? 'text-primary bg-primary/10 shadow-lg scale-105' 
                  : 'text-gray-300 hover:bg-white/5 hover:scale-105'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-blue-400 transition-all group-hover:w-full ${currentSection === link.href.slice(1) ? 'w-full' : ''}`}></span>
            </a>
          ))}
        </div>

        <button
          className="md:hidden p-1 rounded-full hover:bg-white/10 transition"
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>

      </div>

      {open && (
        <motion.div 
          initial={{ opacity: 0, height: 0, scaleY: 0.8 }}
          animate={{ opacity: 1, height: "auto", scaleY: 1 }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-md flex flex-col items-center pb-6 pt-2 space-y-3 border-t border-gray-800"
        >
          {navLinks.slice(1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-6 py-3 rounded-xl text-lg font-semibold transition-all hover:scale-105 ${
                currentSection === link.href.slice(1) 
                  ? 'text-primary bg-gradient-to-r from-primary/20 to-blue-400/20 shadow-lg' 
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}

    </nav>

  );
}
