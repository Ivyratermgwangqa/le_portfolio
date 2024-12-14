// src/app/projects/page.tsx
"use client"; // Explicitly mark this as a Client Component

import React from "react";
import Carousel from "../../components/carousel/Carousel"
import { url } from "inspector";

const projects = [
  {
    title: "Learnaz-Hub",
    date: "May 2024 - July 2024",
    image: "/images/Learnaz_Hub.png",
    description: "Learnaz Hub is an E-learning platform designed for users of all ages to learn new skills and gain knowledge in various fields.",
    tools: "Tools Used: Node.js (Express), MongoDB, TailwindCSS, React, bcrypt",
    url: "https://learnaz-hub.vercel.app/",
  },
  {
    title: "Residence-Based Management System",
    date: "August 2023 - November 2023",
    image: "/images/Residence_Based_Management_System.png",
    description: "Developed a system to streamline and manage student residence data, improving administrative efficiency.",
    tools: "Tools Used: MySQL, HTML5, CSS3, JavaScript",
    url: "https://github.com/Ivyratermgwangqa/Student-Residence-Management-System.git"
  },
  {
    title: "C Printf Implementation",
    date: "July 2023 - August 2023",
    image: "/images/C_Printf_Implementation.png",
    description: "Created a simplified version of the C printf function to deepen understanding of C’s low-level functionality.",
    tools: "Tools Used: C Programming Language",
    url: "https://github.com/Ivyratermgwangqa/printf.git"
  },
  {
    title: "Chatbot Project",
    date: "August 2024 - October 2024",
    image: "/images/Chatbot_Project.png",
    description: "Built a chatbot for intent classification and NLP, using machine learning for enhanced user interaction.",
    tools: "Tools Used: Python, Flask, Scikit-Learn, NLTK, Pandas, HTML, CSS",
    url: "https://github.com/Ivyratermgwangqa/my-chatbot.git"
  },
  {
    title: "GitHub Top Repo Analysis",
    date: "May 2023 - June 2023",
    image: "/images/GitHub_Top_Repo_Analysis.png",
    description: "Analyzed GitHub’s top repositories to identify trends in programming languages and technologies.",
    tools: "Tools Used: Python, Streamlit, GitHub API, Data Analysis Techniques",
    url: "https://github.com/Ivyratermgwangqa/github-top-repos-analysis.git"
  },
];

export default function ProjectsPage() {
  return (
    <section style={{ padding: "2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>My Projects</h1>
      <Carousel projects={projects} /> 
    </section>
  );
}