import { motion } from "framer-motion";
import React from "react";
import SemiDonutChart from "./SemiDonutChart";

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ margin: "-100px", once: true }}
      className="py-16 px-6 md:px-16 bg-blue-50 dark:bg-gray-900"
      id="skills"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-700 dark:text-blue-400">
        Skills
      </h2>
      <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 text-blue-600 dark:text-blue-300">
        Programming Languages
      </h3>
      <div className="flex flex-col gap-6 items-center mb-10">
        <div className="flex flex-wrap justify-center gap-6">
          <SemiDonutChart percentage={90} fill="#03B0FD" txt="JavaScript" />
          <SemiDonutChart percentage={85} fill="#03B0FD" txt="TypeScript" />
          <SemiDonutChart percentage={80} fill="#03B0FD" txt="Python" />
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <SemiDonutChart percentage={75} fill="#03B0FD" txt="C++" />
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="C" />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ margin: "-100px", once: true }}
      >
        <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 text-blue-600 dark:text-blue-300">
          Frameworks & Technologies
        </h3>
        <div className="flex flex-col gap-6 items-center mb-10">
          <div className="flex flex-wrap justify-center gap-6">
            <SemiDonutChart percentage={90} fill="#03B0FD" txt="Node.js" />
            <SemiDonutChart percentage={85} fill="#03B0FD" txt="Express.js" />
            <SemiDonutChart percentage={80} fill="#03B0FD" txt="Nest.js" />
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <SemiDonutChart
              percentage={85}
              fill="#03B0FD"
              txt="Microservices"
            />
            <SemiDonutChart percentage={90} fill="#03B0FD" txt="REST APIs" />
            <SemiDonutChart percentage={80} fill="#03B0FD" txt="GraphQL" />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ margin: "-100px", once: true }}
      >
        <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 text-blue-600 dark:text-blue-300">
          DevOps & Tools
        </h3>
        <div className="flex flex-col gap-6 items-center">
          <div className="flex flex-wrap justify-center gap-6">
            <SemiDonutChart percentage={85} fill="#03B0FD" txt="Docker" />
            <SemiDonutChart percentage={80} fill="#03B0FD" txt="Kubernetes" />
            <SemiDonutChart percentage={85} fill="#03B0FD" txt="AWS" />
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <SemiDonutChart percentage={80} fill="#03B0FD" txt="Jenkins" />
            <SemiDonutChart percentage={85} fill="#03B0FD" txt="Nginx" />
            <SemiDonutChart percentage={75} fill="#03B0FD" txt="Terraform" />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
