// src/components/Hero.jsx
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  FiGithub, FiLinkedin, FiMail, FiArrowDown,
  FiExternalLink, FiDownload
} from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import { personalInfo } from '../data/portfolioData'

// ─── Typing Animation Hook ───
const useTyping = (words, speed = 80, deleteSpeed = 50, pause = 2000) => {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    const delay = isDeleting ? deleteSpeed : speed

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.slice(0, text.length + 1))
        if (text.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pause)
        }
      } else {
        setText(currentWord.slice(0, text.length - 1))
        if (text.length - 1 === 0) {
          setIsDeleting(false)
          setWordIndex((wordIndex + 1) % words.length)
        }
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, speed, deleteSpeed, pause])

  return text
}

const Hero = () => {
  const typedText = useTyping(personalInfo.roles)

  const socials = [
    { icon: FiGithub, href: personalInfo.social.github, label: 'GitHub' },
    { icon: FiLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: FiMail, href: personalInfo.social.email, label: 'Email' },
    { icon: SiLeetcode, href: personalInfo.social.leetcode, label: 'LeetCode' },
  ]

  const stagger = {
    container: {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } }
    },
    item: {
      hidden: { opacity: 0, y: 30 },
      show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden grid-pattern"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Orbs */}
      <div className="orb w-96 h-96 top-[-80px] right-[-80px] opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.3) 0%, transparent 70%)' }} />
      <div className="orb w-80 h-80 bottom-[10%] left-[-60px] opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 70%)' }} />
      <div className="orb w-64 h-64 top-[40%] right-[20%] opacity-15"
        style={{ background: 'radial-gradient(circle, rgba(0,102,255,0.3) 0%, transparent 70%)' }} />

      <div className="container-custom relative z-10 pt-20 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={stagger.container}
            initial="hidden"
            animate="show"
            className="flex flex-col"
          >
            {/* Greeting Tag */}
            <motion.div variants={stagger.item} className="mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium"
                style={{
                  background: 'rgba(0,212,255,0.08)',
                  border: '1px solid rgba(0,212,255,0.25)',
                  color: 'var(--accent-cyan)'
                }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={stagger.item} className="mb-3">
              <p className="section-subtitle mb-3">Hello, World! 👋</p>
              <h1 className="section-title" style={{ color: 'var(--text-primary)' }}>
                I'm{' '}
                <span className="gradient-text">Waseem</span>
              </h1>
            </motion.div>

            {/* Typing Role */}
            <motion.div variants={stagger.item} className="mb-6">
              <div
                className="text-xl sm:text-2xl md:text-3xl font-display font-semibold h-9 flex items-center"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span>{typedText}</span>
                <span className="typing-cursor ml-1" />
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={stagger.item}
              className="text-base sm:text-lg max-w-2xl mb-8 leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {personalInfo.tagline}
              {' '}Focused on the <span style={{ color: 'var(--accent-cyan)' }}>MERN stack</span>,
              {' '}building beautiful interfaces & scalable backends.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={stagger.item} className="flex flex-wrap gap-4 mb-10">
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiExternalLink size={15} />
                View Projects
              </motion.a>
              <motion.a
                href={personalInfo.resumeUrl}
                className="btn-outline"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiDownload size={15} />
                Download Resume
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-outline"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiMail size={15} />
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={stagger.item} className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ scale: 1.12, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon size={17} />
                </motion.a>
              ))}

              <div className="h-px flex-1 max-w-[80px] ml-2"
                style={{ background: 'linear-gradient(90deg, rgba(0,212,255,0.3), transparent)' }} />

              <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                Let's connect
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0"
        style={{ borderTop: '1px solid var(--border-glass)' }}
      >
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x"
            style={{ divideColor: 'var(--border-glass)' }}>
            {[
              { num: '6+', label: 'Projects Built' },
              { num: '2', label: 'Internships' },
              { num: '3rd', label: 'Year BCA' },
              { num: '∞', label: 'Ambition' },
            ].map(({ num, label }) => (
              <div key={label} className="py-4 px-6 text-center"
                style={{ borderRight: '1px solid var(--border-glass)' }}>
                <div className="font-display font-bold text-xl gradient-text">{num}</div>
                <div className="text-xs mt-0.5 font-mono" style={{ color: 'var(--text-muted)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-20 right-8 hidden lg:flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <FiArrowDown size={16} style={{ color: 'var(--accent-cyan)' }} />
        </motion.div>
        <span
          className="text-xs font-mono"
          style={{ color: 'var(--text-muted)', writingMode: 'vertical-rl' }}
        >
          scroll
        </span>
      </motion.div>
    </section>
  )
}

export default Hero
