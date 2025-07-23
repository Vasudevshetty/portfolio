"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiCode, FiStar } from "react-icons/fi";
import { portfolioData } from "@/data/portfolio";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const getStatusColor = (status: string) => {
    if (status.includes("Winner") || status.includes("Production")) {
      return "text-green-400 border-green-400";
    }
    if (status.includes("Complete")) {
      return "text-blue-400 border-blue-400";
    }
    return "text-yellow-400 border-yellow-400";
  };

  const getStatusIcon = (status: string) => {
    if (status.includes("Winner")) return "🏆";
    if (status.includes("Production")) return "🚀";
    if (status.includes("Complete")) return "✅";
    return "🚧";
  };

  return (
    <section className="py-20 px-8 bg-neutral-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-green-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-neutral-900 border border-green-500/30 rounded-lg overflow-hidden hover:border-green-500 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                      {project.name}
                    </h3>
                    <p className="text-neutral-300 mb-3">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition-colors p-2 border border-green-500 rounded-lg hover:bg-green-500/10"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title="Live Demo"
                    >
                      <FiExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors p-2 border border-purple-500 rounded-lg hover:bg-purple-500/10"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title="Source Code"
                    >
                      <FiGithub size={20} />
                    </motion.a>
                  </div>
                </div>

                <div className="mb-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm border ${getStatusColor(
                      project.status
                    )}`}
                  >
                    <span className="mr-2">
                      {getStatusIcon(project.status)}
                    </span>
                    {project.status}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-neutral-800 text-yellow-400 text-xs rounded border border-yellow-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-white font-semibold flex items-center">
                    <FiStar className="mr-2 text-yellow-400" />
                    Key Highlights
                  </h4>
                  {project.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="text-neutral-300 text-sm flex items-start"
                    >
                      <span className="text-green-400 mr-2 mt-1">•</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Animated border effect */}
              <motion.div
                className="h-1 bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiCode className="mr-2" />
            View More Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
