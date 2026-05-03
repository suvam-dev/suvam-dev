import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from "../Components/ProjectCard";
import { projectDetails } from "../data/projects";
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Project() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let time = 0;
        let animationFrameId;

        const waveData = Array.from({ length: 8 }).map(() => ({
            value: Math.random() * 0.5 + 0.1,
            targetValue: Math.random() * 0.5 + 0.1,
            speed: Math.random() * 0.02 + 0.01
        }));

        function resizeCanvas() {
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
        }

        function updateWaveData() {
            waveData.forEach(data => {
                if (Math.random() < 0.01) data.targetValue = Math.random() * 0.7 + 0.1;
                const diff = data.targetValue - data.value;
                data.value += diff * data.speed;
            });
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            waveData.forEach((data, i) => {
                const freq = data.value * 7;
                ctx.beginPath();
                for (let x = 0; x < canvas.width; x++) {
                    const nx = (x / canvas.width) * 2 - 1;
                    const px = nx + i * 0.04 + freq * 0.03;
                    const py = Math.sin(px * 10 + time) * Math.cos(px * 2) * freq * 0.1 * ((i + 1) / 8);
                    const y = (py + 1) * canvas.height / 2;
                    x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
                }
                const intensity = Math.min(1, freq * 0.3);
                // Matched colors from original reference snippet
                const r = 79 + intensity * 100;
                const g = 70 + intensity * 130;
                const b = 229;
                ctx.lineWidth = 1.5 + i * 0.5;
                ctx.strokeStyle = `rgba(${r},${g},${b},0.8)`;
                ctx.shadowColor = `rgba(${r},${g},${b},0.9)`;
                ctx.shadowBlur = 12;
                ctx.stroke();
                ctx.shadowBlur = 0;
            });
        }

        function animate() {
            time += 0.02;
            updateWaveData();
            draw();
            animationFrameId = requestAnimationFrame(animate);
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const [isMobile, setIsMobile] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) {
            nextProject();
        } else if (isRightSwipe) {
            prevProject();
        }
    };

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % projectDetails.length);
    };

    const prevProject = () => {
        setCurrentIndex((prev) => (prev - 1 + projectDetails.length) % projectDetails.length);
    };

    return (
        <section id="projects" className="relative flex flex-col justify-center items-center py-20 px-5 md:px-20 bg-[#050510] overflow-hidden">
            
            {/* Background Ambient Effects */}
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-cyan-900/20 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/10 blur-[100px] pointer-events-none rounded-full"></div>
            <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-cyan-900/10 blur-[120px] pointer-events-none rounded-full"></div>

            {/* Elegant animated wave background */}
            <div className="absolute inset-0 z-0 opacity-100 pointer-events-none overflow-hidden flex items-center justify-center">
                <canvas ref={canvasRef} className="w-full h-full opacity-100 mix-blend-screen" />
            </div>

            <div className="flex flex-col items-center justify-center mb-16 relative z-10">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 font-extrabold text-5xl mb-4 tracking-wider uppercase drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] text-center">
                    Featured Projects
                </h1>
                <div className="w-32 h-1 bg-cyan-500 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
            </div>

            <div 
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                className="relative w-full max-w-6xl h-[550px] flex justify-center items-center perspective-[1200px]"
            >
                {projectDetails.map((project, index) => {
                    let offset = index - currentIndex;
                    const total = projectDetails.length;

                    if (offset < -Math.floor(total / 2)) offset += total;
                    if (offset > Math.floor(total / 2)) offset -= total;

                    const isActive = offset === 0;

                    let transformStr = '';
                    let opacity = 1;
                    let zIndex = 10 - Math.abs(offset);

                    if (isActive) {
                        transformStr = isMobile 
                            ? 'translateX(0px) translateZ(30px) rotateY(0deg) scale(0.9)' 
                            : 'translateX(0px) translateZ(50px) rotateY(0deg) scale(1)';
                    } else if (Math.abs(offset) === 1) {
                        const sign = Math.sign(offset);
                        transformStr = isMobile 
                            ? `translateX(${sign * 110}px) translateZ(-80px) rotateY(${-sign * 25}deg) scale(0.75)`
                            : `translateX(${sign * 350}px) translateZ(-150px) rotateY(${-sign * 35}deg) scale(0.85)`;
                        opacity = isMobile ? 0.35 : 0.7;
                    } else {
                        const sign = Math.sign(offset);
                        transformStr = isMobile 
                            ? `translateX(${sign * 180}px) translateZ(-160px) rotateY(${-sign * 35}deg) scale(0.6)`
                            : `translateX(${sign * 500}px) translateZ(-300px) rotateY(${-sign * 45}deg) scale(0.7)`;
                        opacity = 0;
                    }

                    return (
                        <div
                            key={index}
                            className="absolute transition-all duration-700 ease-out cursor-pointer"
                            style={{
                                transform: transformStr,
                                opacity: Math.abs(offset) > 1 && total > 3 ? 0 : opacity,
                                zIndex: zIndex,
                                transformStyle: 'preserve-3d'
                            }}
                            onClick={() => {
                                if (offset < 0) prevProject();
                                if (offset > 0) nextProject();
                            }}
                        >
                            <ProjectCard
                                name={project.title}
                                description={project.body}
                                image={project.image}
                                github={project.github}
                                live={project.live}
                                isActive={isActive}
                            />
                        </div>
                    );
                })}
            </div>

            {/* Controls */}
            <div className="flex gap-6 mt-12 z-20">
                <button
                    onClick={prevProject}
                    className="p-3 rounded-xl bg-cyan-900/40 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-800/60 hover:scale-110 hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300 cursor-pointer"
                >
                    <ChevronLeft size={32} />
                </button>
                <button
                    onClick={nextProject}
                    className="p-3 rounded-xl bg-cyan-900/40 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-800/60 hover:scale-110 hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300 cursor-pointer"
                >
                    <ChevronRight size={32} />
                </button>
            </div>
            <p className="text-gray-500 mt-6 text-sm animate-pulse tracking-widest uppercase text-center">Swipe or click cards to browse</p>
        </section>
    );
}

export default Project;