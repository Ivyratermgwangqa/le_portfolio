// src/app/skills/page.tsx
import React, { useState } from "react";
import { DiJavascript1, DiPython, DiHtml5, DiCss3, DiReact, DiNodejsSmall, DiGit, DiGithub, DiLinux, DiMongodb, DiNpm, DiMysql, DiTerminal, DiRedis, DiUbuntu, DiVim, DiCode } from 'react-icons/di';
import { SiFlask, SiStreamlit, SiScikitlearn, SiCplusplus, SiC, SiJupyter, SiR, SiReact, SiVitest } from 'react-icons/si';
import { FaNetworkWired, FaGlobe, FaProjectDiagram } from 'react-icons/fa';
import { MdWifi } from 'react-icons/md';
import { AiOutlineGlobal, AiFillLock } from 'react-icons/ai';
import { FiServer } from 'react-icons/fi';
import { CgTerminal } from 'react-icons/cg';
import { BsCloudUpload, BsCloudDownload } from 'react-icons/bs';

const Skills: React.FC = () => {
  const [activeHorizontalTab, setActiveHorizontalTab] = useState("Technical");
  const [activeVerticalTab, setActiveVerticalTab] = useState("Programming Languages");

  const renderIcons = (icons: { Icon: any; label: string }[]) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '2rem', fontSize: '1rem' }}>
      {icons.map(({ Icon, label }) => (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '2rem', padding: '1rem', border: '1px solid #00e1ff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} key={label}>
          <Icon />
          <span style={{ marginTop: '0.5rem', fontSize: '1rem' }}>{label}</span>
        </div>
      ))}
    </div>
  );

  const technicalTabs = [
    { label: "Programming Languages", 
      brief: "These are the programming languages I am proficient in, ranging from general-purpose to web development-focused languages.",
      content: renderIcons([
        { Icon: SiCplusplus, label: "C++" },
        { Icon: SiC, label: "C" },
        { Icon: DiPython, label: "Python" },
        { Icon: DiJavascript1, label: "JavaScript" },
        { Icon: SiR, label: "R" },
        { Icon: DiCode, label: "Shell Scripting" },
      ])
    },
    { label: "Web Development", 
      brief: "These are the web development technologies I am proficient in, including front-end and back-end technologies.",
      content: renderIcons([
        { Icon: DiPython, label: "Python" },
        { Icon: DiJavascript1, label: "JavaScript" },
        { Icon: DiHtml5, label: "HTML5" },
        { Icon: DiCss3, label: "CSS3" },
        { Icon: DiReact, label: "React" },
        { Icon: DiNodejsSmall, label: "Node.js" },
      ])
    },
    { label: "Databases", 
      brief: "These are the database technologies I am proficient in, including both SQL and NoSQL databases.",
      content: renderIcons([
        { Icon: DiMongodb, label: "MongoDB" },
        { Icon: DiMysql, label: "MySQL" },
        { Icon: DiRedis, label: "Redis" },
      ])
    },
    { label: "Frameworks & Tools", 
      brief: "These are the frameworks and tools I use for development, including libraries for data analysis and machine learning.",
      content: renderIcons([
        { Icon: SiFlask, label: "Flask" },
        { Icon: SiStreamlit, label: "Streamlit" },
        { Icon: SiScikitlearn, label: "Scikit-learn" },
        { Icon: SiJupyter, label: "Jupyter" },
        { Icon: SiR, label: "R" },
        { Icon: SiReact, label: "React" },
        { Icon: SiVitest, label: "Vite" },
        { Icon: DiNpm, label: "npm" },
      ])
    },
    { label: "Version Control & Operating Systems", 
      brief: "These are the version control systems and operating systems I am proficient in.",
      content: renderIcons([
        { Icon: DiGit, label: "Git" },
        { Icon: DiGithub, label: "GitHub" },
        { Icon: DiLinux, label: "Linux" },
        { Icon: DiUbuntu, label: "Ubuntu" },
        { Icon: DiVim, label: "Vim" },
        { Icon: DiTerminal, label: "Terminal" },
      ])
    },
    { label: "Networking", 
      brief: "These are the networking technologies I am proficient in, including protocols and tools for network management.",
      content: renderIcons([
        { Icon: FaNetworkWired, label: "Ethernet" },
        { Icon: MdWifi, label: "Wi-Fi" },
        { Icon: FaProjectDiagram, label: "VLAN" },
        { Icon: AiOutlineGlobal, label: "TCP/IP" },
        { Icon: FaGlobe, label: "DNS" },
        { Icon: FiServer, label: "DHCP" },
        { Icon: AiFillLock, label: "HTTPS" },
        { Icon: BsCloudUpload, label: "FTP" },
        { Icon: CgTerminal, label: "SSH" },
      ])
    },
  ];

  const softSkillTabs = [
    { label: "Communication Skills", content: "I believe that great communication is the foundation of success. Whether I’m explaining a complex algorithm to a teammate, presenting a project to my professors, or documenting my code, I focus on being clear and effective. I also value active listening, as it helps me learn from others and improve my work based on feedback." },
    { label: "Problem-Solving and Critical Thinking", content: "For me, problem-solving is like a puzzle waiting to be solved. I enjoy breaking down complex challenges into smaller, manageable parts and using logical reasoning to find solutions. But I don’t stop there—I try to approach problems creatively, looking for unique and innovative ways to address them." },
    { label: "Time Management and Organization", content: "Balancing coursework, projects, and other responsibilities has taught me the importance of managing my time wisely. I make it a priority to plan ahead, meet deadlines, and stay organized, ensuring that I deliver quality work without unnecessary stress." },
    { label: "Teamwork and Collaboration", content: "I thrive in collaborative environments where ideas can flow freely. Working with others has helped me understand the importance of adaptability and conflict resolution. I enjoy being part of a team and contributing to a shared goal, whether it’s a group project or a coding competition." },
    { label: "Leadership and Initiative", content: "I’ve taken on leadership roles during my studies, whether as a peer mentor or a project lead. I enjoy guiding and motivating others, but I also take the initiative to learn and grow personally. I believe leadership is about inspiring others and being willing to step up when it matters most." },
    { label: "Technical Writing", content: "Clear and concise technical writing is something I take pride in. Whether I’m documenting code, writing a project report, or creating a presentation, I strive to make my work easy to understand and follow. It’s all about making complex ideas accessible to everyone." },
    { label: "Presentation and Public Speaking", content: "I’ve grown to enjoy presenting my work and ideas. Whether it’s a classroom presentation or a project defense, I focus on explaining my thoughts clearly and confidently. I aim to keep my audience engaged and make even the most technical topics relatable." },
    { label: "Emotional Intelligence (EQ)", content: "Understanding and working well with others is important to me. I try to be empathetic, understanding my teammates’ perspectives, and I work on staying calm and focused, even under pressure. I believe positivity and motivation can inspire everyone around me." },
    { label: "Microsoft Office Suite", content: "I am highly skilled in using Microsoft Office Suite, including Word, Excel, PowerPoint, and Access. I use Microsoft Word for creating well-structured documents, reports, and presentations with advanced formatting and professional layouts. With Excel, I am adept at data analysis, creating complex spreadsheets, using formulas and functions, and visualizing data through charts and pivot tables. My experience with PowerPoint includes designing engaging presentations that effectively convey information" },
  ];

  const renderVerticalTabs = (tabs: { label: string; brief?: string; content: React.ReactNode }[]) => (
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
        {tabs.find((tab) => tab.label === activeVerticalTab)?.brief && (
          <p style={{ marginBottom: '1rem', fontStyle: 'italic' }}>
            {tabs.find((tab) => tab.label === activeVerticalTab)?.brief}
          </p>
        )}
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
              setActiveVerticalTab("Communication Skills"); // Reset vertical tab to default
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
