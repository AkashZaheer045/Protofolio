import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Card = ({ icon, title, description, techStack, links, challenges }) => {
  return (
    <div className="bg-almond-50 dark:bg-gray-900 border border-almond-300 dark:border-gray-800 rounded-xl shadow-xl overflow-hidden flex flex-col h-full transition-transform hover:-translate-y-2 group">
      <div className="h-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 dark:bg-gray-900/10 backdrop-blur-sm"></div>
        <div className="z-10 text-5xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1 gap-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-sans">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
          
          {/* Tech Stack Badges */}
          {techStack && (
            <div className="flex flex-wrap gap-2 mb-4">
              {techStack.map((tech, idx) => (
                <span key={idx} className="px-2 py-1 bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-cyan-400 text-xs rounded border border-blue-200 dark:border-gray-700">
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Challenges & Solutions */}
          {challenges && (
            <div className="mb-4 bg-gray-100 dark:bg-gray-800/50 p-3 rounded text-xs text-gray-700 dark:text-gray-300">
              <strong className="block text-gray-900 dark:text-gray-200 mb-1">Key Features:</strong>
              <ul className="list-disc pl-4 space-y-1">
                {challenges.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-auto flex gap-3">
          {links?.repo && (
            <a
              href={links.repo}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center px-4 py-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded border border-gray-300 dark:border-gray-700 transition flex items-center justify-center gap-2 text-sm font-medium"
            >
              <FontAwesomeIcon icon={faGithub} /> Code
            </a>
          )}
          {links?.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow-lg shadow-blue-500/20 transition flex items-center justify-center gap-2 text-sm font-medium"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
