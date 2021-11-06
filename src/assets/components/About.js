import { Link } from "react-scroll";
import { FaChevronCircleDown } from  "react-icons/fa";
import NavBar from "../containers/NavBar";
import SocialLinks from "./SocialLinks";

import logo from "";

const About = ({ theme, setTheme, githubUrl, name, link, bio }) => {
    const newTheme = `${theme} d-flex flex-column min-vh-100 justify-content-center`;

    const socialData = {
      githubUrl: githubUrl,
      link: link,
};

return (
    <header id="about" className={newTheme}>
      <NavBar theme={theme} setTheme={setTheme} />
      <div className="container text-center">
        <img
          className="logo spin img-fluid"
          src={logo}
          alt="React Logo"
          height="45%"
          width="45%"
        />
        <h1>{name}</h1>
        <hr />
        <p>{bio}</p>
        <SocialLinks {...socialData} />
        <Link className="scroll" to="skills" smooth={true} duration={750}>
          <FaChevronCircleDown id="scroll-down" />
        </Link>
      </div>
    </header>
  );
};

export default About;