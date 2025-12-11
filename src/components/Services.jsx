import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faServer,
    faDatabase,
    faLock,
    faCreditCard,
    faCloudUploadAlt,
    faRobot,
} from "@fortawesome/free-solid-svg-icons";

const ServiceCard = ({ icon, title, description }) => {
    return (
        <motion.div
            whileHover={{ y: -5, borderColor: "rgba(56, 189, 248, 0.5)" }}
            className="bg-almond-50 dark:bg-gray-800/40 backdrop-blur-sm border border-gray-200 dark:border-gray-700 p-8 rounded-2xl flex flex-col gap-4 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
        >
            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-gray-700/50 flex items-center justify-center text-blue-600 dark:text-cyan-400 text-2xl mb-2">
                <FontAwesomeIcon icon={icon} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white font-sans">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{description}</p>
        </motion.div>
    );
};

const Services = () => {
    const services = [
        {
            icon: faServer,
            title: "API Development",
            description:
                "Building robust RESTful and GraphQL APIs using Node.js and Express.js, ensuring high performance and scalability.",
        },
        {
            icon: faDatabase,
            title: "Database Design",
            description:
                "Architecting efficient schemas with PostgreSQL, MySQL, and MongoDB. optimizing queries for speed and reliability.",
        },
        {
            icon: faLock,
            title: "Authentication Systems",
            description:
                "Implementing secure login flows using JWT, OAuth2, and Social Login integrations to protect user data.",
        },
        {
            icon: faCreditCard,
            title: "Payment Integration",
            description:
                "Seamlessly integrating Stripe and other payment gateways for secure transactions and subscription models.",
        },
        {
            icon: faCloudUploadAlt,
            title: "Cloud Deployment",
            description:
                "Deploying and scaling applications on AWS (EC2, S3), Firebase, and Vercel with CI/CD pipelines.",
        },
        {
            icon: faRobot,
            title: "AI Integrations",
            description:
                "Building smart chatbots, recommendation engines, and automation bots to enhance user engagement.",
        },
    ];

    return (
        <section id="services" className="py-20 px-6 md:px-12 bg-almond-200 dark:bg-gray-950">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        What I Do
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Leveraging modern technologies to build scalable, secure, and intelligent backend solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ServiceCard {...service} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
