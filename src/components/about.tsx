import type { FC } from "react";
import Gj_photo from "../assets/Gj.png";

const about: FC = () => {
  const handleDownloadCV = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Create a link element
    const link = document.createElement('a');
    link.href = '/Gokul_Resume.pdf'; // This will be the path to your CV file
    link.download = 'Gokul_Resume.pdf'; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
      <h2 className="about-title">About Me</h2>
      <p className="about-subtitle">
          Introducation
        </p>
      <div className="about-container">
      <div className="about-content">
        <div className="about-image">
        <img src={Gj_photo} alt="GJ" />
        </div>

        <div className="about-data">
          <div className="about-info">
            <div className="about-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <h3>Experience</h3>
              <span>4+ Years</span>
            </div>

            <div className="about-box">
              <svg
                xmlns="http://www.w3.org/"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              <h3>Completed</h3>
              <span>4+ Projects</span>
            </div>

          </div>

          <p className="about-description">
            Full-stack developer & ML engineer, I create web pages with UI / UX user interface. Also work in ML alogarithms.
          </p>

          <button className="download-cv-btn" onClick={handleDownloadCV}>
            Download CV 
          </button>
          
        </div>
      </div>
      </div>
        </div>
      </div>
    
  );
};

export default about;
