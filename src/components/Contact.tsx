"use client";

import React, { useState } from "react";

interface ContactProps {
  email: string;
}

const Contact: React.FC<ContactProps> = ({ email }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: email,
    message: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (email) {
      window.location.href = `mailto:${email}?subject=Contacting You&body=${encodeURIComponent(
        formData.message
      )}`;
    }
  };

  return (
    <section style={{ padding: "2rem", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh" }}>
      <div style={{ textAlign: "center", width: "100%", maxWidth: "600px" }}>
        <h2>Contact Me</h2>
        <p>If you have any questions or just want to get in touch, feel free to send me a message:</p>
        <form id="contact-form" onSubmit={handleSubmit} style={{ width: "100%" }}>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "5px",
                border: "1px solid #19acc9",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "5px",
                border: "1px solid #13adcf",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter your message"
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "5px",
                border: "1px solid #14a0c7",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: "0.75rem 2rem",
              borderRadius: "5px",
              backgroundColor: "#0ed0de",
              color: "#060606",
              border: "1px solid #000000",
              cursor: "pointer",
              marginTop: "1rem",
              transition: "background-color 0.3s, transform 0.3s",
            }}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;