import React, { useEffect, useRef } from "react";
import "./hero-header.css";

const HeroHeader: React.FC = () => {
  const mottoRef = useRef<HTMLParagraphElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mottoRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          entry.target.classList.remove("fade-out");
          
          // Clear any existing timeout
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
          
          // Set timeout to fade out after 3 seconds
          timeoutRef.current = setTimeout(() => {
            entry.target.classList.remove("visible");
            entry.target.classList.add("fade-out");
          }, 3000);
        } else {
          entry.target.classList.remove("visible");
          entry.target.classList.add("fade-out");
          
          // Clear timeout if element leaves viewport before 3 seconds
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px"
    });

    observer.observe(mottoRef.current);

    return () => {
      observer.disconnect();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="hero-header">
      <div className="type">
        <h1>
          <span className="outline">Crafting</span> meaningful{" "}
          <span className="outline">digital experiences</span>
        </h1>
      </div>

      <div className="booking">
        <p className="motto" ref={mottoRef} id="motto">
          <span>your one-stop solution to design as a service</span>
        </p>
      </div>
    </header>
  );
};

export default HeroHeader;