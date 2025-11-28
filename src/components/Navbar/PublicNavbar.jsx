import "./public-navbar.scss";

export default function PublicNavbar(){
    return (
        <nav className="public-navbar">
            <div className="nav-content">

                {/* Left: Logo */}
                <div className="nav-left">
                    <div className="logo">ELPIS</div>
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