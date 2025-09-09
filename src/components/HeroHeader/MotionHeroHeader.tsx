import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./hero-header.css";

const HeroHeader: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bookingRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Reduced movement values for a more subtle effect
  const bookingY = useTransform(scrollYProgress, [0, 0.4], [0, -100]);
  const bookingOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  // Reduced movement for the container as well
  const containerY = useTransform(scrollYProgress, [0.4, 0.8], [0, -150]);
  const containerOpacity = useTransform(scrollYProgress, [0.6, 0.9], [1, 0]);

  return (
    <motion.header 
      className="hero-header"
      ref={containerRef}
      style={{
        y: containerY,
        opacity: containerOpacity
      }}
    >
      {/* Type div stays static initially */}
      <motion.div
        className="type"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        <h1>
          <span className="outline">Crafting</span> meaningful{" "}
          <span className="outline">digital experiences</span>
        </h1>
      </motion.div>

      {/* Booking div slides up on scroll with reduced movement */}
      <motion.div 
        className="booking"
        ref={bookingRef}
        style={{
          y: bookingY,
          opacity: bookingOpacity
        }}
      >
        <p className="motto">
          <span>your one-stop solution to design as a service</span>
        </p>
        <p className="book">
      <a href="#" className="primary">
          Book a free consultation
        </a>
        </p>
  
      </motion.div>
    </motion.header>
  );
};

export default HeroHeader;