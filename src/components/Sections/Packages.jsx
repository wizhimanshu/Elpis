export default function Packages() {
  return (
    <section className="packages-section">

      <div className="hero-glow"></div>
      <div className="hero-glow"></div>

      <h2 className="packages-title reveal">Our Packages</h2>
      <p className="packages-subtitle fade-in">
        Choose the plan that matches your job journey.
      </p>

      <div className="package-grid">

        <div className="package-card rise">
          <h3 className="plan-badge">Starter</h3>
          <ul>
            <li>Track 20 interviews</li>
            <li>Daily reminders</li>
            <li>Basic notes</li>
          </ul>
        </div>

        <div className="package-card rise" style={{animationDelay:".15s"}}>
          <h3 className="plan-badge">Pro</h3>
          <ul>
            <li>Unlimited tracking</li>
            <li>Performance analytics</li>
            <li>Export dashboard</li>
          </ul>
        </div>

        <div className="package-card rise" style={{animationDelay:".3s"}}>
          <h3 className="plan-badge">Team</h3>
          <ul>
            <li>Shared pipelines</li>
            <li>Team reporting</li>
            <li>Priority insights</li>
          </ul>
        </div>

      </div>

    </section>
  );
}
