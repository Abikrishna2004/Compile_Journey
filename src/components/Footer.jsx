import React from 'react';
import { Linkedin, Instagram, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black/30">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-400 mb-4 md:mb-0">&copy; 2025 compile.journey. All Rights Reserved.</p>
                    <div className="flex space-x-6">
                        <a href="https://www.linkedin.com/company/compilejourneyspace/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors interactive-element">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="https://www.instagram.com/compile.journey" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors interactive-element">
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a href="https://github.com/Abikrishna2004" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors interactive-element">
                            <Github className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
