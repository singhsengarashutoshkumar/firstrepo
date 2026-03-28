import React from 'react';
import { motion } from 'motion/react';
import { Zap } from 'lucide-react';
import { portfolioData } from '../constants';

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden pattern-bg">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-xs uppercase tracking-[0.4em] text-slayer-red font-bold mb-4 glow-red flex items-center gap-2">
            <Zap size={14} /> Mastery
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase">
            Techniques <span className="text-slayer-purple glow-purple">&</span> Skills
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
          {portfolioData.skills.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="space-y-8"
            >
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-400 dark:text-zinc-500 mb-8 border-l-4 border-slayer-red pl-4">
                {category.category}
              </h3>

              <div className="space-y-8">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-zinc-700 dark:text-zinc-300 font-bold tracking-widest uppercase group-hover:text-slayer-red transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] text-zinc-400 font-mono font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-zinc-200 dark:bg-zinc-800/50 w-full rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-slayer-red to-slayer-purple relative shadow-[0_0_15px_rgba(255,0,60,0.5)]"
                      >
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.4)_50%,transparent_100%)] animate-[shimmer_2s_infinite]" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
