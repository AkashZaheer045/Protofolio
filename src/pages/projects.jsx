import { motion } from "framer-motion";
import React from "react";
import baked_bliss from "../assets/images/baked_bliss.jpg";
import book_store from "../assets/images/Books.jpg";
import study_buddy from "../assets/images/Study_Bliss.jpg";
import Card from "../components/Card";

const Projects = () => {
  const cards = [
    {
      imageUrl: baked_bliss, // Placeholder
      altText: "Q Autos",
      title: "Q Autos - Car Rental",
      description:
        "A robust microservices-based car rental platform designed for high performance and scalability.",
      techStack: ["Node.js", "Microservices", "Stripe", "Tess Payment", "AWS"],
      challenges: [
        "Implemented secure payment gateways (Stripe & Tess) with webhooks.",
        "Optimized asynchronous backend performance.",
        "Integrated location-based services for real-time tracking.",
      ],
      links: {
        repo: "https://github.com/BitAnon47",
        demo: null, // Add live link if available
      },
    },
    {
      imageUrl: baked_bliss,
      altText: "Baked Bliss",
      title: "Baked Bliss Bakery",
      description:
        "Full-stack e-commerce solution for a bakery with real-time features and secure checkout.",
      techStack: ["Node.js", "Firebase", "Stripe", "React", "Express"],
      challenges: [
        "Real-time user profile management and data sync.",
        "Secure checkout flow with Stripe integration.",
        "Responsive UI for seamless mobile ordering.",
      ],
      links: {
        repo: "https://github.com/BitAnon47/baked-bliss",
        demo: null,
      },
    },
    {
      imageUrl: study_buddy,
      altText: "Study Buddy",
      title: "Study Buddy Platform",
      description:
        "EdTech freelancing platform connecting students and teachers with real-time collaboration tools.",
      techStack: ["Node.js", "Socket.IO", "Firebase", "Multer"],
      challenges: [
        "Implemented real-time chat using WebSockets.",
        "Secure assignment uploads with Multer.",
        "Teacher-student bidding system logic.",
      ],
      links: {
        repo: "https://github.com/BitAnon47/study-buddy",
        demo: null,
      },
    },
    {
      imageUrl: book_store,
      altText: "Book Enhancement Store",
      title: "Book Enhancement Store",
      description:
        "Hybrid mobile and web bookstore featuring AI-powered recommendations.",
      techStack: ["Flutter", "Node.js", "Machine Learning", "Firebase"],
      challenges: [
        "Integrated ML chatbot for book recommendations.",
        "Synchronized date between Mobile (Flutter) and Web.",
        "Efficient order processing system.",
      ],
      links: {
        repo: "https://github.com/BitAnon47/book-store",
        demo: null,
      },
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ margin: "-100px", once: true }}
      className="py-20 px-6 md:px-16 bg-gray-950"
      id="project"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A collection of high-performance, scalable applications built with modern tech stacks.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => (
            <Card
              key={index}
              {...card}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
