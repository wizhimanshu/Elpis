import "./testimonials.scss";

export default function Testimonials() {
  return (
    <section className="testimonials-section fade-in">
      
      {/* Background glows — same as Hero + DigitalBoost */}
      <div className="testimonial-glow"></div>
      <div className="testimonial-glow"></div>

      <h2 className="testimonial-title reveal">
        Trusted by Job Seekers Worldwide
      </h2>

      <p className="testimonial-sub">Real people, real results.</p>

      {/* CARDS WRAPPER */}
      <div className="testimonial-carousel rise">

        <div className="testimonial-card">
          <p>"Helped me track 50+ interview rounds and stay stress-free."</p>
          <span>- Arjun Sharma</span>
        </div>

        <div className="testimonial-card">
          <p>"The UI is unbelievably clean! My job hunt finally feels structured."</p>
          <span>- Aanya B.</span>
        </div>

        <div className="testimonial-card">
          <p>"Exactly what I needed during placements — just perfect!"</p>
          <span>- Vikram Rao</span>
        </div>

      </div>
    </section>
  );
}
