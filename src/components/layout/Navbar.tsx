// src/components/Navbar.tsx
"use client"; // Explicitly mark this as a Client Component

import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "center", gap: "2rem", padding: "1rem", backgroundColor: "#000000" }}>
      <Link href="/" legacyBehavior>
        <a style={{ color: "white", textDecoration: "underline" }}>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a style={{ color: "white", textDecoration: "underline" }}>About</a>
      </Link>
      <Link href="/projects" legacyBehavior>
        <a style={{ color: "white", textDecoration: "underline" }}>Projects</a>
      </Link>
      <Link href="/contact" legacyBehavior>
        <a style={{ color: "white", textDecoration: "underline" }}>Contact</a>
      </Link>
    </nav>
  );
};

export default Navbar;