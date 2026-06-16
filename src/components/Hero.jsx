import { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

function Typewriter({ text, delay = 0 }) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!started) return
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1))
      i++
      if (i >= text.length) clearInterval(interval)
    }, 50)
    return () => clearInterval(interval)
  }, [started, text])

  return (
    <span className="font-mono text-sm md:text-base text-purple-accent/70">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  )
}

function CountUp({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * end))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref} className="font-mono text-2xl md:text-3xl font-bold text-white">
      {count}{suffix}
    </span>
  )
}

function RepulsiveWord({ children, className }) {
  const ref = useRef(null)
  const offset = useRef({ x: 0, y: 0 })
  const mouse = useRef({ x: -1000, y: -1000 })
  const raf = useRef(null)

  const update = useCallback(() => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2 - offset.current.x
    const cy = rect.top + rect.height / 2 - offset.current.y
    const dx = mouse.current.x - cx
    const dy = mouse.current.y - cy
    const dist = Math.hypot(dx, dy)

    if (dist < 120) {
      const force = (1 - dist / 120) * 25
      offset.current.x = -(dx / dist) * force
      offset.current.y = -(dy / dist) * force
    } else {
      offset.current.x *= 0.85
      offset.current.y *= 0.85
      if (Math.abs(offset.current.x) < 0.1) offset.current.x = 0
      if (Math.abs(offset.current.y) < 0.1) offset.current.y = 0
    }

    el.style.transform = `translate(${offset.current.x}px, ${offset.current.y}px)`
    raf.current = requestAnimationFrame(update)
  }, [])

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(update)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [update])

  return (
    <span
      ref={ref}
      className={className}
      style={{
        display: 'inline-block',
        transition: 'transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        willChange: 'transform',
      }}
    >
      {children}
    </span>
  )
}

function GlitchText({ children }) {
  const [glitching, setGlitching] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitching(true)
      setTimeout(() => setGlitching(false), 300)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className={`relative ${glitching ? 'glitch-active' : ''}`}>
      {children}
      {glitching && (
        <>
          <span
            className="absolute inset-0 text-purple-accent"
            style={{
              clipPath: 'inset(20% 0 50% 0)',
              transform: 'translate(-2px, 0)',
            }}
          >
            {children}
          </span>
          <span
            className="absolute inset-0 text-purple-accent"
            style={{
              clipPath: 'inset(60% 0 10% 0)',
              transform: 'translate(2px, 0)',
            }}
          >
            {children}
          </span>
        </>
      )}
    </span>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 z-10">
      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <Typewriter
            text="CS + Econ · Columbia University · Class of 2027"
            delay={800}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-4"
        >
          <RepulsiveWord className="text-white">Thuy-Vy&nbsp;</RepulsiveWord>
          <RepulsiveWord>
            <GlitchText>
              <span className="text-purple-accent">Tran.</span>
            </GlitchText>
          </RepulsiveWord>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10"
          style={{ color: '#222' }}
        >
          Software Engineer.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-purple-accent text-white font-semibold rounded-lg hover:bg-purple-accent/90 transition-colors"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:border-purple-accent/50 hover:text-purple-accent transition-colors"
          >
            Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-8 flex items-center gap-2"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
        </span>
        <span className="text-sm text-gray-400 font-mono">
          Available · Summer 2026
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 right-8 flex gap-8"
      >
        {[
          { end: 4, label: 'Roles' },
          { end: 7, label: 'Projects' },
          { end: 100, label: 'Users', suffix: '+' },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <CountUp end={stat.end} suffix={stat.suffix} />
            <div className="text-xs text-gray-500 font-mono mt-1">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
