import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Hero.css'

function Hero() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const nameRefs = useRef([])
  const taglineRef = useRef(null)
  const locationRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation on load
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
      })
      .from(nameRefs.current, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        stagger: 0.1,
      }, '-=0.7')
      .from(taglineRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
      }, '-=0.8')
      .from(locationRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
      }, '-=0.6')

      // Parallax effect on scroll
      nameRefs.current.forEach((el, index) => {
        gsap.to(el, {
          y: -50 * (index + 1),
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        })
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-content">
        <div className="hero-subtitle" ref={titleRef}>(PORTFOLIO — 2009 / 2026)</div>
        <h1 className="hero-name">
          <div className="name-line" ref={el => nameRefs.current[0] = el}>Narendra</div>
          <div className="name-line" ref={el => nameRefs.current[1] = el}>Keshkar</div>
        </h1>
        <h2 className="hero-tagline" ref={taglineRef}>Designing clarity for complex products</h2>
        <div className="hero-location" ref={locationRef}>MUMBAI · 19.07°N / 72.87°E</div>
      </div>
    </section>
  )
}

export default Hero