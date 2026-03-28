import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../constants';

export default function Blog() {
  return (
    <section id="blog" className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-20">
          <div className="text-xs uppercase tracking-[0.4em] text-japan-red font-medium mb-8">
            Notes
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-zinc-900 dark:text-white tracking-wide">
            Reflections on Learning
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {portfolioData.blogPosts.map((post, idx) => (
            <motion.a
              key={post.title}
              href={post.link}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group block"
            >
              <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-4">{post.date} — {post.readTime}</div>
              <h3 className="text-lg font-light text-zinc-900 dark:text-white mb-4 group-hover:text-japan-red transition-colors tracking-wide">
                {post.title}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light leading-loose">
                {post.excerpt}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
