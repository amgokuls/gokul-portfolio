import type { FC } from "react";

const about: FC = () => {
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
    <div className="Contact-container">
      <div className="Contact-content">
        <h2 className="Contact-title">Let's Create Together</h2>
        <p className="Contact-description">
          Excited to bring your vision to life and elevate your brand? Let's
          collaborate and create something amazing!
        </p>
        <div className="cccta-section">
          <button className="cccontact-button" onClick={handleContact}>Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default about;
