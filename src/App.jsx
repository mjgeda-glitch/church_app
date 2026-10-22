import { useState } from 'react'
import EventCard from './components/EventCard'
import './App.css'


const events = [
  {
    id: 1,
    title: 'Sunday Worship Service',
    date: 'SUN, NOV 01',
    time: '9:00 AM – 11:00 AM',
    description:
      'Join us as we worship God and learn from His Word.',
  },
  {
    id: 2,
    title: 'Bible Study and Prayer',
    date: 'WED, NOV 04',
    time: '7:00 PM – 8:00 PM',
    description:
      'Grow in faith through Scripture, prayer, and fellowship.',
  },
  {
    id: 3,
    title: 'Church Fellowship',
    date: 'SUN, NOV 08',
    time: '1:00 PM – 3:00 PM',
    description:
      'Spend time together and encourage one another in Christ.',
  },
]


function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <header className="navbar">
        <a className="logo" href="#home">
          <span className="logo-mark">JH</span>
          <span>Jesus Our Hope Church</span>
        </a>

        
<button
  className="menu-toggle"
  type="button"
  aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
  aria-expanded={menuOpen}
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? 'Close ✕' : 'Menu ☰'}
</button>

<nav className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
  <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
  <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
  <a href="#sermons" onClick={() => setMenuOpen(false)}>Sermons</a>
  <a href="#events" onClick={() => setMenuOpen(false)}>Events</a>
  <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
</nav>


        <a className="nav-button" href="#visit">
          Plan a Visit
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">
              WELCOME TO OUR CHURCH
            </span>

            <h1>
              Our Hope Is Found
              <br />
              in <span>Jesus Christ.</span>
            </h1>

            <p>
              A community growing in God's Word,
              sharing the gospel, and making disciples
              of Jesus Christ.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#about">
                Discover Our Church
              </a>
              <a className="button-secondary" href="#sermons">
                Explore Sermons →
              </a>
            </div>

            <div className="hero-note">
              <span className="status-dot" />
              Rooted in Scripture. Centered on Christ.
            </div>
          </div>

          <div className="hero-art" aria-label="Church illustration">
            <div className="art-circle" />
            <div className="art-cross">✝</div>
            <div className="art-card">
              <span>OUR FOUNDATION</span>
              <strong>Jesus Christ</strong>
              <small>Our living hope</small>
            </div>
          </div>
        </section>

        <section className="welcome" id="about">
          <span className="section-label">WHO WE ARE</span>
          <h2>A Church Centered on Christ</h2>
          <p>
            We gather to worship God, learn His Word,
            encourage one another, and proclaim the good
            news of Jesus Christ.
          </p>
        </section>

        
<section className="upcoming-events" id="events">
  <div className="events-heading">
    <span className="section-label">BE PART OF OUR COMMUNITY</span>
    <h2>Upcoming Events</h2>
    <p>
      Join us for worship, Bible study, and fellowship.
    </p>
  </div>

  <div className="events-list">
    {events.map((event) => (
      <EventCard
        key={event.id}
        title={event.title}
        date={event.date}
        time={event.time}
        description={event.description}
      />
    ))}
  </div>
</section>


        <section className="feature-grid" id="sermons">
          <article className="feature-card">
            <span className="feature-number">01</span>
            <h3>God's Word</h3>
            <p>
              Growing together through the faithful
              teaching and study of Scripture.
            </p>
          </article>

          <article className="feature-card" id="events">
            <span className="feature-number">02</span>
            <h3>Christian Fellowship</h3>
            <p>
              Encouraging one another in faith,
              love, prayer, and service.
            </p>
          </article>

          <article className="feature-card" id="visit">
            <span className="feature-number">03</span>
            <h3>Making Disciples</h3>
            <p>
              Sharing the gospel and helping others
              follow Jesus Christ.
            </p>
          </article>
        </section>

        <section className="visit-section" id="contact">
          <span className="section-label">YOU ARE WELCOME</span>
          <h2>Come and Worship With Us</h2>
          <p>
            We would love to connect with you and
            help you learn more about our church.
          </p>
          <a className="button-primary" href="mailto:">
            Contact Our Church
          </a>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">
          <span className="logo-mark">JH</span>
          <span>Jesus Our Hope Church</span>
        </a>
        <p>Built with faith, for learning and service.</p>
        <small>© {new Date().getFullYear()} Jesus Our Hope Church</small>
      </footer>
    </div>
  )
}

export default App
