import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import "./nav.css";

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="brand">
            <span className="logo">
              <Link to="/" title="home page link"> </Link>
            </span>
            <span>b1nary.xyz</span>
      </div>
      <ul className="nav-list" role="navigation">
        <li className="nav-item" role="navigation">
          <Link to="/about" title="about page link">About</Link>
        </li>
        <li className="nav-item" role="navigation">
          <Link to="/services" title="services page link">Services</Link>
        </li>
        <li className="nav-item" role="navigation">
          <Link to="/contact" title="contact page link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;