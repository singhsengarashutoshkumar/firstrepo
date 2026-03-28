import React from 'react';
import { portfolioData } from '../constants';
import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 pattern-bg">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
        <div className="flex items-center justify-center gap-2 text-slayer-red glow-red">
          <Zap size={14} />
          <span className="text-[10px] uppercase tracking-[0.5em] font-black">Mission Ongoing</span>
        </div>
        <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">
          © {new Date().getFullYear()} {portfolioData.name} — Cyber Slayer Protocol
        </p>
      </div>
    </footer>
  );
}
