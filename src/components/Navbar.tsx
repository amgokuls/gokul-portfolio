import type { FC } from "react";
import { useState, useEffect } from "react";

const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.querySelector('.mobile-menu');
      const mobileMenuButton = document.querySelector('.mobile-menu-button');
      const overlay = document.querySelector('.mobile-menu-overlay');
      
      if (isMobileMenuOpen && 
          mobileMenu && 
          !mobileMenu.contains(event.target as Node) && 
          !mobileMenuButton?.contains(event.target as Node) &&
          overlay?.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.querySelector('.about-container');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleDownloadCV = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Create a link element
    const link = document.createElement('a');
    link.href = '/Gokul_Resume.pdf'; // This will be the path to your CV file
    link.download = 'Gokul_Resume.pdf'; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsMobileMenuOpen(false);
  };

  const handleContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const isWebBrowser = typeof window !== 'undefined' && window.navigator.userAgent.indexOf('Mobile') === -1;
    if (isWebBrowser) {
      window.open('https://mail.google.com/mail/?view=cm&fs=1&to=gokulselvarajc@gmail.com&su=Contact%20from%20Portfolio&body=Hello%20Gokul%2C%0A%0A&cc=&bcc=&from=', '_blank');
    } else {
      window.location.href = 'mailto:gokulselvarajc@gmail.com?subject=Contact%20from%20Portfolio&body=Hello%20Gokul%2C%0A%0A';
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="logo">
          <a href="/">GJ</a>
        </div>
        <button 
          className={`mobile-menu-button ${isMobileMenuOpen ? 'hidden' : ''}`} 
          onClick={toggleMobileMenu}
        >
          ☰
        </button>
        <div className="nav-links">
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#about" className="nav-link" onClick={scrollToAbout}>
            About
          </a>
          <a href="#contact" className="nav-link" onClick={handleContact}>
            Contact
          </a>
          <a href="#cv" className="nav-link highlight" onClick={handleDownloadCV}>
            Get CV
          </a>
        </div>
      </div>
      <hr className="nav-divider" />

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <div className="logo">
            <a href="/">GJ</a>
          </div>
          <button className="mobile-menu-close" onClick={toggleMobileMenu}>
            ×
          </button>
        </div>
        <div className="mobile-nav-links">
          <a href="#projects" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Projects
          </a>
          <a href="#about" className="mobile-nav-link" onClick={scrollToAbout}>
            About
          </a>
          <a href="#contact" className="mobile-nav-link" onClick={handleContact}>
            Contact
          </a>
          <a href="#cv" className="mobile-nav-link highlight" onClick={handleDownloadCV}>
            Get CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
