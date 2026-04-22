import { ArrowRight } from 'lucide-react';

function ProjectCard({ name, description, image, link, isActive }) {
    // Generate a tag based on the project for visual variety (mocking the 'Database' pill)
    const tag = "Development";

    return (
        <div className={`group relative flex flex-col w-[320px] md:w-[360px] h-[480px] p-5 rounded-3xl overflow-hidden transition-all duration-500 bg-[#0B0C10] ${isActive ? 'shadow-[0_0_40px_rgba(79,70,229,0.15)] ring-1 ring-white/10' : 'shadow-xl ring-1 ring-white/5'}`}>
            
            {/* Image Container with Glowing Gradient Border */}
            <div className="relative w-full h-[220px] rounded-2xl mb-5 p-[1.5px] bg-gradient-to-br from-blue-500 via-indigo-500 to-orange-400 shadow-[0_0_20px_rgba(99,102,241,0.2)] flex-shrink-0">
                {/* Inner actual image container */}
                <div className="relative w-full h-full rounded-[14.5px] overflow-hidden bg-slate-900 border border-black/20">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    />
                    {/* Subtle gradient overlay to merge image with dark theme */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent opacity-60"></div>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow px-1 z-10">
                {/* Tag Pill */}
                <div className="mb-4">
                    <span className="inline-block px-4 py-1 rounded-full border border-indigo-500/30 bg-[#1e1b4b]/50 text-indigo-200 text-xs font-medium tracking-wide">
                        {tag}
                    </span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight group-hover:text-indigo-300 transition-colors">
                    {name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light line-clamp-3">
                    {description}
                </p>

                {/* Footer Buttons */}
                <div className="mt-auto flex items-center justify-between pb-1">
                    <a
                        href={link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-500/30 bg-[#1e1b4b]/60 text-indigo-200 hover:text-indigo-100 font-medium text-sm transition-all hover:bg-indigo-900/50"
                    >
                        Manage
                        <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                    </a>
                    
                    <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs font-medium">
                        Live
                    </span>
                </div>
            </div>
            
            {/* Dimming overlay for inactive cards to push them back */}
            {!isActive && <div className="absolute inset-0 bg-black/60 z-20 rounded-3xl transition-opacity duration-500 pointer-events-none"></div>}
        </div>
    );
}

export default ProjectCard;
