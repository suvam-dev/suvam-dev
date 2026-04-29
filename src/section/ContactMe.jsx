import React from 'react';
import logo from '../assets/logo.jpg';
import { about } from "../data/about";

function ContactMe() {
    return (
        <section id="about" className="relative flex flex-col items-center justify-center py-24 px-5 bg-[#050510] overflow-hidden">
            {/* Background glowing blurs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[150px] pointer-events-none"></div>

            <div className="flex flex-col items-center justify-center relative z-10 w-full max-w-4xl">
                {/* Pill Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-[#0f172a]/50 text-cyan-200 text-xs font-semibold tracking-widest uppercase mb-8 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]"></span>
                    Personal Profile
                </div>

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
                </h2>

                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.5)] mb-12"></div>

                {/* Content Card */}
                <div className="relative z-10 w-full bg-[#0B0C10] rounded-3xl p-8 md:p-12 shadow-2xl border border-cyan-500/20">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        {/* Left side: Avatar/Image with glowing ring */}
                        <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 animate-[spin_4s_linear_infinite] blur-md opacity-70"></div>
                            <div className="absolute inset-1 rounded-full bg-black z-10"></div>
                            <img 
                                src={logo}
                                alt="Profile" 
                                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full z-20 border-2 border-cyan-500/50"
                            />
                        </div>

                        {/* Content */}
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
                            {about.map((paragraph, idx) => (
                                <p key={idx} className="hover:text-gray-100 transition-colors drop-shadow-sm">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactMe;