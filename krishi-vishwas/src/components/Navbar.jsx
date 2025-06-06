// src/components/Navbar.jsx

import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span role="img" aria-label="farm">
          🌾
        </span>{" "}
        Krishi
        <span className="farm-highlight">Vishwas</span>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/news">News</Link>
        <Link to="/weatherForecast">Weather</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="navbar-auth">
        <Link to="/login" className="auth-btn">
          Login
        </Link>
        <Link to="/signin" className="auth-btn">
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
