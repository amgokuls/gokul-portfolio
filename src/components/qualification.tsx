"use client"

import { useState } from "react"

export default function Qualification() {
  const [activeTab, setActiveTab] = useState<"education" | "experience">("education")

  return (
    <section className="qualification-section" id="qualification">
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2 className="qualification-title">Qualification</h2>
        <p className="qualification-subtitle">My personal journey</p>
      </div>

      <div className="qualification-tabs">
        <button
          className={`qualification-button ${activeTab === "education" ? "active" : ""}`}
          onClick={() => setActiveTab("education")}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22 10V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 12L2 9L12 6L22 9L12 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 12V17C6 17 8.5 19 12 19C15.5 19 18 17 18 17V12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Education
        </button>

        <button
          className={`qualification-button ${activeTab === "experience" ? "active" : ""}`}
          onClick={() => setActiveTab("experience")}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 7V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M12 12V12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 12V12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 12V12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Experience
        </button>
      </div>

      <div className="qualification-timeline">
        {/* Timeline line */}
        <div className="qualification-timeline-line"></div>

        {activeTab === "education" && (
          <div className="timeline-content">
            {/* B.tech - Left */}
            <div className="qualification-grid">
              <div className="qualification-content-left">
                <h3 className="qualification-title-item">B.Tech IT</h3>
                <p className="qualification-subtitle-item">Kpriet - Institute</p>
                <div className="qualification-calendar qualification-calendar-left">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 2V6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 2V6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 10H21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>2023 - Present</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
              </div>
            </div>

            {/* Diploma - Right */}
            <div className="qualification-grid">
              <div></div>
              <div className="qualification-content-right timeline-item">
                <div className="timeline-dot"></div>
                <h3 className="qualification-title-item">Diploma in ECE</h3>
                <p className="qualification-subtitle-item">Nptc - Institute</p>
                <div className="qualification-calendar qualification-calendar-right">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 2V6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 2V6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 10H21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>2020 - 2023</span>
                </div>
              </div>
            </div>

            {/* 10th - Left */}
            <div className="qualification-grid">
              <div className="qualification-content-left">
                <h3 className="qualification-title-item">SSLC</h3>
                <p className="qualification-subtitle-item">Rvg - Institute</p>
                <div className="qualification-calendar qualification-calendar-left">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 2V6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 2V6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 10H21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>2019 - 2020</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "experience" && (
          <div className="timeline-content">
            {/* Art Director - Right */}
            <div className="qualification-grid">
              <div></div>
              <div className="qualification-content-right timeline-item">
                <div className="timeline-dot"></div>
                <h3 className="qualification-title-item">Web Development</h3>
                <p className="qualification-subtitle-item">Codsoft - Intern</p>
                <div className="qualification-calendar qualification-calendar-right">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 2V6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 2V6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 10H21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Aug - Sep 24</span>
                </div>
              </div>
            </div>

            {/* Web Development - Left */}
            <div className="qualification-grid">
              <div className="qualification-content-left">
                <h3 className="qualification-title-item">Flutter Development</h3>
                <p className="qualification-subtitle-item">Zarach - Intern</p>
                <div className="qualification-calendar qualification-calendar-left">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 2V6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 2V6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 10H21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Feb - Mar 24</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
              </div>
            </div>

            {/* UX Expert - Right */}
            <div className="qualification-grid">
              <div></div>
              <div className="qualification-content-right timeline-item">
                <div className="timeline-dot"></div>
                <h3 className="qualification-title-item">UI/UX Design</h3>
                <p className="qualification-subtitle-item">Neha Solutions - Intern</p>
                <div className="qualification-calendar qualification-calendar-right">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 2V6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 2V6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 10H21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Apr - May 23</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    </section>
  )
}

