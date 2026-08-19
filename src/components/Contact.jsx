import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Contact.css'

gsap.registerPlugin(ScrollTrigger)

function Contact() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D entrance from bottom
      gsap.from(contentRef.current, {
        opacity: 0,
        rotationX: 45,
        z: -200,
        y: 100,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 30%',
          scrub: 1,
        },
      })

      // Animate individual elements
      const elements = contentRef.current.querySelectorAll('.contact-intro, .building-list, .location-info, .contact-methods')
      gsap.from(elements, {
        opacity: 0,
        y: 40,
        rotationX: 20,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 70%',
          end: 'top 40%',
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="section-label">
        <span className="section-number">(03)</span>
        <span className="section-title">CONTACT</span>
      </div>
      
      <h2 className="section-heading">
        <div>I work with teams that need</div>
        <div>clarity at scale.</div>
      </h2>

      <div className="contact-content" ref={contentRef}>
        <div className="contact-info">
          <p className="contact-intro">If you're building:</p>
          <ul className="building-list">
            <li>A zero-to-one product</li>
            <li>A design system that must scale</li>
            <li>A product that needs design leadership</li>
          </ul>
          
          <div className="location-info">
            <div className="location-label">/BASED</div>
            <div className="location-text">Mumbai · Open to Dubai, UK, US</div>
          </div>

          <div className="contact-methods">
            <p className="contact-method-intro">Let's connect on LinkedIn first.</p>
            <a href="https://in.linkedin.com/in/narendrakeshkar" target="_blank" rel="noopener noreferrer" className="contact-link">
              Linkedin
            </a>
            
            <p className="contact-method-intro" style={{marginTop: '2rem'}}>Or reach me directly</p>
            <a href="mailto:hello@narendrakeshkar.com" className="contact-link">
              hello@narendrakeshkar.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact