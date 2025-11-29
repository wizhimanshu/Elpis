import "./digitalboost.scss";

export default function DigitalBoost() {
  return (
    <section className="digitalboost-section fade-in">

      {/* Background Glows – same shape/animation as hero */}  
      <div className="boost-glow"></div>
      <div className="boost-glow"></div>

      <div className="boost-content slide-up">

        {/* LEFT ────────────────────────── */}
        <div className="boost-text">
          <h2 className="boost-title reveal">
            Boost Your Interview Journey <br /> To The Next Stage
          </h2>

          <p className="boost-desc">
            Plan your goals, track progress, review insights, and grow  
            faster with a system designed for clarity & results.
          </p>

          <div className="boost-buttons rise">
            <button className="primary-btn">Start Now</button>
            <button className="secondary-btn">View Features</button>
          </div>
        </div>

        {/* RIGHT ───────────────────────── */}
        <div className="boost-visual">
          <img 
            src="/src/assets/interview-dashboard.png"
            alt="interview ui dashboard"
          />
        </div>

      </div>
    </section>
  );
}
