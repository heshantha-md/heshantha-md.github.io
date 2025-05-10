import { FaAppStoreIos, FaMedium, FaStackOverflow, FaGithub, FaLinkedin  } from "react-icons/fa";
import '../assets/styles/Main.scss';
import Chip from '@mui/material/Chip';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://github.com/heshantha-don.png" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://apps.apple.com/gb/developer/heshantha-nadeeshan-mahawaththage-don/id1714663716" target="_blank" rel="noreferrer"><FaAppStoreIos/></a>
            <a href="https://medium.com/@heshantha.don" target="_blank" rel="noreferrer"><FaMedium/></a>
            <a href="https://stackoverflow.com/users/22515763/heshantha-don" target="_blank" rel="noreferrer"><FaStackOverflow/></a>
            <a href="https://github.com/heshantha-don/" target="_blank" rel="noreferrer"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/heshantha-don/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
          </div>
          <h1>Heshantha Don</h1>
          <p>iOS Mobile Application Developer</p>
          <Chip className='chip' label="Portsmouth, United Kingdom" />

          <div className="mobile_social_icons">
            <a href="https://apps.apple.com/gb/developer/heshantha-nadeeshan-mahawaththage-don/id1714663716" target="_blank" rel="noreferrer"><FaAppStoreIos/></a>
            <a href="https://medium.com/@heshantha.don" target="_blank" rel="noreferrer"><FaMedium/></a>
            <a href="https://stackoverflow.com/users/22515763/heshantha-don" target="_blank" rel="noreferrer"><FaStackOverflow/></a>
            <a href="https://github.com/heshantha-don/" target="_blank" rel="noreferrer"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/heshantha-don/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;