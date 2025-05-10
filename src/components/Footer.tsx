import React from "react";
import { FaAppStoreIos, FaMedium, FaStackOverflow, FaGithub, FaLinkedin } from "react-icons/fa";
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
            <a href="https://apps.apple.com/gb/developer/heshantha-nadeeshan-mahawaththage-don/id1714663716" target="_blank" rel="noreferrer"><FaAppStoreIos/></a>
            <a href="https://medium.com/@heshantha.don" target="_blank" rel="noreferrer"><FaMedium/></a>
            <a href="https://stackoverflow.com/users/22515763/heshantha-don" target="_blank" rel="noreferrer"><FaStackOverflow/></a>
            <a href="https://github.com/heshantha-don/" target="_blank" rel="noreferrer"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/heshantha-don/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
      </div>
      {/* <p>A portfolio designed & built by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a> with 💜</p> */}
    </footer>
  );
}

export default Footer;