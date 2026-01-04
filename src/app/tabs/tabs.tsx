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
              Hi, I'm Lerato Mgwangqa, a Software Engineer with a strong foundation in Mathematical and Computer Sciences. My technical expertise spans Data Engineering, AI/ML, and Backend Systems, built on rigorous academic training in statistics, algorithms, and system architecture.
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
            <h3>Sol Plaatje University</h3>
            <p style={{ marginBottom: '1rem', fontStyle: 'italic' }}>Peer Mentor (January 2024 - November 2024)</p>
            <ul style={{ textAlign: "left", display: "inline-block" }}>
              <TypingAnimation text="🎓 Provided individualized academic and personal support to over 20 students, significantly improving their study skills and boosting academic performance." />
              <TypingAnimation text="🤝 Designed and facilitated study groups and interactive workshops, fostering a collaborative and inclusive learning environment that encouraged peer-to-peer knowledge sharing." />
              <TypingAnimation text="📋 Partnered with faculty to create tailored action plans for at-risk students, contributing to a measurable increase in student retention and success within the program." />
              <TypingAnimation text="🌟 Developed mentorship frameworks and feedback systems to track and measure the progress of mentees, ensuring consistent improvement and personal growth." />
              <TypingAnimation text="🔑 Acted as a bridge between students and faculty, advocating for student needs and promoting a culture of open communication and mutual respect." />
              <TypingAnimation text="🗣️ Conducted motivational sessions and skill-building workshops on time management, effective study strategies, and career planning to empower students for long-term success." />
              <TypingAnimation text="💻 Leveraged technology to create virtual support groups and online resources, ensuring accessibility and continuous learning for students in hybrid or remote settings." />
              <TypingAnimation text="📚 Created structured learning modules and study materials tailored to diverse learning styles, making academic content more approachable and engaging." />
              <TypingAnimation text="🌍 Encouraged a global mindset by mentoring students from diverse backgrounds, emphasizing cultural sensitivity and inclusivity in learning experiences." />
              <TypingAnimation text="📈 Applied data-driven techniques to identify common academic challenges and proactively address them through customized solutions and resource allocation." />
</ul>
          </div>
        );
      case "education":
        return (
          <div>
            <h2>Education</h2>
            <h3>Sol Plaatje University, Kimberley</h3>
            <p style={{ marginBottom: '1rem', fontStyle: 'italic' }}>BSc in Mathematical and Computer Sciences (January 2022 - November 2024)</p>
            <p>Completed coursework encompassing a broad spectrum of topics in computer science, mathematics, and statistics, including:</p>
            <ul style={{ textAlign: "left", display: "inline-block" }}>
              <li>📚 Computer Organization, Computer Architecture, Programming, Data Structures and Algorithms</li>
              <li>📈 Algorithm Analysis and Program Design, Operating Systems, Artificial Intelligence, Database Systems</li>
              <li>📐 Mathematical foundations in Algebra, Linear Algebra, Calculus, Advanced Calculus, Probability Theory, and Mathematical Analysis</li>
              <li>📊 Statistical expertise in Statistical Inference, Regression Analysis, Non-Parametric Statistics, Time Series Analysis, and Generalized Linear Models</li>
              <li>🔢 Proficiency in interdisciplinary topics such as Numerical Methods, Mathematical Modelling, and Markov Processes</li>
            </ul>
            <h3>African Leadership Experience (ALX)</h3>
            <p style={{ marginBottom: '1rem', fontStyle: 'italic' }}>Software Engineering (January 2023 - August 2024)</p>
            <p>Completed a comprehensive program focused on modern backend development techniques and tools. Key areas of expertise include:</p>
            <ul style={{ textAlign: "left", display: "inline-block" }}>
              <li>💻 Languages & Frameworks: Modern JavaScript (ES6+), TypeScript, Node.js, Express.js, Python, C</li>
              <li>🔧 Backend Development: Advanced MySQL, NoSQL, Redis, Queuing systems, caching, pagination, user authentication, and data security</li>
              <li>⚙️ DevOps & Systems Engineering: Linux basics, web servers (Nginx), application servers, load balancing, monitoring, CI/CD, and web stack debugging</li>
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