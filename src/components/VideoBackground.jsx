import React from "react";
import "./VideoBackground.css";

export default function VideoBackground() {
  return (
    <video
      className="video-bg"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/videos/hero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}  