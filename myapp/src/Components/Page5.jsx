import React, { useEffect } from "react";
import image from "../assets/chrome-gallery-5-2x.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/Page5.css";

gsap.registerPlugin(ScrollTrigger);

export default function Page5() {
  useEffect(() => {
    // GSAP animations for the text container
    gsap.fromTo(
      ".page5-text-container",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".page5-container",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    // GSAP animations for the image container
    gsap.fromTo(
      ".page5-image-container img",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".page5-container",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="page5-container">
      <div className="page5-text-container">
        <h1 className="page5-heading">Extend your experience</h1>
        <h3 className="page5-subheading">
          From shopping and entertainment to productivity, find extensions to
          improve<br /> your experience in the Chrome Web Store.
        </h3>
        <button className="page5-explore-button">Explore extensions</button>
      </div>
      <div className="page5-image-container">
        <img src={image} alt="Chrome Extensions" />
      </div>
    </div>
  );
}
