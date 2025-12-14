import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
    { name: "Frontend", tags: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind"] },
    { name: "Backend", tags: ["Node.js", "Express.js", "Python", "REST APIs"] },
    { name: "Data & Tools", tags: ["MongoDB", "SQL", "Git", "GitHub", "VS Code"] }
];

const Skills = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray(".skill-card").forEach((card, i) => {
                gsap.from(card, {
                    y: 100,
                    opacity: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        end: "top 60%",
                        scrub: 1
                    }
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="skills_section" className="section-padding bg-zinc-950 relative" ref={containerRef}>
            {/* Background grid line */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <div className="container-fluid relative z-10">
                <div className="mb-20">
                    <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 uppercase tracking-tight">
                        Technical <span className="text-red-600">Arsenal</span>
                    </h2>
                    <div className="h-1 w-20 bg-red-600"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillsData.map((category) => (
                        <div key={category.name} className="skill-card group p-8 border border-zinc-800 bg-black/50 hover:border-red-600/50 hover:bg-zinc-900/50 transition-all duration-500">
                            <h3 className="text-2xl font-bold mb-8 text-zinc-300 group-hover:text-red-500 transition-colors uppercase tracking-wider">{category.name}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.tags.map(tag => (
                                    <span key={tag} className="px-4 py-2 bg-zinc-900 text-zinc-400 text-sm font-bold uppercase tracking-wide border-l-2 border-transparent hover:border-red-600 hover:text-white transition-all cursor-default">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
