import React, { useEffect, useState } from 'react';
import { ArrowRight, Github, Mail, Linkedin, Terminal } from 'lucide-react';
import { HERO_CONTENT, CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const getTransitionClass = (delay: string) => 
    `transition-all duration-1000 ease-out ${delay} transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`;

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden scroll-mt-28">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden -z-10">
         {/* Tech Grid Pattern */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
         
         <div 
            className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] opacity-40 animate-pulse"
            style={{ transform: `translate(-50%, ${scrollY * 0.2}px)` }}
         ></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center z-10">
        
        {/* Profile Image - Centered in the Grid */}
        <div className={`relative mb-10 ${getTransitionClass('delay-100')}`}>
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-[2.5rem] overflow-hidden border-4 border-slate-800/80 shadow-[0_0_50px_-10px_rgba(14,165,233,0.4)] group z-10 bg-darker animate-float">
                 {/* Image */}
                 <img 
                    src="https://aicdn.picsart.com/9f538b4a-d577-4f62-8c81-0624160caebf.jpg" 
                    alt="Muhammad Umar" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                 />
                 {/* Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-darker/60 via-transparent to-transparent opacity-60"></div>
            </div>
            
            {/* Decorative Frame Ring */}
            <div className="absolute -inset-4 border border-white/5 rounded-[3rem] -z-10 scale-95 group-hover:scale-100 transition-transform duration-500 animate-float" style={{ animationDelay: '1s' }}></div>
            
            {/* Glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[60px] -z-20 rounded-full"></div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-darker border border-white/10 px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap flex items-center gap-2 z-20">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span className="text-xs font-medium text-slate-300">Open to Work</span>
            </div>
        </div>

        {/* Name */}
        <h1 className={`${getTransitionClass('delay-200')} text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 mt-4`}>
          Muhammad Umar
        </h1>

        {/* Role Gradient */}
        <div className={`${getTransitionClass('delay-300')} text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-secondary mb-6`}>
          Student Developer & Robotics Enthusiast
        </div>

        {/* Description */}
        <p className={`${getTransitionClass('delay-400')} max-w-2xl text-lg text-slate-400 mb-10 leading-relaxed`}>
          {HERO_CONTENT.description}
        </p>

        {/* Action Buttons & Socials */}
        <div className={`${getTransitionClass('delay-500')} flex flex-col items-center gap-8 w-full`}>
            
            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
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

            {/* Social Icons Row */}
            <div className="flex items-center gap-4">
                <a href="https://github.com/cyberdraft67-debug" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-white text-slate-400 transition-colors border border-white/5">
                    <Github size={20} />
                </a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-white text-slate-400 transition-colors border border-white/5">
                    <Mail size={20} />
                </a>
                {/* Placeholder for LinkedIn if needed later */}
                <div className="p-3 bg-white/5 rounded-full text-slate-600 border border-white/5 cursor-not-allowed opacity-50" title="LinkedIn coming soon">
                    <Linkedin size={20} />
                </div>
            </div>

        </div>

        {/* Stats Row - Simplified for centered layout */}
        <div className={`${getTransitionClass('delay-700')} mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-white/5 pt-10 px-8`}>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-white mb-1">CEO</span>
              <span className="text-slate-500 text-xs uppercase tracking-wider">SafaayiCO</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-white mb-1">CTO</span>
              <span className="text-slate-500 text-xs uppercase tracking-wider">StudiesMate</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-white mb-1">O-2</span>
              <span className="text-slate-500 text-xs uppercase tracking-wider">Level</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-white mb-1">Robotics</span>
              <span className="text-slate-500 text-xs uppercase tracking-wider">Specialist</span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;