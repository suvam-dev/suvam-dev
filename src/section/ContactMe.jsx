import { about } from "../data/about";

function ContactMe() {
    return (
        <section id="about" className="relative py-24 px-4 bg-[#050510] flex flex-col items-center justify-center overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[#050510] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-96 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

            <div className="flex flex-col items-center justify-center relative z-10 w-full max-w-4xl">
                {/* Pill Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-[#1e1b4b]/50 text-indigo-200 text-xs font-semibold tracking-widest uppercase mb-8 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_8px_#818cf8]"></span>
                    Personal Profile
                </div>

                {/* Heading */}
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 font-extrabold text-5xl md:text-6xl mb-6 tracking-tight drop-shadow-[0_0_15px_rgba(99,102,241,0.3)] text-center">
                    About Me
                </h2>

                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.5)] mb-12"></div>

                {/* Content Card */}
                <div className="relative w-full rounded-3xl p-8 md:p-12 bg-[#0B0C10]/80 backdrop-blur-xl border border-indigo-500/10 shadow-[0_0_40px_rgba(0,0,0,0.3)] ring-1 ring-white/5">
                    {/* Decorative Top Line */}
                    <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"></div>

                    {/* Content */}
                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
                        {about.map((paragraph, idx) => (
                            <p key={idx} className="hover:text-gray-100 transition-colors drop-shadow-sm">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Decorative Bottom Line */}
                    <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"></div>
                </div>
            </div>
        </section>
    );
}

export default ContactMe;