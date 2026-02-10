import { Form } from "react-router-dom";
import "./Home.css";
import coding1 from "../assets/coding1.jpeg";
import debet1 from "../assets/debet1.jpeg";
import cognifyz from "../assets/cognifyz.png";

function Project() {
  return (
    <section className="projects-wrapper">

      {/* PROJECTS */}
      <h1 className="page-title">Projects</h1>

      <div className="projects-grid">
        <div className="project-card">
          <h2>Weather Application</h2>
          <p className="tech">React • CSS • JavaScript</p>
          <p className="desc">
            A responsive weather application that fetches real-time weather
            data using APIs and displays weather details with a clean UI.
          </p>
        </div>

        <div className="project-card">
          <h2>Amazon Clone</h2>
          <p className="tech">HTML • CSS</p>
          <p className="desc">
            Frontend clone of Amazon website focusing on layout, styling,
            and responsive design.
          </p>
        </div>
</div>

      {/* ACHIEVEMENTS */}
      <h1 className="page-title achievement-title">Achievements</h1>
        <div className="achievement-post">
          <p className="post-caption">
            💼 Selected as <strong>Software Developer Intern</strong> at
            Blustock and received an official offer letter, marking a
            significant step in my professional journey.
          </p>
          <div className="post-image">
            <img src={cognifyz} alt="" />
          </div>
        </div>

    

    </section>
  );
}

export default Project;
