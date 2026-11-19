import "../css/home.css";

const Home = () => {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <span className="logo-icon">M</span>
          <h2>MyStudio</h2>
        </div>

        <p className="menu-title">MAIN MENU</p>

        <nav className="side-menu">
          <a href="/" className="active">
            ▦ Dashboard
          </a>
          <a href="/service">◈ Services</a>
          <a href="/about">◎ About Us</a>
          <a href="/contact">✉ Contact</a>
        </nav>

        <div className="sidebar-bottom">
          <a href="#">⚙ Settings</a>
          <a href="#">↪ Logout</a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Topbar */}
        <header className="topbar">
          <div>
            <h3>Dashboard</h3>
            <p>Welcome back! Here's your overview.</p>
          </div>

          <div className="top-actions">
            <span className="notification">♧</span>
            <div className="profile">
              <div className="avatar">B</div>
              <div>
                <h4>Bilal</h4>
                <small>Administrator</small>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Body */}
        <section className="dashboard-body">
          <div className="welcome">
            <div>
              <h1>Welcome Back, Bilal! 👋</h1>
              <p>Here's what's happening with your business today.</p>
            </div>
            <button className="add-btn">+ Add New</button>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon purple">◈</div>
              <p>Total Services</p>
              <h2>24</h2>
              <small>+12% from last month</small>
            </div>

            <div className="stat-card">
              <div className="stat-icon pink">♧</div>
              <p>Total Projects</p>
              <h2>18</h2>
              <small>+8% from last month</small>
            </div>

            <div className="stat-card">
              <div className="stat-icon blue">♙</div>
              <p>New Clients</p>
              <h2>32</h2>
              <small>+15% from last month</small>
            </div>

            <div className="stat-card">
              <div className="stat-icon green">↗</div>
              <p>Completed</p>
              <h2>16</h2>
              <small>+10% from last month</small>
            </div>
          </div>

          {/* Content Sections */}
          <div className="content-grid">
            <div className="panel overview">
              <div className="panel-heading">
                <h3>Business Overview</h3>
                <span>Monthly</span>
              </div>

              <div className="chart-placeholder">
                <div className="chart-bars">
                  {[45, 70, 55, 85, 60, 95, 75, 100, 65, 80, 55, 90].map(
                    (height, i) => (
                      <div
                        key={i}
                        className="bar"
                        style={{ height: `${height}%` }}
                      />
                    ),
                  )}
                </div>
                <div className="chart-labels">
                  {[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ].map((month) => (
                    <span key={month}>{month}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="panel activity">
              <h3>Recent Activity</h3>

              <div className="activity-item">
                <span className="activity-dot purple-dot"></span>
                <div>
                  <h4>New project added</h4>
                  <p>Website Design Project</p>
                  <small>2 hours ago</small>
                </div>
              </div>

              <div className="activity-item">
                <span className="activity-dot pink-dot"></span>
                <div>
                  <h4>New client registered</h4>
                  <p>Sarah Johnson</p>
                  <small>5 hours ago</small>
                </div>
              </div>

              <div className="activity-item">
                <span className="activity-dot green-dot"></span>
                <div>
                  <h4>Project completed</h4>
                  <p>Brand Identity Design</p>
                  <small>Yesterday</small>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
