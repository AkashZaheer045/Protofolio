import { motion } from "framer-motion";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faServer,
  faGaugeHigh,
  faShieldHalved,
  faLightbulb
} from "@fortawesome/free-solid-svg-icons";

const WhyHireMe = () => {
  const whyHireMeCards = [
    {
      icon: faServer,
      title: "Microservices",
      description: "Modular, Scalable Systems",
    },
    {
      icon: faGaugeHigh,
      title: "30% Faster",
      description: "API Response Optimization",
    },
    {
      icon: faShieldHalved,
      title: "Security",
      description: "OAuth, JWT & Tess Integration",
    },
    {
      icon: faLightbulb,
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
      className="py-16 px-6 md:px-16 bg-secondary/50"
      id="why-hire-me"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary font-heading">
        Why Hire Me?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {whyHireMeCards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-6 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform shadow-card"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl">
              <FontAwesomeIcon icon={card.icon} />
            </div>
            <h3 className="text-xl font-bold text-foreground font-heading">{card.title}</h3>
            <p className="text-muted-foreground text-sm">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyHireMe;
