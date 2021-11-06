import { FaGithub, FaLink } from "react-icons/fa";

const SocialLinks = ({ githutUrl, link }) => {

    if (link === "" && twitter === null) {
        return (
            <>
            <div className="social-links">
                <a href={githubUrl} target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
            </div>
            </>
        );
    }
}

if (link !== "" && twitter === null) {
    return (
      <>
        <div className="social-links">
          <a className="mr-5" href={githubUrl} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href={link} target="_blank" rel="noreferrer">
            <FaLink />
          </a>
        </div>
      </>
    );
  }

  if (link === "" && twitter !== null) {
    return (
      <>
        <div className="social-links">
          <a className="mr-5" href={githubUrl} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          </div>
        </>
    );
}


export default SocialLinks;