import { link } from "framer-motion/client";
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I'm a passionate web enthusiast with a strong foundation in programming languages like C, C++, and Java. With a keen interest in building efficient and scalable applications, I am constantly expanding my skills and currently diving into the Spring Boot framework to enhance my backend development capabilities. I enjoy solving complex problems and transforming ideas into functional, user-friendly web solutions. Take a look at my projects and journey as I continue to grow and explore the ever-evolving world of web development!`;

export const ABOUT_TEXT = `I am a dedicated and result oriented student currently pursuing my Bachelors in Technology in CSE(Cyber Security) from DSCE,Bengaluru.I am constantly seeking opportunities for growth,development and team bonding. I actively engage in Hackathons,DevMeets and various other workshops to upskill myself. I have a proactive and adaptable approach to problems and curious approach to learning opportunities.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "PeerLoop",
    image: project1,
    description:"Peerloop is a professional networking platform designed specifically for freelancers, offering seamless communication and collaboration tools.This is a desktop website only!",
    link: "https://peer-loop2-0.vercel.app/",
    technologies: ["React.js", "React-router-dom", "CSS3", "Firebase"],
  },
  {
    title: "Aegis Club Website",
    image: project2,
    link: "https://aegisclub.tech/",
    description:
      "The Cyber Security Club at DSCE, Bengaluru is dedicated to exploring advanced technologies and acquiring invaluable knowledge and hands-on experience in cybersecurity through engaging training sessions, interactive workshops, and collaborative initiatives with like-minded enthusiasts.",
      technologies: ["React.js", "Node.js", "SupaBase", "React-router-dom", "Tailwind CSS"],
  },
  {
    title: "PicShrink",
    image: project3,
    link: "https://picshrink.vercel.app/",
    description:
      "PicShrink is a powerful and user-friendly image compression web application designed to reduce the size of your images without sacrificing quality. Whether you're a developer, designer, or simply looking to optimize your photos for faster web loading times, PicShrink makes it easy to compress images quickly and efficiently. With support for various file formats and intuitive drag-and-drop functionality, users can seamlessly compress images, making them more lightweight and web-ready. PicShrink is ideal for optimizing image-heavy websites, applications, or social media profiles, helping to improve performance and reduce storage costs.",
      technologies: ["React.js", "Node.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "NULL",
    image: project4,
    description:
      "",
    technologies: ["____", "____", "____", "____", "____"],
  },
];

export const CONTACT = {
  address: "Dayananda Sagar College of Engineering,Bengaluru",
  phoneNo: "+91 8318169685",
  email: "kanishksingh778@gmail.com",
};
