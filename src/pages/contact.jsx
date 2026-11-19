import "../css/contact.css";

const Contact = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">
          <span className="logo-icon">M</span>
          <h2>MyStudio</h2>
        </div>

        <p className="menu-title">MAIN MENU</p>

        <nav className="side-menu">
          <a href="/">▦ Dashboard</a>
          <a href="/service">◈ Services</a>
          <a href="/about">◎ About Us</a>
          <a href="/contact" className="active">
            ✉ Contact
          </a>
        </nav>

        <div className="sidebar-bottom">
          <a href="#">⚙ Settings</a>
          <a href="#">↪ Logout</a>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <h3>Contact Us</h3>
            <p>We would love to hear from you.</p>
          </div>

          <div className="top-actions">
            <span className="notification">♧</span>
            <div className="profile">
              <div className="avatar">M</div>
              <div>
                <h4>Mahira</h4>
                <small>Administrator</small>
              </div>
            </div>
          </div>
        </header>

        <section className="dashboard-body">
          <div className="contact-heading">
            <span className="about-tag">GET IN TOUCH</span>
            <h1>Let's Talk About Your Project</h1>
            <p>
              Have questions or need assistance? Send us a message and our team
              will get back to you.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>Feel free to contact us using the information below.</p>

              <div className="contact-item">
                <div className="contact-icon">✉</div>
                <div>
                  <h4>Email Address</h4>
                  <p>hello@mystudio.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">☎</div>
                <div>
                  <h4>Phone Number</h4>
                  <p>+92 300 1234567</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">⌖</div>
                <div>
                  <h4>Our Location</h4>
                  <p>Karachi, Pakistan</p>
                </div>
              </div>

              <div className="contact-social">
                <h4>Follow Us</h4>
                <span>Facebook</span>
                <span>Instagram</span>
                <span>LinkedIn</span>
              </div>
            </div>

            <div className="contact-form-card">
              <h2>Send Us a Message</h2>
              <form>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter your name" />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="Enter your email" />
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" placeholder="Enter subject" />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea rows="5" placeholder="Write your message here..." />
                </div>

                <button type="submit" className="send-btn">
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
