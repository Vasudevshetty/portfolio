import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiCode,
  FiGlobe,
  FiZap,
  FiTrendingUp,
  FiDatabase,
  FiServer,
  FiCpu,
  FiSmartphone,
} from "react-icons/fi";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiAmazonwebservices,
  SiDocker,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiFastapi,
} from "react-icons/si";

import { Container, Section, Card, Grid, Heading, Text } from "../layout";
import { TechIcon, AnimatedIcon, IconButton } from "../ui/Icons";

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: "fullstack",
      title: "Full-Stack Development",
      description:
        "Complete web applications with modern React frontends and robust Node.js/Python backends.",
      icon: FiCode,
      features: [
        "React/Next.js Applications",
        "RESTful API Development",
        "Database Design & Integration",
        "Authentication & Authorization",
      ],
      technologies: [SiReact, SiNodedotjs, SiMongodb, SiPostgresql],
      color: "text-accent-blue",
      bgColor: "bg-accent-blue/10",
    },
    {
      id: "backend",
      title: "Backend Architecture",
      description:
        "Scalable server-side solutions with microservices architecture and cloud integration.",
      icon: FiServer,
      features: [
        "Microservices Architecture",
        "API Gateway & Load Balancing",
        "Caching & Performance Optimization",
        "Real-time Data Processing",
      ],
      technologies: [SiNodedotjs, SiPython, SiFastapi, SiRedis],
      color: "text-accent-green",
      bgColor: "bg-accent-green/10",
    },
    {
      id: "cloud",
      title: "Cloud & DevOps",
      description:
        "End-to-end deployment solutions with containerization and CI/CD automation.",
      icon: FiDatabase,
      features: [
        "Docker Containerization",
        "Kubernetes Orchestration",
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
      ],
      technologies: [SiDocker, SiKubernetes, SiAmazonwebservices],
      color: "text-accent-orange",
      bgColor: "bg-accent-orange/10",
    },
    {
      id: "ai",
      title: "AI/ML Integration",
      description:
        "Intelligent applications with machine learning models and AI-powered features.",
      icon: FiCpu,
      features: [
        "ML Model Integration",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
      ],
      technologies: [SiPython, SiFastapi],
      color: "text-accent-purple",
      bgColor: "bg-accent-purple/10",
    },
    {
      id: "mobile",
      title: "Cross-Platform Solutions",
      description:
        "Responsive web applications that work seamlessly across all devices and platforms.",
      icon: FiSmartphone,
      features: [
        "Progressive Web Apps",
        "Mobile-First Design",
        "Cross-Browser Compatibility",
        "Performance Optimization",
      ],
      technologies: [SiReact],
      color: "text-accent-teal",
      bgColor: "bg-accent-teal/10",
    },
    {
      id: "consulting",
      title: "Technical Consulting",
      description:
        "Strategic guidance on technology choices, architecture decisions, and best practices.",
      icon: FiTrendingUp,
      features: [
        "Technology Stack Selection",
        "Architecture Planning",
        "Code Review & Optimization",
        "Team Training & Mentoring",
      ],
      technologies: [],
      color: "text-accent-pink",
      bgColor: "bg-accent-pink/10",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const serviceVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <Section id="services" className="py-20 bg-bg-secondary">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              variants={serviceVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent-blue/10 rounded-full mb-6"
            >
              <AnimatedIcon
                icon={FiZap}
                className="text-accent-blue"
                delay={0.2}
              />
              <Text variant="small" className="text-accent-blue font-medium">
                What I Offer
              </Text>
            </motion.div>

            <motion.div variants={serviceVariants}>
              <Heading level={2} className="mb-6">
                Services & <span className="text-accent-blue">Expertise</span>
              </Heading>
              <Text
                variant="large"
                className="text-text-secondary max-w-3xl mx-auto"
              >
                Comprehensive technical solutions from concept to deployment,
                specializing in modern web technologies and scalable
                architectures.
              </Text>
            </motion.div>
          </div>

          {/* Services Grid */}
          <Grid className="lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={serviceVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
              >
                <Card className="h-full group hover:shadow-2xl transition-all duration-300 border-border-secondary hover:border-border-accent">
                  <div className="p-8">
                    {/* Service Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <motion.div
                        className={`p-3 rounded-xl ${service.bgColor} transition-all duration-300 group-hover:scale-110`}
                        whileHover={{ rotate: 10 }}
                      >
                        <service.icon className={`w-6 h-6 ${service.color}`} />
                      </motion.div>

                      <div className="flex-1">
                        <Heading
                          level={3}
                          className="mb-2 group-hover:text-accent-blue transition-colors"
                        >
                          {service.title}
                        </Heading>
                        <Text variant="small" className="text-text-secondary">
                          {service.description}
                        </Text>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="mb-6">
                      <Text
                        variant="small"
                        className="text-text-secondary mb-3 font-medium"
                      >
                        Key Features:
                      </Text>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            variants={featureVariants}
                            initial="hidden"
                            animate={
                              hoveredService === service.id
                                ? "visible"
                                : "hidden"
                            }
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-3 text-text-secondary"
                          >
                            <motion.div
                              className={`w-1.5 h-1.5 rounded-full ${service.bgColor.replace(
                                "/10",
                                ""
                              )} opacity-60`}
                              animate={{
                                scale: hoveredService === service.id ? 1.2 : 1,
                              }}
                            />
                            <Text variant="small">{feature}</Text>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    {service.technologies.length > 0 && (
                      <div className="flex items-center gap-3 pt-4 border-t border-border-light">
                        <Text
                          variant="small"
                          className="text-text-secondary font-medium"
                        >
                          Tech:
                        </Text>
                        <div className="flex gap-2">
                          {service.technologies.map((Tech, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ scale: 1.2, rotate: 10 }}
                              transition={{ duration: 0.2 }}
                            >
                              <TechIcon
                                icon={Tech}
                                className="w-5 h-5 text-text-secondary hover:text-accent-blue transition-colors"
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </Grid>

          {/* CTA Section */}
          <motion.div
            variants={serviceVariants}
            className="text-center mt-16 p-8 bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 rounded-2xl border border-border-light"
          >
            <Heading level={3} className="mb-4">
              Ready to Build Something Amazing?
            </Heading>
            <Text
              variant="large"
              className="text-text-secondary mb-6 max-w-2xl mx-auto"
            >
              Let&apos;s discuss your project and find the perfect solution for
              your needs.
            </Text>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <IconButton
                icon={FiGlobe}
                variant="primary"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </IconButton>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Services;
