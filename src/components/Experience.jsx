// src/components/Experience.jsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase, FiBook, FiCalendar, FiMapPin } from 'react-icons/fi'
import { experience } from '../data/portfolioData'

const Experience = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section-padding"
      style={{ background: 'var(--bg-primary)' }}>
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="section-subtitle mb-3">My Journey</p>
          <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>
            Experience &{' '}
            <span className="gradient-text">Education</span>
          </h2>
          <div className="divider mt-6 max-w-xs mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <motion.div
            className="absolute left-6 top-0 bottom-0 w-px md:left-1/2 md:-translate-x-1/2"
            style={{ background: 'linear-gradient(180deg, var(--accent-cyan), var(--accent-blue), rgba(0,0,0,0) 100%)' }}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              transformOrigin: 'top',
              background: inView
                ? 'linear-gradient(180deg, var(--accent-cyan), rgba(0,102,255,0.5), rgba(0,0,0,0))'
                : undefined,
              left: '24px',
            }}
          />

          <div className="flex flex-col gap-8 pl-14 md:pl-0">
            {experience.map((item, i) => {
              const isWork = item.type === 'work'
              const Icon = isWork ? FiBriefcase : FiBook
              const isLeft = i % 2 === 0

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative md:w-[46%] ${isLeft ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'}`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute -left-9 top-4 w-5 h-5 rounded-full flex items-center justify-center md:left-auto"
                    style={{
                      [isLeft ? 'right' : 'left']: '-2.6rem',
                      background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
                      boxShadow: '0 0 0 4px rgba(0,212,255,0.15)',
                      position: 'absolute',
                      top: '1.25rem',
                    }}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.15, type: 'spring', stiffness: 300 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </motion.div>

                  {/* Card */}
                  <div
                    className="glass p-5 rounded-2xl group"
                    style={{ borderLeft: `3px solid ${isWork ? 'var(--accent-cyan)' : 'var(--accent-purple)'}` }}
                  >
                    {/* Type Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center"
                        style={{
                          background: isWork ? 'rgba(0,212,255,0.1)' : 'rgba(124,58,237,0.1)',
                          border: `1px solid ${isWork ? 'rgba(0,212,255,0.25)' : 'rgba(124,58,237,0.25)'}`
                        }}
                      >
                        <Icon size={13} style={{ color: isWork ? 'var(--accent-cyan)' : 'var(--accent-purple)' }} />
                      </div>
                      <span
                        className="text-xs font-mono font-medium"
                        style={{ color: isWork ? 'var(--accent-cyan)' : 'var(--accent-purple)' }}
                      >
                        {isWork ? 'Work' : 'Education'}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-base mb-1"
                      style={{ color: 'var(--text-primary)' }}>
                      {item.role}
                    </h3>
                    <p className="text-sm font-semibold mb-2"
                      style={{ color: isWork ? 'var(--accent-cyan)' : 'var(--accent-purple)' }}>
                      {item.company}
                    </p>

                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center gap-1.5 text-xs font-mono"
                        style={{ color: 'var(--text-muted)' }}>
                        <FiCalendar size={11} />
                        {item.period}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed mb-4"
                      style={{ color: 'var(--text-secondary)' }}>
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map(tag => (
                        <span key={tag} className="tech-badge" style={{
                          ...(isWork ? {} : {
                            background: 'rgba(124,58,237,0.08)',
                            borderColor: 'rgba(124,58,237,0.25)',
                            color: 'var(--accent-purple)'
                          })
                        }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
