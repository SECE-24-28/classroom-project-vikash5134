import React from "react";

const FourOFourComponent = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "#f8f9fa",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "120px", margin: "0", color: "#e74c3c" }}>404</h1>
      <h2 style={{ fontSize: "32px", marginBottom: "20px", color: "#333" }}>Page Not Found</h2>
      <p style={{ fontSize: "18px", color: "#666", marginBottom: "30px" }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <a href="/" style={{
        padding: "12px 30px",
        backgroundColor: "#667eea",
        color: "white",
        textDecoration: "none",
        borderRadius: "5px",
        fontSize: "16px"
      }}>
        Go Back Home
      </a>
    </div>
  );
};

export default FourOFourComponent;