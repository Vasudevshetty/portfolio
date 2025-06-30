import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiTrendingUp,
  FiCode,
  FiAward,
  FiUsers,
  FiGitBranch,
} from "react-icons/fi";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiAmazonwebservices,
  SiPython,
  SiFastapi,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

import { Container, Section, Card, Grid, Heading, Text } from "../layout";
import { TechIcon, AnimatedIcon } from "../ui/Icons";
import { experience, education } from "../../data/experience";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const getTechIcon = (tech) => {
    const iconMap = {
      React: SiReact,
      "Node.js": SiNodedotjs,
      MongoDB: SiMongodb,
      Docker: SiDocker,
      Kubernetes: SiKubernetes,
      AWS: SiAmazonwebservices,
      Python: SiPython,
      FastAPI: SiFastapi,
      JavaScript: SiJavascript,
      TypeScript: SiTypescript,
    };
    return iconMap[tech] || FiCode;
  };

  return (
    <Section id="experience" className="relative">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <Heading
              level={2}
              gradient
              className="flex items-center justify-center gap-3"
            >
              <AnimatedIcon
                icon={FiBriefcase}
                size={32}
                variant="primary"
                animation="bounce"
              />
              Experience & Education
            </Heading>
            <Text variant="lead" className="max-w-3xl mx-auto">
              My journey in technology, from education to building real-world
              applications
            </Text>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="flex bg-bg-secondary/50 rounded-xl p-1 backdrop-blur-sm border border-white/10">
              <button
                onClick={() => setActiveTab("experience")}
                className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                  activeTab === "experience"
                    ? "bg-accent-blue text-white shadow-lg"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                <FiBriefcase size={18} />
                Experience
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                  activeTab === "education"
                    ? "bg-accent-blue text-white shadow-lg"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                <FiAward size={18} />
                Education
              </button>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="min-h-[600px]">
            {activeTab === "experience" && (
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      variant="glass"
                      className="p-8 hover:border-accent-blue/30 transition-all duration-300"
                    >
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <AnimatedIcon
                                icon={FiBriefcase}
                                size={24}
                                variant="primary"
                                animation="pulse"
                              />
                              <Heading level={3} className="text-accent-blue">
                                {exp.position}
                              </Heading>
                            </div>
                            <Heading level={4} className="text-text-secondary">
                              {exp.company}
                            </Heading>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-4 text-text-muted">
                            <div className="flex items-center gap-2">
                              <FiCalendar size={16} />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FiMapPin size={16} />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FiTrendingUp size={16} />
                              <span>{exp.type}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <Text variant="body" className="text-text-secondary">
                          {exp.description}
                        </Text>

                        {/* Responsibilities & Achievements Grid */}
                        <Grid cols={1} lgCols={2} gap={6}>
                          <div className="space-y-4">
                            <Heading
                              level={5}
                              className="flex items-center gap-2"
                            >
                              <FiCode size={18} />
                              Key Responsibilities
                            </Heading>
                            <ul className="space-y-2">
                              {exp.responsibilities
                                .slice(0, 4)
                                .map((responsibility, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-2 text-text-muted"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2 flex-shrink-0" />
                                    <span className="text-sm">
                                      {responsibility}
                                    </span>
                                  </li>
                                ))}
                            </ul>
                          </div>

                          <div className="space-y-4">
                            <Heading
                              level={5}
                              className="flex items-center gap-2"
                            >
                              <FiAward size={18} />
                              Key Achievements
                            </Heading>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-text-muted"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-accent-green mt-2 flex-shrink-0" />
                                  <span className="text-sm">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </Grid>

                        {/* Technologies */}
                        <div className="space-y-3">
                          <Heading
                            level={5}
                            className="flex items-center gap-2"
                          >
                            <FiGitBranch size={18} />
                            Technologies Used
                          </Heading>
                          <div className="flex flex-wrap gap-3">
                            {exp.technologies.map((tech, idx) => (
                              <TechIcon
                                key={idx}
                                icon={getTechIcon(tech)}
                                label={tech}
                                size="sm"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === "education" && (
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      variant="glass"
                      className="p-8 hover:border-accent-purple/30 transition-all duration-300"
                    >
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <AnimatedIcon
                                icon={FiAward}
                                size={24}
                                variant="secondary"
                                animation="pulse"
                              />
                              <Heading level={3} className="text-accent-purple">
                                {edu.degree}
                              </Heading>
                            </div>
                            <Heading level={4} className="text-text-secondary">
                              {edu.institution}
                            </Heading>
                            <Text
                              variant="small"
                              className="text-accent-purple"
                            >
                              {edu.field}
                            </Text>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-4 text-text-muted">
                            <div className="flex items-center gap-2">
                              <FiCalendar size={16} />
                              <span>{edu.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FiMapPin size={16} />
                              <span>{edu.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FiTrendingUp size={16} />
                              <span>{edu.grade}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <Text variant="body" className="text-text-secondary">
                          {edu.description}
                        </Text>

                        {/* Projects & Achievements Grid */}
                        <Grid cols={1} lgCols={2} gap={6}>
                          {edu.projects && (
                            <div className="space-y-4">
                              <Heading
                                level={5}
                                className="flex items-center gap-2"
                              >
                                <FiCode size={18} />
                                Key Projects
                              </Heading>
                              <ul className="space-y-2">
                                {edu.projects.map((project, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-2 text-text-muted"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-purple mt-2 flex-shrink-0" />
                                    <span className="text-sm">{project}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <div className="space-y-4">
                            <Heading
                              level={5}
                              className="flex items-center gap-2"
                            >
                              <FiAward size={18} />
                              Achievements
                            </Heading>
                            <ul className="space-y-2">
                              {edu.achievements.map((achievement, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-text-muted"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-accent-green mt-2 flex-shrink-0" />
                                  <span className="text-sm">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </Grid>

                        {/* Coursework */}
                        <div className="space-y-3">
                          <Heading
                            level={5}
                            className="flex items-center gap-2"
                          >
                            <FiUsers size={18} />
                            Key Coursework
                          </Heading>
                          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                            {edu.coursework.slice(0, 8).map((course, idx) => (
                              <div
                                key={idx}
                                className="text-sm text-text-muted bg-bg-secondary/30 px-3 py-2 rounded-lg"
                              >
                                {course}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      </Container>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />
      </div>
    </Section>
  );
};

export default Experience;
