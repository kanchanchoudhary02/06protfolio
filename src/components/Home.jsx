import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <p className="welcome">Welcome to my Portfolio</p>

      <div className="content">
        <h1>
          I'm <span>Riya suthar</span>
        </h1>

        <h2>Web Developer</h2>

        <p className="about">
          I am a dedicated Web Developer with a strong passion for building
          interactive and responsive websites. Skilled in React, JavaScript,
          HTML, and CSS, I enjoy transforming design concepts into functional
          web applications. I believe in writing clean, maintainable code while
          constantly exploring new technologies to improve user experiences.
        </p>

        <div className="buttons">
          <Link to="Project"><button className="btn primary">My Projects</button></Link>
        
          <Link to="Contact"><button className="btn outline">Contact Me</button></Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
