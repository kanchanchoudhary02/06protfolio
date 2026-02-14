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
        <div className="project-card">
  <h2>News Website</h2>
  <p className="tech">HTML • CSS</p>
  <p className="desc">
    Frontend news website showing latest headlines, categories and articles 
    with clean layout and responsive design.
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
        
       
      
        </div>  
    

{/* Internship */}
<div className="achievement-post">

  <div className="post-content">
    <p>Internship at Cognifyz Technologies</p>
    <p>
      Successfully completed a 3-month internship at Cognifyz Technologies,
      gaining hands-on experience in software development and contributing
      to real-world projects.
    </p>
  </div>

  <div className="post-image">
    <img src={cognifyz} alt="Internship" />
  </div>

</div>


{/* Coding Competition */}
<div className="achievement-post">

  <div className="post-content">
    <p>1st Position in Coding Competition (College Level)</p>
    <p>
      Secured first place in college-level coding competition by demonstrating
      strong problem-solving skills and programming knowledge.
    </p>
  </div>

  <div className="post-image">
    <img src={coding1} alt="Coding Competition" />
  </div>

</div>


{/* Debate Competition */}
<div className="achievement-post">

  <div className="post-content">
    <p>Winner in Debate Competition (College Level)</p>
    <p>
      Won college-level debate competition by showcasing excellent communication,
      critical thinking and public speaking skills.
    </p>
  </div>

  <div className="post-image">
    <img src={debet1} alt="Debate Competition" />
  </div>

</div>



    

    </section>
  );
}

export default Project;
