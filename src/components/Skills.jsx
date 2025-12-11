import { motion } from "framer-motion";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNodeJs,
  faJs,
  faPython,
  faJava,
  faDocker,
  faAws,
  faGitAlt,
  faReact,
  faAngular,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import {
  faServer,
  faDatabase,
  faCode,
  faMobile,
  faBrain,
  faChartLine,
  faChartBar,
  faCalculator,
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
  // Languages - Full width section
  const languages = [
    { name: "JavaScript", level: 90, icon: faJs, color: "text-yellow-400" },
    { name: "Python", level: 75, icon: faPython, color: "text-blue-500" },
    { name: "Java", level: 70, icon: faJava, color: "text-red-500" },
  ];

  // Core expertise - In sequence
  const coreExpertise = [
    {
      category: "Mobile Development",
      skills: [
        { name: "Flutter", level: 80, icon: faMobile, color: "text-blue-400" },
        { name: "Java (Android)", level: 70, icon: faJava, color: "text-red-500" },
        { name: "XML", level: 75, icon: faCode, color: "text-orange-500" },
      ]
    },
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 85, icon: faReact, color: "text-cyan-400" },
        { name: "Angular", level: 75, icon: faAngular, color: "text-red-600" },
        { name: "HTML/CSS", level: 90, icon: faHtml5, color: "text-orange-500" },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 95, icon: faNodeJs, color: "text-green-500" },
        { name: "Express.js", level: 90, icon: faServer, color: "text-gray-600" },
        { name: "NestJS", level: 75, icon: faCode, color: "text-red-600" },
      ]
    },
    {
      category: "AI/ML",
      skills: [
        { name: "TensorFlow", level: 75, icon: faBrain, color: "text-orange-600" },
        { name: "PyTorch", level: 70, icon: faBrain, color: "text-red-600" },
        { name: "Scikit-learn", level: 80, icon: faChartLine, color: "text-blue-600" },
      ]
    },
  ];

  // Additional skills
  const additionalSkills = [
    {
      category: "Databases",
      skills: [
        { name: "MongoDB", level: 85, icon: faDatabase, color: "text-green-600" },
        { name: "PostgreSQL", level: 80, icon: faDatabase, color: "text-blue-600" },
        { name: "Redis", level: 75, icon: faDatabase, color: "text-red-600" },
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 85, icon: faAws, color: "text-orange-500" },
        { name: "Docker", level: 80, icon: faDocker, color: "text-blue-500" },
        { name: "Git", level: 90, icon: faGitAlt, color: "text-orange-600" },
      ]
    },
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

        <div className="space-y-12">
          {/* Languages Section - Full Width */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full"></span>
              Languages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {languages.map((skill, idx) => (
                <SkillCard key={idx} {...skill} />
              ))}
            </div>
          </motion.div>

          {/* Core Expertise - Frontend, Backend, AI in Sequence */}
          {coreExpertise.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-400 rounded-full"></span>
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, idx) => (
                  <SkillCard key={idx} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}

          {/* Additional Skills - Full Width */}
          {additionalSkills.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full"></span>
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, idx) => (
                  <SkillCard key={idx} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
