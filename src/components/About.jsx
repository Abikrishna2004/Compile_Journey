import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Code2,
  Brain,
  Rocket,
  User,
} from "lucide-react";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const highlights = [
    { icon: <Code2 className="w-5 h-5" />, label: "Full Stack Dev" },
    { icon: <Brain className="w-5 h-5" />, label: "AI Enthusiast" },
    { icon: <Rocket className="w-5 h-5" />, label: "Problem Solver" },
  ];

  return (
    <section id="about" className="relative w-full py-16 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm -z-10"></div>
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-purple-900/10 to-transparent blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-sky-900/10 to-transparent blur-3xl pointer-events-none"></div>

      <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
        <div className="glass-effect rounded-2xl border border-white/10 p-8 lg:p-10 w-full shadow-2xl relative overflow-hidden reveal">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 via-purple-500 to-sky-500 opacity-50"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Column 1: Profile (3 cols) */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-center text-center border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8">
              <div className="relative group mb-4">
                <div className="absolute -inset-1 bg-gradient-to-br from-sky-500 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-white/20 p-1 bg-slate-900 shadow-2xl">
                  <img
                    src={`${import.meta.env.BASE_URL}founder_about.jpg`}
                    alt="Abikrishna - Founder"
                    className="w-full h-full object-cover rounded-full transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-2 right-2 w-8 h-8 bg-[#0a0a0f] rounded-full flex items-center justify-center border border-white/20 text-sky-400 shadow-lg">
                  <User className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-3xl font-space font-bold text-white tracking-tight mb-1">
                Abikrishna
              </h3>
              <p className="text-sky-400 font-inter font-medium text-sm w-full uppercase tracking-wider">
                Founder & Developer
              </p>
            </div>

            {/* Column 2: Content (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h2 className="text-xs font-space font-bold tracking-[0.2em] text-sky-500 uppercase mb-3">
                  Behind the Code
                </h2>
                <h3 className="text-3xl md:text-5xl font-space font-bold text-white leading-tight">
                  The Story of{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-purple-500">
                    Compile Journey
                  </span>
                </h3>
              </div>

              <div className="text-slate-300 font-inter text-base md:text-lg leading-relaxed space-y-4 font-light tracking-wide">
                <p>
                  My journey began with a simple fascination: how can lines of
                  text on a screen change the world? That curiosity led me down
                  the rabbit hole of coding, AI, and problem-solving.
                </p>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 md:max-h-[500px] md:opacity-100"}`}
                >
                  <p className="mb-4">
                    Through dedication and countless hours of experimentation,
                    I've honed my skills in{" "}
                    <strong className="text-white font-semibold">
                      Python, FastAPI, and LLMs
                    </strong>
                    . I built <em>Compile Journey</em> not just as a portfolio,
                    but as a platform to share knowledge, showcase innovation,
                    and demonstrate the power of modern web technologies.
                  </p>
                  <p>
                    Today, I focus on bridging the gap between complex data
                    science concepts and intuitive user experiences, creating
                    tools like{" "}
                    <strong className="text-white font-semibold">Avira</strong>{" "}
                    that make AI accessible to everyone.
                  </p>
                </div>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="md:hidden flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wide hover:text-sky-300 transition-colors py-1"
                >
                  {isExpanded ? (
                    <>
                      Show Less <ChevronUp className="w-3 h-3" />
                    </>
                  ) : (
                    <>
                      Read Full Story <ChevronDown className="w-3 h-3" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Column 3: Highlights (3 cols) */}
            <div className="lg:col-span-3 flex flex-row lg:flex-col gap-4 flex-wrap lg:border-l border-white/10 lg:pl-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex-1 lg:flex-none flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/5 hover:bg-white/10 hover:border-sky-500/30 hover:translate-x-1 transition-all duration-300 group"
                >
                  <div className="p-2.5 bg-gradient-to-br from-gray-800 to-black rounded-lg text-sky-400 group-hover:text-purple-400 transition-colors shadow-inner">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 uppercase tracking-wider">
                      Skill
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-sky-200 transition-colors">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
