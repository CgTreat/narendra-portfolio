import './About.css'

function About() {
  return (
    <section id="perspective" className="about">
      <div className="section-label">
        <span className="section-number">(01)</span>
        <span className="section-title">PERSPECTIVE</span>
      </div>
      
      <h2 className="section-heading">
        <div>From chaos</div>
        <div>to clarity</div>
      </h2>

      <div className="about-intro">
        <p className="intro-text">
          Every journey begins in chaos. The ones that end well share one thing - someone fought for clarity before momentum made it impossible to stop and ask why.
        </p>
      </div>

      <div className="principles">
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