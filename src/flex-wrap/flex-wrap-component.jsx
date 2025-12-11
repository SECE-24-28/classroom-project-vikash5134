import React from "react";

const FlexWrapComponent = () => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f0f0f0", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#333" }}>
        Flex Wrap Examples
      </h1>
      
      {/* Example 1: flex-wrap: nowrap */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#555", marginBottom: "10px" }}>flex-wrap: nowrap (default)</h2>
        <div style={{
          display: "flex",
          flexWrap: "nowrap",
          border: "2px solid #333",
          padding: "10px",
          backgroundColor: "white"
        }}>
          <div style={{ width: "200px", height: "100px", backgroundColor: "red", margin: "5px", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>1</div>
          <div style={{ width: "200px", height: "100px", backgroundColor: "green", margin: "5px", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>2</div>
          <div style={{ width: "200px", height: "100px", backgroundColor: "blue", margin: "5px", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>3</div>
          <div style={{ width: "200px", height: "100px", backgroundColor: "orange", margin: "5px", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>4</div>
          <div style={{ width: "200px", height: "100px", backgroundColor: "purple", margin: "5px", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>5</div>
        </div>
      </div>

      {/* Example 2: flex-wrap: wrap */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#555", marginBottom: "10px" }}>flex-wrap: wrap</h2>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          border: "2px solid #333",
          padding: "10px",
          backgroundColor: "white",
          maxWidth: "600px"
        }}>
          <div style={{ width: "200px", height: "100px", backgroundColor: "red", margin: "5px", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>1</div>
          <div style={{ width: "200px", height: "100px", backgroundColor: "green", margin: "5px", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>2</div>
          <div style={{ width: "200px", height: "100px", backgroundColor: "blue", margin: "5px", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>3</div>
          <div style={{ width: "200px", height: "100px", backgroundColor: "orange", margin: "5px", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>4</div>
          <div style={{ width: "200px", height: "100px", backgroundColor: "purple", margin: "5px", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>5</div>
        </div>
      </div>

      {/* Example 3: flex-wrap: wrap-reverse */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#555", marginBottom: "10px" }}>flex-wrap: wrap-reverse</h2>
        <div style={{
          display: "flex",
          flexWrap: "wrap-reverse",
          border: "2px solid #333",
          padding: "10px",
          backgroundColor: "white",
          maxWidth: "600px"
        }}>
          <div style={{ width: "200px", height: "100px", backgroundColor: "red", margin: "5px", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>1</div>
          <div style={{ width: "200px", height: "100px", backgroundColor: "green", margin: "5px", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>2</div>
          <div style={{ width: "200px", height: "100px", backgroundColor: "blue", margin: "5px", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>3</div>
          <div style={{ width: "200px", height: "100px", backgroundColor: "orange", margin: "5px", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>4</div>
          <div style={{ width: "200px", height: "100px", backgroundColor: "purple", margin: "5px", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>5</div>
        </div>
      </div>
    </div>
  );
};

export default FlexWrapComponent;