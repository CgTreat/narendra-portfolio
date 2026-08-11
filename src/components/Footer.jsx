import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  const footerRef = useRef(null)
  const taglineRef = useRef(null)
  const copyrightRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(taglineRef.current, {
        opacity: 0,
        y: 30,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
      })

      gsap.from(copyrightRef.current, {
        opacity: 0,
        y: 20,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-content">
        <div className="footer-tagline" ref={taglineRef}>Clarity is the rarest deliverable.</div>
        <div className="footer-copyright" ref={copyrightRef}>
          © {currentYear} · NARENDRA KESHKAR · CRAFTED WITH INTENT
        </div>
      </div>
    </footer>
  )
}

export default Footer