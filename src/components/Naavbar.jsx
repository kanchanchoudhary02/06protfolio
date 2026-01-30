import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      {/* Left side links */}
      <div className="nav-left">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/project" className="nav-item">Project</Link>
        <Link to="/resume" className="nav-item">Resume</Link>
        <Link to="/about" className="nav-item">About</Link>
      </div>

      {/* Right side button */}
      <div className="nav-right">
        <Link to="/contact">
          <button className="contact-btn">Contact me</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;