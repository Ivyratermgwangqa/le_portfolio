// src/app/projects/page.tsx
"use client"; // Explicitly mark this as a Client Component

import React from "react";
import Carousel from "/home/lerato/le_portfolio/src/app/carousel/carousel"

const projects = [
  {
    title: "Learnaz-Hub",
    date: "May 2024 - July 2024",
    image: "https://via.placeholder.com/800x400",
    description: "Learnaz Hub is an E-learning platform designed for users of all ages to learn new skills and gain knowledge in various fields.",
    tools: "Tools Used: MySQL, HTML5, CSS3, JavaScript",
    url: "https://learnaz-hub.vercel.app/",
  },
  {
    title: "Residence-Based Management System",
    date: "August 2023 - November 2023",
    description: "Developed a system to streamline and manage student residence data, improving administrative efficiency.",
    tools: "Tools Used: MySQL, HTML5, CSS3, JavaScript",
  },
  {
    title: "C Printf Implementation",
    date: "July 2023 - August 2023",
    description: "Created a simplified version of the C printf function to deepen understanding of C’s low-level functionality.",
    tools: "Tools Used: C Programming Language",
  },
  {
    title: "Chatbot Project",
    date: "August 2024 - October 2024",
    description: "Built a chatbot for intent classification and NLP, using machine learning for enhanced user interaction.",
    tools: "Tools Used: Python, Flask, Scikit-Learn, NLTK, Pandas, HTML, CSS",
  },
  {
    title: "GitHub Top Repo Analysis",
    date: "May 2023 - June 2023",
    description: "Analyzed GitHub’s top repositories to identify trends in programming languages and technologies.",
    tools: "Tools Used: Python, Streamlit, GitHub API, Data Analysis Techniques",
  },
];

export default function ProjectsPage() {
  return (
    <section style={{ padding: "2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>My Projects</h1>
      <Carousel projects={projects} /> 
      {/* <ul style={{ listStyleType: "none", padding: 0 }}>
        {projects.map((project, index) => (
          <li key={index} style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.5rem", margin: 0 }}>{project.title}</h2>
            <p style={{ margin: "0.5rem 0" }}>{project.date}</p>
            <p style={{ margin: "0.5rem 0" }}>{project.description}</p>
            <p style={{ margin: "0.5rem 0", fontStyle: "italic" }}>{project.tools}</p>
          </li>
        ))}
      </ul> */}
    </section>
  );
}