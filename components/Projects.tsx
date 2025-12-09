import React from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { PROJECTS_DATA } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900/30 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-slate-400 max-w-xl">
              From coding web applications to assembling robot circuits, here is what I've been working on.
            </p>
          </div>
          <a href="https://github.com/cyberdraft67-debug" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center text-primary hover:text-blue-400 transition-colors mt-4 md:mt-0 group/github">
            View GitHub <Github size={16} className="ml-2 transition-transform duration-300 group-hover/github:scale-110 group-hover/github:rotate-12" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div 
              key={project.id} 
              className="flex flex-col h-full bg-darker border border-white/5 rounded-2xl overflow-hidden hover:shadow-[0_0_40px_rgba(14,165,233,0.1)] hover:border-primary/30 hover:bg-slate-800/50 hover:scale-[1.02] transition-all duration-300 group"
            >
              {/* Card Header */}
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 relative p-6 flex items-center justify-center group-hover:from-slate-800 group-hover:to-primary/20 transition-colors duration-500">
                <Layers className="w-16 h-16 text-white/10 group-hover:text-white/20 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:scale-110" />
                <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 text-xs font-bold text-darker bg-white rounded-full">
                        {project.role}
                    </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs text-slate-500 border border-slate-800 px-2 py-1 rounded group-hover:border-slate-700 transition-colors">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Links */}
                  <div className="pt-4 border-t border-white/5 flex gap-4 min-h-[3.5rem] items-center">
                     {project.links?.demo && (
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:text-blue-300 flex items-center transition-colors group/link">
                           Visit Site <ExternalLink size={14} className="ml-1 transition-transform duration-300 group-hover/link:scale-110" />
                        </a>
                     )}
                     {project.links?.github && (
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-300 hover:text-white flex items-center transition-colors group/link">
                           Code <Github size={14} className="ml-1 transition-transform duration-300 group-hover/link:scale-110" />
                        </a>
                     )}
                     {!project.links && (
                        <span className="text-sm text-slate-500 flex items-center">
                          {project.id === 'studiesmate' ? (
                            <span className="text-emerald-400/80 text-xs bg-emerald-400/10 px-2 py-1 rounded">Launch: Summer 2025</span>
                          ) : 'Hardware Project'}
                        </span>
                     )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <a href="https://github.com/cyberdraft67-debug" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-blue-400 transition-colors group/github">
            View GitHub <Github size={16} className="ml-2 transition-transform duration-300 group-hover/github:scale-110 group-hover/github:rotate-12" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;