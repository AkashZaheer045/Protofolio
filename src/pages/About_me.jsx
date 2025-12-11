import { motion } from "framer-motion";
import React from "react";

const AboutMe = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ once: true }}
      id="aboutMey"
      className="py-16 px-6 md:px-16 bg-almond-100 dark:bg-gray-900"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-blue-400">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-4xl mx-auto">
        <motion.div
          className="flex-1 bg-almond-50 dark:bg-gray-800 border border-almond-300 dark:border-gray-700 rounded-xl shadow-lg p-6 md:p-8 flex flex-col justify-center"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
            Hello! I'm{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-300">
              Muhammad Akash Zaheer
            </span>
            , a <span className="font-semibold">Backend & DevOps Engineer</span>{" "}
            with strong experience in Node.js, Microservices, and DevOps tools.
            I specialize in building secure, scalable, real-time systems using
            REST APIs, WebSockets, Firebase, and AWS. My passion lies in backend
            security, automation, and cloud infrastructure. I'm always excited
            to take on new challenges and contribute to innovative projects!
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            <span className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold shadow">
              Node.js
            </span>
            <span className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold shadow">
              AWS
            </span>
            <span className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-semibold shadow">
              DevOps
            </span>
            <span className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-semibold shadow">
              Microservices
            </span>
            <span className="bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-200 px-3 py-1 rounded-full text-sm font-semibold shadow">
              Security
            </span>
            <span className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 px-3 py-1 rounded-full text-sm font-semibold shadow">
              Automation
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
