import { motion } from "framer-motion";
import React from "react";
import baked_bliss from "../assets/images/baked_bliss.jpg";
import book_store from "../assets/images/Books.jpg";
import study_buddy from "../assets/images/Study_Bliss.jpg";
import Card from "../components/Card";

const Projects = () => {
  const cards = [
    {
      imageUrl: baked_bliss, // Placeholder for Q Autos if image not available, utilizing existing asset or similar
      altText: "Q Autos",
      title: "Q Autos - Car Rental",
      description:
        "Microservices-based car rental platform featuring Stripe & Tess payments, location-based services, and asynchronous backend models for high performance.",
      explore: "https://github.com/BitAnon47", // Fallback URL or specific repo
    },
    {
      imageUrl: baked_bliss,
      altText: "Baked Bliss",
      title: "Baked Bliss",
      description:
        "Full-stack bakery e-commerce app with Stripe secure checkout, real-time user profile management, and scalable Node.js/Firebase backend.",
      explore: "https://github.com/BitAnon47/baked-bliss",
    },
    {
      imageUrl: study_buddy,
      altText: "Study Buddy",
      title: "Study Buddy",
      description:
        "EdTech freelancing platform connecting students/teachers. Features real-time Socket.IO chat, Stripe payments, and secure assignment uploads.",
      explore: "https://github.com/BitAnon47/study-buddy",
    },
    {
      imageUrl: book_store,
      altText: "Book Enhancement Store",
      title: "Book Enhancement Store",
      description:
        "Hybrid mobile/web bookstore built with Flutter & Node.js. Includes an ML-powered chatbot for recommendations and efficient order processing.",
      explore: "https://github.com/BitAnon47/book-store",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ margin: "-100px", once: true }}
      className="py-16 px-6 md:px-16 bg-white dark:bg-gray-900"
      id="project"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-700 dark:text-blue-400">
        Projects
      </h2>
      <div className="max-w-5xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              altText={card.altText}
              title={card.title}
              description={card.description}
              explore={card.explore}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
