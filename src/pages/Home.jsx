import { motion } from "framer-motion";
import github from "../assets/images/github.png";
import linked_in from "../assets/images/linked_in.png";
import profile from "../assets/images/profile.png";

const Home = () => {
  return (
    <motion.section
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, delay: 0.2 }}
      id="mainy"
      className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-6 md:px-16 py-16 min-h-[80vh] bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="flex-1 flex flex-col items-start gap-6">
        <h3 className="text-lg md:text-xl font-semibold text-blue-600 dark:text-blue-400">
          Hey! It's Me
        </h3>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
          Muhammad Akash Zaheer
        </h2>
        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-200">
          I am a&nbsp;
          <span className="font-mono text-blue-500 dark:text-blue-300 animate-pulse">
            Full Stack Developer
          </span>
        </p>
        <div className="flex items-center gap-4">
          <span className="text-gray-600 dark:text-gray-300 font-medium">
            Follow me:
          </span>
          <a
            href="https://github.com/BitAnon47"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src={github} alt="GitHub" className="w-7 h-7" />
          </a>
          <a
            href="https://linkedin.com/in/muhammad-akash-zaheer"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src={linked_in} alt="LinkedIn" className="w-7 h-7" />
          </a>
        </div>
        <div className="flex gap-4 mt-2">
          <a href="mailto:akashzaheer786@gmail.com">
            <button className="px-5 py-2 rounded bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">
              E-Mail Me
            </button>
          </a>
          <button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1XjzhzvCrVCnxSTXe2VgFkUMsMZqMvGZD/view?usp=sharing",
                "_blank"
              )
            }
            className="px-5 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-semibold shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            Resume
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
        <img
          src={profile}
          alt="Muhammad Akash Zaheer"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-blue-200 dark:border-blue-800"
          loading="lazy"
        />
      </div>
    </motion.section>
  );
};

export default Home;
