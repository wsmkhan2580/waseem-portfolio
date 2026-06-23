// src/components/Footer.jsx
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import { personalInfo } from '../data/portfolioData'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: FiGithub, href: personalInfo.social.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
  { icon: FiMail, href: personalInfo.social.email, label: 'Email' },
  { icon: SiLeetcode, href: personalInfo.social.leetcode, label: 'LeetCode' },
]

const Footer = () => {
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-glass)' }}>
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <a
              href="#home"
              onClick={() => handleNav('#home')}
              className="font-display font-bold text-2xl cursor-pointer inline-block mb-3"
            >
              <span className="gradient-text">W</span>
              <span style={{ color: 'var(--text-primary)' }}>aseem</span>
              <span style={{ color: 'var(--accent-cyan)' }} className="font-mono">.</span>
            </a>
            <p className="text-sm leading-relaxed max-w-[220px]" style={{ color: 'var(--text-secondary)' }}>
              Full Stack Developer crafting beautiful, performant web experiences.
            </p>
            <div className="flex gap-3 mt-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={label}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4"
              style={{ color: 'var(--text-primary)' }}>Quick Links</h4>
            <div className="flex flex-col gap-2">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                  className="text-sm transition-colors cursor-pointer"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent-cyan)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4"
              style={{ color: 'var(--text-primary)' }}>Contact</h4>
            <div className="flex flex-col gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <a href={`mailto:${personalInfo.email}`}
                className="hover:text-cyan-400 transition-colors">{personalInfo.email}</a>
              <span>{personalInfo.location}</span>
              <span className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs" style={{ color: '#10d98a' }}>Available for work</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Waseem. All rights reserved.
          </p>
          <p className="text-xs flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
            Built with
            <FiHeart size={11} style={{ color: '#ff6b6b' }} />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
