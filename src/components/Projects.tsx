import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Layout } from 'lucide-react';
import { portfolioData } from '../constants';

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative pattern-bg">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="text-xs uppercase tracking-[0.4em] text-slayer-purple font-bold mb-4 glow-purple">
            Missions
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase">
            Featured <span className="text-slayer-red glow-red">Projects</span>
          </h2>
        </motion.div>

        <div className="space-y-32">
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Project Image */}
              <div className="w-full md:w-1/2 group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-slayer-red to-slayer-purple rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <div className="relative aspect-video overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-white/10">
                  <img
                    src={`https://picsum.photos/seed/${project.title}/1000/625?grayscale`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="flex gap-4">
                      {project.github && (
                        <a href={project.github} className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-slayer-red transition-colors">
                          <Github size={20} className="text-white" />
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-slayer-purple transition-colors">
                          <ExternalLink size={20} className="text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-slayer-red font-bold">0{idx + 1}</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-slayer-red/50 to-transparent" />
                </div>
                
                <h3 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight uppercase">
                  {project.title}
                </h3>
                
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 rounded-full group-hover:border-slayer-red transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <a
                    href={project.link || "#"}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-slayer-red hover:text-slayer-purple transition-colors group"
                  >
                    View Mission <Layout size={14} className="group-hover:rotate-12 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
