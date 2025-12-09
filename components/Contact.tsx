import React from 'react';
import { Phone, Mail, School } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-darker scroll-mt-28">
      {/* Glow Effect */}
      <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I'm always excited to discuss new technology, robotics projects, or collaborative opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone Card */}
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-slate-900/80 hover:border-primary/30 transition-all duration-300 hover:scale-105 group">
            <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Phone size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
            <p className="text-slate-400">{CONTACT_INFO.phone}</p>
          </div>

          {/* Email Card */}
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-slate-900/80 hover:border-blue-400/30 transition-all duration-300 hover:scale-105 group">
            <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
              <Mail size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <a 
              href={`mailto:${CONTACT_INFO.email}`} 
              className="text-slate-400 hover:text-blue-400 transition-colors break-all"
            >
              {CONTACT_INFO.email}
            </a>
          </div>

          {/* Education Card */}
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-slate-900/80 hover:border-emerald-400/30 transition-all duration-300 hover:scale-105 group">
            <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <School size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Education</h3>
            <p className="text-slate-400 font-medium">{CONTACT_INFO.school}</p>
            <p className="text-slate-500 text-sm mt-1">{CONTACT_INFO.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;