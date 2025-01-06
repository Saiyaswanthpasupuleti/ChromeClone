import React, { useRef, useEffect, useState } from 'react';
import '../css/Page10.css';
import gsap from 'gsap'; // Import GSAP
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger plugin
import myimage1 from "../assets/chrome-gallery-1-2x.webp";
import myimage5 from "../assets/chrome-gallery-5-2x.webp";
import myimage3 from "../assets/chrome-gallery-3-2x.webp";

       
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const images = [myimage1, myimage5,myimage3,myimage1,myimage5]; // Only use two images for horizontal scroll

const Page10 = () => {
  const cardContainerRef = useRef(null);

  // State to track mouse position
  const [mouseX, setMouseX] = useState(0);

  // Detect mouse movement
  const handleMouseMove = (e) => {
    const mousePositionX = e.clientX; // Get the mouse X position relative to the screen
    setMouseX(mousePositionX);
  };

  // UseEffect to register mouse move event listener
  useEffect(() => {
    // Add mousemove listener
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (cardContainerRef.current) {
      // ScrollTrigger Animation to change the position of the images as the user scrolls
      ScrollTrigger.create({
        trigger: ".container", // Container to trigger the animation
        start: "top bottom", // Start when the top of the container is at the bottom of the screen
        end: "bottom top", // End when the bottom of the container reaches the top of the screen
        scrub: true, // Smooth scrubbing effect
        onUpdate: (self) => {
          const scrollProgress = self.progress; // Get scroll progress (0 to 1)
          
          // Animate horizontally, but limit to showing one image at a time
          const horizontalMovement = scrollProgress * 100; // Move from 0% to 100%
          
          gsap.to(cardContainerRef.current, {
            x: `${-horizontalMovement}%`, // Move horizontally
            ease: "none",
          });
        },
        markers: false, // Disable markers for start and end
      });
    }
  }, []);

  useEffect(() => {
    if (cardContainerRef.current) {
      // Move the images horizontally based on mouse position
      const moveSpeed = 0.5; // Controls how fast the images move
      gsap.to(cardContainerRef.current, {
        x: `${(mouseX - window.innerWidth / 2) * moveSpeed}px`, // Move images based on mouse X position
        ease: "none", // No easing for smooth movement
      });
    }
  }, [mouseX]);

  return (
    <div className="container">
      <h1 style={{fontSize:"50px"}}>Make it Yours and <span style={{color:"orange"}}> take</span>  it with you</h1>
      <div className="card-container" ref={cardContainerRef}>
        {images.map((image, index) => (
          <div key={index} className="card">
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page10;
