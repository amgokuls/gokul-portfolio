import type { FC } from "react";
import code from "../assets/code-xml.svg";

const about: FC = () => {
  return (
    <div className="Services-container">
      <div className="hero-content">
        <h2 className="Services-title">Serives</h2>
        <p className="Services-description">what I offer</p>

        <div className="Services-container">
          <div className="Services-content">
            <div className="Services-data">
              <div className="Services-info">
                <div className="Services-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                  <h3>Full-stack</h3>
                  <span></span>
                </div>

                <div className="Services-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                    <path d="M9 13a4.5 4.5 0 0 0 3-4" />
                    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                    <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                    <path d="M6 18a4 4 0 0 1-1.967-.516" />
                    <path d="M12 13h4" />
                    <path d="M12 18h6a2 2 0 0 1 2 2v1" />
                    <path d="M12 8h8" />
                    <path d="M16 8V5a2 2 0 0 1 2-2" />
                    <circle cx="16" cy="13" r=".5" />
                    <circle cx="18" cy="3" r=".5" />
                    <circle cx="20" cy="21" r=".5" />
                    <circle cx="20" cy="8" r=".5" />
                  </svg>
                  <h3>ML Engineering</h3>
                </div>

                <div className="Services-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m12.99 6.74 1.93 3.44" />
                    <path d="M19.136 12a10 10 0 0 1-14.271 0" />
                    <path d="m21 21-2.16-3.84" />
                    <path d="m3 21 8.02-14.26" />
                    <circle cx="12" cy="5" r="2" />
                  </svg>
                  <h3>Designs</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
