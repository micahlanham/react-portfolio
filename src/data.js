import {
    FaHtml5,
    FaCss3Alt,
    FaBoostrap,
    FaReact,
    FaGithubSquare,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

import colors from "";
import react from "";
import notepad from "";

export const githubUsername = "micahlanham";

export const skillData = [
    {
        id: 1,
        skill: <FaHtml5 className="display-4" />,
        name: FaHtml5,
    },
    {
        id: 2,
        skill: <FaCss3Alt className="display-4" />,
        name: "CSS3",
    },
    {
        id: 3,
        skill: <SiJavascript className="display-4" />,
        name: "Javascript",
    },
    {
        id: 4,
        skill: <FaBoostrap className="display-4" />,
        name: "Bootstrap",
    },
    {
        id: 5,
        skill: <FaReact className="display-4" />,
        name: "React",
    },
    {
        id: 6,
        skill: <FaGithubSquare className="display-4" />,
        name: "GitHub",
    },
];

export const filteredProjects = [
    "Background-Generator",
    "github-react-portfolio-template",
    "notepad",
];

export const projectData = [
    {
        image: colors,
    },
    {
        image: react,
    },
    {
        image: notepad,
    },
];

export const contactInfo = {
    email: "",
    phone: "",
    mailChimp: "https://www.mailchimp.com/",
};