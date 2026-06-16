import { useEffect, useRef, useState } from 'react'

const KATAKANA = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
const CODE_SYMBOLS = '{}[]()<>;:=/\\|+-*&^%$#@!~`'
const ALL_CHARS = KATAKANA + CODE_SYMBOLS

function generateChars(count) {
  const chars = []
  for (let i = 0; i < count; i++) {
    chars.push({
      char: ALL_CHARS[Math.floor(Math.random() * ALL_CHARS.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 14 + 10,
      opacity: Math.random() * 0.08 + 0.03,
    })
  }
  return chars
}

export default function MatrixBackground() {
  const [chars] = useState(() => generateChars(80))
  const [mouse, setMouse] = useState({ x: -1000, y: -1000 })
  const containerRef = useRef(null)

  useEffect(() => {
    const onMove = (e) => setMouse({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {chars.map((c, i) => {
        const el = containerRef.current
        if (!el) return null
        const absX = (c.x / 100) * window.innerWidth
        const absY = (c.y / 100) * window.innerHeight
        const dist = Math.hypot(mouse.x - absX, mouse.y - absY)
        const lit = dist < 80

        return (
          <span
            key={i}
            className="absolute font-mono select-none transition-all duration-300"
            style={{
              left: `${c.x}%`,
              top: `${c.y}%`,
              fontSize: `${c.size}px`,
              opacity: lit ? 0.7 : c.opacity,
              color: lit ? '#7F77DD' : '#fff',
              textShadow: lit ? '0 0 12px rgba(127,119,221,0.8)' : 'none',
              transform: lit ? 'scale(1.2)' : 'scale(1)',
            }}
          >
            {c.char}
          </span>
        )
      })}
    </div>
  )
}
