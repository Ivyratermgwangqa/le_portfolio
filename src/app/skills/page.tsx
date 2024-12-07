// src/app/skills/page.tsx
import React, { useState } from "react";

const Skills: React.FC = () => {
  const [activeHorizontalTab, setActiveHorizontalTab] = useState("Technical");
  const [activeVerticalTab, setActiveVerticalTab] = useState("Programming Languages");

  const technicalTabs = [
    { label: "Programming Languages", content: "Python, C/C++, R, Shell Scripting" },
    { label: "Web Development", content: "HTML5, CSS3, JavaScript (Express.js, Node.js)" },
    { label: "Databases", content: "MySQL, MongoDB, Redis" },
    { label: "Frameworks & Tools", content: "Flask, Streamlit, Scikit-Learn, NLTK, Jupyter Notebook, Joblib, React.js, Unit Testing" },
    { label: "Version Control & Operating Systems", content: "Git, GitHub, Linux (Ubuntu WSL), vi/vim" },
    { label: "Networking", content: "Ethernet, Wi-Fi, VLAN, NAT, TCP/IP, DNS, DHCP, HTTP/HTTPS, FTP/SFTP, SSH" },
  ];

  const softSkillTabs = [
    { label: "Technical Writing", content: "Technical Writing, Collaboration, Time Management, Public Speaking, Analytical Thinking, Resilience, Attention to Detail, Adaptability" },
    { label: "Collaboration", content: "Collaboration skills content" },
    { label: "Time Management", content: "Time Management skills content" },
    { label: "Public Speaking", content: "Public Speaking skills content" },
    { label: "Analytical Thinking", content: "Analytical Thinking skills content" },
    { label: "Resilience", content: "Resilience skills content" },
    { label: "Attention to Detail", content: "Attention to Detail skills content" },
    { label: "Adaptability", content: "Adaptability skills content" },
    { label: "Microsoft Office Suite", content: "Excel, PowerPoint, Word, and other applications" },
  ];

  const renderVerticalTabs = (tabs: { label: string; content: string }[]) => (
    <div className="flex">
      <div className="w-1/4 border-r border-indigo-600">
        <ul className="list-none p-0">
          {tabs.map((tab) => (
            <li key={tab.label}>
              <button
                className={`px-4 py-2 mb-2 ${activeVerticalTab === tab.label ? "bg-indigo-600 text-white" : "text-indigo-600 border border-indigo-600"}`}
                onClick={() => setActiveVerticalTab(tab.label)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 p-4">
        {tabs.find((tab) => tab.label === activeVerticalTab)?.content}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-6">
      <section style={{ padding: "2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>My Skills</h1>
        <div className="flex justify-center mb-4">
          <button
            className={`relative inline-block font-medium group py-1.5 px-2.5 ${activeHorizontalTab === "Technical" ? "border-t-4" : "text-indigo-600 border-indigo-600 py-4"}`}
            onClick={() => {
              setActiveHorizontalTab("Technical");
              setActiveVerticalTab("Programming Languages"); // Reset vertical tab to default
            }}
          >
            <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-indigo-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-black border border-indigo-600 group-hover:bg-black-50"></span>
            <span className="relative text-indigo-600">Technical Skills</span>
          </button>
          <button
            className={`relative inline-block font-medium group py-1.5 px-2.5 ml-2 ${activeHorizontalTab === "Soft" ? "border-t-4" : "text-indigo-600 border-indigo-600 py-4"}`}
            onClick={() => {
              setActiveHorizontalTab("Soft");
              setActiveVerticalTab("Technical Writing"); // Reset vertical tab to default
            }}
          >
            <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-indigo-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-black border border-indigo-600 group-hover:bg-black-50"></span>
            <span className="relative text-indigo-600">Soft Skills</span>
          </button>
        </div>

        {activeHorizontalTab === "Technical" && renderVerticalTabs(technicalTabs)}
        {activeHorizontalTab === "Soft" && renderVerticalTabs(softSkillTabs)}
      </section>
    </div>
  );
};

export default Skills;
