import { useContext } from "react";
import type { FC } from "react";
import { ThemeContext } from "./ThemeContext";

const Footer: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const isWebBrowser = typeof window !== 'undefined' && window.navigator.userAgent.indexOf('Mobile') === -1;
    if (isWebBrowser) {
      window.open('https://mail.google.com/mail/?view=cm&fs=1&to=gokulselvarajc@gmail.com&su=Contact%20from%20Portfolio&body=Hello%20Gokul%2C%0A%0A&cc=&bcc=&from=', '_blank');
    } else {
      window.location.href = 'mailto:gokulselvarajc@gmail.com?subject=Contact%20from%20Portfolio&body=Hello%20Gokul%2C%0A%0A';
    }
  };

  return (
    <div className="Footer-container">
      <hr className="Footer-divider" />
      <div className="Footer-content">
        <a className="Footer-link">
          &copy; {new Date().getFullYear()} GJ. All rights reserved.
        </a>
        <div className="Footer-links">
          <a href="https://www.linkedin.com/in/gokul-s-gj" target="_blank" rel="noopener noreferrer" className="Footer-link">
            LinkedIn
          </a>
          <a href="#contact" className="Footer-link" onClick={handleContact}>
            Contact
          </a>
          <div className="Footer-link">
            <a href="#" onClick={toggleTheme} className="Footer-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-moon">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
              </svg>
            </a>
          </div>
          <a href="#contact" className="Footer-link">
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
