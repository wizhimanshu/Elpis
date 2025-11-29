export default function WhatWeOffer() {
  return (
    <section className="what-offer-section">
      <div className="whatwe-glow"></div>
      <div className="whatwe-glow"></div>

      <div className="offer-left">
        <h2 className="section-title slide-up">
          What We Offer
        </h2>

        <div className="offer-list fade-in">
        <button className="offer-pill rise">Data-Driven Strategies</button>
        <button className="offer-pill rise" style={{animationDelay:".15s"}}>Dedicated Teams</button>
        <button className="offer-pill rise" style={{animationDelay:".3s"}}>Smart Interview Dashboard</button>
        </div>
      </div>

      <div className="offer-right">
        <div className="preview-card">
          {/* temporary image - replace later */}
          <img src="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?q=80&w=600" alt="preview" />
        </div>
      </div>

    </section>
  );
}
