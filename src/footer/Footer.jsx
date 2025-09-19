import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <section className="px-6 pt-10 md:pt-10 mx-auto overflow-hidden bg-[#0F1324] mt-10 rounded-t-3xl">
      <div className="flex lg:flex-row flex-col lg:w-[80%] w-[90%] mx-auto">
        <div className="flex-[60%]">
          <h1 className="lg:text-3xl text-2xl font-bold font-serif text-white">
            JATIN SAXENA
          </h1>
          <p className="lg:text-lg font-medium lg:font-[cursive] font-serif text-gray-300 lg:mt-5 mt-5">
            Crafting clean code and beautiful UI/UX designs to make amazing web
            experiences.
          </p>
        </div>
        <div className="lg:flex-[30%] md:flex-[30%] md:w-[50%] md:justify-evenly justify-evenly lg:mt-0 mt-5 flex lg:gap-15 gap-5 px-4 py-2 rounded-2xl bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500 border-2 border-gray-500">
          <div>
            <ul className="flex flex-col">
              <h1 className="text-black cursor-pointer lg:text-xl text-lg font-bold">
                Quick Links
              </h1>
              <a
                href="#about"
                className="text-black cursor-pointer lg:text-lg text-base font-normal font-serif"
              >
                About
              </a>
              <a
                href="#education"
                className="text-black cursor-pointer lg:text-lg text-base font-normal font-serif"
              >
                Education
              </a>
              <a
                href="#experience"
                className="text-black cursor-pointer lg:text-lg text-base font-normal font-serif"
              >
                Experience
              </a>
              <a
                href="#project"
                className="text-black cursor-pointer lg:text-lg text-base font-normal font-serif"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-black cursor-pointer lg:text-lg text-base font-normal font-serif"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-black cursor-pointer lg:text-lg text-base font-normal font-serif"
              >
                Contact
              </a>
            </ul>
          </div>
          <div>
            <ul>
              <h1 className="text-black cursor-pointer lg:text-xl text-lg font-bold">
                Social Links
              </h1>
              <li
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/jatin-saxena-23276a213"
                  )
                }
                className="text-black cursor-pointer lg:text-lg text-base font-normal font-serif"
              >
                <LinkedInIcon
                  fontSize="large"
                  style={{
                    color: "blue",
                    borderRadius: 10,
                  }}
                />{" "}
                Linkedin
              </li>
              <li
                onClick={() => window.open("https://github.com/JatinSaxena02")}
                className="text-black cursor-pointer lg:text-lg text-base font-normal font-serif"
              >
                <GitHubIcon
                  fontSize="large"
                  style={{
                    color: "black",
                    borderRadius: 10,
                  }}
                />{" "}
                Github
              </li>
              <li
                onClick={() =>
                  window.open("https://www.facebook.com/share/17D36wY6Vo/")
                }
                className="text-black cursor-pointer lg:text-lg text-base font-normal font-serif"
              >
                <FacebookIcon
                  fontSize="large"
                  style={{
                    color: "blue",
                    borderRadius: 10,
                  }}
                />{" "}
                Facabook
              </li>
              <li
                onClick={() => window.open("https://twitter.com/jatinsaxena27")}
                className="text-black cursor-pointer lg:text-lg text-base font-normal font-serif"
              >
                <XIcon
                  fontSize="large"
                  style={{
                    color: "black",
                    borderRadius: 10,
                  }}
                />{" "}
                Twitter
              </li>
              <li
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/jatin.saxena27?igsh=M3dvaHZsZjV5NmRj"
                  )
                }
                className="text-black cursor-pointer lg:text-lg text-base font-normal font-serif"
              >
                <InstagramIcon
                  fontSize="large"
                  style={{
                    color: "#EC5E95",
                    borderRadius: 10,
                  }}
                />{" "}
                Instagram
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center mb-3">
        <p className="lg:text-xl lg:font-[cursive] text-base font-medium text-blue-600">
          ©{new Date().getFullYear()} Designed & Developed with ❤️ by Jatin
          Saxena — All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
