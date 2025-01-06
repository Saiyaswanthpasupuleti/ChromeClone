import React from 'react';
import '../css/Page7.css';
import myimage from "../assets/ai_desktop-2x.webp";

function FeatureCard({ title, description, icon, color }) {
  return (
    <div className="feature-card">
      <div className="icon-container">
        {icon}
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default function Page7() {
  return (
    <div className="container" style={{marginTop:"160px"}}>
        <h1 className="main-title" style={{fontSize:"50px"}}>The browser <br /><span style={{color:"orange"}}>Built</span>  by Google</h1>
      <div className="hero-section">
        <h1>Access AI superpowers while you browse.</h1>
        <p>Google is integrating artificial intelligence to make our products more useful. We use AI for features like Search, Google Translate, and more, and we're innovating new technologies responsibly.</p>
        <img src={myimage} alt="AI Superpowers" />
        <button className="explore-button">Explore Google AI</button>
      </div>

      <div className="feature-cards">
        {/* Feature Cards can be added later */}
      </div>
    </div>
  );
}
