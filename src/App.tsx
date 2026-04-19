import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">Praise Elera Nwogu</div>
          <ul className="nav-links">
            <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">Hello, I'm</span>
              <span className="name">Praise Elera Nwogu</span>
            </h1>
            <p className="hero-subtitle">Full Stack Developer & Creative Problem Solver</p>
            <p className="hero-description">
              I build beautiful, functional, and user-friendly web applications 
              that help businesses grow and individuals express themselves.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                View My Work
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="profile-card">
              <div className="profile-avatar">
                <span className="avatar-initials">PEN</span>
              </div>
              <div className="profile-info">
                <h3>Praise Elera Nwogu</h3>
                <p>Full Stack Developer</p>
                <div className="social-links">
                  <a href="#" className="social-link">GitHub</a>
                  <a href="#" className="social-link">LinkedIn</a>
                  <a href="#" className="social-link">Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-arrow">â†“</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <div className="image-placeholder">
                <span>ðŸ“¸</span>
              </div>
            </div>
            <div className="about-text">
              <h3>Who I Am</h3>
              <p>
                I'm a passionate Full Stack Developer with a love for creating elegant 
                solutions to complex problems. With a strong foundation in both frontend 
                and backend technologies, I bring ideas to life through clean, efficient code.
              </p>
              <p>
                My journey in tech started with curiosity about how things work, and it 
                has evolved into a career where I get to build products that make a 
                difference. I believe in continuous learning and staying updated with 
                the latest technologies.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">30+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="section-container">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Technologies I work with</p>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">Tailwind</span>
                <span className="skill-tag">Vue.js</span>
                <span className="skill-tag">Next.js</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Django</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">GraphQL</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">PostgreSQL</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <div className="skill-tags">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">VS Code</span>
                <span className="skill-tag">Linux</span>
                <span className="skill-tag">CI/CD</span>
                <span className="skill-tag">Agile</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="section-container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <span>ðŸ’»</span>
              </div>
              <div className="project-content">
                <h3>E-Commerce Platform</h3>
                <p>A full-featured online store with shopping cart, payment integration, and admin dashboard.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <span>ðŸ“±</span>
              </div>
              <div className="project-content">
                <h3>Task Management App</h3>
                <p>A productivity application for managing tasks, projects, and team collaboration.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Firebase</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <span>ðŸŽ¨</span>
              </div>
              <div className="project-content">
                <h3>Portfolio Website</h3>
                <p>A modern, responsive portfolio website showcasing projects and skills.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Vite</span>
                  <span>CSS</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <span>ðŸ“Š</span>
              </div>
              <div className="project-content">
                <h3>Analytics Dashboard</h3>
                <p>A data visualization dashboard with real-time charts and interactive reports.</p>
                <div className="project-tech">
                  <span>Vue.js</span>
                  <span>D3.js</span>
                  <span>Python</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <span>ðŸ’¬</span>
              </div>
              <div className="project-content">
                <h3>Chat Application</h3>
                <p>Real-time messaging app with group chats, file sharing, and notifications.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Socket.io</span>
                  <span>Express</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <span>ðŸ›’</span>
              </div>
              <div className="project-content">
                <h3>Inventory System</h3>
                <p>A comprehensive inventory management system for small businesses.</p>
                <div className="project-tech">
                  <span>Python</span>
                  <span>Django</span>
                  <span>PostgreSQL</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's work together</p>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">ðŸ“§</span>
                <div>
                  <h4>Email</h4>
                  <p>praise.elera@example.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">ðŸ“±</span>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">ðŸ“</span>
                <div>
                  <h4>Location</h4>
                  <p>Nigeria</p>
                </div>
              </div>
              <div className="contact-social">
                <h4>Connect With Me</h4>
                <div className="social-icons">
                  <a href="#" className="social-icon">GitHub</a>
                  <a href="#" className="social-icon">LinkedIn</a>
                  <a href="#" className="social-icon">Twitter</a>
                  <a href="#" className="social-icon">Instagram</a>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows={5} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 Praise Elera Nwogu. All rights reserved.</p>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
