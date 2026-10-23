
import { useState } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    name: "JobTrackApp",
    description:
      "A job tracking application designed to organize job applications and simplify the job search process.",
    tech: ["React", "JavaScript", "CSS"],
    live: "https://job-track-app-lac.vercel.app/",
    github: "https://github.com/devikasivakumar26-dotcom/JobTrackApp",
  },
  {
    number: "02",
    name: "StyleFit",
    description:
      "A virtual try-on interface where users can upload an image and preview clothing selections.",
    tech: ["React", "JavaScript", "CSS"],
    live: "https://ai-virtual-try-on-dresses.vercel.app/",
    github:
      "https://github.com/devikasivakumar26-dotcom/AI-virtual-try-on-dresses",
  },
  {
    number: "03",
    name: "SignSpeak",
    description:
      "A sign-language translation project exploring accessible communication through a web interface.",
    tech: ["React", "TypeScript", "CSS"],
    live: "https://sign-language-to-text-translation-s.vercel.app/",
    github:
      "https://github.com/devikasivakumar26-dotcom/sign-language-to-text-translation-system",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="portfolio">
      <header className="navbar">
        <a href="#home" className="logo">
          Devika<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot"></span> AVAILABLE FOR OPPORTUNITIES
            </p>

            <h1>
              Hi, I'm <span>Devika</span>
              <br />
              Frontend Developer
            </h1>

            <p className="hero-description">
              I build responsive, user-friendly web experiences with React,
              JavaScript, HTML and CSS. I enjoy turning ideas into clean,
              functional interfaces.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore My Work ↗
              </a>
              <a className="button secondary" href="#contact">
                Contact Me
              </a>
              
            </div>

            <div className="hero-note">
              <span>📍</span> India <span className="note-divider">/</span>
              Open to entry-level opportunities
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="code-card">
              <div className="window-controls">
                <i></i><i></i><i></i>
                <span>developer.js</span>
              </div>
              <div className="code-content">
                <p><span className="code-purple">const</span> developer = {"{"}</p>
                <p className="indent">name: <span className="code-green">"Devika"</span>,</p>
                <p className="indent">role: <span className="code-green">"Frontend Developer"</span>,</p>
                <p className="indent">skills: [</p>
                <p className="indent double">"React", "JavaScript",</p>
                <p className="indent double">"HTML", "CSS"</p>
                <p className="indent">],</p>
                <p className="indent">learning: <span className="code-green">true</span>,</p>
                <p className="indent">building: <span className="code-green">"great UI"</span></p>
                <p>{"}"}</p>
              </div>
              <div className="code-footer">
                <span>●</span> Always learning, always building
              </div>
            </div>
            <div className="floating-badge badge-top">✦ React Developer</div>
            <div className="floating-badge badge-bottom">{"</>"} Clean Code</div>
          </div>
          <a href="#about" className="scroll-cue">SCROLL TO EXPLORE ↓</a>
        </section>

        <section id="about" className="section about-section">
          <p className="section-label">01 / ABOUT ME</p>
          <h2>A little about <span>my journey.</span></h2>
          <div className="about-grid">
            <div className="about-copy">
              <p>
                I'm a Computer Science and Engineering graduate passionate
                about frontend development and building useful web
                applications.
              </p>
              <p>
                I enjoy learning modern technologies, solving problems and
                creating interfaces that are simple, accessible and easy to
                use. I'm looking for an opportunity to contribute, learn from
                experienced developers and grow as an engineer.
              </p>
            </div>
            <div className="education-card">
              <span className="card-icon">🎓</span>
              <p className="mini-label">EDUCATION</p>
              <h3>B.E. Computer Science and Engineering</h3>
              <p>Government College of Engineering, Bargur</p>
              <div className="education-footer">
                <span>2022 – 2026</span>
                <span>CGPA: 7.41</span>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <p className="section-label">02 / MY TOOLKIT</p>
          <h2>Skills I bring <span>to the table.</span></h2>
          <p className="section-description">
            Technologies I've learned and used while building projects.
          </p>

          <div className="skills-grid">
            {[
              ["HTML5", "Structure & accessibility", "01"],
              ["CSS3", "Responsive layouts & styling", "02"],
              ["JavaScript", "Interactive web experiences", "03"],
              ["React.js", "Component-based interfaces", "04"],
              ["Java", "Programming fundamentals & OOP", "05"],
              ["SQL / MySQL", "Queries & relational data", "06"],
              ["Git & GitHub", "Version control", "07"],
              ["Vite", "Modern frontend tooling", "08"],
            ].map(([name, description, number]) => (
              <div className="skill-card" key={name}>
                <span className="skill-number">{number}</span>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <p className="section-label">03 / SELECTED WORK</p>
          <h2>Things I've <span>built.</span></h2>
          <p className="section-description">
            A few projects I've worked on. Explore the live demos and source
            code below.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-symbol">↗</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo ↗
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        
<section id="contact" className="section contact-section">
  <p className="section-label">04 / GET IN TOUCH</p>
  <h2>Let's build something <span>great.</span></h2>
  <p className="section-description">
    I'm interested in entry-level frontend developer opportunities.
    Feel free to contact me.
  </p>

  <div className="contact-actions">
    <a
      className="button primary"
      href="mailto:devikasivakumar26@gmail.com"
    >
      ✉ Email Me
    </a>

    <a
      className="button secondary"
      href="tel:+919345395037"
    >
      ☎ Call Me
    </a>

    <a
      className="button secondary"
      href="https://www.linkedin.com/in/devikasivakumar"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn ↗
    </a>

    <a
      className="button secondary"
      href="https://github.com/devikasivakumar26-dotcom"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub ↗
    </a>
  </div>

  <p className="contact-reminder">
    Email: devikasivakumar26@gmail.com
  </p>
  <p className="contact-reminder">
    Phone: +91 93453 95037
  </p>
</section>

      </main>

      <footer className="footer">
        <a href="#home" className="logo">Devika<span>.</span></a>
        <p>Designed & built with React · {new Date().getFullYear()}</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
