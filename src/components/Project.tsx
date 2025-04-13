"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface Project {
  id: string
  title: string
  description: string
  image: string
  github: string
  deployed: string
  techStack: string[]
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"featured" | "all" | "case-study">("featured")
  const navigate = useNavigate()
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [allIndex, setAllIndex] = useState(0);
  const [caseStudyIndex, setCaseStudyIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(6);

  const featuredProjects: Project[] = [
    {
      id: "project1",
      title: "Real-time Chat Application",
      description: "A deep dive into creating a modern chat application",
      image: "https://placehold.co/300x200",
      github: "https://github.com/username/chat-app",
      deployed: "https://chat-app.example.com",
      techStack: ["React", "WebSocket", "Node.js"],
    },
    {
      id: "project2",
      title: "AI-Powered Image Recognition System",
      description: "Developing an advanced image recognition system using TensorFlow and React",
      image: "https://placehold.co/300x200",
      github: "https://github.com/username/ai-vision",
      deployed: "https://ai-vision.example.com",
      techStack: ["React", "TensorFlow", "Python"],
    },
    {
      id: "project3",
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with modern design and seamless payment integration",
      image: "https://placehold.co/300x200",
      github: "https://github.com/username/ecommerce",
      deployed: "https://ecommerce.example.com",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    }
  ]

  const allProjects: Project[] = [
    ...featuredProjects,
    {
      id: "project4",
      title: "Car Accident Detector System",
      description: "A Car Accident Detector & Alert System using BlackBox Technology",
      image: "https://placehold.co/300x200",
      github: "https://github.com/username/portfolio",
      deployed: "https://portfolio.example.com",
      techStack: ["Arduino", "Blynk"],
    },
    {
      id: "project5",
      title: "Car Accident Detector System",
      description: "A Car Accident Detector & Alert System using BlackBox Technology",
      image: "https://placehold.co/300x200",
      github: "https://github.com/username/portfolio",
      deployed: "https://portfolio.example.com",
      techStack: ["Arduino", "Blynk"],
    },
    {
      id: "project6",
      title: "Car Accident Detector System",
      description: "A Car Accident Detector & Alert System using BlackBox Technology",
      image: "https://placehold.co/300x200",
      github: "https://github.com/username/portfolio",
      deployed: "https://portfolio.example.com",
      techStack: ["Arduino", "Blynk"],
    },
    
  ]

  const caseStudies: Project[] = [
    {
      id: "project7",
      title: "Healthcare Management System",
      description: "A comprehensive healthcare management system for clinics",
      image: "https://placehold.co/300x200",
      github: "https://github.com/username/healthcare",
      deployed: "https://healthcare.example.com",
      techStack: ["React", "Node.js", "PostgreSQL", "HIPAA"],
    }
  ]

  const handleProjectClick = (projectId: string) => {
    navigate(`/blog/${projectId}`);
  };

  const getDisplayProjects = () => {
    switch (activeTab) {
      case "featured":
        return featuredProjects
      case "all":
        return allProjects
      case "case-study":
        return caseStudies
      default:
        return featuredProjects
    }
  }

  const getCurrentIndex = () => {
    switch (activeTab) {
      case "featured":
        return featuredIndex;
      case "all":
        return allIndex;
      case "case-study":
        return caseStudyIndex;
      default:
        return featuredIndex;
    }
  };

  const setCurrentIndex = (newIndex: number) => {
    switch (activeTab) {
      case "featured":
        setFeaturedIndex(newIndex);
        break;
      case "all":
        setAllIndex(newIndex);
        break;
      case "case-study":
        setCaseStudyIndex(newIndex);
        break;
      default:
        setFeaturedIndex(newIndex);
    }
  };

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth <= 768) {
        setCardsToShow(3);
      } else {
        setCardsToShow(6);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);

    return () => {
      window.removeEventListener('resize', updateCardsToShow);
    };
  }, []);

  const handleNext = () => {
    const newIndex = getCurrentIndex() + cardsToShow;
    if (newIndex >= getDisplayProjects().length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(newIndex);
    }
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePrev = () => {
    const newIndex = (getCurrentIndex() - cardsToShow + getDisplayProjects().length) % getDisplayProjects().length;
    setCurrentIndex(newIndex);
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="projects-container">
      <div className="projects-content">
        <section className="projects-section" id="projects">
          <h2 className="projects-title">Projects</h2>
          <p className="projects-subtitle">My recent work</p>

          <div className="projects-tabs">
            <button
              className={`qualification-button ${activeTab === "featured" ? "active" : ""}`}
              onClick={() => setActiveTab("featured")}
            >
              Featured
            </button>

            <button
              className={`qualification-button ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              All Projects
            </button>

            <button
              className={`qualification-button ${activeTab === "case-study" ? "active" : ""}`}
              onClick={() => setActiveTab("case-study")}
            >
              Case Study
            </button>
          </div>

          <div className="projects-grid">
            {getDisplayProjects().slice(getCurrentIndex(), getCurrentIndex() + cardsToShow).map((project) => (
              <div key={project.id} className="project-card" onClick={() => handleProjectClick(project.id)}>
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tech-stack">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="project-tech">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>GitHub</span>
                    </a>
                    <a 
                      href={project.deployed} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15 3h6v6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 14L21 3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {getDisplayProjects().length > cardsToShow && (
            <div className="carousel-controls">
              <button onClick={handlePrev} className="carousel-button">Previous</button>
              <button onClick={handleNext} className="carousel-button">Next</button>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

