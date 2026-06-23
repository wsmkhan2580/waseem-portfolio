// src/components/About.jsx
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCode, FiServer, FiTrendingUp, FiHeart } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  })
}

const highlights = [
  {
    icon: FiCode,
    title: 'Frontend Craft',
    desc: 'React, Tailwind, animations — I care about every pixel and interaction.',
    color: '#00d4ff'
  },
  {
    icon: FiServer,
    title: 'Backend Logic',
    desc: 'Node.js, Express, MongoDB — building APIs and systems that scale.',
    color: '#0066ff'
  },
  {
    icon: FiTrendingUp,
    title: 'Business Mindset',
    desc: 'Running Meta Ads at Rahgir Travel — I understand tech meets business.',
    color: '#7c3aed'
  },
  {
    icon: FiHeart,
    title: 'Passion-Driven',
    desc: 'I build real projects, not just assignments. Code is my craft.',
    color: '#10d98a'
  }
]

const About = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mb-14 text-center"
        >
          <p className="section-subtitle mb-3">Get To Know Me</p>
          <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="divider mt-6 max-w-xs mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Avatar & Info */}
          <div className="flex flex-col gap-6">
            {/* Profile Card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              custom={1}
              className="glass-strong p-8 rounded-2xl relative overflow-hidden"
            >
              {/* BG Decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 opacity-10 pointer-events-none"
                style={{ background: 'radial-gradient(circle, var(--accent-cyan) 0%, transparent 70%)' }} />

              {/* Avatar Placeholder */}
              <div className="flex items-start gap-5 mb-6">
                <motion.div
                  className="w-20 h-20 rounded-2xl flex-shrink-0 flex items-center justify-center relative"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(0,102,255,0.2))',
                    border: '2px solid rgba(0,212,255,0.3)'
                  }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                >
                  <span className="text-4xl">👨‍💻</span>
                </motion.div>
                <div>
                  <h3 className="font-display font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
                    {personalInfo.name}
                  </h3>
                  <p className="text-sm font-mono mt-1" style={{ color: 'var(--accent-cyan)' }}>
                    Full Stack Developer
                  </p>
                  <p className="text-xs mt-1.5" style={{ color: 'var(--text-muted)' }}>
                    📍 {personalInfo.location}
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                I'm a BCA 3rd year student at <span style={{ color: 'var(--accent-cyan)' }}>JMS Group of Institutions, Hapur</span>, simultaneously working as a Full Stack Intern at <span style={{ color: 'var(--accent-cyan)' }}>Prodesk IT</span> and Travel Sales Executive at <span style={{ color: 'var(--accent-cyan)' }}>Rahgir Travel</span>.
              </p>

              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                I specialize in the <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>MERN stack</span> — crafting seamless UIs with React and robust APIs with Node.js. I love bridging technical depth with business understanding.
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                {[
                  { label: 'Degree', val: 'BCA (3rd Year)' },
                  { label: 'Focus', val: 'MERN Stack' },
                  { label: 'Status', val: 'Interning' },
                  { label: 'Goal', val: 'Software Engineer' },
                ].map(({ label, val }) => (
                  <div key={label} className="p-3 rounded-xl"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border-glass)' }}>
                    <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{label}</p>
                    <p className="text-sm font-semibold mt-0.5" style={{ color: 'var(--text-primary)' }}>{val}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Career Goals Card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              custom={2}
              className="glass p-6 rounded-2xl"
            >
              <h4 className="font-display font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                🎯 Career Goals
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                My goal is to land a Software Engineer role at a top tech company — Google, Microsoft, Amazon, or a high-growth startup. I'm committed to continuous learning, building real projects, and writing clean, scalable code.
              </p>
            </motion.div>
          </div>

          {/* Right — Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                custom={i + 2}
                className="glass p-5 rounded-2xl group cursor-default"
                whileHover={{
                  y: -4,
                  boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 20px ${color}18`
                }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <h4 className="font-display font-semibold text-sm mb-2"
                  style={{ color: 'var(--text-primary)' }}>{title}</h4>
                <p className="text-xs leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}>{desc}</p>
              </motion.div>
            ))}

            {/* Fun Facts */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              custom={6}
              className="sm:col-span-2 glass p-5 rounded-2xl"
            >
              <p className="text-xs font-mono mb-3" style={{ color: 'var(--accent-cyan)' }}>
                // fun_facts.js
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  '☕ Chai-powered coder',
                  '🚀 Ships real projects',
                  '📱 Mobile-first mindset',
                  '🎨 Detail-obsessed',
                  '🤝 Team player',
                  '📈 Growth mindset',
                ].map(fact => (
                  <span
                    key={fact}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium"
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-glass)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {fact}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
