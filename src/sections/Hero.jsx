// Hero section with headline, subheadline, CTA, and Framer Motion animation
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="max-w-3xl mx-auto text-center p-8 rounded-2xl shadow-2xl bg-white/80 backdrop-blur"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
          Hi, I’m <span className="text-blue-600">Vasu</span> — a Full Stack
          Developer & DevOps Enthusiast
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          I build intelligent infrastructure and full-stack experiences with AI
          & cloud-native tools.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition font-semibold"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-white border border-blue-600 text-blue-600 rounded-2xl shadow hover:bg-blue-50 transition font-semibold"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
      {/* Subtle animated background blob */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full opacity-40 blur-3xl z-0"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
    </section>
  );
}
