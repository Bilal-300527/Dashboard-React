import "../css/service.css";

const Service = () => {
  const services = [
    {
      icon: "✦",
      title: "Web Development",
      description:
        "Modern, responsive and professional websites for your business.",
      color: "purple",
    },
    {
      icon: "◈",
      title: "UI/UX Design",
      description:
        "Beautiful and user-friendly designs for better experiences.",
      color: "pink",
    },
    {
      icon: "▣",
      title: "Mobile Development",
      description: "Powerful mobile applications for Android and iOS.",
      color: "blue",
    },
    {
      icon: "⌘",
      title: "Digital Marketing",
      description: "Grow your online presence and reach more customers.",
      color: "green",
    },
    {
      icon: "◇",
      title: "Graphic Design",
      description: "Creative branding, logos and visual content.",
      color: "orange",
    },
    {
      icon: "⚙",
      title: "IT Consulting",
      description: "Professional technology solutions for your business.",
      color: "purple",
    },
  ];

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
          <a href="/service" className="active">
            ◈ Services
          </a>
          <a href="/about">◎ About Us</a>
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
            <h3>Our Services</h3>
            <p>Explore the services we provide.</p>
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
          <div className="service-welcome">
            <div>
              <span className="about-tag">WHAT WE OFFER</span>
              <h1>Our Professional Services</h1>
              <p>
                Discover our creative solutions designed to help your business
                grow and succeed.
              </p>
            </div>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className={`service-icon ${service.color}`}>
                  {service.icon}
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <a href="/contact">Learn More →</a>
              </div>
            ))}
          </div>

          <div className="service-bottom">
            <div>
              <h2>Have a project in mind?</h2>
              <p>Let's work together and bring your ideas to life.</p>
            </div>
            <a href="/contact" className="service-contact-btn">
              Contact Us →
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Service;
