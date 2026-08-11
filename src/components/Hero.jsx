import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Narendra Keshkar</span>
        </h1>
        <p className="hero-subtitle">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
        <p className="hero-description">
          I create beautiful, functional, and user-friendly web applications.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  )
}

export default Hero