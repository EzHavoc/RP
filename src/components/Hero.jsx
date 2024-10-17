import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/img.jpg";
import {motion} from "framer-motion";
const container=(delay) => ({
    hidden:{x:-100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration: 0.5, delay: delay},
    },
});
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
            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Kanishk Singh
            </motion.h1>

            {/* Subheading with gradient text effect */}
            <motion.span
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            drag="x"
            dragConstraints={{ left: -10, right: 10 }}
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer | Web Enthusiast
            </motion.span>

            {/* Dynamic content */}
            <motion.p 
            variants={container(1.1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Image Section with Fade Effect */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            {/* Gradient wrapper for the square image */}
            <div className="relative overflow-hidden">
              <motion.img
              initial={{x:100,opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:1,delay:0.75}}
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
