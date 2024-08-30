import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/laxmi-kc/" className="linkedIn">
          <img
            className="linkedIn-icon"
            src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png"
            alt="linkedIn"
          />
        </a>
      </div>

      <div className="github-wrapper">
        <a href="https://github.com/laxmikckarki" className="github">
          <img
            className="github-icon"
            src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png"
            alt="Github"
          />
        </a>
      </div>

      <a href="https://mail.google.com/mail/u/0/#inbox">
        Gmail <FontAwesomeIcon icon={faGoogle} />
      </a>

      <p>&copy; 2023 All rights reserved</p>
    </div>
  );
}

export default Footer;
