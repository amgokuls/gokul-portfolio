import type { FC } from "react";

const Hero: FC = () => {
  const handleContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const isWebBrowser = typeof window !== 'undefined' && window.navigator.userAgent.indexOf('Mobile') === -1;
    if (isWebBrowser) {
      window.open('https://mail.google.com/mail/?view=cm&fs=1&to=gokulselvarajc@gmail.com&su=Contact%20from%20Portfolio&body=Hello%20Gokul%2C%0A%0A&cc=&bcc=&from=', '_blank');
    } else {
      window.location.href = 'mailto:gokulselvarajc@gmail.com?subject=Contact%20from%20Portfolio&body=Hello%20Gokul%2C%0A%0A';
    }
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-title-section">
          <h1 className="hero-title">
            FULL STACK &
          </h1>
          <div className="design-expert-row">
            <div className="circles-icon">
              <div className="circle c1"></div>
              <div className="circle c2"></div>
              <div className="circle c3"></div>
            </div>
            <h1 className="hero-subtitle"> ML ENGINEER</h1>
          </div>
        </div>

        <p className="hero-description">
          Hello there, I am Gokul – a product designer and developer
          specializing in web and mobile apps for FinTech, eCommerce, and SaaS.
          I craft user-focused designs that drive conversions and resonate with
          audiences. Currently based in Coimbatore, TN.
        </p>

        <div className="cta-section">
          <button className="contact-button" onClick={handleContact}>Contact Me</button>
{/* 
          <div className="social-section">
            <span className="say-hello">SAY HELLO</span>
            <div className="social-icons">
              <a href="https://linkedin.com" className="social-icon linkedin">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div> */}
        </div>

        {/* <div className="image-decorations">
          <div className="decoration dots"></div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
