import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import '../css/Page9.css';

const Page9 = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for the page loading
    setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 2000);

    if (!loading) {
      // GSAP animations for different sections of the page
      gsap.from(".faq-section", { opacity: 0, y: -10, duration: 0.5 });
      gsap.from(".cta-section", { opacity: 0, y: 50, duration: 1, delay: 0.2 });
      gsap.from(".download-button", { opacity: 0, scale: 0.8, duration: 1, delay: 1 });
      gsap.from(".footer-links .link-group", { opacity: 0, x: -30, stagger: 0.2, duration: 1, delay: 0.5 });
    }
  }, [loading]);

  return (
    <div className="container">
      {loading && (
        <div className="loader">
          {/* <h2>Loading...</h2> */}
        </div>
      )}

      {!loading && (
        <>
          <div className="faq-section">
            <h3>How do I update Chrome?</h3>
            <span className="plus-icon">+</span>
          </div>

          <div className="cta-section">
            <h2 style={{ color: "white", fontSize: "50px" }}>Take your browser with you</h2>
            <p>Download Chrome on your mobile device or tablet and sign into your account for the same browser experience, everywhere.</p>
            <button className="download-button" style={{ borderRadius: "30px" }}>Download Chrome</button>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Follow us</h4>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">YouTube</a></li>
              </ul>
            </div>

            <div className="link-group">
              <h4>Chrome Family</h4>
              <ul>
                <li><a href="#">Other Platforms</a></li>
                <li><a href="#">Chromebooks</a></li>
                <li><a href="#">Chromecast</a></li>
              </ul>
            </div>

            <div className="link-group">
              <h4>Enterprise</h4>
              <ul>
                <li><a href="#">Download Chrome Browser</a></li>
                <li><a href="#">Chrome Browser for Enterprise</a></li>
                <li><a href="#">Chrome Devices</a></li>
                <li><a href="#">ChromeOS</a></li>
                <li><a href="#">Google Cloud</a></li>
                <li><a href="#">Google Workspace</a></li>
              </ul>
            </div>

            <div className="link-group">
              <h4>Education</h4>
              <ul>
                <li><a href="#">Google Chrome Browser</a></li>
                <li><a href="#">Devices</a></li>
                <li><a href="#">Web Store</a></li>
              </ul>
            </div>

            <div className="link-group">
              <h4>Stay Connected</h4>
              <ul>
                <li><a href="#">Chrome Help</a></li>
                <li><a href="#">Update Chrome</a></li>
                <li><a href="#">Chrome Tips</a></li>
                <li><a href="#">Google Chrome Blog</a></li>
              </ul>
            </div>
          </div>

          <div className="copyright" style={{ fontSize: "20px" }}>
            <p>Google | Privacy and Terms | About Google | Google products</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Page9;
