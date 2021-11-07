import {
    FaHtml5,
    FaCss3Alt,
    FaBoostrap,
    FaReact,
    FaGithubSquare,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

import budget from "./assets/images/budget.png";
import social from "./assets/images/social.jpeg";
import weather from "./assets/images/weather.png";

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
    "budget-tracker",
    "social-network-API",
    "Weather-dashboard",
];

export const projectData = [
    {
        image: budget,
    },
    {
        image: social,
    },
    {
        image: weather,
    },
];

export const contactInfo = {
    email: "micahlanham@gmail.com",
    phone: "(352) 568-5158",
    mailChimp: "https://www.mailchimp.com/",
};
