import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import photo from "../assets/photo_withnobackground.png";
import { useRef, useState } from "react";

const Contact = () => {
  const text = "Contact";
  const handlewhatsappOpen = () => {
    window.open("https://wa.me/+918109333159");
  };
  const [loading, setloading] = useState(false);
  const [success, setSuccess] = useState("");
  const form = useRef();
  const handleSubmit = (e) => {
    setloading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_f5zrzni",
        "template_bdcvegr",
        form.current,
        "q-U-jICQhrI6vXgN9"
      )
      .then(() => {
        setSuccess("✅ Message sent successfully! I'll get back to you.");
        setTimeout(() => {
          setSuccess("");
        }, 4000);
        form.current.reset();
      })
      .catch((err) => {
        console.error(err);
        setSuccess("❌ Something went wrong. Please try again.");
        setTimeout(() => {
          setSuccess("");
        }, 500);
      })
      .finally(() => {
        setTimeout(() => setloading(false));
      });
  };
  return (
    <section
      id="contact"
      className="px-6 pt-10 lg:pt-10 max-w-6xl mx-auto overflow-hidden"
    >
      <div className="flex justify-center">
        {text.split(" ").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ x: "20%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.06 }}
            viewport={{ once: true, amount: 0.3 }}
            className="cursor-pointer text-4xl text-white font-bold font-serif md:mb-10 mb-7"
          >
            {letter}
          </motion.span>
        ))}
      </div>
      {success && (
        <div className="bg-green-300 lg:text-xl text-base font-medium px-2 py-1 rounded-md mx-auto relative top-[500px] w-[90%] lg:w-full lg:mb-3 lg:top-0">
          <h1 className="text-black">{success}</h1>
        </div>
      )}
      <div className="bg-[#0F1324] flex lg:flex-row md:flex-row flex-col mx-auto space-x-10 rounded-xl pt-10 px-10 pb-10">
        <div className="flex-[60%]">
          <h1 className="text-white font-light font-serif lg:text-2xl text-lg lg:font-[cursive]">
            HEY THERE👋👋 CONNECT WITH ME..
          </h1>
          <p className="text-gray-200 lg:text-base text-sm mt-5 lg:font-[cursive] font-serif">
            Whether it’s a job opportunity, a client project, or a creative
            collaboration – I’d love to hear from you!
          </p>
          <div className="flex flex-row lg:mt-10 mt-6">
            <img
              src={photo}
              alt="my_photo"
              className="lg:w-30 lg:h-30 w-20 l-20 rounded-full border-4 border-green-700 shadow-green-600 shadow-2xl"
            />
            <div className="flex flex-col justify-center lg:ml-7 ml-4">
              <h1 className="lg:text-2xl text-base font-bold text-white">
                Jatin Saxena
              </h1>
              <p className="lg:text-lg text-base text-slate-400">Developer</p>
            </div>
          </div>
          <div
            className="lg:mt-15 cursor-pointer w-fit mt-2 mb-5 shadow-2xl shadow-green-700 lg:p-3 p-1 rounded-full hover:bg-white"
            onClick={handlewhatsappOpen}
          >
            <WhatsAppIcon
              fontSize="large"
              color="success"
              style={{
                fontSize: "40px",
              }}
            />
          </div>
        </div>
        <div className="flex-[40%]">
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col">
            <label className="text-white">
              Name <span className="text-red">*</span>
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="Provide your name.."
              id="name"
              required
              className="text-white mt-1 border-2 border-gray-500 px-2 py-1 rounded-md lg:text-lg text-sm"
            />
            <label className="mt-3 text-white">
              Email <span className="text-red">*</span>
            </label>
            <input
              type="text"
              name="user_email"
              placeholder="Provide your E-mail"
              id="email"
              required
              className="text-white mt-1 border-2 border-gray-500 px-2 py-1 rounded-md lg:text-lg text-sm"
            />
            <label className="mt-3 text-white">
              Phone <span className="text-red">*</span>
            </label>
            <input
              type="number"
              name="user_phone"
              placeholder="Provide your phone number"
              id="number"
              required
              className="text-white mt-1 border-2 border-gray-500 px-2 py-1 rounded-md lg:text-lg text-sm"
            />
            <label className="mt-3 text-white">
              Message <span className="text-red">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
              className="text-white mt-1 border-2 border-gray-500 px-2 py-1 rounded-md lg:text-lg text-sm"
            />
            <input
              type="hidden"
              name="current_year"
              value={new Date().getFullYear()}
            />
            <button
              disabled={loading}
              type="submit"
              className="text-white cursor-pointer mt-5 bg-blue-600 rounded-lg py-2 lg:text-lg text-sm font-serif hover:bg-green-600"
            >
              {loading ? "Submitting your details.." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
