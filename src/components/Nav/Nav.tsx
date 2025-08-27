import React from "react";
import { useEffect, useState } from "react";

import "./nav.css";


const Nav: React.FC = () => {
   const [scrolled, setScrolled] = useState(false);

     useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0); // true if user has scrolled
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="brand">
          <div className="logo"></div>
          <span>b1nary <abbr title="Design as a Service">daas</abbr> ✳</span>
        </div>
      <ul className="nav-list" role="navigation">
        <li className="nav-item" role="navigation">
          <a href="#home">Home</a>
        </li>
        <li className="nav-item" role="navigation">
          <a href="#about">About</a>
        </li>
        <li className="nav-item" role="navigation">
          <a href="#services">Services</a>
        </li>
        <li className="nav-item" role="navigation">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
