import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-darker border-t border-white/5 text-center">
      <div className="max-w-7xl mx-auto px-4 text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Muhammad Umar. All rights reserved.</p>
        <p className="mt-2 text-xs">Built with React, Tailwind, and Passion.</p>
      </div>
    </footer>
  );
};

export default Footer;