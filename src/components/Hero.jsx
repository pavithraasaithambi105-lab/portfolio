import React, { useEffect } from "react";
import anime from "animejs";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    anime({
      targets: ".title",
      opacity: [0, 1],
      translateY: [-20, 0],
      duration: 1500,
      easing: "easeOutExpo",
      loop: true,
      direction: "alternate",
    });
  }, []);

  return (
    <div className="hero-container">
      <h1 className="title">Hello, I'm Pavithra</h1>
      <p className="subtitle">Web Developer • React • JavaScript • Three.js</p>
    </div>
  );
};

export default Hero;
