import AboutImg from "../assets/Aboutme.jpg";
import { ABOUT_TEXT } from "../constants";
import {motion} from "framer-motion";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      {/* Heading */}
      <motion.h2 
      whileInView={{opacity:1,  x:0}}
      initial={{opacity:0, x: -100}}
      transition={{duration: 0.5}}
      className="my-20 text-center text-4xl">
        About<span className="text-neutral-500"> Me</span>
      </motion.h2>
      
      {/* Image and Content Section */}
      <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity:1,  x:0}}
        initial={{opacity:0, x: -100}}
        transition={{duration: 0.5}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            {/* Image with responsive size */}
            <img
              className="rounded-2xl w-64 h-auto lg:w-96"  // Adjust image size here
              src={AboutImg}
              alt="AboutImage"
            />
          </div>
        </motion.div>
        < motion.div 
        whileInView={{opacity:1,  x:0}}
        initial={{opacity:0, x: 100}}
        transition={{duration: 0.5}}
        className="w-full lg:w-1/2">
          <div className="flex items-center justify-center text-center lg:justify-start lg:text-left px-4 lg:px-0">
          <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
