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
            <p style={{ fontStyle: 'normal', fontWeight: 'bold', letterSpacing: '2px', fontSize: '1.2rem', color: '#333', lineHeight: '1.6' }}>
              Hi, I&apos;m Lerato Mgwangqa, a Software Engineer with a strong foundation in Mathematical and Computer Sciences. My technical expertise spans Data Engineering, AI/ML, and Backend Systems, built on rigorous academic training in statistics, algorithms, and system architecture.
              <br /><br />
              I excel at designing scalable backend solutions, implementing intelligent systems using machine learning and NLP, and extracting actionable insights from complex datasets. My experience includes building full-stack applications with Node.js and React, developing ML-powered chatbots with Flask and Scikit-learn, and architecting database solutions using MySQL, MongoDB, and Redis.
              <br /><br />
              What drives me is systems thinking—approaching problems holistically, understanding how components interact, and architecting solutions that are both elegant and robust. I combine strong analytical skills from my mathematical background with practical software engineering to deliver production-ready applications. My approach is rooted in continuous learning, test-driven development, and writing clean, maintainable code.
              <br /><br />
              Whether implementing REST APIs with secure authentication, performing statistical analysis on large datasets, or optimizing database queries, I bring precision, creativity, and a relentless focus on solving real-world problems through technology.
            </p>
          </div>
        );
      case "work":
        return (
          <div>
            <h2>Work Experience</h2>
            <h3>Sasol</h3>
            <p style={{ marginBottom: '1rem', fontStyle: 'italic' }}>Data Engineering Trainee (2025 – Present)</p>
            <ul style={{ textAlign: "left", display: "inline-block" }}>
              <TypingAnimation text="🔧 Maintain and organize internal enterprise data systems" />
              <TypingAnimation text="📊 Assist with data governance, compliance, and data quality processes" />
              <TypingAnimation text="⚙️ Perform ETL, data transformation, storage, and data management tasks" />
              <TypingAnimation text="📈 Generate reports and analyze business data for stakeholders" />
              <TypingAnimation text="✅ Support data audits and data integrity checks" />
              <TypingAnimation text="🤝 Contribute to team-based projects involving data tools and data platforms" />
            </ul>
            <h3>Sol Plaatje University</h3>
            <p style={{ marginBottom: '1rem', fontStyle: 'italic' }}>Peer Mentor (2024)</p>
            <ul style={{ textAlign: "left", display: "inline-block" }}>
              <TypingAnimation text="🎓 Provided academic and personal support to 20+ first-time entering students" />
              <TypingAnimation text="📚 Improved student study skills and academic performance" />
              <TypingAnimation text="👥 Organized study groups and academic workshops" />
              <TypingAnimation text="🤝 Collaborated with faculty to develop action plans for struggling students" />
              <TypingAnimation text="💡 Demonstrated leadership, communication, mentoring, and documentation skills" />
            </ul>
          </div>
        );
      case "education":
        return (
          <div>
            <h2>Education</h2>
            <h3>Sol Plaatje University</h3>
            <p style={{ marginBottom: '1rem', fontStyle: 'italic' }}>BSc Honours in Computer Science (2025 – Present)</p>
            <p style={{ marginBottom: '1rem' }}>Studies paused due to full-time graduate trainee role</p>
            <p style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Major:</p>
            <ul style={{ textAlign: "left", display: "inline-block", marginBottom: '1rem' }}>
              <li>💻 Software Engineering</li>
            </ul>
            <p style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Minor:</p>
            <ul style={{ textAlign: "left", display: "inline-block", marginBottom: '1rem' }}>
              <li>🤖 Artificial Intelligence</li>
              <li>📊 Machine Learning</li>
              <li>🔐 Security</li>
            </ul>
            <p style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Specialized Academic & Research Experience:</p>
            <ul style={{ textAlign: "left", display: "inline-block", marginBottom: '1.5rem' }}>
              <li>🧠 Applied Machine Learning</li>
              <li>🕸️ Graph-based modeling using NetworkX</li>
              <li>🔍 Explainable AI (SHAP, LIME)</li>
              <li>⚠️ Anomaly detection</li>
              <li>🎣 Phishing detection research</li>
            </ul>
            <h3>Sol Plaatje University</h3>
            <p style={{ marginBottom: '1rem', fontStyle: 'italic' }}>BSc Mathematical and Computer Sciences (2022 – 2024)</p>
            <p style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Major:</p>
            <ul style={{ textAlign: "left", display: "inline-block", marginBottom: '1rem' }}>
              <li>💻 Computer Science</li>
              <li>📊 Statistics</li>
            </ul>
            <p style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Minor:</p>
            <ul style={{ textAlign: "left", display: "inline-block", marginBottom: '1rem' }}>
              <li>📐 Mathematics</li>
              <li>🔢 Applied Mathematics</li>
            </ul>
            <p style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Core Academic Foundations:</p>
            <ul style={{ textAlign: "left", display: "inline-block", marginBottom: '1.5rem' }}>
              <li>💻 Programming, Data Structures, Algorithms, Operating Systems</li>
              <li>🗄️ Databases, Artificial Intelligence, Computer Architecture</li>
              <li>📊 Probability Theory, Statistical Inference, Regression Analysis</li>
              <li>📈 Time Series Analysis, Generalized Linear Models</li>
              <li>📐 Linear Algebra, Calculus, Advanced Calculus, Mathematical Analysis</li>
            </ul>
            <h3>African Leadership Experience (ALX)</h3>
            <p style={{ marginBottom: '1rem', fontStyle: 'italic' }}>Software Engineering – Online (2023 – 2024)</p>
            <p style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Focus Areas:</p>
            <ul style={{ textAlign: "left", display: "inline-block" }}>
              <li>💻 Languages & Frameworks: JavaScript (ES6+), TypeScript, Node.js, Express.js, Python, C</li>
              <li>🔧 Backend Engineering: MySQL, NoSQL databases, Redis, authentication, security, caching, pagination</li>
              <li>⚙️ DevOps & Systems: Linux, Nginx, CI/CD pipelines, monitoring, load balancing, debugging</li>
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