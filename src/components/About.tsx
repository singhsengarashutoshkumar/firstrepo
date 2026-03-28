import React from 'react';
import { motion } from 'motion/react';
import { Zap, Shield } from 'lucide-react';
import { portfolioData } from '../constants';

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden pattern-bg">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-slayer-red to-slayer-purple rounded-2xl blur-2xl opacity-10" />
            <div className="relative space-y-8">
              <div className="text-xs uppercase tracking-[0.4em] text-slayer-red font-bold glow-red flex items-center gap-2">
                <Shield size={14} /> Identity
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase leading-none">
                The <span className="text-slayer-purple glow-purple">Cloud</span> <br /> Slayer
              </h2>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-4 glass rounded-lg border-l-4 border-slayer-red">
                  <div className="text-slayer-red font-black text-2xl mb-1">AWS</div>
                  <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Primary Domain</div>
                </div>
                <div className="p-4 glass rounded-lg border-l-4 border-slayer-purple">
                  <div className="text-slayer-purple font-black text-2xl mb-1">Linux</div>
                  <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Base Mastery</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              {portfolioData.about}
            </p>
            
            <div className="relative p-8 glass rounded-2xl border border-white/5 overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-slayer-red group-hover:h-0 transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-1 h-0 bg-slayer-purple group-hover:h-full transition-all duration-500" />
              
              <div className="relative z-10 flex items-start gap-6">
                <Zap size={32} className="text-slayer-red shrink-0 animate-pulse" />
                <div className="space-y-2">
                  <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-900 dark:text-white">Current Mission</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                    Dedicated to mastering AWS infrastructure, reliable system design, and advanced Linux administration.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
