import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../images/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header id="header" className="glass-effect fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 backdrop-blur-xl">
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent opacity-50"></div>
            <a href="#home" className="bg-gradient-to-r from-slate-900/90 via-black/80 to-slate-900/90 text-center py-2.5 text-[10px] sm:text-xs font-medium text-sky-200/90 flex items-center justify-center gap-3 cursor-pointer interactive-element tracking-normal sm:tracking-widest uppercase border-b border-white/5 px-4 whitespace-normal leading-tight relative">
                <img src={logo} alt="icon" className="w-5 h-5 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)] object-cover shrink-0" />
                <span className="min-w-0 break-words">Where Curiosity Compiles Creativity</span>
            </a>
            <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center relative">
                <a href="#home" className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-bold tracking-wider interactive-element group min-w-0">
                    <div className="relative shrink-0">
                        <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                        <img src={logo} alt="logo" className="relative w-8 h-8 rounded-full border border-white/10 object-cover" />
                    </div>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 truncate">Compile<span className="text-sky-400"> </span>JOURNEY</span>
                </a>

                <nav className="hidden lg:flex items-center gap-1">
                    <a href="#home" className="nav-link text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 py-2 px-4 rounded-full transition-all duration-300 interactive-element">Home</a>
                    <a href="#about" className="nav-link text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 py-2 px-4 rounded-full transition-all duration-300 interactive-element">About</a>
                    <a href="#journey" className="nav-link text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 py-2 px-4 rounded-full transition-all duration-300 interactive-element">Journey</a>

                    <div className="relative group" onMouseEnter={() => setIsProjectsOpen(true)} onMouseLeave={() => setIsProjectsOpen(false)}>
                        <button className="nav-link flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 py-2 px-4 rounded-full transition-all duration-300 interactive-element">
                            Projects <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isProjectsOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`dropdown-menu absolute top-full right-0 w-64 pt-4 transition-all duration-300 transform origin-top-right ${isProjectsOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}>
                            <div className="glass-effect rounded-2xl overflow-hidden border border-white/10 p-2 flex flex-col gap-1 bg-[#0a0a0f]/95 shadow-2xl backdrop-blur-xl">
                                <a href="#avira" className="group flex items-center gap-3 px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                                        <div className="w-2 h-2 rounded-full bg-purple-400 group-hover:animate-pulse"></div>
                                    </div>
                                    <div>
                                        <div className="font-semibold">Avira</div>
                                        <div className="text-[10px] text-slate-500">AI Assistant</div>
                                    </div>
                                </a>
                                <a href="#curiodata" className="group flex items-center gap-3 px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                                        <div className="w-2 h-2 rounded-full bg-blue-400 group-hover:animate-pulse"></div>
                                    </div>
                                    <div>
                                        <div className="font-semibold">CurioData</div>
                                        <div className="text-[10px] text-slate-500">Data Analytics</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <a href="#portfolio" className="nav-link text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 py-2 px-4 rounded-full transition-all duration-300 interactive-element">Portfolio</a>
                    <div className="w-px h-5 bg-white/10 mx-2"></div>
                    <a href="#contact" className="relative ml-2 overflow-hidden bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:scale-105 interactive-element group">
                        <span className="relative z-10">Get in Touch</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                </nav>

                <button onClick={toggleMenu} className="lg:hidden interactive-element text-white hover:text-sky-400 transition-colors relative z-50">
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            <div id="mobile-menu" className={`lg:hidden fixed inset-0 bg-[#020010]/95 backdrop-blur-2xl transition-all duration-300 z-40 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="flex flex-col items-center justify-center h-full space-y-6">
                    <a href="#home" onClick={toggleMenu} className="text-2xl font-bold text-white hover:text-sky-400 transition-colors interactive-element">Home</a>
                    <a href="#about" onClick={toggleMenu} className="text-2xl font-bold text-white hover:text-sky-400 transition-colors interactive-element">About</a>
                    <a href="#journey" onClick={toggleMenu} className="text-2xl font-bold text-white hover:text-sky-400 transition-colors interactive-element">Journey</a>

                    {/* Mobile Projects Menu */}
                    <div className="flex flex-col items-center w-full">
                        <button
                            onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                            className="text-2xl font-bold text-white hover:text-sky-400 transition-colors interactive-element flex items-center gap-2"
                        >
                            Projects <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isProjectsOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <div className={`overflow-hidden transition-all duration-300 flex flex-col items-center gap-4 ${isProjectsOpen ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                            <a href="#avira" onClick={toggleMenu} className="text-lg text-slate-300 hover:text-white transition-colors">Avira AI</a>
                            <a href="#curiodata" onClick={toggleMenu} className="text-lg text-slate-300 hover:text-white transition-colors">CurioData</a>
                        </div>
                    </div>

                    <a href="#portfolio" onClick={toggleMenu} className="text-2xl font-bold text-white hover:text-sky-400 transition-colors interactive-element">Portfolio</a>
                    <a href="#contact" onClick={toggleMenu} className="mt-8 px-8 py-3 bg-sky-500 text-white rounded-full font-bold text-lg hover:bg-sky-400 transition-colors interactive-element shadow-lg shadow-sky-500/20">Contact Me</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
