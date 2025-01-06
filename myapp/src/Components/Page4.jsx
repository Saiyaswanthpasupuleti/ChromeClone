import React, { useEffect } from 'react';
import imag1 from "../assets/autofill-2x (1).webp";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../css/Page4.css";

gsap.registerPlugin(ScrollTrigger);

export default function Page4() {
  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      ".page4-image-container img",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".page4-container",
          start: "top 80%", // Animation starts when the container enters the viewport
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".page4-text-container",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".page4-container",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="page4-container">
      <div className="page4-image-container">
        <img src={imag1} alt="Chrome Autofill" />
      </div>
      <div className="page4-text-container">
        <h1 className="page4-heading">- Customise your Chrome</h1>
        <h1 className="page4-heading">- Browse across devices</h1>
        <h1 className="page4-heading">- Save time with autofill</h1>
        <p className="page4-paragraph">Use Chrome to save addresses, passwords, and more to quickly autofill your details.</p>
      </div>
    </div>
  );
}
