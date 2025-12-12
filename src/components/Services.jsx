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
            whileHover={{ y: -5, borderColor: "hsl(var(--primary))" }}
            className="h-full bg-card backdrop-blur-sm border border-border p-8 rounded-2xl flex flex-col gap-4 hover:shadow-glow transition-all duration-300"
        >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-2xl mb-2">
                <FontAwesomeIcon icon={icon} />
            </div>
            <h3 className="text-xl font-bold text-foreground font-heading">{title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm flex-grow">{description}</p>
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
        <section id="services" className="py-20 px-6 md:px-12 bg-secondary/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-heading">
                        What I Do
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Leveraging modern technologies to build scalable, secure, and intelligent backend solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="h-full"
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
