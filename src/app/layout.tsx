// src/app/layout.tsx
"use client"; // Explicitly mark this as a Client Component

import React, { useState, useEffect } from "react";
import "../globals.css";
import Header from '../components/layout/Header';
import Footer from '../components/Footer';
import Button from "../components/Button"; // Import the Button component
import ProjectsPage from "./projects/page"; // Import the ProjectsPage component
import AboutPage from "./about/page"; // Import the AboutPage component
import Contact from "../components/Contact"; // Import the Contact component
import Skills from "./skills/page";
import { FiDownload } from "react-icons/fi";
import Photo from "../components/Photo"

const siteProps = {
  name: "Lerato Mgwangqa",
  title: "Software Engineer | Aspiring AI Engineer",
  email: "ivyratermgwangqa@gmail.com",
  gitHub: "Ivyratermgwangqa",
  instagram: "ivyrater0411",
  linkedIn: "lerato-mgwangqa-941344238",
  medium: "Lerato Mgwangqa",
  twitter: "LeratoMgwangqa",
  facebook: "Lerato Mgwangqa",
  whatsapp: "27672544756",
  youTube: "..........",
};

const HomePage: React.FC = () => {
  const [count, setCount] = useState(0); // State to track counter

  // Event handler for button click
  const handleClick = () => {
    setCount(count + 1); // Increment the count
  };

  return (
    <section className="h-full flex items-center justify-center">
      <div className="flex flex-col xl:flex-row items-center justify-center xl:pt-8 xl:pb-24">
        {/* text */}
        <div className="text-center xl:text-center">
          <span className="text-xl">Software Engineer|Aspiring AI Engineer</span>
          <h1 className="mb-6">
          <span style={{ fontSize: '65px' }}>Welcome I&apos;m</span> <br />
            <span className="text-accent">Lerato Mgwangqa</span>
            </h1>
            <div className=" order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
            </div>
          <div className="text-center xl:text-center">
            <p className="max-w-[700px] mb-15 text-white/80">
            A driven and skilled final-year BSc student specializing in Mathematical and Computer Sciences. I have hands-on experience in software development, data analysis, and networking. Im proficient in Python, C/C++, and R, with a strong foundation in full-stack development, backend technologies, and machine learning.
            </p>

            <div className="flex flex-col items-center gap-8">
              <a href="/cv.pdf" download>
              <Button
                text={<><FiDownload className="text-xl" /> Download CV</>}
                variant="outline"
                size="md"
                className="uppercase flex items-center gap-2"
                onClick={() => console.log("Button clicked")}
              />
              </a>
              <div className="mb-8 xl:mb-8"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default function RootLayout() {
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          current = section.getAttribute("id") || "home";
        }
      });
      setCurrentSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <html lang="en">
      <body style={{ backgroundColor: "#000000", color: "#fff", margin: "0", padding: "0" }}>
      <body className="bg-gray-100">
        <div className="flex flex-col min-h-screen">
          <Header currentSection={currentSection} scrollToSection={scrollToSection} />
          <main className="flex-grow container mx-auto p-6">
            <section id="home">
              <HomePage />
            </section>
            <section id="about">
              <AboutPage />
            </section>
            <section id="projects">
              <ProjectsPage />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="contact">
              <Contact email={siteProps.email} />
            </section>
          </main>
          <Footer
            name={siteProps.name}
            email={siteProps.email}
            gitHub={siteProps.gitHub}
            instagram={siteProps.instagram}
            linkedIn={siteProps.linkedIn}
            medium={siteProps.medium}
            twitter={siteProps.twitter}
            facebook={siteProps.facebook}
            whatsapp={siteProps.whatsapp}
            youTube={siteProps.youTube}
          />
        </div>
      </body>
      </body>
    </html>
  );
}