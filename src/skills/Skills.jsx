import { motion } from "framer-motion";
import imageList from "../assets/images";

const Skills = () => {
  const text = "Skills";

  return (
    <section
      id="skills"
      className="px-6 pt-10 lg:pt-10 max-w-6xl mx-auto overflow-hidden"
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
            className="text-4xl text-white font-bold font-serif md:mb-15 lg:mb-15 mb-10"
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className="flex items-center justify-center mb-10">
        <motion.div className="md:grid md:grid-cols-6 lg:grid lg:grid-cols-6 grid grid-cols-4 lg:space-y-6 lg:space-x-6 space-y-3 gap-5 justify-evenly">
          {imageList.skills.map((skill, i) => (
            <motion.div
              initial={{ x: "-20%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileTap={{
                scale: 0.98,
                boxShadow: "0 0 30px 10px rgba(0,255,200,0.9)",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 30px 10px rgba(0,255,200,0.7)",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              transition={{ duration: 1, ease: "easeIn" }}
              key={i}
              className="rounded-md bg-slate-400 p-2 lg:w-30 lg:h-30 md:w-25 md:h-25 w-17 h-17 m-auto cursor-pointer"
            >
              <img src={skill} className="rounded-md" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
