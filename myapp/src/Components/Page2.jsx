import React, { useEffect } from 'react';
import "../css/Page2.css";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import myimage from "../assets/Google_Chrome_icon_(February_2022).svg.webp";
import myimage4 from "../assets/chrome-gallery-3-2x.webp";

gsap.registerPlugin(ScrollTrigger);

export default function Page2() {
  useEffect(() => {
    // Animate the title
    gsap.fromTo(
      ".page2-title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".page2-title",
          start: "top 80%", // Animation starts when the title enters the viewport
        },
      }
    );

    // Animate each card
    gsap.fromTo(
      ".page2-card",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".page2-card",
          start: "top 80%", // Animation starts when the card enters the viewport
        },
      }
    );

    gsap.fromTo(
      ".page2-cardone",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".page2-cardone",
          start: "top 80%", // Animation starts when the card enters the viewport
        },
      }
    );
  }, []);

  return (
    <div className="page2-container">
      <h1 className="page2-title">
        Discover the latest<br /> <span style={{ color: "#357ae8" }}>updates</span> from Chrome
      </h1>

      <div className="page2-card-container">
        <div className="page2-card">
          <h3>UPDATES</h3>
          <h2 className="page2-card-title" style={{ fontSize: "50px" }}>Automatic updates</h2>
          <h3 className="page2-card-description">
            There’s a new Chrome release every four weeks, making it easy to have the newest features and a faster, safer web browser.
          </h3>
          <a className="page2-card-link" href="https://support.google.com/chrome/answer/95414" target="_blank" rel="noopener noreferrer">
            Learn about automatic updates
          </a>
          <img src={myimage4} alt="Automatic updates" />
        </div>

        <div className="page2-cardone">
          <h3>LATEST</h3>
          <h2 className="page2-card-title" style={{ fontSize: "50px" }}>Latest from Chrome</h2>
          <h3 className="page2-card-description">
            Chrome regularly updates with tools and features that make it faster and easier to use.
          </h3>
          <a className="page2-card-link" href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer">
            Learn more about Chrome
          </a>
          <img src={myimage} alt="Latest from Chrome" />
        </div>
      </div>
    </div>
  );
}
