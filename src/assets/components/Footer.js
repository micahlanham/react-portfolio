import SocialLinks from "./SocialLinks";

const Footer = ({ githubUrl, link }) => {
    return (
        <footer className="d-flex flex-column justify-content-center align-items-center bg-dark">
            <SocialLinks githubUrl={githubUrl} link={link} />
            <p className="lead my-3 text-white">
                &copy; Made by {" "}
                <a
                id="myInfo"
                href="https://github.com/micahlanham/react-portfolio"
                target="_blank"
                rel="noreferrer"
                >
                Micah Lanham
                </a>
            </p>
        </footer>
    );
};

export default Footer;