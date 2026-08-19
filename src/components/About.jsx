import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

function About() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const principlesRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D rotation effect on heading
      gsap.from(headingRef.current.children, {
        opacity: 0,
        rotationX: -90,
        transformOrigin: 'top center',
        stagger: 0.2,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'top 30%',
          scrub: 1,
        },
      })

      // 3D perspective cards
      const principles = principlesRef.current.children
      Array.from(principles).forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          rotationY: index % 2 === 0 ? -45 : 45,
          z: -200,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 40%',
            scrub: 1,
          },
        })

        // Parallax effect
        gsap.to(card, {
          y: -50 * (index + 1),
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2,
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="perspective" className="about" ref={sectionRef}>
      <div className="section-label">
        <span className="section-number">(01)</span>
        <span className="section-title">PERSPECTIVE</span>
      </div>
      
      <h2 className="section-heading" ref={headingRef}>
        <div>From chaos</div>
        <div>to clarity</div>
      </h2>

      <div className="about-intro">
        <p className="intro-text">
          Every journey begins in chaos. The ones that end well share one thing - someone fought for clarity before momentum made it impossible to stop and ask why.
        </p>
      </div>

      <div className="principles" ref={principlesRef}>
        <div className="principle">
          <div className="principle-number">I</div>
          <h6 className="principle-title">The invisible inertia.</h6>
          <p className="principle-text">
            Smart leaders fail not from lack of sight — but from inertia. I've sat in those rooms. Seeing it is not enough. Someone has to move.
          </p>
        </div>

        <div className="principle">
          <div className="principle-number">II</div>
          <h6 className="principle-title">The problem is never the problem</h6>
          <p className="principle-text">
            The real leverage is five steps back. Designers who think laterally are worth ten who think vertically.
          </p>
        </div>

        <div className="principle">
          <div className="principle-number">III</div>
          <h6 className="principle-title">A creative with business perspective is leverage. Rare and uncomfortable.</h6>
          <p className="principle-text">
            Most organisations say they want strategic thinking. Few are ready for what it actually changes.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About