import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-tagline">Clarity is the rarest deliverable.</div>
        <div className="footer-copyright">
          © {currentYear} · NARENDRA KESHKAR · CRAFTED WITH INTENT
        </div>
      </div>
    </footer>
  )
}

export default Footer