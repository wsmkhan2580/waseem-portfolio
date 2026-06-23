// src/components/Skills.jsx
import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaDatabase, FaGitAlt, FaGithub, FaFire
} from 'react-icons/fa'
import {
  SiTailwindcss, SiMongodb, SiMysql, SiExpress,
  SiVsco, SiPostman, SiFigma, SiVercel
} from 'react-icons/si'
import { skills } from '../data/portfolioData'

const techIcons = {
  html5: { icon: FaHtml5, color: '#e34f26' },
  css3: { icon: FaCss3Alt, color: '#1572b6' },
  js: { icon: FaJs, color: '#f7df1e' },
  react: { icon: FaReact, color: '#61dafb' },
  tailwind: { icon: SiTailwindcss, color: '#38bdf8' },
  node: { icon: FaNodeJs, color: '#68a063' },
  express: { icon: SiExpress, color: '#999' },
  mongo: { icon: SiMongodb, color: '#47a248' },
  mysql: { icon: SiMysql, color: '#4479a1' },
  firebase: { icon: FaFire, color: '#ffca28' },
  git: { icon: FaGitAlt, color: '#f05032' },
  github: { icon: FaGithub, color: '#fff' },
  vscode: { icon: SiVsco, color: '#007acc' },
  postman: { icon: SiPostman, color: '#ff6c37' },
  figma: { icon: SiFigma, color: '#f24e1e' },
  vercel: { icon: SiVercel, color: '#fff' },
  api: { icon: FaDatabase, color: '#00d4ff' },
  auth: { icon: FaDatabase, color: '#7c3aed' },
}

const SkillBar = ({ name, level, icon, inView }) => {
  const IconComp = techIcons[icon]?.icon || FaDatabase
  const iconColor = techIcons[icon]?.color || '#00d4ff'

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <IconComp size={15} color={iconColor} />
          <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{name}</span>
        </div>
        <span className="text-xs font-mono" style={{ color: 'var(--accent-cyan)' }}>{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className={`skill-bar-fill ${inView ? 'animated' : ''}`}
          style={{ '--target': `${level / 100}`, transitionDuration: `${0.8 + (level / 100) * 0.6}s` }}
        />
      </div>
    </div>
  )
}

// Floating tech icon
const FloatingIcon = ({ icon: Icon, color, style }) => (
  <motion.div
    className="absolute w-10 h-10 rounded-xl flex items-center justify-center glass"
    style={style}
    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
    transition={{ repeat: Infinity, duration: 4 + Math.random() * 2, ease: 'easeInOut' }}
  >
    <Icon size={18} color={color} />
  </motion.div>
)

const categoryConfig = {
  frontend: { label: 'Frontend', color: '#00d4ff', emoji: '🎨' },
  backend: { label: 'Backend', color: '#0066ff', emoji: '⚙️' },
  database: { label: 'Database', color: '#7c3aed', emoji: '🗄️' },
  tools: { label: 'Tools & DevOps', color: '#10d98a', emoji: '🛠️' },
}

const Skills = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="section-padding relative overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}>
      {/* Background orbs */}
      <div className="orb w-96 h-96 top-0 left-[-100px] opacity-10"
        style={{ background: 'radial-gradient(circle, rgba(0,102,255,0.5) 0%, transparent 70%)' }} />
      <div className="orb w-64 h-64 bottom-0 right-[-50px] opacity-10"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.5) 0%, transparent 70%)' }} />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="section-subtitle mb-3">What I Work With</p>
          <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <div className="divider mt-6 max-w-xs mx-auto" />
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], catIdx) => {
            const config = categoryConfig[category]
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIdx * 0.1 }}
                className="glass p-6 rounded-2xl"
                whileHover={{
                  boxShadow: `0 20px 50px rgba(0,0,0,0.3), 0 0 30px ${config.color}15`
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-base"
                    style={{ background: `${config.color}15`, border: `1px solid ${config.color}30` }}
                  >
                    {config.emoji}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm"
                      style={{ color: 'var(--text-primary)' }}>{config.label}</h3>
                    <p className="text-xs font-mono" style={{ color: config.color }}>
                      {items.length} technologies
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {items.map((skill) => (
                    <SkillBar key={skill.name} {...skill} inView={inView} />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Floating Tech Icons (decorative) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 relative"
        >
          <div className="text-center mb-8">
            <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
              // technologies I love
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: FaHtml5, color: '#e34f26', label: 'HTML5' },
              { icon: FaCss3Alt, color: '#1572b6', label: 'CSS3' },
              { icon: FaJs, color: '#f7df1e', label: 'JavaScript' },
              { icon: FaReact, color: '#61dafb', label: 'React' },
              { icon: SiTailwindcss, color: '#38bdf8', label: 'Tailwind' },
              { icon: FaNodeJs, color: '#68a063', label: 'Node.js' },
              { icon: SiMongodb, color: '#47a248', label: 'MongoDB' },
              { icon: SiExpress, color: '#999', label: 'Express' },
              { icon: FaGitAlt, color: '#f05032', label: 'Git' },
              { icon: SiVsco, color: '#007acc', label: 'VS Code' },
              { icon: SiPostman, color: '#ff6c37', label: 'Postman' },
              { icon: SiMysql, color: '#4479a1', label: 'MySQL' },
            ].map(({ icon: Icon, color, label }) => (
              <motion.div
                key={label}
                className="flex flex-col items-center gap-2 p-4 rounded-xl group cursor-default"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-glass)',
                  minWidth: 72
                }}
                whileHover={{
                  y: -5,
                  border: `1px solid ${color}40`,
                  boxShadow: `0 10px 25px rgba(0,0,0,0.3), 0 0 15px ${color}20`
                }}
                transition={{ duration: 0.25 }}
              >
                <Icon size={24} color={color} />
                <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
