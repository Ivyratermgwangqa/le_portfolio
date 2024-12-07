// src/components/Carousel.js
import React, { useState } from "react";
import Image from 'next/image';
import "./carousel.css";

const Carousel = ({ projects }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    return (
        <div className="carousel">
            <button className="carousel-button prev" onClick={prevSlide}>
                &#10094;
            </button>
            <div className="carousel-container">
                <div
                    className="carousel-inner"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {projects.map((project, index) => (
                        <div key={index} className="carousel-item">
                            <h3>{project.title}</h3>
                            <Image src={project.image} alt={project.title} layout="responsive" width={500} height={300} />
                            <p style={{ margin: "0.5rem 0" }}>{project.description}</p>
                            <p style={{ margin: "0.5rem 0", fontStyle: "italic" }}>{project.tools}</p>
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <button className="carousel-button next" onClick={nextSlide}>
                &#10095;
            </button>
        </div>
    );
};

export default Carousel;