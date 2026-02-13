import React from 'react';
import { Code2, Cpu } from 'lucide-react';

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-32 relative overflow-visible">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 reveal">My Portfolio</h2>
                <p className="text-lg text-slate-400 mb-16 max-w-xl mx-auto reveal">
                    A curated collection of my projects, skills, and professional journey.
                </p>

                <div className="portfolio-orbit-wrapper relative max-w-3xl mx-auto perspective-container reveal" style={{ perspective: '1000px' }}>

                    <div className="orbit-ring ring-1">
                        <div className="orbit-icon icon-1 bg-[#0a0a0a] border border-sky-500/50 text-sky-400"><Code2 className="w-4 h-4" /></div>
                    </div>
                    <div className="orbit-ring ring-2">
                        <div className="orbit-icon icon-2 bg-[#0a0a0a] border border-purple-500/50 text-purple-400"><Cpu className="w-4 h-4" /></div>
                    </div>

                    <div className="group relative transform-style-3d transition-all duration-500 portfolio-holo-card hover:scale-105">

                        <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(56,189,248,0.15)] bg-[#030014]">

                            <div className="scan-line"></div>

                            <img src="/portfolio_preview.png"
                                alt="Portfolio Preview"
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-20 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                                <h3 className="text-3xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Explore My Work</h3>
                                <p className="text-sky-300 mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 text-sm">Full Stack • AI • Data Science</p>

                                <a href="https://creation-hub.abikrishna04edu.workers.dev/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white text-black text-sm font-bold rounded-full hover:bg-primary hover:text-white transition-colors interactive-element shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] transform scale-90 group-hover:scale-100 duration-300">
                                    Open Portfolio
                                </a>
                            </div>

                            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded text-[10px] font-mono text-green-400 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> ONLINE
                            </div>
                            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded text-[10px] font-mono text-slate-400">
                                SYS.VER.2.5
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
