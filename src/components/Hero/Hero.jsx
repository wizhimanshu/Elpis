import "./hero.scss";

export default function Hero() {
  return (
    <section className="hero-section fade-in">

      {/* 🔷 Background Glow Blobs (behind text) */}
      <div className="hero-glow"></div>
      <div className="hero-glow"></div>

      {/* 🔷 Main hero text + CTAs */}
      <div className="hero-content slide-up">
        <h1 className="hero-title reveal">
          Track Your Interviews <br /> With Confidence & Clarity
        </h1>

        <p className="hero-subtitle">
          Stay organized, reduce stress, and boost your chances of success<br />
          with a modern, streamlined interview tracking experience.
        </p>

        <div className="hero-buttons rise">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </div>

    </section>
  );
}
