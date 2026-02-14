import "./Home.css";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

function Contact() {
  return (
    <section className="contact-wrapper">
      <div className="contact-card">

        {/* LEFT INFO */}
        <div className="contact-info">
          <h2>Web Developer</h2>
          <p className="tagline">
            Let’s work together and build something meaningful & creative.
          </p>

          <div className="info-box">
            <p><strong>Email</strong></p>
            <span>kanchan.choudhary2004@gmail.com</span>
          </div>

          <div className="info-box highlight">
            <p><strong>Phone</strong></p>
            <span>9079068849</span>
          </div>

          <div className="social">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-linkedin-in"></i>  
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form">
          <h3>Contact Me</h3>

          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="Your Message"></textarea>

          <button>Send Message</button>
        </div>

      </div>
    </section>
  );
}

export default Contact;
