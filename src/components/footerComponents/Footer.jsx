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
          <p> Contact us </p>
        </div>
      </div>
      <div className="footerLinks">
        <button>
          <FontAwesomeIcon icon={faGlobe} />
          Website
        </button>
        <button>
          {" "}
          <FontAwesomeIcon icon={faGithub} />
          Github{" "}
        </button>
        <button>
          {" "}
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </button>
      </div>
    </>
  );
};

export default Footer;
