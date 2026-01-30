import "./Home.css"

function Resume() {
  return (
    <section className="resume-wrapper">
      <div className="resume-card">
        <h1>Kanchan Choudhary</h1>
        <p className="role">Software & Web Developer</p>

        <p className="resume-text">
          You can download my resume using the button below to know more
          about my education, skills, projects and experience.
        </p>

        <a
          href="/Kanchan_Choudhary_Resume.pdf"
          download
          className="resume-download"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;
