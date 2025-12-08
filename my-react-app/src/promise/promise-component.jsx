import React from "react";

const PromiseComponent = () => {
  return (
    <div style={{ padding: "60px 20px", textAlign: "center", backgroundColor: "#f8f9fa" }}>
      <h1 style={{ fontSize: "42px", fontWeight: "700", marginBottom: "20px", color: "#333" }}>
        Our Promise
      </h1>
      <p style={{ fontSize: "18px", color: "#666", marginBottom: "50px" }}>
        As part of our high quality service, we'd like to offer something extra too.
      </p>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
        gap: "30px", 
        maxWidth: "1200px", 
        margin: "0 auto" 
      }}>
        <div style={{ 
          background: "white", 
          padding: "30px", 
          borderRadius: "10px", 
          borderTop: "4px solid #27c5c3", 
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" 
        }}>
          <div style={{ fontSize: "48px", marginBottom: "20px", color: "#27c5c3" }}>💻</div>
          <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "15px", color: "#333" }}>
            Top Code Quality
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#666" }}>
            Our commitment goes beyond mere code – it encompasses providing solutions. You receive W3C fully compliant markup, without any compromise on quality.
          </p>
        </div>

        <div style={{ 
          background: "white", 
          padding: "30px", 
          borderRadius: "10px", 
          borderTop: "4px solid #f2a900", 
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" 
        }}>
          <div style={{ fontSize: "48px", marginBottom: "20px", color: "#f2a900" }}>📱</div>
          <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "15px", color: "#333" }}>
            Responsive
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#666" }}>
            We understand the value of a positive attitude, timely responsiveness, and adaptability. We're dedicated to listening and leveraging our utmost capabilities to serve you.
          </p>
        </div>

        <div style={{ 
          background: "white", 
          padding: "30px", 
          borderRadius: "10px", 
          borderTop: "4px solid #00c0ef", 
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" 
        }}>
          <div style={{ fontSize: "48px", marginBottom: "20px", color: "#00c0ef" }}>👥</div>
          <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "15px", color: "#333" }}>
            Rockstar Team
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#666" }}>
            Our expertise is our unique selling proposition. You'll have access to an all-star team of experienced professionals fully dedicated to serving you.
          </p>
        </div>

        <div style={{ 
          background: "white", 
          padding: "30px", 
          borderRadius: "10px", 
          borderTop: "4px solid #9b59b6", 
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" 
        }}>
          <div style={{ fontSize: "48px", marginBottom: "20px", color: "#9b59b6" }}>⚡</div>
          <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "15px", color: "#333" }}>
            Fast Turn-arounds
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#666" }}>
            The importance of speed is on par with quality for us. We are swift and capable of providing high-quality code within a timeframe that suits your preferences.
          </p>
        </div>

        <div style={{ 
          background: "white", 
          padding: "30px", 
          borderRadius: "10px", 
          borderTop: "4px solid #e74c3c", 
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" 
        }}>
          <div style={{ fontSize: "48px", marginBottom: "20px", color: "#e74c3c" }}>🛟</div>
          <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "15px", color: "#333" }}>
            Life-time support
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#666" }}>
            Our commitment to code quality is exemplified by our enduring support. If any bugs happen to emerge, feel free to reach out to us for assistance.
          </p>
        </div>

        <div style={{ 
          background: "white", 
          padding: "30px", 
          borderRadius: "10px", 
          borderTop: "4px solid #2ecc71", 
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" 
        }}>
          <div style={{ fontSize: "48px", marginBottom: "20px", color: "#2ecc71" }}>🛡️</div>
          <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "15px", color: "#333" }}>
            Secured Agreement
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#666" }}>
            The creative work you receive is entirely your own, and we respect that. We assure you of our readiness to formalize this with an NDA.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromiseComponent;