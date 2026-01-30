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
          <p className="tech">HTML • CSS • JavaScript</p>
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

        <div className="project-card">
          <h2>Todo List Application</h2>
          <p className="tech">React</p>
          <p className="desc">
            A React-based Todo List app that helps users manage tasks
            efficiently using component-based architecture.
          </p>
        </div>
      </div>

      {/* ACHIEVEMENTS */}
      <h1 className="page-title achievement-title">Achievements</h1>

      <div className="achievement-posts">

        <div className="achievement-post">
          <p className="post-caption">
            🏆 Proud moment! Secured <strong>1st Position</strong> in
            College Level Coding Competition, showcasing problem-solving
            skills and coding efficiency.
          </p>
          <div className="post-image">
            <img src={coding1} alt="" />
          </div>
        </div>

        <div className="achievement-post">
          <p className="post-caption">
            🥇 Achieved <strong>1st Position</strong> in College Level
            Debate Competition, demonstrating communication skills and
            confidence.
          </p>
          <div className="post-image">
            <img src={debet1} alt="" />
          </div>
        </div>

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

      </div>

    </section>
  );
}

export default Project;
