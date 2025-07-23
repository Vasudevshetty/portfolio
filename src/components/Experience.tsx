"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin, FiCalendar, FiUsers } from "react-icons/fi";
import { portfolioData } from "@/data/portfolio";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-green-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-cyan-500 hidden md:block" />

          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative mb-12 md:ml-16"
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute -left-20 top-6 w-4 h-4 bg-green-500 rounded-full border-4 border-neutral-900 hidden md:block"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              />

              <motion.div
                className="bg-neutral-800 border border-green-500/30 rounded-lg p-6 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2 flex items-center">
                      <FiBriefcase className="mr-3 text-yellow-400" />
                      {exp.position}
                    </h3>
                    <h4 className="text-xl text-white mb-2">{exp.company}</h4>
                    {exp.type && (
                      <div className="flex items-center text-purple-400 text-sm mb-2">
                        <FiUsers className="mr-2" />
                        {exp.type}
                      </div>
                    )}
                  </div>
                  <div className="text-right text-sm">
                    <div className="flex items-center text-green-400 mb-1">
                      <FiCalendar className="mr-2" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <FiMapPin className="mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h5 className="text-white font-semibold">
                    Key Achievements:
                  </h5>
                  {exp.achievements.map((achievement, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start text-neutral-300"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <span className="text-green-400 mr-3 mt-1 text-lg">
                        ▶
                      </span>
                      <span className="text-sm leading-relaxed">
                        {achievement}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Animated bottom border */}
                <motion.div
                  className="mt-6 h-0.5 bg-gradient-to-r from-green-500 to-cyan-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
