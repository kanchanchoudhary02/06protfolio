import "./Home.css";

function About() {
  return (
    <section className="about-hero">
      {/* HERO SECTION */}
      <div className="hero-overlay">
        <h1 className="hero-name">Riya Suthar</h1>
        <p className="hero-sub">
          Aspiring Software & Frontend Developer
        </p>
      </div>

      {/* ABOUT CONTENT */}
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I am a motivated B.Tech 3rd year student with a strong interest in both
          <strong> Software Development</strong> and <strong>Web Development</strong>.
          I enjoy building responsive, user-friendly web applications and also
          exploring core software concepts.
        </p>

        <p>
          I work with technologies like React, JavaScript, HTML, CSS and Bootstrap.
          Along with frontend development, I have hands-on experience using
          <strong> Appwrite</strong> for backend services and version control using
          <strong> Git & GitHub</strong>. I believe in continuous learning and
          improving my skills by working on real-world projects.
        </p>
      </div>

      {/* SKILLS */}
      <div className="section">
        <h2>Skills</h2>
        <div className="skills">
          <span>C</span>
          <span>C++</span>
          <span>Java</span>
          <span>Python</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Bootstrap</span>
          <span>Tailwind CSS</span>
          <span>Git</span>
          <span>GitHub</span>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="section">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Weather Application:</strong> Responsive weather app using
            HTML, CSS, JavaScript and React with real-time API integration.
          </li>
          <li>
            <strong>Amazon Clone (Frontend):</strong> Built using React, HTML,
            CSS and JavaScript.
          </li>
        </ul>
      </div>

      {/* INTERNSHIP */}
      <div className="section">
        <h2>Internship Experience</h2>
        <ul>
          <li>Application Development Intern – Codec Technology</li>
        </ul>
      </div>

      {/* EDUCATION */}
      <div className="section">
        <h2>Education</h2>
        <ul>
          <li>B.Tech (3rd Year) – CGPA: 7.89</li>
          <li>Class XII (PCM) – 80%</li>
          <li>Class X (RBSE) – 94%</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
