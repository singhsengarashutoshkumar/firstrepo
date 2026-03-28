import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2, Clock } from 'lucide-react';
import { portfolioData } from '../constants';

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-20">
          <div className="text-xs uppercase tracking-[0.4em] text-japan-red font-medium mb-8">
            Certifications
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-zinc-900 dark:text-white tracking-wide">
            Professional Growth
          </h2>
        </div>

        <div className="space-y-12">
          {portfolioData.certifications.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between py-8 border-b border-zinc-200 dark:border-zinc-800"
            >
              <div>
                <h3 className="text-lg font-light text-zinc-900 dark:text-white mb-2 tracking-wide">{cert.name}</h3>
                <p className="text-xs text-zinc-400 uppercase tracking-widest">{cert.issuer}</p>
              </div>
              <div className="mt-4 sm:mt-0 text-right">
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-medium">
                  {cert.status} — {cert.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
