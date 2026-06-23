// src/components/Certifications.jsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiAward, FiExternalLink, FiCalendar } from 'react-icons/fi'
import { certifications } from '../data/portfolioData'

const colorMap = {
  cyan: { bg: 'rgba(0,212,255,0.1)', border: 'rgba(0,212,255,0.25)', text: '#00d4ff', glow: 'rgba(0,212,255,0.2)' },
  blue: { bg: 'rgba(0,102,255,0.1)', border: 'rgba(0,102,255,0.25)', text: '#0066ff', glow: 'rgba(0,102,255,0.2)' },
  purple: { bg: 'rgba(124,58,237,0.1)', border: 'rgba(124,58,237,0.25)', text: '#7c3aed', glow: 'rgba(124,58,237,0.2)' },
  emerald: { bg: 'rgba(16,217,138,0.1)', border: 'rgba(16,217,138,0.25)', text: '#10d98a', glow: 'rgba(16,217,138,0.2)' },
}

const Certifications = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certifications" className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="section-subtitle mb-3">Credentials</p>
          <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>
            My <span className="gradient-text">Certifications</span>
          </h2>
          <div className="divider mt-6 max-w-xs mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => {
            const colors = colorMap[cert.color] || colorMap.cyan
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass p-5 rounded-2xl group relative overflow-hidden"
                whileHover={{
                  y: -6,
                  boxShadow: `0 25px 50px rgba(0,0,0,0.4), 0 0 30px ${colors.glow}`
                }}
                transition={{ duration: 0.3 }}
              >
                {/* BG glow */}
                <div
                  className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${colors.text} 0%, transparent 70%)` }}
                />

                {/* Award Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
                >
                  <FiAward size={22} style={{ color: colors.text }} />
                </div>

                <h3 className="font-display font-bold text-sm leading-tight mb-1.5"
                  style={{ color: 'var(--text-primary)' }}>
                  {cert.title}
                </h3>

                <p className="text-xs font-medium mb-3"
                  style={{ color: colors.text }}>
                  {cert.organization}
                </p>

                <div className="flex items-center gap-1.5 mb-4"
                  style={{ color: 'var(--text-muted)' }}>
                  <FiCalendar size={10} />
                  <span className="text-xs font-mono">{cert.date}</span>
                </div>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-medium transition-all"
                  style={{ color: colors.text }}
                >
                  <FiExternalLink size={12} />
                  Verify Certificate
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Certifications
