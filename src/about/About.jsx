import { motion } from "framer-motion";
import about from "../assets/about.png";

const About = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 1, delay: 0.5, ease: "easeOut" },
  };
  const text = "About";
  return (
    <section id="about" className="px-6 pt-7 lg:pt-7 max-w-6xl mx-auto">
      <div className="flex justify-center">
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ x: "-20%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.06 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl text-white font-bold font-serif lg:mb-15 mb-10"
          >
            {letter}
          </motion.span>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.p
          {...fadeUp}
          className="leading-[1.3rem] lg:text-xl md:text-lg font-serif lg:leading-[1.8rem] max-w-xl text-md font-light text-white"
        >
          Enthusiastic and detail-oriented web developer with a solid foundation
          in both front-end and back-end technologies, including HTML, CSS,
          JavaScript, React, Node.js, and Express.js. Experienced in designing
          and building responsive, scalable, and user-friendly web applications.
          Adept at collaborating within dynamic development teams and
          contributing effectively to all phases of the development lifecycle.
          Eager to apply problem-solving skills, creativity, and a passion for
          clean code to real-world projects. Committed to continuous learning,
          professional growth, and staying up-to-date with emerging technologies
          and industry trends.
        </motion.p>

        <motion.img
          {...fadeUp}
          src={about}
          alt="About"
          className="lg:w-full md:w-80 md:h-70 w-[95%] h-[45%] max-w-md rounded-lg"
        />
      </div>
    </section>
  );
};

export default About;
