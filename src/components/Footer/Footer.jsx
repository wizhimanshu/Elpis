import "./footer.scss";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-wide reveal">

      {/* 🔹 Tagline */}
      <p className="footer-quote">
        “Track smarter. Stay organized. Your interview journey deserves clarity.”
      </p>

      <div className="footer-grid">

        {/* Column 1 — Brand */}
        <div className="footer-col">
          <h3 className="footer-heading">ELPIS</h3>
          <p className="footer-text">
            Your companion to manage interviews with confidence,
            focus & stress-free clarity.
          </p>
        </div>

        {/* Column 2 — Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <a>Home</a>
          <a>Features</a>
          <a>Packages</a>
          <a>Contact</a>
        </div>

        {/* Column 3 — Support */}
        <div className="footer-col">
          <h4>Support</h4>
          <a>Help Center</a>
          <a>Docs</a>
          <a>FAQs</a>
          <a>Report Issue</a>
        </div>

        {/* Column 4 — Contact & Socials */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p className="email">
            <FaEnvelope /> support@elpis.co
          </p>

          <div className="social-icons">
            <FaTwitter />
            <FaLinkedin />
            <FaGithub />
          </div>
        </div>

      </div>

      {/* Copyright */}
      <p className="footer-copy">
        © {new Date().getFullYear()} ELPIS — All Rights Reserved.
      </p>
    </footer>
  );
}
