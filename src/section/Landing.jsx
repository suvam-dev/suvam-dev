import { SplineScene } from '../Components/SplineScene';
import { Spotlight } from '../Components/ui/Spotlight';

function Landing() {
    return (
        <section id="home" className="w-full h-[90vh] bg-[#050510] relative overflow-hidden flex items-center">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            
            <div className="flex flex-col md:flex-row h-full w-full max-w-7xl mx-auto">
                {/* Left content */}
                <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-neutral-700 bg-neutral-900/50 text-neutral-300 text-sm font-medium tracking-wider mb-6 w-max backdrop-blur-md">
                        Welcome to my Portfolio
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-cyan-400 to-blue-600 tracking-tight leading-tight mb-6">
                        Hi, I'm <br /> Suvam Ghosh
                    </h1>
                    
                    <p className="text-neutral-400 text-lg md:text-xl max-w-lg leading-relaxed font-light mb-8">
                        An engineering student at IIT Kharagpur building elegant, scalable, and highly optimized solutions from the ground up.
                    </p>

                    <div className="flex gap-4">
                        <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                            View Projects
                        </a>
                        <a href="#contact" className="px-8 py-3 rounded-full border border-cyan-500/50 text-cyan-400 font-semibold text-lg hover:bg-cyan-900/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] backdrop-blur-sm">
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Right content */}
                <div className="flex-1 relative min-h-[50vh] md:min-h-full">
                    <SplineScene 
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </section>
    );
}

export default Landing;