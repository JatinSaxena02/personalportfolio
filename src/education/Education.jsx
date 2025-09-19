import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import PushPinIcon from "@mui/icons-material/PushPin";

const Education = () => {
  const text = "Education";
  const [selected, setSelected] = useState(null);

  const card = [
    {
      id: 1,
      degree: "Master of Computer Application",
      college: "Lnct college Bhopal",
      year: "2023-2025",
      score: "CGPA: 8.52",
      color: "text-blue-500",
      boxShadow: [
        "0px 0px 5px rgba(255,0,0,0.4)",
        "0px 0px 10px rgba(255,165,0,0.6)",
        "0px 0px 5px rgba(255,0,0,0.4)",
      ],
    },
    {
      id: 2,
      degree: "Bachelor of Computer Application",
      college: "Lnct university Bhopal",
      year: "2020-2023",
      score: "CGPA: 8.86",
      color: "text-blue-500",
      boxShadow: [
        "0px 0px 5px rgba(0,0,255,0.4)",
        "0px 0px 10px rgba(0,255,255,0.6)",
        "0px 0px 5px rgba(0,0,255,0.4)",
      ],
    },
    {
      id: 3,
      degree: "Higher Secondary (CBSE-12)",
      college: "Happy Days School",
      year: "2019-2020",
      score: "Percentage: 74%",
      color: "text-blue-500",
      boxShadow: [
        "0px 0px 5px rgba(0,255,0,0.4)",
        "0px 0px 10px rgba(50,205,50,0.6)",
        "0px 0px 5px rgba(0,255,0,0.4)",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="px-6 max-w-6xl mx-auto overflow-hidden pt-15 lg:pt-20 md:pt-15"
    >
      {/* Title */}
      <div className="flex justify-center">
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ x: "-20%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.06 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl text-white font-bold font-serif lg:mb-15 md:mb-15 mb-13"
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Cards */}
      <div className="flex space-y-6 flex-col md:flex-row md:gap-6">
        {card.map((item) => (
          <div key={item.id} className="pb-1">
            <div className="flex-row flex ml-3 absolute">
              <PushPinIcon
                style={{ transform: "rotate(30deg)" }}
                fontSize="large"
                className="text-red-600 relative -top-5 z-20"
              />
              <div className="relative -left-7 top-1 bg-gray-600 rounded-full z-20 w-3 h-3" />
            </div>
            <motion.div
              animate={{
                boxShadow: item.boxShadow,
              }}
              layoutId={`card-${item.id}`}
              onClick={() => setSelected(item)}
              initial={{ x: "-20%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
                boxShadow: {
                  repeat: Infinity,
                  repeatType: "mirror",
                },
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white shadow-lg px-6 py-5 rounded-2xl flex-1 cursor-pointer hover:shadow-2xl"
            >
              <p className="text-gray-500 text-md font-serif font-medium justify-end">
                {item.year}
              </p>
              <h3 className="text-xl font-serif font-bold mb-2 text-gray-800">
                {item.degree}
              </h3>
              <p className="text-gray-600 text-md font-semibold font-serif">
                {item.college}
              </p>

              <p className="text-gray-500 text-sm font-serif">{item.score}</p>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Expanded Card */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              layoutId={`card-${selected.id}`}
              className="bg-white rounded-3xl p-10 shadow-2xl w-[90%] md:w-[60%] cursor-pointer relative"
              initial={{ scale: 0.8, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: 5 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-4 border-orange-400 pointer-events-none"
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(249,115,22,0.6)",
                    "0 0 25px rgba(249,115,22,0.9)",
                    "0 0 10px rgba(249,115,22,0.6)",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              />

              {/* Card content */}
              <h2 className="text-2xl font-bold mb-4">{selected.degree}</h2>
              <p className="text-gray-700">{selected.college}</p>
              <p className="text-gray-500">{selected.year}</p>
              <p className={`mt-2 ${selected.color}`}>{selected.score}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Education;
