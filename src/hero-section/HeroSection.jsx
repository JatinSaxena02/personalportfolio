import photo from "../assets/photo_withnobackground.png";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

const roles = ["Developer", "Coder", "UI Designer"];

const screen = window.innerWidth < 425;

export default function HeroSection() {
  const socialLinks = [
    {
      Icon: LinkedInIcon,
      url: "https://www.linkedin.com/in/jatin-saxena-23276a213",
      color: "blue",
    },
    {
      Icon: GitHubIcon,
      url: "https://github.com/JatinSaxena02",
      color: "black",
    },
    {
      Icon: FacebookIcon,
      url: "https://www.facebook.com/share/17D36wY6Vo/",
      color: "blue",
    },
    { Icon: XIcon, url: "https://twitter.com/jatinsaxena27", color: "black" },
    {
      Icon: InstagramIcon,
      url: "https://www.instagram.com/jatin.saxena27?igsh=M3dvaHZsZjV5NmRj",
      color: "#EC5E95",
    },
  ];
  const [index, setIndex] = useState(0);

  // Change word every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Floating Badge */}
      <motion.div
        initial={{ x: "-20%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-60 left-5 bg-white shadow-lg rounded-full px-4 py-2 text-md font-medium text-gray-600 border-red-600 border-2 hidden md:block"
      >
        🔔 Available for new opportunities
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 lg:px-20 lg:mt-0">
        {/* Left Text Section */}
        <motion.div
          initial={{ x: "-15%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-4xl font-bold text-white mb-4 lg:mt-40 md:mt-30">
            I am a{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="inline-block text-orange-500"
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
          </h1>
          <p className="text-white text-lg">
            Crafting clean code and beautiful UI/UX designs to make amazing web
            experiences.
          </p>
        </motion.div>

        {/* Right Image Section */}
        <div className="relative mx-auto w-72 h-72 md:justify-end lg:mt-40 mt-3">
          <motion.img
            src={photo}
            alt="Profile"
            width={280}
            height={280}
            className="rounded-full justify-center items-center shadow-[0_0_40px_15px_rgba(0,255,200,0.7)]"
            animate={{
              x: [0, 25, 0, -25, 0], // Right → Center → Left
              y: [0, 0, -25, 0, 0], // Center → Up → Center → Down0 0 40px 15px rgba(0,255,200,0.7)
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 8,
              ease: "easeOut",
            }}
          />
        </div>
        {/* Social Icons */}
        <div className="space-x-5 mt-0 flex">
          {socialLinks.map(({ url, color, Icon }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2 }}
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white flex justify-center items-center shadow-[0_0_8px_2px_rgba(0,255,200,0.6)] transition-all"
              onClick={() => window.open(url)}
            >
              <Icon style={{ color }} fontSize="large" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
