import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCloud,
  faDatabase,
  faMobile,
  faBrain,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

const skillCategories = [
  {
    title: 'Backend Development',
    icon: faCode,
    color: 'from-teal-500 to-cyan-500',
    skills: [
      { name: 'Node.js', level: 95 },
      { name: 'Express.js', level: 90 },
      { name: 'NestJS', level: 75 },
      { name: 'REST APIs', level: 95 },
      { name: 'GraphQL', level: 80 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: faCloud,
    color: 'from-blue-500 to-indigo-500',
    skills: [
      { name: 'AWS', level: 85 },
      { name: 'Docker', level: 80 },
      { name: 'Kubernetes', level: 70 },
      { name: 'CI/CD', level: 85 },
      { name: 'Git', level: 90 },
    ],
  },
  {
    title: 'Databases',
    icon: faDatabase,
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 85 },
      { name: 'Redis', level: 75 },
      { name: 'Firebase', level: 80 },
    ],
  },
  {
    title: 'Mobile Development',
    icon: faMobile,
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Flutter', level: 80 },
      { name: 'Java (Android)', level: 70 },
      { name: 'React Native', level: 65 },
      { name: 'XML', level: 75 },
    ],
  },
  {
    title: 'Frontend',
    icon: faLayerGroup,
    color: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'React', level: 85 },
      { name: 'Angular', level: 75 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 80 },
    ],
  },
  {
    title: 'AI & ML',
    icon: faBrain,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'TensorFlow', level: 75 },
      { name: 'PyTorch', level: 70 },
      { name: 'Scikit-learn', level: 80 },
      { name: 'Python', level: 75 },
    ],
  },
];

function SkillBar({ name, level, delay, isInView }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
        />
      </div>
    </div>
  );
}

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 md:py-32 px-6 md:px-16 bg-background" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Expertise across the full development stack, from backend systems to cloud deployment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="p-6 rounded-xl bg-card shadow-card border border-border/50 hover-lift"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <FontAwesomeIcon icon={category.icon} className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={categoryIndex * 0.1 + skillIndex * 0.05}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
