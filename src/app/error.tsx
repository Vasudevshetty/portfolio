"use client";

import { motion } from "framer-motion";
import { FiRefreshCw, FiHome, FiAlertTriangle } from "react-icons/fi";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-neutral-900 text-green-400 flex items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <FiAlertTriangle className="text-8xl text-red-400 mx-auto mb-6" />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-red-400 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Oops!
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Something went wrong
        </motion.h2>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-lg text-neutral-300 mb-4">
            An unexpected error occurred while loading the portfolio.
          </p>
          <p className="text-neutral-400 text-sm">
            Don&apos;t worry, this happens sometimes. Try refreshing the page.
          </p>
        </motion.div>

        {/* Error Details */}
        <motion.div
          className="bg-black border border-red-500/30 rounded-lg p-6 mb-8 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-sm font-mono">
            <div className="flex items-center mb-2">
              <span className="text-red-400">✗</span>
              <span className="text-neutral-400 ml-2">Error:</span>
              <span className="text-yellow-400 ml-2">
                {error.message || "An unexpected error occurred"}
              </span>
            </div>
            {error.digest && (
              <div className="text-neutral-500 text-xs">
                → Error ID: {error.digest}
              </div>
            )}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            onClick={reset}
            className="flex items-center px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiRefreshCw className="mr-2" />
            Try Again
          </motion.button>

          <motion.button
            onClick={() => (window.location.href = "/")}
            className="flex items-center px-6 py-3 border border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-black transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiHome className="mr-2" />
            Go Home
          </motion.button>
        </motion.div>

        {/* Help Text */}
        <motion.div
          className="mt-12 text-sm text-neutral-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>
            If this error persists, please contact{" "}
            <a
              href="mailto:vasudeepu2815@gmail.com"
              className="text-green-400 hover:underline"
            >
              vasudeepu2815@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
