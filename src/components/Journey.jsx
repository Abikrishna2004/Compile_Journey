import React, { useState } from 'react';
import { Sparkles, FlaskConical, Hammer, Share2, ChevronDown, ChevronUp } from 'lucide-react';

const Journey = () => {
    const [showAll, setShowAll] = useState(false);

    return (
        <section id="journey" className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 reveal">
                    <h2 className="text-sm font-bold text-sky-500 tracking-widest uppercase mb-2">Milestones</h2>
                    <h3 className="text-3xl md:text-5xl font-space font-bold text-white mb-4">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">Journey</span></h3>
                    <p className="text-slate-400 text-base md:text-lg">From a spark of curiosity to a mission of creation.</p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Central Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500/0 via-sky-500/50 to-purple-500/0 md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {/* Phase 1 */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between group reveal">
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#0a0a0f] border-2 border-sky-400 rounded-full md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(56,189,248,0.5)] group-hover:scale-125 transition-transform duration-300"></div>

                            <div className="ml-12 md:ml-0 md:w-[45%] md:pr-12 md:text-right order-1">
                                <div className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-sky-500/30 transition-all duration-300 group-hover:-translate-y-1 shadow-lg backdrop-blur-sm">
                                    <div className="inline-flex p-3 bg-sky-500/10 rounded-xl mb-4 text-sky-400 md:ml-auto md:mr-0">
                                        <Sparkles className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2">Curiosity Sparked</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">It all began with a passion for AI, coding, and problem-solving. Endless hours of learning and exploring new technologies laid the foundation.</p>
                                </div>
                            </div>
                            <div className="hidden md:block md:w-[45%] order-2"></div>
                        </div>

                        {/* Phase 2 */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between group reveal">
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#0a0a0f] border-2 border-purple-400 rounded-full md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(168,85,247,0.5)] group-hover:scale-125 transition-transform duration-300"></div>

                            <div className="hidden md:block md:w-[45%] order-1"></div>
                            <div className="ml-12 md:ml-0 md:w-[45%] md:pl-12 order-2">
                                <div className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-purple-500/30 transition-all duration-300 group-hover:-translate-y-1 shadow-lg backdrop-blur-sm">
                                    <div className="inline-flex p-3 bg-purple-500/10 rounded-xl mb-4 text-purple-400">
                                        <FlaskConical className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2">Experimentation</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">Explored LLMs, FastAPI, Python, and Data Science. Small projects and prototypes became my classroom for hands-on learning.</p>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Expandable Section */}
                        <div className={`space-y-12 transition-all duration-700 overflow-hidden ${showAll ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 md:max-h-[2000px] md:opacity-100'}`}>
                            {/* Phase 3 */}
                            <div className="relative flex flex-col md:flex-row items-center justify-between group reveal">
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#0a0a0f] border-2 border-emerald-400 rounded-full md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(52,211,153,0.5)] group-hover:scale-125 transition-transform duration-300"></div>

                                <div className="ml-12 md:ml-0 md:w-[45%] md:pr-12 md:text-right order-1">
                                    <div className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-emerald-500/30 transition-all duration-300 group-hover:-translate-y-1 shadow-lg backdrop-blur-sm">
                                        <div className="inline-flex p-3 bg-emerald-500/10 rounded-xl mb-4 text-emerald-400 md:ml-auto md:mr-0">
                                            <Hammer className="w-6 h-6" />
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-2">Building Tools</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">Transformed experiments into real tools like Avira, AI experiments, and web apps, testing and refining each for practical use.</p>
                                    </div>
                                </div>
                                <div className="hidden md:block md:w-[45%] order-2"></div>
                            </div>

                            {/* Phase 4 */}
                            <div className="relative flex flex-col md:flex-row items-center justify-between group reveal">
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#0a0a0f] border-2 border-pink-400 rounded-full md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(236,72,153,0.5)] group-hover:scale-125 transition-transform duration-300"></div>

                                <div className="hidden md:block md:w-[45%] order-1"></div>
                                <div className="ml-12 md:ml-0 md:w-[45%] md:pl-12 order-2">
                                    <div className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-pink-500/30 transition-all duration-300 group-hover:-translate-y-1 shadow-lg backdrop-blur-sm">
                                        <div className="inline-flex p-3 bg-pink-500/10 rounded-xl mb-4 text-pink-400">
                                            <Share2 className="w-6 h-6" />
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-2">Sharing & Inspiring</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">Through tutorials, guides, and resources, I shared my work with the community, encouraging others to learn and innovate.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12 md:hidden relative z-20">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white hover:bg-white/10 hover:border-sky-500/50 transition-all active:scale-95"
                        >
                            {showAll ? (
                                <>Show Less <ChevronUp className="w-4 h-4" /></>
                            ) : (
                                <>View Full Journey <ChevronDown className="w-4 h-4" /></>
                            )}
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Journey;
