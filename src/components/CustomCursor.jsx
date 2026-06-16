import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const canvasRef = useRef(null)
  const trail = useRef([])
  const mouse = useRef({ x: -100, y: -100 })
  const raf = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      trail.current.push({ x: e.clientX, y: e.clientY, alpha: 1 })
      if (trail.current.length > 30) trail.current.shift()
    }
    window.addEventListener('mousemove', onMove)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < trail.current.length; i++) {
        const point = trail.current[i]
        point.alpha -= 0.035
        if (point.alpha <= 0) {
          trail.current.splice(i, 1)
          i--
          continue
        }
        ctx.beginPath()
        ctx.arc(point.x, point.y, 4 * point.alpha, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(127, 119, 221, ${point.alpha * 0.6})`
        ctx.fill()
      }

      const { x, y } = mouse.current
      ctx.beginPath()
      ctx.arc(x, y, 6, 0, Math.PI * 2)
      ctx.fillStyle = '#7F77DD'
      ctx.fill()

      raf.current = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
    />
  )
}
