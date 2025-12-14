import React, { useRef, useEffect } from 'react';
import { FiArrowUpRight, FiGithub, FiLayers } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectData = [
    {
        name: "FullStack App",
        image: "https://res.cloudinary.com/dky72aehn/image/upload/v1714321102/8810413_tk7y4a.jpg",
        description: "A comprehensive task management ecosystem designed to streamline workflow priorities and enhance productivity through intuitive organization.",
        id: "01",
        website: "https://company-app-lake.vercel.app/",
        role: "Full Stack",
        stack: "React • Node.js • MongoDB"
    },
    {
        name: "Nxt Trends",
        image: "https://res.cloudinary.com/dky72aehn/image/upload/v1714321868/21726902_6509982_ghdccw.jpg",
        description: "A premium e-commerce destination featuring seamless cart flows, secure authentication, and a curated product discovery experience.",
        id: "02",
        website: "https://open-source-e-commerce.vercel.app",
        role: "Frontend",
        stack: "React • Redux • Rest API"
    },
    {
        name: "Jobby App",
        image: "https://res.cloudinary.com/dky72aehn/image/upload/v1714321149/Screenshot_2024-04-28_214408_d3xk5b.png",
        description: "A robust career platform connecting talent with opportunity. Features include advanced filtering, profile management, and application tracking.",
        id: "03",
        website: "https://naukri-clone-orpi.vercel.app",
        role: "Lead Dev",
        stack: "React • JWT • CSS-in-JS"
    },
    {
        name: "Youtube Clone",
        image: "https://res.cloudinary.com/dky72aehn/image/upload/v1714326409/Screenshot_2024-04-28_214220-Photoroom_bpqlxd.png",
        description: "A high-fidelity video streaming interface mimicking the core functionalities of the world's largest video platform with pixel-perfect design.",
        id: "04",
        website: "https://youtube-clone-nu-pied.vercel.app/login",
        role: "UI Engineer",
        stack: "React • Context API • Grid"
    }
];

const Projects = () => {
    const containerRef = useRef(null);
    const headingRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            
            // Heading Animation
            gsap.from(headingRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            });

            // Project Cards Animation
            gsap.utils.toArray(".project-row").forEach((row, i) => {
                gsap.from(row, {
                    y: 100,
                    opacity: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: row,
                        start: "top 85%",
                        end: "top 50%",
                        scrub: 1
                    }
                });
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="projects_section" className="section-padding bg-black text-white relative overflow-hidden" ref={containerRef}>
            
            {/* Background Texture */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-40 pointer-events-none"></div>

            <div className="container-fluid relative z-10">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 pb-8 border-b border-zinc-900" ref={headingRef}>
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="h-[2px] w-8 bg-red-600 block"></span>
                            <span className="text-red-500 font-bold uppercase tracking-[0.2em] text-sm">Case Studies</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-600">Works.</span>
                        </h2>
                    </div>
                </div>

                {/* Project List */}
                <div className="flex flex-col gap-20 lg:gap-32">
                    {projectData.map((project, index) => (
                        <div key={project.id} className={`project-row grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group`}>
                            
                            {/* Image Side - Alternating */}
                            <div className={`lg:col-span-7 relative ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                                <a href={project.website} target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden rounded-sm group-hover:cursor-none">
                                    {/* Image Container with Glow */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-700"></div>
                                    
                                    <div className="relative aspect-[16/10] bg-zinc-900 overflow-hidden border border-zinc-800 transition-all duration-700 group-hover:border-red-600/30">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700 z-10"></div>
                                        <img 
                                            src={project.image} 
                                            alt={project.name} 
                                            className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                                        />
                                        
                                        {/* Overlay Button */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                                            <div className="w-20 h-20 bg-red-600/90 backdrop-blur-md rounded-full flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
                                                <FiArrowUpRight className="text-3xl text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            {/* Content Side */}
                            <div className={`lg:col-span-5 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1 lg:items-end lg:text-right' : 'lg:order-2 lg:items-start lg:text-left'}`}>
                                <div className="mb-6">
                                    <span className="text-8xl font-black text-zinc-900 leading-none select-none absolute -translate-y-1/2 opacity-0 lg:opacity-100 transition-opacity">
                                        {project.id}
                                    </span>
                                    <div className="relative z-10">
                                        <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-2 group-hover:text-red-600 transition-colors duration-300">
                                            {project.name}
                                        </h3>
                                        <div className={`flex gap-4 text-xs font-bold uppercase tracking-wider text-red-500 mb-6 ${index % 2 === 1 ? 'justify-end' : 'justify-start'}`}>
                                            <span>{project.role}</span>
                                            <span>•</span>
                                            <span>{project.stack}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-md">
                                    {project.description}
                                </p>

                                <a 
                                    href={project.website} 
                                    target="_blank"
                                    className={`inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest border-b border-zinc-700 pb-1 hover:text-red-500 hover:border-red-500 transition-all ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
                                >
                                    <span>View Case Study</span>
                                    <FiLayers className="text-lg" />
                                </a>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <a href="https://github.com/nary406" target="_blank" className="inline-block px-10 py-5 border border-zinc-800 hover:bg-zinc-900 hover:border-red-600 transition-all duration-300 group">
                        <span className="flex items-center gap-3 font-bold uppercase tracking-widest text-sm text-zinc-400 group-hover:text-white">
                            <FiGithub className="text-xl group-hover:text-red-500 transition-colors" />
                            Explore More Archives
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
