import { motion } from "framer-motion";
import React from "react";
import codechef from "../assets/images/codechef.png";
import leetcode from "../assets/images/leetcode.png";
import project from "../assets/images/project.png";
import scholar from "../assets/images/scholarship.png";
import Card from "../components/Card";

const WhyHireMe = () => {
  const whyHireMeCards = [
    {
      imageUrl: scholar,
      altText: "Microservices Architect",
      title: "Microservices",
      description: "Modular, Scalable Systems",
    },
    {
      imageUrl: project,
      altText: "High Performance",
      title: "30% Faster",
      description: "API Response Optimization",
    },
    {
      imageUrl: project,
      altText: "Secure Systems",
      title: "Security",
      description: "OAuth, JWT & Tess Integration",
    },
    {
      imageUrl: leetcode,
      altText: "Problem Solver",
      title: "Problem Solver",
      description: "Efficient & Clean Code",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ once: true }}
      className="py-16 px-6 md:px-16 bg-gray-900"
      id="why-hire-me"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-700 dark:text-blue-400">
        Why Hire Me?
      </h2>
      <div className="flex flex-col sm:flex-row gap-8 max-w-4xl mx-auto">
        {whyHireMeCards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -120 : 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * idx, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <Card {...card} explore={null} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyHireMe;
