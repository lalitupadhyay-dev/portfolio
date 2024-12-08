import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";

import { RiTailwindCssFill } from "react-icons/ri";
import { GrMysql, GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiPostman } from "react-icons/si";

export const NAVIGATION_LINKS = [
  { label: "PROJECTS", href: "#project-section" },
  { label: "SKILLS", href: "#skill-section" },
  { label: "WORK EXPERIENCE", href: "#experience-section" },
  { label: "EDUCATION", href: "#education-section" },
  { label: "CONTACT ME", href: "#contact-section" },
];

export const PROFILE = {
  name: "Lalit Upadhyay",
  role: "Front End Developer",
  subheading:
    "With 3 years of experience in front end development, I build efficient and reusable components that catch the eyes of end-users, with great user-experience. Always curious about interesting projects.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Company Showcase Website",
    description:
      "The company deals with different Fragrances and Aroma. This website shows the inline details of the company's work. This project is completely based on the front-end.",
    techStack: ["React.js", "Email.js", "Tailwind CSS"],
    imgSrc: project1,
    link: "https://www.gaytrichemicals.com",
  },
  {
    id: 2,
    title: "Order Tracking System",
    description:
      "A fully-functional, responsive, Role-based Access Order Tracking System that helps the organisation to automate the orders and reduce all the paper work. Collaborated in the UI/UX part of this project and build effective and reusable components.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imgSrc: project2,
    link: "https://www.rbcsales.in",
  },
  {
    id: 2,
    title: "Question Paper Generator",
    description:
      "A dynamic Question Paper Generator enabling users to create and customize question papers efficiently. This tool streamlined the process by integrating user-friendly interfaces.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imgSrc: project3,
    link: "https://qpg.compilewithakash.com/",
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500 text-4xl mb-4" />
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-400 text-4xl mb-4" />
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="text-blue-500 text-4xl mb-4" />
  },
  {
    name: "JavaScript",
    icon: <TbBrandJavascript className="text-yellow-500 text-4xl mb-4" />
  },
  {
    name: "React.js",
    icon: <GrReactjs className="text-cyan-400 text-4xl mb-4" />
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500 text-4xl mb-4" />
  },
  {
    name: "Express.js",
    icon: <SiExpress className="bg-white text-black rounded-full text-4xl p-1 mb-4" />
  },
  {
    name: "Postman",
    icon: <SiPostman className="bg-white text-orange-400 rounded-full text-4xl mb-4" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500 text-4xl mb-4" />
  },
  {
    name: "mySQL",
    icon: <GrMysql className="bg-blue-500 text-4xl mb-4" />
  },
];

export const EXPERIENCES = [
  {
    id: 1,
    date: "August 2023 - Present",
    role: "Senior JavaScript Developer",
    company: "Rohan Book Company Pvt. Ltd.",
    description: [
      "Developed web applications and executable software to enhance the online presence of a publishing house.",
      "Worked on key projects like an order tracking system and interactive activities that helped students to get hands-on practical along with theoretical learning.",
      "Contributed to the testing of platforms such as the Reporting System and Teacher's Portal.",
      "Focused on creating solutions to improve both functionality and user experience in educational tools and business systems."
    ],
    techStack: ["HTML", "CSS", "Javascript", "React.js", "Tailwind CSS"],
  },
  {
    id: 2,
    date: "September 2021 - July 2023",
    role: "Assistant Web Support",
    company: "PM Publishers Pvt. Ltd.",
    description: [
      "Managed company website, improved the layout.",
      "Reviewed multimedia books and identified technical issues, implemented code-based corrections and improvements.",
      "Developed interactive book activities using HTML, CSS, JavaScript, and Python to enhance student’s practical learning alongside theory."
    ],
    techStack: ["HTML", "CSS", "Javascript", "Python", "WordPress"],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Computer Applications",
    institution: "Indira Gandhi National Open University",
    duration: "2021 - 2024",
  },
  {
    id: 2,
    degree: "Diploma in Computer Engineering",
    institution: "Guru Nanak Dev Institute of Technology",
    duration: "2017 - 2020",
  },

];
