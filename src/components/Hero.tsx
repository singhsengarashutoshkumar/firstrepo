import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Zap } from 'lucide-react';
import { portfolioData } from '../constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden pattern-bg">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-slayer-red/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-slayer-purple/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center space-y-12"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="w-24 h-[2px] bg-gradient-to-r from-slayer-red to-slayer-purple mx-auto shadow-[0_0_15px_rgba(255,0,60,0.8)]"
          />
          
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-slayer-red font-bold tracking-[0.4em] uppercase text-xs glow-red flex items-center justify-center gap-2"
            >
              <Zap size={14} className="animate-pulse" />
              {portfolioData.role}
            </motion.p>

            <h1 className="text-6xl md:text-8xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase">
              {portfolioData.name}
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto font-light italic tracking-wide">
              "{portfolioData.tagline}"
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-4">
            <a
              href="#projects"
              className="group relative px-10 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold uppercase tracking-widest text-xs overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-slayer-red to-slayer-purple opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a
              href="#"
              className="group relative px-10 py-4 border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white font-bold uppercase tracking-widest text-xs hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-zinc-950 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              Resume <Download size={16} />
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative "Slash" */}
      <motion.div
        initial={{ rotate: -45, scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 0.1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[1px] bg-white origin-center pointer-events-none"
      />
    </section>
  );
}
