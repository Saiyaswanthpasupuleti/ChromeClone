import React, { useEffect } from 'react';
import "../css/Page11.css"; // Import the CSS file
import myimage1 from "../assets/chrome-gallery-1-2x.webp";
import myimage2 from "../assets/chrome-gallery-2-2x.webp";
import myimage3 from "../assets/chrome-gallery-3-2x.webp";
import myimage4 from "../assets/chrome-gallery-4-2x.webp";
import myimage5 from "../assets/chrome-gallery-5-2x.webp";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Page11() {
  useEffect(() => {
    // GSAP ScrollTrigger animations for image appearance
    gsap.utils.toArray('.feature-image').forEach((image, index) => {
      gsap.fromTo(
        image,
        {
          opacity: 0,
          y: 50, // Start from below the viewport
        },
        {
          opacity: 1,
          y: 0, // Move to the original position
          scrollTrigger: {
            trigger: image,
            start: 'top 80%', // Trigger when image reaches 80% of the viewport
            end: 'top 50%', // End when it reaches 50%
            scrub: 1, // Smooth animation as you scroll
            toggleActions: 'play none none reverse', // Start animation when in view, reverse when out
            markers: false, // Remove markers in production
          }
        }
      );
    });

    // Remove the pinning effect to avoid issues with scrolling
    gsap.to('.feature-images', {
      scrollTrigger: {
        trigger: '.feature-images',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        markers: false, // Set to true for debugging
      },
      opacity: 1,
    });
  }, []);

  return (
    <div className="page11-container">
       <h1 style={{fontSize:"50px",textAlign:"center"}}>The <span style={{color:"orange"}}>Fast </span>way to do things online</h1>
      <div className="feature-images">
  
      <img className="feature-image" src={myimage5} alt="Image 5" />
        <img className="feature-image" src={myimage3} alt="Image 3" />
      
        <img className="feature-image" src={myimage1} alt="Image 1" />
      </div>
    </div>
  );
}
