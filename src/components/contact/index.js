import React, { useRef, useEffect } from 'react';
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    return (
        <section id="contact_section" className="py-24 lg:py-32 bg-zinc-950 text-white border-t border-zinc-900">
            <div className="container-fluid">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
                    
                    {/* Info */}
                    <div className="flex flex-col justify-center">
                        <p className="text-red-600 font-bold uppercase tracking-widest mb-4">Get in Touch</p>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter uppercase leading-none">
                            Let's Build <br/> Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Brutal</span>.
                        </h2>
                        <p className="text-xl text-zinc-400 max-w-md font-light mb-12 border-l-2 border-zinc-800 pl-6">
                            Open for freelance opportunities, collaborations, or just a chat about technology and design.
                        </p>
                        
                        <div className="space-y-8">
                            <a href="mailto:nary406@gmail.com" className="group flex items-center gap-6 cursor-pointer">
                                <div className="w-16 h-16 border border-zinc-800 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white transition-all duration-300">
                                    <FiMail className="text-2xl"/>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1 group-hover:text-red-500 transition-colors">Email Me</p>
                                    <h4 className="text-2xl font-bold tracking-tight">nary406@gmail.com</h4>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Form */}
                    <form className="bg-black/40 p-10 border border-zinc-800/50 backdrop-blur-sm hover:border-red-900/30 transition-colors duration-500">
                        <div className="space-y-8">
                            <div className="group">
                                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest mb-3 text-zinc-500 group-focus-within:text-red-600 transition-colors">Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    className="w-full bg-transparent border-b-2 border-zinc-800 py-4 text-xl text-white focus:outline-none focus:border-red-600 transition-colors placeholder-zinc-700 font-bold"
                                    placeholder="YOUR NAME"
                                />
                            </div>
                            <div className="group">
                                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest mb-3 text-zinc-500 group-focus-within:text-red-600 transition-colors">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    className="w-full bg-transparent border-b-2 border-zinc-800 py-4 text-xl text-white focus:outline-none focus:border-red-600 transition-colors placeholder-zinc-700 font-bold"
                                    placeholder="YOUR EMAIL"
                                />
                            </div>
                            <div className="group">
                                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest mb-3 text-zinc-500 group-focus-within:text-red-600 transition-colors">Message</label>
                                <textarea 
                                    id="message" 
                                    rows={4}
                                    className="w-full bg-transparent border-b-2 border-zinc-800 py-4 text-xl text-white focus:outline-none focus:border-red-600 transition-colors resize-none placeholder-zinc-700 font-bold"
                                    placeholder="TELL ME ABOUT YOUR PROJECT"
                                ></textarea>
                            </div>
                            <button className="w-full bg-white text-black font-black py-5 uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 mt-4">
                                Send Message <FiArrowRight className="text-xl"/>
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;
