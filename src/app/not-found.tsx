"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiHome, FiArrowLeft, FiZap } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-900 text-green-400 flex items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {/* ASCII Art 404 */}
          <pre className="text-green-400 text-xs md:text-sm mb-8 font-mono">
            {`
    ██╗  ██╗ ██████╗ ██╗  ██╗
    ██║  ██║██╔═████╗██║  ██║
    ███████║██║██╔██║███████║
    ╚════██║████╔╝██║╚════██║
         ██║╚██████╔╝     ██║
         ╚═╝ ╚═════╝      ╚═╝
            `}
          </pre>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-cyan-400 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          404
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Page Not Found
        </motion.h2>

        <motion.div
          className="mb-8 space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-lg text-neutral-300">
            Oops! The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <p className="text-neutral-400">
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </motion.div>

        {/* Terminal Style Error */}
        <motion.div
          className="bg-black border border-green-500/30 rounded-lg p-6 mb-8 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-sm font-mono">
            <div className="flex items-center mb-2">
              <span className="text-red-400">✗</span>
              <span className="text-neutral-400 ml-2">Error 404:</span>
              <span className="text-yellow-400 ml-2">Resource not found</span>
            </div>
            <div className="text-neutral-500 text-xs">
              → The requested URL was not found on this server
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/">
            <motion.button
              className="flex items-center px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiHome className="mr-2" />
              Go Home
            </motion.button>
          </Link>

          <motion.button
            onClick={() => window.history.back()}
            className="flex items-center px-6 py-3 border border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-black transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiArrowLeft className="mr-2" />
            Go Back
          </motion.button>
        </motion.div>

        {/* Fun Terminal Commands */}
        <motion.div
          className="mt-12 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-neutral-400 mb-2">Try these commands instead:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["whoami", "skills", "projects", "experience", "contact"].map(
              (cmd, index) => (
                <motion.span
                  key={cmd}
                  className="px-2 py-1 bg-neutral-800 text-yellow-400 rounded text-xs border border-yellow-400/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  {cmd}
                </motion.span>
              )
            )}
          </div>
        </motion.div>

        {/* Animated Icon */}
        <motion.div
          className="mt-8"
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FiZap className="text-6xl text-yellow-400 mx-auto opacity-50" />
        </motion.div>
      </div>
    </div>
  );
}
