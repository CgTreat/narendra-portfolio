import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <a href="#home" className="logo">
          <h4>Narendra Keshkar</h4>
        </a>
        <nav className="nav">
          <a href="#perspective">
            <span className="nav-number">01</span>
            <span className="nav-text">PERSPECTIVE</span>
          </a>
          <a href="#work">
            <span className="nav-number">02</span>
            <span className="nav-text">WORK</span>
          </a>
          <a href="#contact">
            <span className="nav-number">03</span>
            <span className="nav-text">CONTACT</span>
          </a>
          <a href="https://www.linkedin.com/in/narendrakeshkar/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
            Linkedin
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header