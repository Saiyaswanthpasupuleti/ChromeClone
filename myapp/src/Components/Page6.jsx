import React, { useState } from 'react';
import '../css/Page6.css'; // Import the CSS file
import img1 from "../assets/save-password-2x.webp";
import img2 from "../assets/safety-check-2x.webp";
import img3 from "../assets/privacy-guide-2x.webp";
import img4 from "../assets/malware-alert-2x.webp";

function FeatureCard({ title, description, icon, color, imgSrc, cardId }) {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const handleCardClick = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className={`feature-card ${cardId}`} style={{ backgroundColor: color }} onClick={handleCardClick}>
      <div className="icon-container">
        {icon}
      </div>
      <img src={imgSrc} alt={title} className="feature-image" />
      <h2 className="card-title">{title}</h2>
      <div className={`description-container ${isDescriptionVisible ? 'show' : ''}`}>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export default function Page6() {
  return (
    <div className="container" id="page6-container">
      <h1 id="page6-title">Stay <span style={{ color: "#357ae8" }}>Safe</span> <br />while you browse</h1>
      <div className="feature-cards" id="feature-cards-container">
        <FeatureCard 
          title="PASSWORD MANAGER" 
          description="Use strong passwords on every site." 
          icon={<i className="fas fa-key" id="password-manager-icon"></i>} 
          color="white" 
          imgSrc={img1} 
          cardId="password-manager-card"
        />
        <FeatureCard 
          title="SAFETY CHECK" 
          description="Check your safety level in real time with just one click." 
          icon={<i className="fas fa-shield-alt" id="safety-check-icon"></i>} 
          color="white" 
          imgSrc={img2} 
          cardId="safety-check-card"
        />
        <FeatureCard 
          title="PRIVACY GUIDE" 
          description="Keep your privacy under your control with easy-to-use settings." 
          icon={<i className="fas fa-user-secret" id="privacy-guide-icon"></i>} 
          color="white" 
          imgSrc={img3} 
          cardId="privacy-guide-card"
        />
        <FeatureCard 
          title="ENHANCED SAFE BROWSING" 
          description="Browse with the confidence that you're staying safer online." 
          icon={<i className="fas fa-shield-alt" id="enhanced-safe-browsing-icon"></i>} 
          color="white" 
          imgSrc={img4} 
          cardId="enhanced-safe-browsing-card"
        />
      </div>
    </div>
  );
}
