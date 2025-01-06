import React, { useEffect } from "react";
import { gsap } from "gsap";
import myimage from "../assets/Google_Chrome_icon_(February_2022).svg.webp";
import myimage1 from "../assets/chrome-gallery-1-2x.webp";
import myimage2 from "../assets/chrome-gallery-2-2x.webp";
import myimage3 from "../assets/chrome-gallery-3-2x.webp";
import myimage4 from "../assets/chrome-gallery-4-2x.webp";
import myimage5 from "../assets/chrome-gallery-5-2x.webp";
import "../css/Page1.css";

export default function Page1() {
  useEffect(() => {
    const container = document.querySelector(".scrollable-images-unique");
    const viewport = document.querySelector(".images-scroll-container-unique");

    if (container && viewport) {
      const containerWidth = container.scrollWidth; // Total width of images
      const viewportWidth = viewport.clientWidth; // Viewport width

      // Animate if container width exceeds viewport width
      if (containerWidth > viewportWidth) {
        gsap.to(container, {
          x: -(containerWidth - viewportWidth), // Scroll left
          ease: "none",
          duration: 10, // Duration of scroll
          repeat: -1, // Infinite loop
          yoyo: true, // Reverse direction
        });
      }
    }
  }, []);

  return (
    <div className="page1-container">
      <section className="hero-section-unique">
        <div className="hero-content-unique">
          <img src={myimage} alt="Google Chrome" className="chrome-logo-unique" />
          <h1 className="hero-title-unique">Get Chrome for Windows</h1>
          <p className="hero-description-unique" style={{fontSize:"70px"}}>
            The browser
            <br />
            built to be yours
          </p>
          <div className="cta-buttons-unique">
            <button className="download-btn-unique" style={{fontSize:"30px",borderRadius:"50px"}}>Download Chrome</button>
            {/* <button className="learn-more-btn-unique">Learn More</button> */}
          </div>
          <div className="additional-info-unique">
            <p>For macOS 11 or later.</p>
            {/* <h3 style={{ color: "#4285f4" }}>I want to update Chrome</h3> */}
            <p style={{ color: "gray" }}>
              By downloading Chrome, you agree to the Google Terms of Service and Chrome and
              <br />
              <span style={{ color: "#4285f4" }}>
                ChromeOS Additional Terms of Service
              </span>
            </p>
          </div>
        </div>
      </section>
      <div className="images-scroll-container-unique">
        <div className="scrollable-images-unique" style={{justifyContent:"center"}}>
          <img src={myimage1} alt="Image 1" className="scroll-image-unique" />
          <img src={myimage2} alt="Image 2" className="scroll-image-unique" />
          <img src={myimage3} alt="Image 3" className="scroll-image-unique" />
          <img src={myimage4} alt="Image 4" className="scroll-image-unique" />
          <img src={myimage5} alt="Image 5" className="scroll-image-unique" />
          <img src={myimage1} alt="Image 1" className="scroll-image-unique" />
          <img src={myimage2} alt="Image 2" className="scroll-image-unique" />
          <img src={myimage3} alt="Image 3" className="scroll-image-unique" />
          <img src={myimage4} alt="Image 4" className="scroll-image-unique" />
          <img src={myimage5} alt="Image 5" className="scroll-image-unique" />
         
          <img src={myimage1} alt="Image 1" className="scroll-image-unique" />
          <img src={myimage2} alt="Image 2" className="scroll-image-unique" />
          <img src={myimage3} alt="Image 3" className="scroll-image-unique" />
          <img src={myimage4} alt="Image 4" className="scroll-image-unique" />
          <img src={myimage5} alt="Image 5" className="scroll-image-unique" />
          <img src={myimage1} alt="Image 1" className="scroll-image-unique" />
        </div>
      </div>
    </div>
  );
}
