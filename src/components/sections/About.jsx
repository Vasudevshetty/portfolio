import { motion } from "framer-motion";
import {
  FiCode,
  FiHeart,
  FiTarget,
  FiUsers,
  FiCalendar,
  FiCheckCircle,
  FiAward,
} from "react-icons/fi";

import { Container, Section, Card, Grid, Heading, Text } from "../layout";
import { personalInfo, workPhilosophy } from "../../data/personal";
import { stats } from "../../data";

const About = () => {
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

  const statsIcons = {
    "Years of Experience": FiCalendar,
    "Projects Completed": FiCheckCircle,
    "Happy Clients": FiHeart,
    "Lines of Code": FiCode,
  };

  return (
    <Section id="about" className="relative">
      <Container size="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-4">
              <FiUsers size={16} />
              About Me
            </div>
            <Heading level={2} gradient>
              Crafting Digital Experiences with Passion
            </Heading>
            <Text variant="lead" className="max-w-3xl mx-auto">
              I&apos;m a dedicated full-stack developer who loves turning
              complex problems into simple, beautiful, and intuitive solutions.
            </Text>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants}>
            <Grid cols={4} gap={6} className="mb-16">
              {stats.map((stat, index) => {
                const IconComponent = statsIcons[stat.label] || FiTarget;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      variant="glass"
                      className="text-center group hover:border-purple-500/50"
                    >
                      <div className="space-y-3">
                        <div className="flex justify-center">
                          <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                            <IconComponent
                              size={24}
                              className="text-purple-400"
                            />
                          </div>
                        </div>
                        <div>
                          <motion.div
                            className="text-3xl font-bold text-white mb-1"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                          >
                            {stat.value}
                          </motion.div>
                          <Text variant="small" className="text-gray-400">
                            {stat.label}
                          </Text>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </Grid>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <Heading level={3} className="flex items-center gap-3">
                  <FiTarget className="text-blue-400" size={28} />
                  My Story
                </Heading>
                <div className="space-y-4 text-gray-300">
                  {personalInfo.bio.split("\n\n").map((paragraph, index) => (
                    <Text key={index} variant="body">
                      {paragraph.trim()}
                    </Text>
                  ))}
                </div>
              </div>

              {/* Professional Summary */}
              <div className="space-y-4">
                <Heading level={4} className="text-purple-400">
                  Professional Highlights
                </Heading>
                <div className="space-y-3">
                  {personalInfo.summary.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <FiCheckCircle
                        className="text-green-400 mt-1 flex-shrink-0"
                        size={16}
                      />
                      <Text variant="body">{item}</Text>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Work Philosophy */}
            <motion.div variants={itemVariants} className="space-y-6">
              <Heading level={3} className="flex items-center gap-3">
                <FiHeart className="text-red-400" size={28} />
                Work Philosophy
              </Heading>

              <div className="space-y-4">
                {workPhilosophy.map((philosophy, index) => (
                  <motion.div
                    key={philosophy.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                  >
                    <Card
                      variant="default"
                      className="group hover:border-blue-500/30"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                          <FiAward className="text-blue-400" size={20} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-2">
                            {philosophy.title}
                          </h4>
                          <Text variant="body" className="text-gray-300">
                            {philosophy.description}
                          </Text>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8"
          >
            <div className="space-y-4">
              <Heading level={3}>Ready to Work Together?</Heading>
              <Text variant="body" className="max-w-2xl mx-auto">
                I&apos;m always excited to take on new challenges and
                collaborate on innovative projects. Let&apos;s discuss how we
                can bring your ideas to life.
              </Text>
              <motion.button
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                <FiTarget size={18} />
                Let&apos;s Connect
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute top-1/3 -left-32 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-32 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
            animate={{
              x: [0, -20, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </Container>
    </Section>
  );
};

export default About;
