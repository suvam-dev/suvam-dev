const techStack = [
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "C", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
    { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    { name: "Supabase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" }
];

function Carousel() {
    return (
        <section className="py-20 bg-[#050510] overflow-hidden relative border-t border-cyan-900/30">
            {/* Header */}
            <div className="text-center mb-16 px-4">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    My Tech Arsenal
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full shadow-[0_0_10px_#22d3ee]"></div>
            </div>

            {/* Carousel Container */}
            <div className="relative w-full max-w-[1400px] mx-auto">
                {/* Left and Right Fade Gradients */}
                <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#050510] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#050510] to-transparent z-10 pointer-events-none"></div>

                {/* Animated Track */}
                <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
                    {/* First Set */}
                    {techStack.map((tech, i) => (
                        <div key={`set1-${i}`} className="flex-shrink-0 w-50 flex flex-row justify-start items-center py-5 px-4 rounded-2xl bg-[#0B0C10]/60 backdrop-blur-sm border border-cyan-900/30 hover:border-cyan-500/50 hover:bg-cyan-900/30 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] cursor-pointer group mx-3">
                            <img src={tech.img} alt={tech.name} className="h-10 w-10 object-contain mr-4 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-md" />
                            <span className="text-gray-300 font-semibold text-lg tracking-wide group-hover:text-cyan-300 transition-colors">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                    {/* Second Set (Duplicate for smooth infinite scroll) */}
                    {techStack.map((tech, i) => (
                        <div key={`set2-${i}`} className="flex-shrink-0 w-50 flex flex-row justify-start items-center py-5 px-4 rounded-2xl bg-[#0B0C10]/60 backdrop-blur-sm border border-cyan-900/30 hover:border-cyan-500/50 hover:bg-cyan-900/30 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] cursor-pointer group mx-3">
                            <img src={tech.img} alt={tech.name} className="h-10 w-10 object-contain mr-4 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-md" />
                            <span className="text-gray-300 font-semibold text-lg tracking-wide group-hover:text-cyan-300 transition-colors">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Carousel;