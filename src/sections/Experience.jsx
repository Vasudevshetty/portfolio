// Experience section with timeline/cards
import { motion } from "framer-motion";

const experiences = [
  {
    title: "NetApp (Intern)",
    period: "2024 - Present",
    description: "Working on cloud-native solutions and DevOps automation.",
  },
  {
    title: "Freelance/Side Projects",
    period: "2023 - Present",
    description:
      "Building full-stack apps and DevOps pipelines for startups and personal projects.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-blue-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-10 text-gray-900 text-center"
        >
          Experience
        </motion.h2>
        <div className="flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row md:items-center gap-4 hover:shadow-lg transition"
            >
              <div className="flex-1">
                <div className="text-lg font-semibold text-blue-700">
                  {exp.title}
                </div>
                <div className="text-gray-500 text-sm mb-2">{exp.period}</div>
                <div className="text-gray-700">{exp.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
