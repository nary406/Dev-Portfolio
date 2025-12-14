import React, { useRef, useEffect } from 'react';
import { SlCloudDownload } from "react-icons/sl";
import { HiCode, HiLightningBolt } from "react-icons/hi"; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SocialButtons from '../socialicons';

gsap.registerPlugin(ScrollTrigger);

const Profilesection = () => {
    const sectionRef = useRef(null);
    const introOverlayRef = useRef(null);
    const textRef = useRef(null);
    const graphicsRef = useRef(null);
    const imageWrapperRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // 1. Curtain Reveal
        tl.to(introOverlayRef.current, {
            scaleY: 0,
            transformOrigin: "top",
            duration: 1.2,
            ease: "power4.inOut"
        })
        // 2. Text Stagger
        .fromTo(textRef.current.children, 
            { y: 60, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" },
            "-=0.5"
        )
        // 3. Graphic Elements Reveal
        .fromTo(graphicsRef.current,
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1.2, ease: "power2.out" },
            "-=1"
        )
        // 4. Image Scale Reveal
        .fromTo(imageWrapperRef.current,
            { scale: 0.8, opacity: 0, filter: "blur(10px)" },
            { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "expo.out" },
            "-=1"
        );

        // Parallax
        gsap.to(textRef.current, {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
        
        gsap.to(graphicsRef.current, {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

    }, []);

    return (
        <section id="profile_section" className="min-h-screen flex items-center pt-24 pb-12 overflow-hidden relative bg-black" ref={sectionRef}>
            
            {/* Intro Overlay */}
            <div 
                ref={introOverlayRef}
                className="absolute inset-0 bg-red-600 z-[60] pointer-events-none"
                style={{ transformOrigin: 'top' }}
            ></div>

            {/* Background Tech Grid (Subtle) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,20,0.5)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)] pointer-events-none z-0"></div>

            <div className="container-fluid grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
                
                {/* Text Side */}
                <div className="flex flex-col justify-center order-2 lg:order-1 relative z-20" ref={textRef}>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-[2px] w-12 bg-red-600"></div>
                        <p className="text-red-500 font-bold tracking-[0.2em] uppercase text-sm">Full Stack Developer</p>
                    </div>
                    
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.95] mb-8">
                        BUILDING <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">DIGITAL</span><br/>
                        <span className="relative inline-block text-red-600 z-10">
                             REALITY
                             {/* Text decoration */}
                             <svg className="absolute -bottom-2 left-0 w-full h-[10px] text-red-600 z-[-1]" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                             </svg>
                        </span>
                    </h1>
                    
                    <p className="text-lg sm:text-xl text-zinc-400 max-w-lg leading-relaxed mb-10 font-light">
                        I architect robust systems and craft immersive interfaces. Combining technical precision with brutalist aesthetics to deliver memorable web experiences.
                    </p>

                    <div className="flex flex-wrap items-center gap-6">
                        <button className="relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300 clip-path-slant-button">
                            Download CV
                        </button>
                        <SocialButtons />
                    </div>
                </div>

                {/* Hero Graphics / Image Side */}
                <div className="relative h-[500px] sm:h-[600px] lg:h-[750px] w-full order-1 lg:order-2 flex items-center justify-center p-6" ref={graphicsRef}>
                   
                   {/* 1. Abstract Background Shapes */}
                   <div className="absolute top-10 right-10 w-64 h-64 bg-red-600/20 rounded-full blur-[80px] pointer-events-none"></div>
                   <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>

                   {/* 2. Main Image Container with Creative Shape */}
                   <div 
                        ref={imageWrapperRef}
                        className="relative w-full h-full max-w-[600px] max-h-[700px] z-10"
                   >
                        {/* Decorative Border Frame */}
                        <div className="absolute -top-4 -right-4 w-full h-full border-2 border-red-600/30 z-0"></div>
                        <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-zinc-800 z-0"></div>

                        {/* The Image Itself - Clipped */}
                        <div className="relative w-full h-full bg-zinc-900 overflow-hidden" 
                             style={{ clipPath: "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)" }}>
                            
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20"></div>
                            
                            <img 
                                src="https://res.cloudinary.com/dky72aehn/image/upload/v1765696887/WhatsApp_Image_2025-08-18_at_16.27.58_abc2f0d8_nnul5d.jpg" 
                                alt="Narendra" 
                                className="w-full h-full object-cover object-top filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700 hover:scale-105" 
                            />

                            {/* Floating Tech Badges within Image */}
                            <div className="absolute bottom-8 left-8 z-30 flex flex-col gap-3">
                                <div className="bg-black/80 backdrop-blur-md border border-zinc-700 px-4 py-3 flex items-center gap-3 w-fit">
                                    <HiCode className="text-red-600 text-xl" />
                                    <div>
                                        <p className="text-xs text-zinc-400 uppercase tracking-wider"></p>
                                        <p className="text-white font-bold leading-none">MERN Stack</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Professional Badge - Optimized for Mobile */}
                        <div className="absolute top-4 right-4 md:top-[20%] md:right-auto md:-left-12 z-40 animate-float">
                            <div className="bg-zinc-900 border border-zinc-700 p-3 md:p-4 shadow-2xl shadow-red-900/20 max-w-[120px] md:max-w-[160px]">
                               
                                <p className="text-xl md:text-2xl text-red-600 font-black  ">2 Years</p>
                                <p className="text-[10px] md:text-xs text-zinc-400 uppercase tracking-wide font-medium leading-tight"> of Prof. Experience</p>
                            </div>
                        </div>

                   </div>
                </div>
            </div>
            
            {/* CSS for custom shapes if needed inline or added to globals */}
            <style jsx>{`
                .clip-path-slant-button {
                    clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 25%);
                }
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default Profilesection;