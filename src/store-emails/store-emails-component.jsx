import React, { useState, useEffect } from "react";
import { Container, Input, Button } from "./store-email-style";

const EmailStoreExample = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("userEmail");
    if (stored) setEmail(stored);
  }, []);

  useEffect(() => {
    if (email) console.log("Current email:", email);
  }, [email]);

  const saveEmail = () => {
    localStorage.setItem("userEmail", email);
    console.log("Email saved:", email);
  };

  return (
    <Container>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <Button onClick={saveEmail}>Save Email</Button>
    </Container>
  );
};

export default EmailStoreExample;