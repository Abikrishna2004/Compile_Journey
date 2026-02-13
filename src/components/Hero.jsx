import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BrainCircuit, Lightbulb, Type, Target, ArrowRight } from 'lucide-react';
import logo from '../images/logo.png';
import founder from '../images/founder.png';

const Hero = () => {
    const [rotationIndex, setRotationIndex] = useState(0);
    const totalSlides = 4;

    const nextSlide = () => setRotationIndex((prev) => prev + 1);
    const prevSlide = () => setRotationIndex((prev) => prev - 1);

    // Auto-rotate
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    // Calculate active index (0-3) for dots
    const activeIndex = ((rotationIndex % totalSlides) + totalSlides) % totalSlides;

    return (
        <section id="home" className="relative pt-32 lg:pt-24 flex items-center min-h-screen overflow-hidden perspective-container">
            {/* 3D Cube Container */}
            <div
                className="w-full h-full absolute inset-0 transition-transform duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] preserve-3d"
                style={{
                    transform: `translateZ(-50vw) rotateY(${-rotationIndex * 90}deg)`
                }}
            >
                {/* SLIDE 1: Front (0deg) */}
                <div className="absolute inset-0 w-[100vw] h-full flex flex-col items-center justify-center text-center backface-hidden pt-20 pb-12"
                    style={{ transform: `rotateY(0deg) translateZ(50vw)` }}>
                    <div className="max-w-4xl mx-auto px-4">
                        <img src={logo} alt="logo" className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 mx-auto shadow-2xl shadow-sky-500/20 object-cover" />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold hero-gradient-text mb-4 leading-tight">
                            Where Curiosity Compiles Creativity
                        </h1>
                        <p className="text-sm sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
                            — exploring AI, LLMs, and Data Science to build innovative tools and solutions.
                        </p>
                    </div>
                </div>

                {/* SLIDE 2: Right (90deg) */}
                <div className="absolute inset-0 w-[100vw] h-full flex flex-col items-center justify-center text-center backface-hidden pt-20 pb-12"
                    style={{ transform: `rotateY(90deg) translateZ(50vw)` }}>
                    <div className="max-w-4xl mx-auto px-4">
                        <img src={logo} alt="Avira" className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 mx-auto shadow-2xl shadow-purple-500/20 object-cover" />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-300 mb-4 leading-tight">Meet Avira — Your AI Assistant</h1>
                        <p className="text-sm sm:text-lg md:text-xl text-slate-300 mb-4 max-w-2xl mx-auto">
                            Avira helps you explore AI, generate smart solutions, and experiment with prompt engineering seamlessly.
                        </p>
                        <div className="flex justify-center space-x-6 mb-6">
                            <BrainCircuit className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" />
                            <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" />
                            <Type className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" />
                        </div>
                        <a href="https://avira-64d03.web.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-105 transition-all duration-300 group">
                            <span>Try Avira Now</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* SLIDE 3: Back (180deg) */}
                <div className="absolute inset-0 w-[100vw] h-full flex flex-col items-center justify-center text-center backface-hidden pt-20 pb-12"
                    style={{ transform: `rotateY(180deg) translateZ(50vw)` }}>
                    <div className="max-w-4xl mx-auto px-4">
                        <img src={founder} alt="Abikrishna" className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 mx-auto border-2 border-sky-500 object-cover" />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-300 mb-4 leading-tight">Hi, I’m Abikrishna</h1>
                        <p className="text-sm sm:text-lg md:text-xl text-slate-300 mb-6 max-w-2xl mx-auto">
                            I am a software developer and AI enthusiast, creating innovative tools and projects in LLMs, FastAPI, and Data Science.
                        </p>
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm sm:text-lg text-slate-200">
                            <span>🐍 Python</span>
                            <span>⚙️ FastAPI</span>
                            <span>🤖 AI/ML</span>
                            <span>📊 Data Science</span>
                        </div>
                    </div>
                </div>

                {/* SLIDE 4: Left (270deg) */}
                <div className="absolute inset-0 w-[100vw] h-full flex flex-col items-center justify-center text-center backface-hidden pt-20 pb-12"
                    style={{ transform: `rotateY(270deg) translateZ(50vw)` }}>
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="inline-flex p-4 rounded-full bg-emerald-500/10 mb-4 border border-emerald-500/20">
                            <Target className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-400" />
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-300 mb-6 leading-tight">Our Mission & Vision</h1>
                        <div className="text-sm sm:text-lg md:text-xl text-slate-300 space-y-4 px-4">
                            <p><span className="font-semibold text-white">Mission:</span> To simplify AI learning and build intelligent solutions.</p>
                            <p><span className="font-semibold text-white">Vision:</span> To create a community where curiosity compiles creativity.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="carousel-controls absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-4 bg-black/20 backdrop-blur-sm p-2 rounded-full border border-white/10">
                <button className="carousel-arrow interactive-element p-2 hover:bg-white/10 rounded-full transition-all" onClick={prevSlide}><ChevronLeft className="w-6 h-6" /></button>
                <div className="carousel-dots flex gap-2">
                    {[...Array(totalSlides)].map((_, i) => (
                        <div
                            key={i}
                            className={`carousel-dot w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${i === activeIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'}`}
                            onClick={() => setRotationIndex(rotationIndex + (i - activeIndex))}
                        />
                    ))}
                </div>
                <button className="carousel-arrow interactive-element p-2 hover:bg-white/10 rounded-full transition-all" onClick={nextSlide}><ChevronRight className="w-6 h-6" /></button>
            </div>
        </section>
    );
};

export default Hero;
