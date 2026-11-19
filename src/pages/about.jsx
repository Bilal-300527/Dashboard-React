import "../css/about.css";

const About = () => {
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
          <a href="/about" className="active">
            ◎ About Us
          </a>
          <a href="/contact">✉ Contact</a>
        </nav>

        <div className="sidebar-bottom">
          <a href="#">⚙ Settings</a>
          <a href="#">↪ Logout</a>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <h3>About Us</h3>
            <p>Learn more about our company.</p>
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
          <div className="about-hero">
            <span className="about-tag">WHO WE ARE</span>
            <h1>We Build Creative Digital Experiences</h1>
            <p>
              MyStudio is a creative digital platform focused on providing
              modern, innovative and professional solutions to help businesses
              grow.
            </p>
            <button className="about-btn">Explore More →</button>
          </div>

          <div className="about-stats">
            <div className="about-stat">
              <h2>5+</h2>
              <p>Years Experience</p>
            </div>
            <div className="about-stat">
              <h2>120+</h2>
              <p>Happy Clients</p>
            </div>
            <div className="about-stat">
              <h2>250+</h2>
              <p>Projects Completed</p>
            </div>
            <div className="about-stat">
              <h2>15+</h2>
              <p>Team Members</p>
            </div>
          </div>

          <div className="about-content">
            <div className="about-text">
              <span className="about-tag">OUR STORY</span>
              <h2>Turning Ideas Into Reality</h2>
              <p>
                We believe every great business starts with a great idea. Our
                mission is to transform those ideas into meaningful digital
                experiences.
              </p>
              <p>
                Our team works with creativity, dedication and innovation to
                deliver high-quality solutions.
              </p>
            </div>

            <div className="about-mission">
              <div className="mission-icon">✦</div>
              <h3>Our Mission</h3>
              <p>
                To deliver creative and reliable digital solutions that help
                businesses achieve their goals.
              </p>
            </div>

            <div className="about-mission">
              <div className="mission-icon">◎</div>
              <h3>Our Vision</h3>
              <p>
                To become a trusted digital partner through innovation, quality
                and customer satisfaction.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
