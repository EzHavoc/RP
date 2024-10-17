import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiC, SiCplusplus, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import SpringBootLogo from "../assets/springboot.svg"; // Import Spring Boot SVG
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{opacity:1,  y:0}}
      initial={{opacity:0, y: -100}}
      transition={{duration: 0.5}}
      className="my-20 text-center text-4xl">Tech Stack</motion.h2>
      
      <motion.div 
      whileInView={{opacity:1,  x:0}}
      initial={{opacity:0, x: -100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        {/* React Icon */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-purple-300" />
        </motion.div>

        {/* Next.js Icon */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandNextjs className="text-7xl text-gray-300" />
        </motion.div>

        {/* MySQL Icon */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-blue-600" />
        </motion.div>

        {/* Java Icon */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiJava className="text-7xl text-red-600" />
        </motion.div>

        {/* Spring Boot Icon */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={SpringBootLogo} alt="Spring Boot" className="text-7xl" style={{ width: '60px', height: '60px' }} />
        </motion.div>

        {/* Node.js Icon */}
        <motion.div
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>

        {/* PostgreSQL Icon */}
        <motion.div
          variants={iconVariants(8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-7xl text-blue-400" />
        </motion.div>

        {/* C Icon */}
        <motion.div
          variants={iconVariants(9)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiC className="text-7xl text-blue-700" />
        </motion.div>

        {/* C++ Icon */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiCplusplus className="text-7xl text-blue-600" />
        </motion.div>

        {/* HTML Icon */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiHtml5 className="text-7xl text-orange-600" />
        </motion.div>

        {/* CSS Icon */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiCss3 className="text-7xl text-blue-500" />
        </motion.div>

        {/* JavaScript Icon */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-7xl text-yellow-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
