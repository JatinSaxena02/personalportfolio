import { useState } from "react";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GitHubIcon from "@mui/icons-material/GitHub";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import projectDetails from "../projectDetails";
import { useNavigate } from "react-router-dom";

const ExtraProject = () => {
  const navigate = useNavigate();
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
        whileHover={{
          boxShadow: item.boxShadow,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="px-3 py-2 rounded-lg relative shadow-sm shadow-white"
      >
        <div className="mb-3">
          <h1 className="lg:text-2xl text-xl  font-bold font-serif mb-2 text-emerald-500">
            {item.projectName}
          </h1>
          <p className="font-medium font-serif text-sm leading-[17px] md:leading-[20px] md:text-base md:font-[cursive] text-slate-400">
            <strong className="font-bold text-blue-500">Overview : </strong>
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
              className="lg:w-[90%] w-[80%] h-[60%] max-h-[27rem] lg:ml-4 rounded-xl shadow"
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
          <div className="flex flex-col mt-2 md:mt-0 gap-4 flex-1 lg:flex-[50%]">
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
    <section className="px-6 pt-20 md:pt-25 pb-10 max-w-8xl mx-auto overflow-hidden">
      <div
        onClick={() => navigate("/")}
        className="mt-2 mb-5 px-3 py-2 bg-white text-black gap-3 cursor-pointer items-center flex rounded-sm drop-shadow-sm drop-shadow-black w-fit"
      >
        <ArrowBackIcon />
        <span className="font-bold lg:text-xl text-base select-none">Back</span>
      </div>
      <div className="flex flex-col space-y-2 mb-7">
        <h1 className="text-2xl text-white md:text-3xl font-bold font-serif">
          Explore Past Projects
        </h1>
        <p className="text-md font-serif font-medium md:font-[cursive] md:text-xl md:font-medium text-gray-600">
          Explore the detailed information of each project, including features,
          technologies used, images, and links.
        </p>
      </div>
      {/* Displaying each card */}
      <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectDetails.map((item) => {
          return <ProjectCard item={item} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default ExtraProject;
