import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundCanvas from './components/BackgroundCanvas';
import Cursor from './components/Cursor';
import './index.css';

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      revealElements.forEach(el => {
        if (el.getBoundingClientRect().top < windowHeight - 100) {
          el.classList.add('visible');
        }
      });
    };

    // Initial check
    revealOnScroll();

    window.addEventListener('scroll', revealOnScroll);
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div className="antialiased text-slate-200">
      <BackgroundCanvas />
      <Cursor />

      <Header />

      <main className="relative z-10">
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Portfolio />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
