import { useEffect, useState } from "react";
import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/img.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

const roles = [
  "Web Developer",
  "CyberSec Enthusiast",
  "Spring Boot Developer",
  "Java Enthusiast",
  "Tech Explorer",
];

// Typing effect with rotation
const TypingRotatingText = ({ speed = 100, pause = 1000 }) => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[index];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, speed / 2);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => currentText.slice(0, prev.length + 1));
      }, speed);
    }

    if (!isDeleting && displayedText === currentText) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index, speed, pause]);

  return (
    <div className="flex items-center gap-2 mt-2">
      <span className="text-4xl font-semibold text-gray-600">I'm a </span>
      <motion.span
        variants={container(1)}
        initial="hidden"
        animate="visible"
        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-6xl font-semibold text-transparent leading-tight pb-1"
      >
        {displayedText}
        <span className="animate-pulse">|</span>
      </motion.span>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-start lg:items-start pl-8">
            {/* Main heading */}
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-4 text-6xl font-thin tracking-tight bg-gradient-to-r from-gray-800 to-white bg-clip-text text-transparent lg:mt-16 lg:text-6xl"
            >
              Hi, My Name is Kanishk Singh
            </motion.h1>
            {/* Typing Rotating Subheading */}
            <TypingRotatingText />

            {/* Dynamic content */}
            <motion.p
              variants={container(1.1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* CV Button */}
            <motion.div
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              className="mt-8"
            >
              <a
                href="/Kanishk_Singh_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 text-lg font-semibold text-white bg-purple-400 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out"
              >
                Curriculum Vitae
              </a>
            </motion.div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <div className="relative overflow-hidden">
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.75 }}
                src={profilepic}
                alt="Kanishk"
                className="object-contain w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
