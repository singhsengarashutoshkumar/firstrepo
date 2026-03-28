import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, Zap } from 'lucide-react';
import { portfolioData } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden pattern-bg">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <div className="text-xs uppercase tracking-[0.4em] text-slayer-red font-bold glow-red flex items-center gap-2">
                <Zap size={14} /> Transmission
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase leading-none">
                Establish <br /> <span className="text-slayer-purple glow-purple">Connection</span>
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-md">
                Ready to collaborate on futuristic cloud solutions. Send a transmission to initiate the mission.
              </p>
            </div>

            <div className="space-y-8">
              <a 
                href={`mailto:${portfolioData.email}`}
                className="flex items-center gap-6 group"
              >
                <div className="w-12 h-12 glass rounded-lg flex items-center justify-center group-hover:bg-slayer-red transition-all shadow-[0_0_10px_rgba(255,0,60,0.2)]">
                  <Mail size={20} className="text-zinc-600 dark:text-zinc-400 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Email</div>
                  <div className="text-zinc-900 dark:text-white font-bold">{portfolioData.email}</div>
                </div>
              </a>

              <div className="flex space-x-8">
                <a 
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-lg flex items-center justify-center hover:bg-slayer-purple transition-all group"
                >
                  <Linkedin size={20} className="text-zinc-600 dark:text-zinc-400 group-hover:text-white" />
                </a>
                <a 
                  href={portfolioData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-lg flex items-center justify-center hover:bg-slayer-red transition-all group"
                >
                  <Github size={20} className="text-zinc-600 dark:text-zinc-400 group-hover:text-white" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-8 rounded-2xl border border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Zap size={120} className="text-slayer-red" />
            </div>
            
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500">Identity</label>
                <input 
                  type="text" 
                  className="w-full bg-zinc-100/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:border-slayer-red transition-colors font-mono"
                  placeholder="NAME_HERE"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500">Frequency</label>
                <input 
                  type="email" 
                  className="w-full bg-zinc-100/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:border-slayer-purple transition-colors font-mono"
                  placeholder="EMAIL_ADDRESS"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500">Transmission</label>
                <textarea 
                  rows={4}
                  className="w-full bg-zinc-100/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:border-slayer-red transition-colors font-mono resize-none"
                  placeholder="MESSAGE_CONTENT..."
                />
              </div>
              <button 
                type="submit"
                className="w-full group relative py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-black uppercase tracking-[0.4em] text-xs overflow-hidden transition-all hover:scale-[1.02] active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Initiate Send <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-slayer-red to-slayer-purple opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
