// src/components/layout/Header.tsx
"use client"; // Explicitly mark this as a Client Component

import React from "react";

interface HeaderProps {
  currentSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentSection, scrollToSection }) => {
  return (
    <header className="bg-black text-red p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Lerato Portfolio</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <button
                className={`nav-link ${currentSection === "home" ? "active" : ""}`}
                onClick={() => scrollToSection("home")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${currentSection === "about" ? "active" : ""}`}
                onClick={() => scrollToSection("about")}
              >
                About
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${currentSection === "projects" ? "active" : ""}`}
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${currentSection === "skills" ? "active" : ""}`}
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${currentSection === "contact" ? "active" : ""}`}
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;