import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ProfileSection.css'

gsap.registerPlugin(ScrollTrigger)

function ProfileSection() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const infoRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate on scroll
      gsap.from(imageRef.current, {
        opacity: 0,
        x: -100,
        scale: 0.8,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 30%',
          scrub: 1,
        },
      })

      gsap.from(infoRef.current.children, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 30%',
          scrub: 1,
        },
      })

      // Parallax effect on image
      gsap.to(imageRef.current, {
        y: -30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="profile-section" ref={sectionRef}>
      <div className="profile-container">
        <div className="profile-image-wrapper" ref={imageRef}>
          <div className="profile-image">
            {/* Placeholder - Replace with your actual photo */}
            <div className="profile-placeholder">
              <span className="profile-initials">NK</span>
            </div>
            {/* To use your photo, uncomment below and add your image to /public folder:
                <img src="/profile.jpg" alt="Narendra Keshkar" />
                Then comment out the profile-placeholder div above
            */}
          </div>
          <div className="image-border"></div>
        </div>
        
        <div className="profile-info" ref={infoRef}>
          <h1 className="profile-name">Narendra Keshkar</h1>
          <h2 className="profile-title">MUMBAI / IN</h2>
          <p className="profile-description">
            A creative director operating under the title Art Director, sixteen years making quality inevitable at scale.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProfileSection