import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import profile from "../assets/images/profile.png";
import AnimatedBackground from "../components/AnimatedBackground";
import { ParallaxBackground, FloatingElement, SmoothReveal } from "../components/ParallaxEffects";

const Home = () => {
  return (
    <section
      id="mainy"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-almond-200 via-almond-100 to-almond-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black overflow-hidden px-6 md:px-12 py-20"
    >
      {/* Animated Background - Only in Dark Mode */}
      <div className="hidden dark:block">
        <AnimatedBackground />
      </div>

      {/* Background Glow Effects with Parallax */}
      <ParallaxBackground speed={-0.3}>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/10 dark:bg-blue-600/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-purple-600/10 dark:bg-purple-600/10 rounded-full blur-[120px]" />
        </div>
      </ParallaxBackground>

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
            <h3 className="text-xl md:text-2xl font-mono text-blue-600 dark:text-cyan-400 mb-2 font-medium tracking-wide">
              Software Developer
            </h3>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight drop-shadow-lg">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-cyan-400 dark:to-purple-400">
                Building Scalable
              </span>{" "}
              <br className="hidden md:block" />
              <span className="text-gray-900 dark:text-white">Software Solutions</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl font-light mb-6"
          >
            I build complete <span className="text-gray-900 dark:text-white font-semibold">full-stack solutions</span> that <span className="text-gray-900 dark:text-white font-semibold">automate workflows</span> and <span className="text-gray-900 dark:text-white font-semibold">scale efficiently</span> across modern cloud platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex gap-4 flex-wrap"
          >
            <ScrollLink to="contact" smooth={true} duration={600}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(6, 182, 212, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:shadow-cyan-500/50 transition-all cursor-pointer"
              >
                Hire Me
              </motion.button>
            </ScrollLink>
            <motion.a
              href="https://drive.google.com/file/d/1XjzhzvCrVCnxSTXe2VgFkUMsMZqMvGZD/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, borderColor: "rgba(6, 182, 212, 1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-gray-700 dark:border-gray-300 text-gray-900 dark:text-gray-100 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            >
              View Resume
            </motion.a>
          </motion.div>
        </div>

        {/* Profile Image with Advanced Animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: [0, -20, 0],
          }}
          transition={{
            opacity: { delay: 0.3, duration: 0.6 },
            scale: { delay: 0.3, duration: 0.6 },
            rotate: { delay: 0.3, duration: 0.6 },
            y: {
              delay: 1,
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="relative z-10"
          whileHover={{ scale: 1.05, rotate: 5 }}
        >
          <div className="relative">
            {/* Animated rings around profile */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ padding: '20px' }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-400/30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                delay: 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ padding: '40px' }}
            />

            <img
              src={profile}
              alt="Profile"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-cyan-400 dark:border-cyan-400 shadow-2xl shadow-cyan-500/50"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
