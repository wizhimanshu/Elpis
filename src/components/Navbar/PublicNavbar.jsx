import "./public-navbar.scss";
import elpisLogo from "../../assets/elpis.svg";

export default function PublicNavbar(){
    return (
        <nav className="public-navbar">
            <div className="nav-content">

                {/* Left: Logo */}
                <div className="nav-left">
                  <img src={elpisLogo} className="logo-icon" alt="Elpis Logo" />
                  {/* <span className="logo-text">ELPIS</span> */}
                </div>

                {/* Center: Navigations */}
                <div className="nav-center">
                    <a href="#">Home</a>
                    <a href="#">Features</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>

                {/* Right: Auth Buttons */}
                <div className="nav-right">
                    <button className="login-btn">Login</button>
                    <button className="signup-btn">SignUp</button>
                </div>
            </div>
        </nav>
    );
}