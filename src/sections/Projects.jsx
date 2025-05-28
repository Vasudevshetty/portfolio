// Projects section with modern card layout and Framer Motion effects
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "AI DevOps Coach & Infrastructure Builder",
    description:
      "Smart assistant to teach and build DevOps pipelines and infrastructure.",
    tech: ["OpenAI", "Docker", "Kubernetes", "GitHub Actions", "React"],
    github: "#",
    demo: "#",
  },
  {
    name: "MERN Stack E-Commerce Platform",
    description:
      "Includes user management, cart/wishlist, admin dashboard, and GitHub-integrated CI/CD.",
    tech: ["MongoDB", "Express", "React", "Node.js", "GitHub Actions"],
    github: "#",
    demo: "#",
  },
  {
    name: "IoT Dashboard with ESP8266",
    description:
      "Real-time sensor monitoring (DHT & LDR) over Wi-Fi with a web dashboard.",
    tech: ["ESP8266", "React", "Node.js", "WebSockets"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-10 text-gray-900 text-center"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-blue-50 rounded-2xl shadow-lg p-6 flex flex-col gap-4 hover:shadow-2xl transition group"
            >
              <div className="text-xl font-semibold text-gray-900 mb-2">
                {project.name}
              </div>
              <div className="text-gray-700 text-sm mb-2">
                {project.description}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-white rounded-xl px-3 py-1 text-xs text-blue-600 font-semibold shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 text-lg"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 text-lg"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
