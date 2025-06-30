import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiFolder,
  FiExternalLink,
  FiGithub,
  FiPlay,
  FiCode,
  FiTrendingUp,
  FiClock,
  FiStar,
  FiZap,
} from "react-icons/fi";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiDocker,
  SiKubernetes,
  SiAmazonwebservices,
  SiPython,
  SiFastapi,
  SiTypescript,
} from "react-icons/si";

import { Container, Section, Card, Grid, Heading, Text } from "../layout";
import { TechIcon, AnimatedIcon, IconButton } from "../ui/Icons";
import { projects } from "../../data/projects";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      "React.js": SiReact,
      "Node.js": SiNodedotjs,
      MongoDB: SiMongodb,
      "Express.js": SiExpress,
      Docker: SiDocker,
      Kubernetes: SiKubernetes,
      AWS: SiAmazonwebservices,
      Python: SiPython,
      FastAPI: SiFastapi,
      TypeScript: SiTypescript,
    };
    return iconMap[tech] || FiCode;
  };

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter(
          (project) =>
            project.category
              .toLowerCase()
              .includes(activeCategory.toLowerCase()) ||
            (activeCategory === "featured" && project.featured)
        );

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "live":
        return "text-accent-green";
      case "in progress":
        return "text-accent-blue";
      case "completed":
        return "text-accent-purple";
      default:
        return "text-text-muted";
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case "live":
        return FiZap;
      case "in progress":
        return FiClock;
      case "completed":
        return FiStar;
      default:
        return FiFolder;
    }
  };

  return (
    <Section id="projects" className="relative">
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
                icon={FiFolder}
                size={32}
                variant="primary"
                animation="bounce"
              />
              Featured Projects
            </Heading>
            <Text variant="lead" className="max-w-3xl mx-auto">
              Showcasing my latest work in AI-powered applications, DevOps
              platforms, and innovative web solutions
            </Text>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="flex flex-wrap gap-2 bg-bg-secondary/50 rounded-xl p-2 backdrop-blur-sm border border-white/10">
              {[
                { id: "all", name: "All Projects" },
                { id: "featured", name: "Featured" },
                { id: "ai", name: "AI & ML" },
                { id: "devops", name: "DevOps" },
                { id: "ecommerce", name: "E-Commerce" },
                { id: "saas", name: "SaaS" },
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm ${
                    activeCategory === category.id
                      ? "bg-accent-blue text-white shadow-lg"
                      : "text-text-muted hover:text-text-primary hover:bg-bg-tertiary"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div variants={itemVariants}>
            <Grid cols={1} lgCols={2} gap={8}>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group"
                >
                  <Card
                    variant="glass"
                    className="h-full p-8 hover:border-accent-blue/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent-blue/10"
                  >
                    <div className="space-y-6 h-full flex flex-col">
                      {/* Project Header */}
                      <div className="space-y-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-2 flex-1">
                            <div className="flex items-center gap-3">
                              <AnimatedIcon
                                icon={getStatusIcon(project.status)}
                                size={24}
                                variant="primary"
                                animation={
                                  hoveredProject === project.id
                                    ? "spin"
                                    : "pulse"
                                }
                              />
                              <Heading
                                level={3}
                                className="group-hover:text-accent-blue transition-colors"
                              >
                                {project.title}
                              </Heading>
                              {project.featured && (
                                <div className="bg-accent-purple/20 text-accent-purple px-2 py-1 rounded-full text-xs font-medium">
                                  Featured
                                </div>
                              )}
                            </div>
                            <Text
                              variant="small"
                              className="text-accent-blue font-medium"
                            >
                              {project.subtitle}
                            </Text>
                            <div className="flex items-center gap-4 text-text-muted text-sm">
                              <div
                                className={`flex items-center gap-1 ${getStatusColor(
                                  project.status
                                )}`}
                              >
                                <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
                                {project.status}
                              </div>
                              <div className="flex items-center gap-1">
                                <FiFolder size={14} />
                                {project.category}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <Text
                          variant="body"
                          className="text-text-secondary line-clamp-3"
                        >
                          {project.description}
                        </Text>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <Heading level={5} className="flex items-center gap-2">
                          <FiCode size={16} />
                          Tech Stack
                        </Heading>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 6).map((tech, idx) => (
                            <TechIcon
                              key={idx}
                              icon={getTechIcon(tech)}
                              label={tech}
                              size="xs"
                            />
                          ))}
                          {project.technologies.length > 6 && (
                            <div className="text-xs text-text-muted bg-bg-secondary/30 px-2 py-1 rounded">
                              +{project.technologies.length - 6} more
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Features Preview */}
                      {project.features && (
                        <div className="space-y-3">
                          <Heading
                            level={5}
                            className="flex items-center gap-2"
                          >
                            <FiStar size={16} />
                            Key Features
                          </Heading>
                          <ul className="space-y-1">
                            {project.features
                              .slice(0, 3)
                              .map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-sm text-text-muted"
                                >
                                  <div className="w-1 h-1 rounded-full bg-accent-blue mt-2 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                          </ul>
                        </div>
                      )}

                      {/* Metrics */}
                      {project.metrics && (
                        <div className="space-y-3">
                          <Heading
                            level={5}
                            className="flex items-center gap-2"
                          >
                            <FiTrendingUp size={16} />
                            Impact
                          </Heading>
                          <div className="grid grid-cols-2 gap-3">
                            {Object.entries(project.metrics)
                              .slice(0, 4)
                              .map(([key, value], idx) => (
                                <div
                                  key={idx}
                                  className="text-center p-3 bg-bg-secondary/30 rounded-lg"
                                >
                                  <div className="text-accent-blue font-bold text-lg">
                                    {value}
                                  </div>
                                  <div className="text-xs text-text-muted capitalize">
                                    {key.replace(/([A-Z])/g, " $1")}
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex gap-3 mt-auto pt-4">
                        {project.links?.live && (
                          <IconButton
                            icon={FiExternalLink}
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="primary"
                            size="sm"
                            className="flex-1"
                          >
                            Live Demo
                          </IconButton>
                        )}
                        {project.links?.github && (
                          <IconButton
                            icon={FiGithub}
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="secondary"
                            size="sm"
                            className="flex-1"
                          >
                            Code
                          </IconButton>
                        )}
                        {project.links?.demo && !project.links?.live && (
                          <IconButton
                            icon={FiPlay}
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="primary"
                            size="sm"
                            className="flex-1"
                          >
                            Demo
                          </IconButton>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </Grid>
          </motion.div>

          {/* View All Projects CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <Card variant="glass" className="p-8 max-w-2xl mx-auto">
              <div className="space-y-4">
                <AnimatedIcon
                  icon={FiGithub}
                  size={40}
                  variant="primary"
                  animation="float"
                />
                <Heading level={3}>Explore More Projects</Heading>
                <Text variant="body" className="text-text-secondary">
                  Check out my GitHub profile for more projects, contributions,
                  and code samples
                </Text>
                <IconButton
                  icon={FiGithub}
                  href="https://github.com/vasudevshetty"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="lg"
                >
                  Visit GitHub Profile
                </IconButton>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Container>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />
        <div className="absolute top-2/3 left-2/3 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl" />
      </div>
    </Section>
  );
};

export default Projects;
