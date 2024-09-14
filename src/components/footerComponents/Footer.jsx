import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footerTop">
        <div className="footer-left">
          <img
            src="/Images/profile.png"
            alt="footer-logo"
            className="footerImage"
          />
          <p>Jon's Movie DataBase</p>
        </div>
        <div className="footer-right">
          <p> &copy;Copyright 2024</p>
        </div>
      </div>
      <div className="footerLinks">
        <a href="https://www.jonleyshoncodes.co.uk" target="_blank">
          <button className="contactBtn">
            <FontAwesomeIcon icon={faGlobe} />
          </button>
        </a>

        <a href="https://github.com/JonLeyshon" target="_blank">
          <button className="contactBtn">
            <FontAwesomeIcon icon={faGithub} />
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/jon-leyshon-338534a9/"
          target="_blank"
        >
          <button className="contactBtn">
            <FontAwesomeIcon icon={faLinkedin} />
          </button>
        </a>
      </div>
    </>
  );
};

export default Footer;
