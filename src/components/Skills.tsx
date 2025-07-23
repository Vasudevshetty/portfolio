"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiOpenjdk,
  SiCplusplus,
  SiC,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiTailwindcss,
  SiHtml5,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiTerraform,
  SiGit,
  SiLinux,
} from "react-icons/si";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiOpenjdk,
  SiCplusplus,
  SiC,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiTailwindcss,
  SiHtml5,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiTerraform,
  SiGit,
  SiLinux,
};

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
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
          Technical Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {Object.entries(portfolioData.skills).map(([category, skills]) => (
            <motion.div key={category} variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6 text-center">
                {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => {
                  const IconComponent = iconMap[skill.icon];
                  return (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-neutral-800 border border-green-500/30 rounded-lg p-6 text-center hover:border-green-500 transition-colors duration-300"
                    >
                      <div className="flex justify-center mb-4">
                        {IconComponent && (
                          <IconComponent className="text-4xl text-green-400" />
                        )}
                      </div>
                      <h4 className="text-white font-medium mb-2">
                        {skill.name}
                      </h4>
                      <div className="w-full bg-neutral-700 rounded-full h-2 mb-2">
                        <motion.div
                          className="bg-gradient-to-r from-green-500 to-cyan-400 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                      <span className="text-sm text-yellow-400">
                        {skill.proficiency}%
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
