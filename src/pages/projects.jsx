import { motion } from "framer-motion";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faUtensils, faUserGraduate, faBook } from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card";

const Projects = () => {
  const cards = [
    {
      icon: faCar,
      title: "Car Rental",
      description:
        "A robust microservices-based car rental platform designed for high performance and scalability.",
      techStack: ["Node.js", "Microservices", "Stripe", "Tess Payment", "AWS"],
      challenges: [
        "Implemented secure payment gateways (Stripe & Tess) with webhooks.",
        "Optimized asynchronous backend performance.",
        "Integrated location-based services for real-time tracking.",
      ],
      links: {
        repo: "https://github.com/AkashZaheer045",
        demo: null,
      },
    },
    {
      icon: faUtensils,
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
        repo: "https://github.com/AkashZaheer045/baked-bliss",
        demo: null,
      },
    },
    {
      icon: faUserGraduate,
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
        repo: "https://github.com/AkashZaheer045/study-buddy",
        demo: null,
      },
    },
    {
      icon: faBook,
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
        repo: "https://github.com/AkashZaheer045/book-store",
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
      className="py-20 px-6 md:px-16 bg-secondary/30"
      id="project"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-heading">
          Featured Projects
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
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
