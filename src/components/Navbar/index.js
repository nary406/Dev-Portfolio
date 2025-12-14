import React, { useState, useEffect } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#projects_section" },
    { name: "Skills", href: "#skills_section" },
    { name: "Contact", href: "#contact_section" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-md py-4 border-b border-red-900/30" : "bg-transparent py-6"
        }`}
      >
        <div className="container-fluid flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="font-bold text-2xl tracking-tighter z-50 group">
            <span className="text-white group-hover:text-red-500 transition-colors">NAREN</span>
            <span className="text-red-600">.</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-red-600 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-red-600 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
                <a href="#contact_section" className="px-6 py-2 border border-red-600 text-red-600 text-sm font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300">
                    Hire Me
                </a>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden z-50 text-2xl text-white hover:text-red-600 transition-colors"
          >
            {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-zinc-950 z-40 flex flex-col items-center justify-center gap-10 transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {navLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href} 
            onClick={() => setIsOpen(false)}
            className="text-4xl font-black text-white hover:text-red-600 hover:tracking-widest transition-all duration-300 uppercase italic"
          >
            {link.name}
          </a>
        ))}
      </div>
    </>
  );
};

export default Header;