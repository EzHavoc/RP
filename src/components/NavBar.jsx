import logo from "../assets/melogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex items-center">
      <img src={logo} alt="logo" className="mx-6 w-36 h-auto rounded-lg" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <a href="https://www.linkedin.com/in/kanishk-singh-a097a2117/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={{ color: "white" }} />
        </a>
        <a href="https://www.instagram.com/_kan.i.shk_/" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={{ color: "white" }} />
        </a>
        <a href="https://github.com/EzHavoc" target="_blank" rel="noopener noreferrer">
          <FaGithub style={{ color: "white" }} />
        </a>
        <a href="https://x.com/KanishkS40568" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter style={{ color: "white" }} />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
