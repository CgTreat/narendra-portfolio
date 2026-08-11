import { useEffect, useRef } from 'react'
import './AnimatedBackground.css'

function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let time = 0

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Create noise/grain effect
    const createNoise = (ctx, width, height, opacity) => {
      const imageData = ctx.createImageData(width, height)
      const buffer = new Uint32Array(imageData.data.buffer)
      const len = buffer.length

      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.1) {
          const brightness = Math.floor(Math.random() * 255)
          buffer[i] = (opacity << 24) | (brightness << 16) | (brightness << 8) | brightness
        }
      }

      return imageData
    }

    // Floating orbs/particles
    class Orb {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.radius = Math.random() * 150 + 50
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.opacity = Math.random() * 0.03 + 0.01
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < -this.radius || this.x > canvas.width + this.radius) this.vx *= -1
        if (this.y < -this.radius || this.y > canvas.height + this.radius) this.vy *= -1
      }

      draw(ctx) {
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius
        )
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`)
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

        ctx.fillStyle = gradient
        ctx.fillRect(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2)
      }
    }

    // Create orbs
    const orbs = []
    for (let i = 0; i < 3; i++) {
      orbs.push(new Orb())
    }

    // Animation loop
    const animate = () => {
      time += 0.01

      // Clear canvas with slight fade
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw moving orbs
      orbs.forEach(orb => {
        orb.update()
        orb.draw(ctx)
      })

      // Add subtle noise every few frames
      if (Math.floor(time * 60) % 3 === 0) {
        const noise = createNoise(ctx, canvas.width, canvas.height, 5)
        ctx.putImageData(noise, 0, 0)
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="animated-background" />
}

export default AnimatedBackground