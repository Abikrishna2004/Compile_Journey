import React from 'react';
import { Bot, TerminalSquare, Zap, BarChart3, Database, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-purple-900/10 blur-[100px] rounded-full"></div>
                <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 reveal">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-300 mb-6 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 text-sky-400" />
                        <span>Featured Innovations</span>
                    </div>
                    <h2 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight">
                        Built for the <span className="bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">Future</span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        Exploring the boundaries of Artificial Intelligence and Data Science through practical, high-impact applications.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Avira Card */}
                    <div id="avira" className="group relative rounded-3xl bg-[#0a0a12] border border-white/10 hover:border-purple-500/50 transition-all duration-500 overflow-hidden reveal">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="p-6 sm:p-8 md:p-10 relative z-10">
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                                    <Bot className="w-8 h-8 text-purple-400" />
                                </div>
                                <a href="https://avira-64d03.web.app" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors group/link">
                                    <ExternalLink className="w-5 h-5 text-slate-400 group-hover/link:text-white transition-colors" />
                                </a>
                            </div>

                            <h3 className="text-3xl font-bold text-white mb-2">Avira AI</h3>
                            <p className="text-purple-400 font-medium mb-6 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
                                Intelligent Assistant
                            </p>

                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                An advanced AI assistant designed to bridge the gap between complex LLM capabilities and daily productivity. Features intelligent prompt engineering and context-aware responses.
                            </p>


                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="flex items-center gap-3 text-sm text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5">
                                    <TerminalSquare className="w-4 h-4 text-purple-400" />
                                    <span>Smart Prompts</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5">
                                    <Zap className="w-4 h-4 text-purple-400" />
                                    <span>Fast Response</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                <a href="https://avira-64d03.web.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all">
                                    Chat with Avira <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* (This chunk is specifically targeting the start of the card content to update padding) */}

                    {/* CurioData Card */}
                    <div id="curiodata" className="group relative rounded-3xl bg-[#0a0a12] border border-white/10 hover:border-blue-500/50 transition-all duration-500 overflow-hidden reveal">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="p-6 sm:p-8 md:p-10 relative z-10">
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                                    <Database className="w-8 h-8 text-blue-400" />
                                </div>
                                <a href="https://curiodata.netlify.app/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors group/link">
                                    <ExternalLink className="w-5 h-5 text-slate-400 group-hover/link:text-white transition-colors" />
                                </a>
                            </div>

                            <h3 className="text-3xl font-bold text-white mb-2">CurioData</h3>
                            <p className="text-blue-400 font-medium mb-6 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                                Data Analytics Platform
                            </p>

                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                Upload your datasets and let AI uncover hidden patterns. CurioData provides instant visualization, statistical analysis, and predictive insights from raw CSV/Excel files.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="flex items-center gap-3 text-sm text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5">
                                    <BarChart3 className="w-4 h-4 text-blue-400" />
                                    <span>Auto Visualization</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5">
                                    <Bot className="w-4 h-4 text-blue-400" />
                                    <span>AI Insights</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                <a href="https://curiodata.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all">
                                    Analyze Your Data <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
