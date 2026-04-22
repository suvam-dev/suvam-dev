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
        <div className="w-full flex flex-col items-center mt-16 mb-10">
            {/* Elegant Section Title */}
            <h2 className="text-4xl md:text-5xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                My Skills
            </h2>
            
            <div className="carousel-container overflow-hidden w-full relative py-8">
                {/* Fade gradients for smooth edge transition targeting dark bg */}
                <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

            <div className="animate-scroll hover:animation-play-state-paused">
                {/* First set of items */}
                <div className="flex gap-8 px-4 justify-center items-center w-max">
                    {techStack.map((tech, i) => (
                        <div key={`set1-${i}`} className="flex-shrink-0 w-50 flex flex-row justify-start items-center py-5 px-4 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 hover:border-gray-500 hover:bg-gray-800/80 shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                            <img src={tech.img} alt={tech.name} className="h-15 object-contain mx-3 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-gray-400 font-medium text-sm group-hover:text-white transition-colors duration-300">{tech.name}</span>
                        </div>
                    ))}
                </div>
                {/* Duplicated set for seamless loop */}
                <div className="flex gap-8 px-4 justify-center items-center w-max">
                    {techStack.map((tech, i) => (
                        <div key={`set2-${i}`} className="flex-shrink-0 w-50 flex flex-row justify-start items-center py-5 px-4 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 hover:border-gray-500 hover:bg-gray-800/80 shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                            <img src={tech.img} alt={tech.name} className="h-15 object-contain mx-3 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-gray-400 font-medium text-sm group-hover:text-white transition-colors duration-300">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    )
}
export default Carousel;