import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Projects.css'

gsap.registerPlugin(ScrollTrigger)

function Projects() {
  const sectionRef = useRef(null)
  const projectsRef = useRef(null)

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A comprehensive e-commerce design system built from scratch for a multi-vendor marketplace. Cart abandonment fell 40%, checkout completion rose 35%, average session time up 45%. The system scales across web and mobile.',
      metrics: ['50K+ users', '4.6★ rating', '40% ↓ cart abandonment'],
      link: '#'
    },
    {
      title: 'SaaS Dashboard',
      description: 'Enterprise dashboard designed for data visualization and workflow management. With 10K+ active users and industry-leading satisfaction scores, we built analytics, reporting, team collaboration, and a complete design system.',
      metrics: ['10K+ active users', 'Top rated in category', 'Fastest growing SaaS in 2025'],
      link: '#'
    },
    {
      title: 'Mobile Banking App',
      description: 'A modern banking experience designed for speed, security, and trust. Reduced transaction time by 50%, increased feature adoption by 60%, and maintained 4.8★ rating across 100K+ downloads.',
      metrics: ['100K+ downloads', '4.8★ rating', '50% faster transactions'],
      link: '#'
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = projectsRef.current.children
      
      Array.from(cards).forEach((card, index) => {
        // 3D entrance animation
        gsap.from(card, {
          opacity: 0,
          rotationX: 45,
          rotationY: index % 2 === 0 ? -15 : 15,
          z: -300,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 45%',
            scrub: 1,
          },
        })

        // Parallax depth effect
        gsap.to(card, {
          y: -80 * (index + 1) * 0.5,
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
    <section id="work" className="projects" ref={sectionRef}>
      <div className="section-label">
        <span className="section-number">(02)</span>
        <span className="section-title">WHAT I HAVE BUILT</span>
      </div>
      
      <h2 className="section-heading">
        <div>Work that held</div>
        <div>at scale</div>
      </h2>

      <div className="projects-intro">
        <p className="intro-text">
          A small selection from sixteen years. Each one represents a different answer to the same question — what does design leadership actually deliver?
        </p>
      </div>

      <div className="projects-grid" ref={projectsRef}>
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="card-inner">
              <h4 className="project-title">{project.title}</h4>
              <p className="project-description">{project.description}</p>
              <div className="project-metrics">
                {project.metrics.map((metric, metricIndex) => (
                  <span key={metricIndex} className="metric">{metric}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">Read the case study →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects