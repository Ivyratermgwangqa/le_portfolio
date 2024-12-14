// src/components/Tabs.tsx
"use client";

import React, { useState } from "react";
import TypingAnimation from "../typinganimation/TypingAnimation";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div>
            <h1>About Me</h1>
            <TypingAnimation text="Hello! I'm Lerato Mgwangqa, a driven and skilled final-year BSc student specializing in Mathematical and Computer Sciences. I have hands-on experience in software development, data analysis, and networking. I'm proficient in Python, C/C++, and R, with a strong foundation in full-stack development, backend technologies, and machine learning. I have a proven track record as a peer mentor, where I enhanced student performance through organized study support and personal mentorship. I'm recognized for my problem-solving abilities, attention to detail, and dedication to continuous learning. I'm prepared to contribute effectively in roles that require technical acumen, analytical thinking, and project execution in software engineering and data-driven environments." />
          </div>
        );
      case "work":
        return (
          <div>
            <h2>Work Experience</h2>
            <h3>Sol Plaatje University</h3>
            <TypingAnimation text="Peer Mentor (January 2024 - November 2024)" />
            <ul style={{ textAlign: "left", display: "inline-block" }}>
              <li>Provided academic and personal support to over 20 students, enhancing their academic performance and study skills.</li>
              <li>Organized study groups and workshops, contributing to a collaborative learning environment.</li>
              <li>Collaborated with faculty to develop action plans for struggling students, supporting a retention increase within the program.</li>
            </ul>
          </div>
        );
      case "education":
        return (
          <div>
            <h2>Education</h2>
            <h3>Sol Plaatje University, Kimberley</h3>
            <TypingAnimation text="BSc in Mathematical and Computer Sciences (January 2022 - November 2024)" />
            <p>Completed coursework encompassing a broad spectrum of topics in computer science, mathematics, and statistics, including:</p>
            <ul style={{ textAlign: "left", display: "inline-block" }}>
              <li>Computer Organization, Computer Architecture, Programming, Data Structures and Algorithms</li>
              <li>Algorithm Analysis and Program Design, Operating Systems, Artificial Intelligence, Database Systems</li>
              <li>Mathematical foundations in Algebra, Linear Algebra, Calculus, Advanced Calculus, Probability Theory, and Mathematical Analysis</li>
              <li>Statistical expertise in Statistical Inference, Regression Analysis, Non-Parametric Statistics, Time Series Analysis, and Generalized Linear Models</li>
              <li>Proficiency in interdisciplinary topics such as Numerical Methods, Mathematical Modelling, and Markov Processes</li>
            </ul>
            <h3>African Leadership Experience (ALX)</h3>
            <TypingAnimation text="Software Engineering (January 2023 - August 2024)" />
            <p>Completed a comprehensive program focused on modern backend development techniques and tools. Key areas of expertise include:</p>
            <ul style={{ textAlign: "left", display: "inline-block" }}>
              <li>Languages & Frameworks: Modern JavaScript (ES6+), TypeScript, Node.js, Express.js, Python, C</li>
              <li>Backend Development: Advanced MySQL, NoSQL, Redis, Queuing systems, caching, pagination, user authentication, and data security</li>
              <li>DevOps & Systems Engineering: Linux basics, web servers (Nginx), application servers, load balancing, monitoring, CI/CD, and web stack debugging</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-3 gap-5">
        <button
          className={`btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-black-100 rounded hover:bg-black group py-1.5 px-2.5 ${activeTab === "about" ? "border-t-4 border-transparent" : "text-black-600 hover:border-indigo-600 py-4"}`}
          onClick={() => setActiveTab("about")}
        >
          <span className="w-56 h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-black">About Me</span>
        </button>
        <button
          className={`btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-black-100 rounded hover:bg-black group py-1.5 px-2.5 ${activeTab === "work" ? "border-t-4 border-transparent" : "text-black-600 hover:border-indigo-600 py-4"}`}
          onClick={() => setActiveTab("work")}
        >
          <span className="w-56 h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-black">Work Experience</span>
        </button>
        <button
          className={`btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-black-100 rounded hover:bg-black group py-1.5 px-2.5 ${activeTab === "education" ? "border-t-4 border-transparent" : "text-black-600 hover:border-indigo-600 py-4"}`}
          onClick={() => setActiveTab("education")}
        >
          <span className="w-56 h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-black">Education</span>
        </button>
      </div>
      <section style={{ padding: "2rem", textAlign: "center" }}>
        {renderContent()}
      </section>
    </div>
  );
};

export default Tabs;