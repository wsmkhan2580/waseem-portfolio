// src/components/Contact.jsx
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FiMail, FiPhone, FiMapPin, FiSend,
  FiGithub, FiLinkedin, FiTwitter, FiCheckCircle
} from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import { personalInfo } from '../data/portfolioData'

const Contact = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    // Simulate sending — wire up EmailJS or your preferred service
    await new Promise(r => setTimeout(r, 1500))
    setSending(false)
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: FiPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: FiMapPin, label: 'Location', value: personalInfo.location, href: '#' },
  ]

  const socials = [
    { icon: FiGithub, href: personalInfo.social.github, label: 'GitHub', color: '#fff' },
    { icon: FiLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn', color: '#0077b5' },
    { icon: FiMail, href: personalInfo.social.email, label: 'Email', color: '#00d4ff' },
    { icon: SiLeetcode, href: personalInfo.social.leetcode, label: 'LeetCode', color: '#ffa116' },
  ]

  return (
    <section id="contact" className="section-padding"
      style={{ background: 'var(--bg-primary)' }}>
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="section-subtitle mb-3">Let's Talk</p>
          <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="mt-4 text-sm max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Open to internships, full-time roles, freelance projects, and collaboration. Let's build something great together.
          </p>
          <div className="divider mt-6 max-w-xs mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Contact Info Cards */}
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="glass p-4 rounded-2xl flex items-center gap-4 group"
                style={{ textDecoration: 'none' }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.25)' }}>
                  <Icon size={16} style={{ color: 'var(--accent-cyan)' }} />
                </div>
                <div>
                  <p className="text-xs font-mono mb-0.5" style={{ color: 'var(--text-muted)' }}>{label}</p>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{value}</p>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="glass p-5 rounded-2xl">
              <p className="text-xs font-mono mb-4" style={{ color: 'var(--text-muted)' }}>
                // social_links
              </p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                  >
                    <Icon size={17} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="glass p-4 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium" style={{ color: 'var(--accent-emerald)' }}>
                  Available for opportunities
                </span>
              </div>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                Response time: usually within 24 hours
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass-strong p-7 rounded-2xl">
              <h3 className="font-display font-bold text-lg mb-6"
                style={{ color: 'var(--text-primary)' }}>
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Muhammad Waseem"
                      required
                      className="input-glow"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="hello@example.com"
                      required
                      className="input-glow"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Job Opportunity / Project Inquiry / Collaboration"
                    className="input-glow"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity or project..."
                    rows={5}
                    required
                    className="input-glow"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={sending || sent}
                  className="btn-primary w-full justify-center mt-2"
                  whileHover={!sending && !sent ? { scale: 1.02 } : {}}
                  whileTap={!sending && !sent ? { scale: 0.98 } : {}}
                  style={{
                    opacity: sending ? 0.8 : 1,
                    background: sent
                      ? 'linear-gradient(135deg, #10d98a, #00d4ff)'
                      : 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))'
                  }}
                >
                  {sent ? (
                    <>
                      <FiCheckCircle size={16} />
                      Message Sent!
                    </>
                  ) : sending ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
