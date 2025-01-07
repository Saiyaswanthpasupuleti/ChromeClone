import React, { useRef, useEffect, useState } from 'react';
import '../css/Page10.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import myimage1 from "../assets/chrome-gallery-1-2x.webp";
import myimage5 from "../assets/chrome-gallery-5-2x.webp";
import myimage3 from "../assets/chrome-gallery-3-2x.webp";

gsap.registerPlugin(ScrollTrigger);

const images = [myimage1, myimage5, myimage3, myimage1, myimage5];

const Page10 = () => {
  const cardContainerRef = useRef(null);

  // State to track mouse position
  const [mouseX, setMouseX] = useState(0);

  const handleMouseMove = (e) => {
    const mousePositionX = e.clientX;
    setMouseX(mousePositionX);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (cardContainerRef.current) {
      ScrollTrigger.create({
        trigger: ".container",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const scrollProgress = self.progress;
          const horizontalMovement = scrollProgress * 100;
          gsap.to(cardContainerRef.current, {
            x: `${-horizontalMovement}%`,
            ease: "none",
          });
        },
        markers: false,
      });
    }
  }, []);

  useEffect(() => {
    if (cardContainerRef.current) {
      const moveSpeed = 0.5;
      gsap.to(cardContainerRef.current, {
        x: `${(mouseX - window.innerWidth / 2) * moveSpeed}px`,
        ease: "none",
      });
    }
  }, [mouseX]);

  return (
    <div className="container">
      <h1 style={{ fontSize: "50px" }}>
        Make it Yours and <span style={{ color: "orange" }}>take</span> it with you
      </h1>
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
