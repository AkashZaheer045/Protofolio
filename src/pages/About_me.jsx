import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faBullseye, faBolt } from "@fortawesome/free-solid-svg-icons";
import profile from "../assets/images/profile.png";

const highlights = [
  {
    icon: faLightbulb,
    title: 'My Vision',
    description: 'To build robust backend systems that power innovative applications and drive business growth.',
  },
  {
    icon: faBullseye,
    title: 'My Approach',
    description: 'Combining technical excellence with security best practices to deliver reliable, scalable solutions.',
  },
  {
    icon: faBolt,
    title: 'My Focus',
    description: 'Building production-ready APIs and microservices that solve real-world problems effectively.',
  },
];

const expertise = [
  'Node.js',
  'Microservices',
  'AWS & Cloud',
  'DevOps',
  'API Development',
  'Database Design',
];

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      id="aboutMey"
      className="py-20 md:py-32 px-6 md:px-16 bg-gradient-subtle"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer with a focus on creating scalable, secure backend systems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-20 blur-2xl" />
              <div className="relative h-full rounded-2xl overflow-hidden shadow-elevated border border-border/50">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10" />
                <div className="h-full flex items-center justify-center bg-secondary/50">
                  <div className="text-center p-8">
                    {/* Profile Picture */}
                    <div className="w-32 h-32 rounded-full bg-primary/20 mx-auto mb-4 overflow-hidden border-4 border-primary/30">
                      <img
                        src={profile}
                        alt="Akash Zaheer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">Akash Zaheer</h3>
                    <p className="text-muted-foreground">Backend & DevOps Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side - Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm Akash Zaheer, a Full-Stack Software Developer skilled in building complete applications from scalable backend APIs to modern frontend interfaces. I work with Node.js, Express.js, PostgreSQL, React/Next.js, AWS, Firebase, CI/CD, and WebSockets. I also develop AI-driven systems including MCP automation, Pinecone-based semantic search, and advanced authentication frameworks, focusing on performance, security, and cloud-ready architecture.
              </p>
            </div>

            <div>
              <p className="text-muted-foreground leading-relaxed">
                My journey in software development started with a fascination for how systems work together. This curiosity led me to specialize in backend architecture and DevOps practices, building robust APIs and cloud infrastructure.
              </p>
            </div>

            {/* Expertise Tags */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Areas of Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="p-6 rounded-xl glass hover-lift"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <FontAwesomeIcon icon={item.icon} className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-heading font-semibold mb-2 text-foreground">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
