import { motion } from "framer-motion";
import {
  FiDownload,
  FiMail,
  FiMapPin,
  FiCalendar,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

import VSLogo from "../ui/VSLogo";
import { IconButton, SocialIcon } from "../ui/Icons";
import { Container, Section, Heading, Text } from "../layout";
import { personalInfo, socialLinks } from "../../data/personal";

const Hero = () => {
  // Icon mapping to avoid eval
  const iconMap = {
    FiGithub: FiGithub,
    FiLinkedin: FiLinkedin,
    SiLeetcode: SiLeetcode,
    FiMail: FiMail,
    FiDownload: FiDownload,
  };
  // Animation variants
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

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <Section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <Container size="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          {/* Logo Animation */}
          <motion.div variants={logoVariants} className="flex justify-center">
            <VSLogo size="xl" variant="primary" animated />
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <FiCalendar size={14} />
              {personalInfo.availability}
            </motion.div>

            <Heading level={1} gradient className="leading-tight">
              {personalInfo.name}
            </Heading>

            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-400"
              variants={itemVariants}
            >
              {personalInfo.title}
            </motion.h2>

            <Text variant="lead" className="max-w-2xl mx-auto">
              {personalInfo.subtitle}
            </Text>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants}>
            <Text variant="body" className="max-w-3xl mx-auto text-gray-300">
              {personalInfo.description}
            </Text>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <FiMapPin size={16} />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMail size={16} />
              <span>{personalInfo.email}</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4"
          >
            {socialLinks
              .slice(0, 4)
              .filter((link) => iconMap[link.icon])
              .map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <SocialIcon
                    icon={iconMap[link.icon]}
                    href={link.url}
                    label={link.description}
                  />
                </motion.div>
              ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <IconButton
              icon={FiDownload}
              variant="primary"
              size="lg"
              onClick={() => window.open(personalInfo.resume, "_blank")}
            >
              Download Resume
            </IconButton>
            <IconButton
              icon={FiMail}
              variant="secondary"
              size="lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Let&apos;s Talk
            </IconButton>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="w-1 h-3 bg-blue-400 rounded-full mt-2"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          {/* Gradient Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
