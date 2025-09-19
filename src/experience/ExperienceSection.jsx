import React from "react";
import { motion } from "framer-motion";
import NearMeIcon from "@mui/icons-material/NearMe";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";

const ExperienceSection = () => {
  const text = "Experience";
  const githuburl = "https://github.com/JatinSaxena02/Project_02/tree/master";
  const internshipCertificateurl =
    "https://drive.google.com/file/d/1z-lkyq1ub22JRoFubA5k8UMLsj8ToWn5/view?usp=sharing";

  return (
    <section
      id="experience"
      className="px-6 pt-15 lg:pt-15 md:pt-15 max-w-6xl mx-auto overflow-hidden"
    >
      <div className="flex justify-center">
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ x: "-20%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.06 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl text-white font-bold font-serif md:mb-10 mb-7"
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:justify-between">
        {/* Left Section */}
        <motion.div
          initial={{ x: "-20%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col"
        >
          <p className="text-2xl font-bold font-serif text-white">
            Project Trainee
          </p>
          <p className="text-lg font-light text-blue-500 lg:font-[cursive] font-serif">
            NUMERIC INFOSYSTEM PVT. LTD
          </p>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-row gap-5 md:flex-col md:items-end md:gap-0"
        >
          <p className="text-lg font-medium text-white">Oct 2020 - July 2021</p>
          <p className="md:hidden block text-white">|</p>
          <p className="text-md font-light text-blue-500 lg:font-[cursive] font-serif">
            Gwalior, M.P
          </p>
        </motion.div>
      </div>
      {/* Card details like problem faced, outcome ans debugging and description*/}
      <div className="flex flex-col mt-5 md:flex-row md:max-w-6xl gap-4 md:mt-10">
        {/* Card 1 */}
        <motion.div
          className="px-3 py-2 rounded-2xl bg-white flex-1"
          initial={{ x: "-20%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          animate={{
            boxShadow: [
              "0px 0px 5px rgba(255,0,0,0.4)",
              "0px 0px 10px rgba(255,165,0,0.6)",
              "0px 0px 5px rgba(255,0,0,0.4)",
            ],
          }}
          transition={{
            duration: 1,
            boxShadow: {
              repeat: Infinity,
              repeatType: "mirror",
            },
          }}
        >
          <p className="text-lg font-bold font-serif text-gray-800">
            Project title - MedAssist
          </p>
          <span className="text-sm font-light text-gray-600 font-serif">
            MedAssist is a healthcare platform that enables patients to report
            symptoms, consult doctors, and access digital prescriptions through
            a secure dashboard.
            <br />
            <strong className="font-bold">Key Contribution:</strong> Implemented
            user authentication (login/signup) and backend logic to manage
            patient–doctor interactions efficiently.
          </span>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="px-3 py-2 rounded-2xl bg-white flex-1"
          initial={{ opacity: 0, y: "10%" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          animate={{
            boxShadow: [
              "0px 0px 5px rgba(0,0,255,0.4)",
              "0px 0px 10px rgba(0,255,255,0.6)",
              "0px 0px 5px rgba(0,0,255,0.4)",
            ],
          }}
          transition={{
            duration: 1,
            boxShadow: {
              repeat: Infinity,
              repeatType: "mirror",
            },
          }}
        >
          <p className="text-lg font-bold font-serif text-gray-800">
            Challenges Faced
          </p>
          <span className="text-sm font-light font-serif text-gray-600">
            Encountered issues with user data not rendering properly on the
            dashboard, which affected data accessibility and user experience.
          </span>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="px-3 py-2 rounded-2xl bg-white flex-1"
          initial={{ x: "20%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          animate={{
            boxShadow: [
              "0px 0px 5px rgba(0,255,0,0.4)",
              "0px 0px 10px rgba(50,205,50,0.6)",
              "0px 0px 5px rgba(0,255,0,0.4)",
            ],
          }}
          transition={{
            duration: 1,
            boxShadow: {
              repeat: Infinity,
              repeatType: "mirror",
            },
          }}
        >
          <p className="text-lg font-bold font-serif text-gray-800">
            Solutions & Outcome
          </p>
          <span className="text-sm font-light font-serif text-gray-600">
            Debugged and optimized backend queries with mentor guidance,
            ensuring real-time user data visibility on the dashboard.
            <br />
            <strong className="font-bold">Result:</strong> Improved system
            reliability and enhanced the overall user experience.
          </span>
        </motion.div>
      </div>
      {/* Github repo link */}
      <div className="flex flex-col justify-between md:flex-row mt-7 gap-4">
        <motion.div
          onClick={() => {
            window.open(githuburl);
          }}
          className="px-2 py-2 rounded-2xl bg-black cursor-pointer w-fit flex items-center"
          initial={{ x: "-20%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          animate={{
            boxShadow: [
              "0px 0px 10px rgba(0,255,0,0.4)",
              "0px 0px 20px rgba(50,205,50,0.6)",
              "0px 0px 10px rgba(0,255,0,0.4)",
            ],
          }}
          transition={{
            duration: 1,
            boxShadow: {
              repeat: Infinity,
              repeatType: "mirror",
            },
          }}
        >
          <GitHubIcon style={{ fontSize: 25, color: "white" }} />
          <span className="text-white text-sm ml-2">Github repo link</span>
          <NearMeIcon
            style={{ fontSize: 15, color: "white" }}
            className="ml-2"
          />
        </motion.div>
        <motion.div
          className="px-2 py-2 rounded-2xl bg-black cursor-pointer w-fit flex items-center"
          initial={{ x: "20%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          onClick={() => {
            window.open(internshipCertificateurl);
          }}
          animate={{
            boxShadow: [
              "0px 0px 10px rgba(0,255,0,0.4)",
              "0px 0px 20px rgba(50,205,50,0.6)",
              "0px 0px 10px rgba(0,255,0,0.4)",
            ],
          }}
          transition={{
            duration: 1,
            boxShadow: {
              repeat: Infinity,
              repeatType: "mirror",
            },
          }}
        >
          <DescriptionIcon style={{ fontSize: 25, color: "white" }} />
          <span className="text-white text-sm ml-2">
            Internship Certificate link
          </span>
          <NearMeIcon
            style={{ fontSize: 15, color: "white" }}
            className="ml-2"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
