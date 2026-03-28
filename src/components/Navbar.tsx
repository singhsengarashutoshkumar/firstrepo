import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../constants';

export default function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/5 dark:bg-zinc-950/50 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between h-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-lg font-black tracking-tighter uppercase text-zinc-900 dark:text-white group cursor-pointer"
          >
            <div className="w-8 h-8 bg-slayer-red rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(255,0,60,0.5)]">
              <Zap size={18} className="text-white" />
            </div>
            <span className="group-hover:text-slayer-red transition-colors">
              {portfolioData.name}
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-500 dark:text-zinc-400 hover:text-slayer-red dark:hover:text-slayer-red transition-all text-[10px] uppercase tracking-[0.3em] font-bold relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slayer-red transition-all group-hover:w-full shadow-[0_0_10px_rgba(255,0,60,0.8)]" />
              </a>
            ))}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 text-zinc-400 hover:text-slayer-red transition-colors relative group"
            >
              <div className="absolute inset-0 bg-slayer-red/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              {isDark ? <Sun size={18} className="relative z-10" /> : <Moon size={18} className="relative z-10" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-600 dark:text-zinc-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl border-b border-white/10"
          >
            <div className="px-6 pt-4 pb-10 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-2xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white hover:text-slayer-red transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
