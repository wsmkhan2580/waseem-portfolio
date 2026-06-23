// src/components/Projects.jsx
import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi'
import { projects } from '../data/portfolioData'

const categories = ['All', 'Full Stack', 'Frontend', 'Backend']

// Placeholder gradient image
const ProjectImage = ({ gradient, title }) => (
  <div
    className={`w-full h-44 rounded-xl flex items-center justify-center relative overflow-hidden bg-gradient-to-br ${gradient}`}
  >
    <div className="absolute inset-0 opacity-30"
      style={{
        backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(0,0,0,0.2) 0%, transparent 50%)',
      }}
    />
    <div className="relative z-10 text-center px-4">
      <div className="text-3xl mb-2">🚀</div>
      <p className="text-xs font-mono opacity-60"
        style={{ color: 'var(--text-primary)' }}>{title}</p>
    </div>
    {/* Grid overlay */}
    <div className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}
    />
  </div>
)

const ProjectCard = ({ project, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
    className="glass project-card rounded-2xl overflow-hidden group"
  >
    {/* Image */}
    <div className="relative overflow-hidden">
      <ProjectImage gradient={project.gradient} title={project.title} />
      {project.featured && (
        <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono"
          style={{
            background: 'rgba(0,212,255,0.9)',
            color: '#050810',
            fontWeight: 600
          }}>
          <FiStar size={10} />
          Featured
        </div>
      )}
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300 
          flex items-end justify-end gap-2 p-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-xl flex items-center justify-center text-white"
          style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}
          onClick={e => e.stopPropagation()}
        >
          <FiGithub size={16} />
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-xl flex items-center justify-center text-white"
          style={{ background: 'rgba(0,212,255,0.5)', backdropFilter: 'blur(8px)' }}
          onClick={e => e.stopPropagation()}
        >
          <FiExternalLink size={16} />
        </a>
      </div>
    </div>

    {/* Content */}
    <div className="p-5">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-display font-bold text-base leading-tight"
          style={{ color: 'var(--text-primary)' }}>
          {project.title}
        </h3>
        <span className="px-2 py-0.5 rounded-md text-xs font-mono flex-shrink-0"
          style={{ background: 'rgba(0,212,255,0.1)', color: 'var(--accent-cyan)' }}>
          {project.category}
        </span>
      </div>

      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map(t => (
          <span key={t} className="tech-badge">{t}</span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-3"
        style={{ borderTop: '1px solid var(--border-glass)' }}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-medium transition-colors"
          style={{ color: 'var(--text-secondary)' }}
        >
          <FiGithub size={13} />
          Code
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-medium"
          style={{ color: 'var(--accent-cyan)' }}
        >
          <FiExternalLink size={13} />
          Live Demo
        </a>
      </div>
    </div>
  </motion.div>
)

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <p className="section-subtitle mb-3">What I've Built</p>
          <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-sm max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Real-world applications built with attention to detail, performance, and user experience.
          </p>
          <div className="divider mt-6 max-w-xs mx-auto" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="px-5 py-2 rounded-xl text-sm font-medium font-mono transition-all"
              style={{
                background: activeFilter === cat
                  ? 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))'
                  : 'var(--bg-card)',
                color: activeFilter === cat ? '#fff' : 'var(--text-secondary)',
                border: activeFilter === cat
                  ? 'none'
                  : '1px solid var(--border-glass)',
                boxShadow: activeFilter === cat
                  ? '0 6px 20px rgba(0,102,255,0.3)'
                  : 'none'
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/waseem"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <FiGithub size={16} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
