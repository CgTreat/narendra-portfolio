import './ProfileSection.css'

function ProfileSection() {
  return (
    <section className="profile-section">
      <div className="profile-container">
        <div className="profile-image-wrapper">
          <div className="profile-image">
            <div className="profile-placeholder">
              <span className="profile-initials">NK</span>
            </div>
            {/* Replace the placeholder with an actual image:
                <img src="/path/to/your/photo.jpg" alt="Narendra Keshkar" />
            */}
          </div>
        </div>
        
        <div className="profile-info">
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