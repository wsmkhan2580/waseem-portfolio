// src/components/ScrollProgress.jsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0)
  const [showBack, setShowBack] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (scrolled / total) * 100 : 0)
      setShowBack(scrolled > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        style={{ width: `${progress}%` }}
        className="fixed top-0 left-0 h-[2px] z-[9999] transition-none"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #00d4ff, #0066ff, #7c3aed)',
          height: '2px',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9999,
          transition: 'width 0.1s linear'
        }}
      />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBack && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-xl flex items-center justify-center cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #00d4ff, #0066ff)',
              boxShadow: '0 8px 25px rgba(0, 102, 255, 0.4)'
            }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <FiArrowUp size={18} color="#fff" strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

export default ScrollProgress
