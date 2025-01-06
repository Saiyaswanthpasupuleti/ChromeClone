import React from 'react';
import '../css/Page6.css'; // Import the CSS file
import img1 from "../assets/save-password-2x.webp"; // Correct image imports
import img2 from "../assets/safety-check-2x.webp";
import img3 from "../assets/privacy-guide-2x.webp";
import img4 from "../assets/malware-alert-2x.webp";

function FeatureCard({ title, description, icon, color, imgSrc, extraDescription, cardId }) {
  return (
    <div className={`feature-card ${cardId}`} style={{ backgroundColor: color }}>
      <div className="icon-container">
        {icon}
      </div>
      <img src={imgSrc} alt={title} className="feature-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      {extraDescription && <p className="extra-description">{extraDescription}</p>} {/* Conditional rendering for extra description */}
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
          extraDescription="Chrome has Google Password Manager built in, which makes it simple to save, manage, and protect your passwords online. It also helps you create stronger passwords for every account you use. Learn more about Password Manager."
          icon={<i className="fas fa-key" id="password-manager-icon"></i>} 
          color="white" 
          imgSrc={img1} 
          cardId="password-manager-card"
        />
        <FeatureCard 
          title="SAFETY CHECK" 
          description="Check your safety level in real time with just one click." 
          extraDescription="Chrome's Safety Check confirms the overall security and privacy of your browsing experience, including your saved passwords, extensions and settings. If something needs attention, Chrome will help you fix it. Learn more about safety on Chrome"
          icon={<i className="fas fa-shield-alt" id="safety-check-icon"></i>} 
          color="white" 
          imgSrc={img2} 
          cardId="safety-check-card"
        />
        <FeatureCard 
          title="PRIVACY GUIDE" 
          description="Keep your privacy under your control with easy-to-use settings." 
          extraDescription="Chrome's Safe Browsing warns you about malware or phishing attacks. Turn on Enhanced Safe Browsing for even more safety protections. Learn more about Safe Browsing"
          icon={<i className="fas fa-user-secret" id="privacy-guide-icon"></i>} 
          color="white" 
          imgSrc={img3} 
          cardId="privacy-guide-card"
        />
        <FeatureCard 
          title="ENHANCED SAFE BROWSING" 
          description="Browse with the confidence that you're staying safer online." 
          extraDescription="Chrome makes it easy to understand exactly what you’re sharing online and who you’re sharing it with. Simply use the Privacy Guide, a step-by-step tour of your privacy settings. Learn more about intuitive safety controls"
          icon={<i className="fas fa-shield-alt" id="enhanced-safe-browsing-icon"></i>} 
          color="white" 
          imgSrc={img4} 
          cardId="enhanced-safe-browsing-card"
        />
      </div>
    </div>
  );
}
