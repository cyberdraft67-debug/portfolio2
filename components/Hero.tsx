import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, Github, Code2 } from 'lucide-react';
import { HERO_CONTENT } from '../constants';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Trigger fade-in animation after mount
    setLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Helper to generate transition classes with variable delay
  const getTransitionClass = (delay: string) => 
    `transition-all duration-1000 ease-out ${delay} transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`;

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden scroll-mt-28">
      {/* Background Decor with Parallax */}
      <div 
        className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className={getTransitionClass('delay-100')}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-secondary mr-2 animate-ping"></span>
            <span className="text-slate-300 text-sm font-medium">Open to new projects</span>
          </div>
        </div>

        {/* Title */}
        <h1 className={`${getTransitionClass('delay-200')} text-5xl md:text-7xl font-bold tracking-tight text-white mb-6`}>
          <span className="block mb-2">{HERO_CONTENT.greeting}</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-secondary">
            Building the Future
          </span>
        </h1>

        {/* Description */}
        <p className={`${getTransitionClass('delay-300')} max-w-2xl text-lg md:text-xl text-slate-400 mb-10 leading-relaxed`}>
          {HERO_CONTENT.description}
        </p>

        {/* Buttons */}
        <div className={`${getTransitionClass('delay-500')} flex flex-col sm:flex-row gap-4 w-full sm:w-auto`}>
          <a 
            href="#projects"
            onClick={(e) => handleScrollTo(e, 'projects')}
            className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-primary hover:bg-blue-600 rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]"
          >
            View My Work
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-200"
          >
            Contact Me
          </a>
        </div>

        {/* Stats/Quick Info */}
        <div className={`${getTransitionClass('delay-700')} mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-10 w-full max-w-4xl`}>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white mb-1">O-2</span>
            <span className="text-slate-500 text-sm uppercase tracking-wider">Level</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white mb-1">CTO</span>
            <span className="text-slate-500 text-sm uppercase tracking-wider">StudiesMate</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white mb-1">3+</span>
            <span className="text-slate-500 text-sm uppercase tracking-wider">Projects</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white mb-1">Robotics</span>
            <span className="text-slate-500 text-sm uppercase tracking-wider">Specialist</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;