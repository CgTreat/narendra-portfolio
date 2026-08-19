import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GlassCard from './GlassCard'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

function About() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)

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

      <div className="principles">
        <GlassCard delay={0}>
          <div className="principle-number">I</div>
          <h6 className="principle-title">The invisible inertia.</h6>
          <p className="principle-text">
            Smart leaders fail not from lack of sight — but from inertia. I've sat in those rooms. Seeing it is not enough. Someone has to move.
          </p>
        </GlassCard>

        <GlassCard delay={0.2}>
          <div className="principle-number">II</div>
          <h6 className="principle-title">The problem is never the problem</h6>
          <p className="principle-text">
            The real leverage is five steps back. Designers who think laterally are worth ten who think vertically.
          </p>
        </GlassCard>

        <GlassCard delay={0.4}>
          <div className="principle-number">III</div>
          <h6 className="principle-title">A creative with business perspective is leverage. Rare and uncomfortable.</h6>
          <p className="principle-text">
            Most organisations say they want strategic thinking. Few are ready for what it actually changes.
          </p>
        </GlassCard>
      </div>
    </section>
  )
}

export default About