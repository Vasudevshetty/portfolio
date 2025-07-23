"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { portfolioData } from "@/data/portfolio";

const Hero = () => {
  const { personal } = portfolioData;

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
      transition: {
        duration: 0.6,
      },
    },
  };

  const links = [
    {
      href: personal.github,
      icon: FiGithub,
      label: "GitHub",
      color: "hover:text-purple-400",
    },
    {
      href: personal.linkedin,
      icon: FiLinkedin,
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      href: personal.leetcode,
      icon: SiLeetcode,
      label: "LeetCode",
      color: "hover:text-yellow-400",
    },
    {
      href: `mailto:${personal.email}`,
      icon: FiMail,
      label: "Email",
      color: "hover:text-red-400",
    },
    {
      href: personal.portfolio,
      icon: FiExternalLink,
      label: "Portfolio",
      color: "hover:text-green-400",
    },
  ];

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex items-center justify-center p-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-green-400 mb-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {personal.name}
          </motion.h1>
          <motion.h2
            className="text-xl md:text-2xl text-cyan-400 mb-6"
            variants={itemVariants}
          >
            {personal.title}
          </motion.h2>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            {personal.bio}
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex items-center justify-center text-yellow-400 mb-4">
            <span className="text-2xl mr-2">📍</span>
            <span className="text-lg">{personal.location}</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex justify-center space-x-6">
            {links.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-green-400 ${link.color} transition-colors duration-300 p-3 rounded-full border border-green-500 hover:border-current`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                aria-label={link.label}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.div
            className="text-neutral-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="mb-2">
              🏆 Winner - Hackfest 2025 National Hackathon
            </div>
            <div>
              Type commands in the terminal below to explore my portfolio
            </div>
          </motion.div>
        </motion.div>

        {/* Animated cursor */}
        <motion.div
          className="inline-block w-1 h-6 bg-green-400 ml-1"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>
    </motion.section>
  );
};

export default Hero;
