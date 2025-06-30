import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiMonitor,
  FiServer,
  FiCloud,
  FiTool,
  FiZap,
  FiLayers,
} from "react-icons/fi";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMui,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiAmazonwebservices,
  SiDocker,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiPostman,
  SiVite,
  SiWebpack,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import { Container, Section, Grid, Heading, Text } from "../layout";
import { TechIcon } from "../ui/Icons";
import { skills } from "../../data/personal";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categoryIcons = {
    Frontend: FiMonitor,
    Backend: FiServer,
    "AI/ML & GenAI": FiZap,
    "DevOps & Cloud": FiCloud,
    "Tools & Others": FiTool,
  };

  const skillIcons = {
    "React.js": SiReact,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    HTML5: SiHtml5,
    CSS3: SiCss3,
    "Tailwind CSS": SiTailwindcss,
    "Material-UI": SiMui,
    Redux: SiRedux,
    "Node.js": SiNodedotjs,
    "Express.js": SiExpress,
    MongoDB: SiMongodb,
    MySQL: SiMysql,
    PostgreSQL: SiPostgresql,
    Firebase: SiFirebase,
    AWS: SiAmazonwebservices,
    Docker: SiDocker,
    Git: SiGit,
    GitHub: SiGithub,
    Vercel: SiVercel,
    Netlify: SiNetlify,
    "VS Code": VscVscode,
    Figma: SiFigma,
    Postman: SiPostman,
    Vite: SiVite,
    Webpack: SiWebpack,
    "REST APIs": FiServer,
  };

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

  return (
    <Section id="skills" className="relative">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-4">
              <FiZap size={16} />
              Technical Skills
            </div>
            <Heading level={2} gradient>
              Technologies I Work With
            </Heading>
            <Text variant="lead" className="max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks I
              use to build exceptional digital experiences.
            </Text>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-flex bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-1">
              {skills.categories.map((category, index) => {
                const IconComponent = categoryIcons[category.name];
                return (
                  <button
                    key={category.name}
                    className={`
                      relative px-6 py-3 rounded-lg font-medium transition-all duration-300
                      flex items-center gap-2 text-sm
                      ${
                        activeCategory === index
                          ? "text-white bg-blue-500 shadow-lg shadow-blue-500/25"
                          : "text-gray-400 hover:text-white hover:bg-gray-700"
                      }
                    `}
                    onClick={() => setActiveCategory(index)}
                  >
                    <IconComponent size={16} />
                    {category.name}
                    <span className="ml-1 text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded-full">
                      {category.skills.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Grid cols={4} gap={6}>
              {skills.categories[activeCategory].skills.map((skill, index) => {
                const IconComponent = skillIcons[skill.name] || FiLayers;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <TechIcon
                      icon={IconComponent}
                      name={skill.name}
                      proficiency={skill.level}
                      showProficiency={true}
                      className="h-full"
                    />
                  </motion.div>
                );
              })}
            </Grid>
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center">
              <Heading level={3} className="mb-4">
                Soft Skills & Expertise
              </Heading>
              <Text variant="body" className="max-w-2xl mx-auto text-gray-300">
                Beyond technical skills, I bring strong interpersonal abilities
                and professional qualities that make projects successful.
              </Text>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {skills.soft.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium hover:from-purple-500/30 hover:to-blue-500/30 transition-all cursor-default">
                    {skill}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learning Journey */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl p-8"
          >
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <FiZap className="text-green-400" size={32} />
                </div>
              </div>
              <Heading level={3}>Continuous Learning</Heading>
              <Text variant="body" className="max-w-2xl mx-auto">
                Technology evolves rapidly, and I&apos;m committed to staying
                current. I regularly explore new frameworks, attend tech
                conferences, and contribute to open-source projects to keep my
                skills sharp and knowledge up-to-date.
              </Text>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <span>• Currently learning: Next.js 14</span>
                <span>• Exploring: AI/ML integration</span>
                <span>• Improving: System Design</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute top-1/4 -left-32 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 -right-32 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </Container>
    </Section>
  );
};

export default Skills;
