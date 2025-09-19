// src/components/Navbar.jsx
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.7 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md"
    >
      <div className="flex justify-between items-center px-6 py-4">
        {/* Left - Name */}
        <a
          href="/"
          className="text-white font-serif font-bold text-xl lg:text-3xl md:text-2xl"
        >
          Jatin Saxena
        </a>

        {/* Middle - Links */}
        <ul className="hidden md:flex gap-6 text-white font-serif text-xl">
          <a href="#about" className="relative cursor-pointer group ">
            About
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#experience" className="relative cursor-pointer group">
            Experience
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#education" className="relative cursor-pointer group">
            Education
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#project" className="relative cursor-pointer group">
            Project
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#skills" className="relative cursor-pointer group">
            Skills
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </ul>

        {/* Right - Contact */}
        <a
          href="#contact"
          className="hidden sm:block px-4 py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-200"
        >
          Contact
        </a>
        {/* Mobile button */}
        <button
          className="focus:outline-none md:hidden block"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <CloseIcon fontSize="medium" style={{ color: "white" }} />
          ) : (
            <MenuIcon fontSize="medium" style={{ color: "white" }} />
          )}
        </button>
        {/* Mobile menu */}
        {open && (
          <div className="absolute px-6 top-full font-serif left-0 w-full bg-gradient-to-r backdrop-blur-md from-orange-200 via-red-200 to-indigo-200 flex flex-col gap-4 py-4 md:hidden z-10 rounded-b-3xl rounded-t-3xl drop-shadow-gray-500 drop-shadow-2xl">
            <a
              href="#about"
              className="hover:text-red-400 text-lg font-bold"
              onClick={() => setOpen(false)}
            >
              About
            </a>
            <a
              href="#experience"
              className="hover:text-red-400 text-lg font-bold"
              onClick={() => setOpen(false)}
            >
              Experience
            </a>
            <a
              href="#education"
              className="hover:text-red-400 text-lg font-bold"
              onClick={() => setOpen(false)}
            >
              Education
            </a>
            <a
              href="#project"
              className="hover:text-red-400 text-lg font-bold"
              onClick={() => setOpen(false)}
            >
              Project
            </a>
            <a
              href="#skills"
              className="hover:text-red-400 text-lg font-bold"
              onClick={() => setOpen(false)}
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 w-fit"
            >
              Contact
            </a>
          </div>
        )}
      </div>

      {/* Animated Gradient Overlay */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-500 via-red-400 to-indigo-400 bg-[length:200%_200%] opacity-50 blur-sm rounded-b-3xl"
      />
    </motion.nav>
  );
}
