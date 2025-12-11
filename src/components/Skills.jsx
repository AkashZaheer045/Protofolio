import { motion } from "framer-motion";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNodeJs,
  faJs,
  faPython,
  faReact,
  faHtml5,
  faDocker,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import {
  faServer,
  faDatabase,
  faNetworkWired,
  faCode,
  faMicrochip,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const SkillCard = ({ name, level, icon, color }) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-almond-50 dark:bg-gray-800/50 backdrop-blur-sm border border-almond-300 dark:border-gray-700 p-6 rounded-2xl shadow-xl flex flex-col items-center gap-4 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all group cursor-pointer"
    >
      <motion.div
        className={`text-4xl ${color} group-hover:scale-110 transition-all duration-300`}
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
      >
        <FontAwesomeIcon icon={icon} />
      </motion.div>
      <div className="w-full">
        <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-200 text-center mb-3 font-sans">
          {name}
        </h4>
        <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-white/30"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
        <p className="text-right text-xs text-gray-500 dark:text-gray-400 mt-1">{level}%</p>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const languages = [
    { name: "JavaScript", level: 90, icon: faJs, color: "text-yellow-400" },
    { name: "TypeScript", level: 85, icon: faCode, color: "text-blue-400" },
    { name: "Python", level: 80, icon: faPython, color: "text-blue-500" },
    { name: "C++", level: 75, icon: faMicrochip, color: "text-blue-600" },
  ];

  const frameworks = [
    { name: "Node.js", level: 90, icon: faNodeJs, color: "text-green-500" },
    { name: "Express.js", level: 85, icon: faServer, color: "text-gray-300" },
    { name: "Nest.js", level: 80, icon: faServer, color: "text-red-500" },
    { name: "React", level: 85, icon: faReact, color: "text-cyan-400" },
    { name: "Microservices", level: 85, icon: faNetworkWired, color: "text-purple-400" },
    { name: "REST APIs", level: 90, icon: faGlobe, color: "text-orange-400" },
    { name: "GraphQL", level: 80, icon: faDatabase, color: "text-pink-400" },
  ];

  return (
    <section
      className="py-20 px-6 md:px-16 bg-almond-100 dark:bg-gray-950 relative overflow-hidden"
      id="skills"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-[10%] right-[5%] w-72 h-72 bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[80px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-cyan-300">
          Technical Arsenal
        </h2>

        {/* Languages Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-gray-300 border-l-4 border-blue-500 pl-4">
            Languages from Core
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {languages.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>

        {/* Frameworks Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-gray-300 border-l-4 border-cyan-500 pl-4">
            Frameworks & Systems
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {frameworks.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
