import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import imageList from "../assets/images";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const text = "Project";
  const githuburl = "https://github.com/JatinSaxena02";
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const project = [
    {
      id: 1,
      projectName: "Dinetime",
      overview:
        "A mobile app to search, discover, and reserve tables at restaurants with real-time availability, powered by Firebase for authentication and data storage",
      platform: "React Native",
      features: [
        "Secure login and signup using Firebase Authentication",
        "Displays a list of restaurants stored in Firestore",
        "Smart search with real-time suggestions",
        "Reserve tables for specific date and time",
        "Track past and upcoming reservations",
        "Real-time updates for availability and bookings",
        "Clean and user-friendly UI with React Native",
      ],
      technologies: [
        "React Native",
        "Expo",
        "Formik",
        "Expo Linear Gradient",
        "Expo Router",
        "Firebase (Firestore & Authentication)",
      ],
      links: {
        github: "https://github.com/JatinSaxena02/dinetime",
      },
      images: imageList.dinetime,
      color: "text-blue-500",
      boxShadow:
        "0px 0px 8px rgba(0, 123, 255, 0.4), 0px 0px 15px rgba(0, 123, 255, 0.6)",
      conclusion:
        "This project demonstrates how to build a scalable and responsive React Native mobile app by integrating Firebase, Expo, Formik, Expo Router, Linear Gradients, and signals for error handling and navigation. It simplifies the dining experience while giving restaurants a reliable reservation management platform.",
    },
    {
      id: 2,
      projectName: "Portfolio",
      overview:
        "A fully responsive and animated personal portfolio website designed to showcase my skills, projects, and achievements. It features smooth animations, contact form integration, and social media connectivity for easy outreach.",
      platform: "React + Vite",
      features: [
        "Responsive design optimized for all screen sizes",
        "Framer Motion animations for smooth transitions",
        "Contact form powered by EmailJS",
        "Social media integration (GitHub, LinkedIn, WhatsApp, etc.)",
        "Dynamic project showcase with reusable components",
        "Custom scroll effects with Tailwind utilities",
      ],
      technologies: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "EmailJS",
      ],
      links: {
        github: "https://github.com/JatinSaxena02/personalportfolio",
        live: "https://jatinsaxena.netlify.app/",
      },
      images: imageList.portfolio,
      color: "text-green-500",
      boxShadow:
        "0px 0px 8px rgba(0, 255, 255, 0.4), 0px 0px 15px rgba(0, 255, 255, 0.6)",
      conclusion:
        "This portfolio highlights my technical expertise, projects, and personal brand. It serves as a central hub for potential employers, collaborators, and clients to connect with me and explore my work.",
    },
  ];

  const ProjectCard = ({ item }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextImage = () => {
      setCurrentIndex((prev) =>
        prev === item.images.length - 1 ? 0 : prev + 1
      );
    };

    const prevImage = () => {
      setCurrentIndex((prev) =>
        prev === 0 ? item.images.length - 1 : prev - 1
      );
    };

    return (
      <motion.div
        key={item.id}
        initial={{ x: "-20%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        animate={{
          boxShadow: [
            "0px 0px 8px rgba(0, 123, 255, 0.4)",
            "0px 0px 15px rgba(0, 123, 255, 0.6)",
          ],
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="px-3 py-2 rounded-lg relative shadow-2xl"
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-0 right-0 p-2 justify-center items-center bg-white drop-shadow-md cursor-pointer hover:text-white drop-shadow-black hover:bg-red-700 rounded-full"
        >
          <CloseIcon onClick={() => setSelected(null)} />
        </motion.div>
        <div className="mb-3">
          <h1 className="lg:text-2xl text-xl  font-bold font-serif mb-2">
            {item.projectName}
          </h1>
          <p className="font-medium font-serif text-sm leading-[17px] md:leading-[20px] md:text-base md:font-[cursive]">
            <strong className="font-bold">Overview : </strong>
            {item.overview}
          </p>
        </div>
        {/* Icons :-> Github, live */}
        <div className="flex md:gap-3 gap-2 flex-col lg:flex-row mb-5">
          {item.links.github && (
            <motion.div
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open(item.links.github, "_blank")}
              className="flex lg:px-2 lg:py-2 px-2 py-1 flex-row rounded-lg drop-shadow-sm items-center drop-shadow-slate-400 bg-white w-fit gap-2 backdrop-blur-md hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              <h1 className="hover:text-black lg:font-[cursive] lg:text-base text-sm font-serif text-gray-600">
                Get the Complete Code on Github{" "}
              </h1>
              <GitHubIcon className="text-black hover:text-blue-400" />
            </motion.div>
          )}
          {item.links.live && (
            <motion.div
              whileHover={{ scale: 1.1, rotate: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open(item.links.live, "_blank")}
              className="rounded-lg lg:px-2 lg:py-2 px-2 py-1 flex flex-row w-fit gap-2 items-center drop-shadow-sm drop-shadow-slate-400 bg-white hover:bg-white/20 backdrop-blur-md transition-all duration-300 cursor-pointer"
            >
              <h1 className="hover:text-black lg:text-base lg:font-[cursive] text-sm font-serif text-gray-600">
                Live Link
              </h1>
              <RemoveRedEyeIcon className="text-blue-500 hover:text-green-400" />
            </motion.div>
          )}
        </div>
        {/* Displaying images and other card content horizontally(flex-row) stacked for large screens and verically(flex-col) for small screen */}
        <motion.div className="flex flex-col lg:flex-row lg:items-start gap-6">
          <div className="relative flex items-center justify-center lg:justify-start mt-3 lg:flex-[30%]">
            {/* Prev button */}
            <button
              onClick={prevImage}
              className="absolute lg:-left-3 left-1 top-1/2 -translate-y-1/2 
               bg-white/80 sm:p-1 rounded-full shadow-md 
               hover:bg-white transition"
            >
              <ArrowBackIcon className="w-1 h-1 sm:w-6 sm:h-6" />
            </button>

            {/* Image */}
            <img
              src={item.images[currentIndex]}
              alt={`${item.projectName} screenshot ${currentIndex + 1}`}
              className="lg:w-[90%] w-[80%] lg:h-[60%]  lg:max-h-[27rem] max-h-[20rem] lg:ml-4 rounded-xl shadow"
            />

            {/* Next button */}
            <button
              onClick={nextImage}
              className="absolute lg:-right-3 right-1 top-1/2 -translate-y-1/2 
               bg-white/80 sm:p-1 rounded-full shadow-md 
               hover:bg-white transition"
            >
              <ArrowForwardIcon className="w-1 h-1 sm:w-6 sm:h-6" />
            </button>
          </div>
          {/* Features and Technologies */}
          <div className="flex flex-col -mt-1 md:mt-0 gap-4 flex-1 lg:flex-[50%]">
            {/* features */}
            <div>
              <h1 className="md:text-xl text-lg font-semibold font-serif text-blue-600">
                Features{" "}
              </h1>
              <ul className="md:mt-2">
                {item.features.map((value, i) => (
                  <li
                    key={i}
                    className="font-[cursive] lg:text-md md:text-base text-sm bg-gradient-to-r from-gray-400 via-gray-100 to-slate-400 px-2 py-1 my-1 rounded-sm font-light"
                  >
                    👉{value}
                  </li>
                ))}
              </ul>
            </div>
            {/* technologies */}
            <div className="lg:mt-1">
              <h1 className="md:text-xl text-lg font-semibold font-serif text-blue-600">
                Technologies
              </h1>
              <ul className="flex-wrap flex gap-2 rounded-xl md:mt-1">
                {item.technologies.map((value, i) => (
                  <motion.li
                    initial={{ x: "-20%", opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    key={i}
                    className="py-1 px-3 text-sm rounded-sm leading-[17px] bg-white drop-shadow-sm drop-shadow-black gap-1 font-light md:font-[cursive] font-serif"
                  >
                    {value}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
        {/* Conclusion */}
        <div className="mt-4 drop-shadow-black drop-shadow-sm px-2 bg-gradient-to-r from-gray-400 via-white to bg-slate-200 py-1 rounded-sm mb-2">
          <p className="lg:font-[cursive] font-serif lg:text-base text-sm">
            <strong className="font-bold">Conclusion : </strong>
            {item.conclusion}
          </p>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="project"
      className="px-6 pt-15 lg:pt-15 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Title */}
      <div className="flex justify-center">
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ x: "20%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.06 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl text-white font-bold font-serif md:mb-15 lg:mb-15 mb-13"
          >
            {letter}
          </motion.span>
        ))}
      </div>
      {/* Cards */}
      <div className="flex gap-6 flex-col md:flex-row">
        {project.map((item) => {
          const [hovered, setHovered] = useState(false);

          return (
            <motion.div
              key={item.id}
              initial={{ x: "20%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileTap={{ scale: 0.98 }}
              whileHover={{ boxShadow: item.boxShadow }}
              className="bg-transparent shadow-lg md:px-5 md:py-5 px-3 py-3 rounded-2xl flex-1 cursor-pointer"
            >
              <motion.div
                className="flex justify-between items-center md:mb-3 mb-1 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-2 py-2 md:py-2 rounded-xl shadow-md"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Project Title */}
                <motion.p
                  className={`text-xl md:text-2xl font-serif font-semibold tracking-wide ${item.color}`}
                >
                  {item.projectName}
                </motion.p>

                {/* Icons */}
                <div className="flex md:gap-3 gap-2">
                  {item.links.github && (
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="md:p-2 p-1 rounded-lg bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 cursor-pointer"
                    >
                      <GitHubIcon
                        onClick={() => window.open(item.links.github)}
                        className="text-white hover:text-blue-400"
                      />
                    </motion.div>
                  )}
                  {item.links.live && (
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      whileTap={{ scale: 0.9 }}
                      className="md:p-2 p-1 rounded-lg bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 cursor-pointer"
                    >
                      <RemoveRedEyeIcon
                        onClick={() => window.open(item.links.live)}
                        className="text-white hover:text-green-400"
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* Image swap with animation */}

              <motion.div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="relative my-4 lg:h-[25rem] w-[70%] lg:w-[50%] mx-auto flex-1 h-82 overflow-hidden rounded-xl md:mb-3"
              >
                <motion.img
                  key="first"
                  src={item.images[0]}
                  alt={item.name}
                  initial={{ opacity: 1 }}
                  animate={{
                    opacity: hovered ? 0 : 1,
                    scale: hovered ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <motion.img
                  key="second"
                  src={item.images[1]}
                  alt={item.name}
                  initial={{ y: "100%" }} // hidden at bottom
                  animate={{ y: hovered ? "0%" : "100%" }} // slide up on hover
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>

              {/* Check description */}
              <motion.div
                className="flex justify-between items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-2 py-2 md:py-2 rounded-xl shadow-md"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Project Title */}
                <motion.p
                  className={`text-lg md:text-lg font-serif font-semibold tracking-wide ${item.color}`}
                >
                  Check Description
                </motion.p>

                {/* Icons */}
                <motion.div
                  layoutId={`project-${item.id}`}
                  onClick={() => setSelected(item)}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-4 py-1 rounded-lg bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 cursor-pointer"
                >
                  <ArrowForwardIcon
                    fontSize="medium"
                    className="text-white hover:text-blue-400"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
            onClick={() => setSelected(null)} // click backdrop to close
          >
            <motion.div
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
              className="bg-white rounded-xl max-w-3xl w-[90%] max-h-[90vh] overflow-y-auto scrollbar-hide p-6 shadow-xl absolute"
            >
              {/* Now render your ProjectCard content here */}
              <ProjectCard key={selected.id} item={selected} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        onClick={() => navigate("/projects")}
        whileHover={{ scale: 1.09 }}
        className="flex px-4 py-3 justify-center bg-white hover:bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 mx-auto mt-10 mb-5 drop-shadow-black drop-shadow-lg rounded-xl transition-all duration-400 w-fit "
      >
        <button
          title="Explore More Projects"
          className="cursor-pointer text-black font-serif font-medium text-xl "
        >
          Explore More Projects
        </button>
      </motion.div>
    </section>
  );
};

export default Project;
