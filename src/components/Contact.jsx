import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-label">
        <span className="section-number">(03)</span>
        <span className="section-title">CONTACT</span>
      </div>
      
      <h2 className="section-heading">
        <div>I work with teams that need</div>
        <div>clarity at scale.</div>
      </h2>

      <div className="contact-content">
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