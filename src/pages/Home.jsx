import { motion } from "framer-motion";
import github from "../assets/images/github.png";
import linked_in from "../assets/images/linked_in.png";
import profile from "../assets/images/profile.png";

const Home = () => {
  return (
    <section
      id="mainy"
      className="relative min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden px-6 md:px-12 py-20"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        className="relative z-10 container max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8"
      >
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl md:text-2xl font-mono text-cyan-400 mb-2 font-medium tracking-wide">
              Hey there, I'm
            </h3>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-2 tracking-tight drop-shadow-lg">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Muhammad Akash
              </span>{" "}
              <br className="hidden md:block" />
              Zaheer
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-300 max-w-2xl font-light"
          >
            I craft seamless digital experiences as a{" "}
            <span className="font-semibold text-white">
              Full Stack Developer
            </span>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-6 mt-4"
          >
            <span className="text-gray-400 text-sm uppercase tracking-widest">
              Connect
            </span>
            <div className="h-px w-12 bg-gray-700"></div>
            <div className="flex gap-4">
              <a
                href="https://github.com/BitAnon47"
                target="_blank"
                rel="noreferrer"
                className="hover:-translate-y-1 transition-transform p-2 bg-gray-800 rounded-full border border-gray-700 hover:border-blue-500 hover:bg-gray-700"
              >
                <img src={github} alt="GitHub" className="w-6 h-6 invert" />
              </a>
              <a
                href="https://linkedin.com/in/muhammad-akash-zaheer"
                target="_blank"
                rel="noreferrer"
                className="hover:-translate-y-1 transition-transform p-2 bg-gray-800 rounded-full border border-gray-700 hover:border-blue-500 hover:bg-gray-700"
              >
                <img src={linked_in} alt="LinkedIn" className="w-6 h-6 invert" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 mt-6"
          >
            <a href="mailto:akashzaheer786@gmail.com">
              <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300">
                Contact Me
              </button>
            </a>
            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1XjzhzvCrVCnxSTXe2VgFkUMsMZqMvGZD/view?usp=sharing",
                  "_blank"
                )
              }
              className="px-8 py-3.5 rounded-full bg-transparent border border-gray-600 text-gray-300 font-semibold text-lg hover:bg-gray-800 hover:text-white hover:border-gray-500 transition-all duration-300"
            >
              View Resume
            </button>
          </motion.div>
        </div>

        {/* Hero Image / Illustration */}
        <div className="flex-1 flex justify-center items-center relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 blur-[60px] opacity-40 rounded-full"></div>
            <img
              src={profile}
              alt="Muhammad Akash Zaheer"
              className="relative w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-4 border-gray-800/50 shadow-2xl z-10"
            />
            {/* Spinning ring decor */}
            <div className="absolute -inset-4 border border-blue-500/30 rounded-full border-t-transparent animate-spin-slow z-0" style={{ animationDuration: '10s' }} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
