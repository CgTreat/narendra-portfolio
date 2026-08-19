import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Cursor3D.css'

function Cursor3D() {
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      // Smooth follow with delay
      cursorX += (mouseX - cursorX) * 0.15
      cursorY += (mouseY - cursorY) * 0.15

      gsap.set(cursor, {
        x: cursorX,
        y: cursorY,
      })

      gsap.set(cursorDot, {
        x: mouseX,
        y: mouseY,
      })

      requestAnimationFrame(animate)
    }

    const handleMouseEnterLink = () => {
      gsap.to(cursor, {
        scale: 1.5,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const handleMouseLeaveLink = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove)
    const links = document.querySelectorAll('a, button, .project-card, .principle')
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnterLink)
      link.addEventListener('mouseleave', handleMouseLeaveLink)
    })

    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnterLink)
        link.removeEventListener('mouseleave', handleMouseLeaveLink)
      })
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor-3d">
        <div className="cursor-inner"></div>
      </div>
      <div ref={cursorDotRef} className="cursor-dot"></div>
    </>
  )
}

export default Cursor3D