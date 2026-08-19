import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './GlassCard.css'

gsap.registerPlugin(ScrollTrigger)

function GlassCard({ children, className = '', delay = 0 }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.9,
        duration: 1,
        delay: delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
      })
    }, cardRef)

    return () => ctx.revert()
  }, [delay])

  return (
    <div ref={cardRef} className={`glass-card ${className}`}>
      <div className="glass-card-inner">
        <div className="glass-shimmer"></div>
        <div className="glass-content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default GlassCard