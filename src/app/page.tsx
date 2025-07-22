"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCode,
  FaMagic,
  FaPalette,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiTypescript,
} from "react-icons/si";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const techStack = [
    { icon: SiNextdotjs, name: "Next.js", color: "text-black dark:text-white" },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-500" },
    { icon: FaReact, name: "React Icons", color: "text-blue-500" },
    { icon: SiFramer, name: "Framer Motion", color: "text-pink-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <motion.div
        className="container mx-auto px-6 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.header className="text-center mb-16" variants={itemVariants}>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            Portfolio App
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8"
            variants={itemVariants}
          >
            Built with Next.js, TypeScript, Tailwind CSS, React Icons & Framer
            Motion
          </motion.p>
        </motion.header>

        {/* Technology Stack */}
        <motion.section className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
            <FaCode className="inline mr-3" />
            Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
                whileHover={{
                  scale: 1.05,
                  rotate: [0, 1, -1, 0],
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <tech.icon className={`text-4xl ${tech.color} mx-auto mb-3`} />
                <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-gray-200">
                  {tech.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Features */}
        <motion.section className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
            <FaMagic className="inline mr-3" />
            Features Showcase
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-8 text-white"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <SiNextdotjs className="text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Next.js 15</h3>
              <p>
                Latest Next.js with App Router, Server Components, and
                TypeScript support.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl p-8 text-white"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FaPalette className="text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Tailwind CSS</h3>
              <p>
                Utility-first CSS framework with responsive design and dark mode
                support.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl p-8 text-white"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <SiFramer className="text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Framer Motion</h3>
              <p>Beautiful animations and transitions with gesture support.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Animated Elements */}
        <motion.section className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">
            Interactive Elements
          </h2>

          <div className="flex justify-center space-x-8 mb-8">
            <motion.div
              className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
              animate={{
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.section>

        {/* Social Links */}
        <motion.footer className="text-center" variants={itemVariants}>
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Connect With Me
          </h3>
          <div className="flex justify-center space-x-6">
            {[
              { icon: FaGithub, href: "#", color: "hover:text-gray-800" },
              { icon: FaLinkedin, href: "#", color: "hover:text-blue-600" },
              { icon: FaTwitter, href: "#", color: "hover:text-blue-400" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className={`text-4xl text-gray-600 dark:text-gray-400 ${social.color} transition-colors`}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.footer>
      </motion.div>
    </div>
  );
}
