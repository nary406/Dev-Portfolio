import React, { useRef, useEffect } from 'react';
import { FiGlobe, FiCheckCircle } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Freelance = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(contentRef.current.children, {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="section-padding bg-zinc-950 border-t border-zinc-900 relative overflow-hidden" ref={sectionRef}>
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container-fluid relative z-10">
                <div className="mb-16">
                    <p className="text-red-600 font-bold uppercase tracking-widest mb-2">Freelance</p>
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                        Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-900">Success</span>
                    </h2>
                </div>

                <div ref={contentRef} className="bg-zinc-900/50 border border-zinc-800 p-8 md:p-12 rounded-sm relative overflow-hidden group hover:border-red-900/50 transition-colors duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        
                        {/* Content Side */}
                        <div>
                            <div className="inline-block px-4 py-1 bg-red-600/10 border border-red-600/20 text-red-500 text-xs font-bold uppercase tracking-wider mb-6 rounded-full">
                                Featured Project
                            </div>
                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">Sukiru</h3>
                            <p className="text-xl text-zinc-400 font-light mb-8">Japan-focused career & talent company</p>
                            
                            <p className="text-zinc-300 leading-relaxed text-lg mb-8 max-w-xl border-l-2 border-red-600 pl-6">
                                Developed a production-ready freelancing and career platform designed to connect Indian talent with Japanese companies through training and job opportunities.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-8">
                                <span className="flex items-center gap-2 text-sm font-bold text-zinc-400">
                                    <FiCheckCircle className="text-red-500" /> Platform Development
                                </span>
                                <span className="flex items-center gap-2 text-sm font-bold text-zinc-400">
                                    <FiCheckCircle className="text-red-500" /> International Localization
                                </span>
                                <span className="flex items-center gap-2 text-sm font-bold text-zinc-400">
                                    <FiCheckCircle className="text-red-500" /> Talent Matching Logic
                                </span>
                            </div>

                            <a href="https://sukiru.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest hover:text-red-500 transition-colors group/btn">
                                <FiGlobe className="text-xl" />
                                <span>Visit Live Platform</span>
                            </a>
                        </div>

                        {/* Visual Side */}
                        <div className="relative h-full min-h-[300px] lg:min-h-[400px] bg-black border border-zinc-800 flex items-center justify-center overflow-hidden group/image">
                            <div className="absolute inset-0 bg-red-900/20 z-10 mix-blend-multiply transition-opacity duration-500 group-hover/image:opacity-0"></div>
                            <img 
                                src="https://res.cloudinary.com/dky72aehn/image/upload/v1745651857/Screenshot_2025-04-26_122527_hoks7f.jpg" 
                                alt="Sukiru Project" 
                                className="w-full h-full object-cover transform scale-105 group-hover/image:scale-100 transition-transform duration-700"
                            />
                            
                            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                                <div className="px-6 py-3 bg-zinc-900/80 border border-zinc-700 text-white text-sm font-mono uppercase tracking-widest backdrop-blur-md">
                                    IN <span className="text-red-600 mx-2">⇄</span> JP
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Freelance;
