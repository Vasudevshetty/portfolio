// About Me section with short bio
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6 text-gray-900"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-700 bg-blue-50 rounded-2xl p-6 shadow"
        >
          I’m an aspiring Software Developer, currently an intern at NetApp. I specialize in building and deploying full-stack MERN applications using modern DevOps practices like Docker, Kubernetes, Helm, and GitHub Actions. I'm also building an AI-powered DevOps Coach & Infrastructure Builder that automates infrastructure deployment and teaches DevOps best practices.
        </motion.p>
      </div>
    </section>
  );
}
