// Skills section with animated grid of icons and text
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDocker, FaGithub, FaAws } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiFastapi, SiKubernetes, SiHelm, SiNextdotjs, SiTailwindcss, SiOpenai } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact className="text-blue-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'Express', icon: <SiExpress className="text-gray-800" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
  { name: 'FastAPI', icon: <SiFastapi className="text-green-400" /> },
  { name: 'Docker', icon: <FaDocker className="text-blue-400" /> },
  { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-600" /> },
  { name: 'Helm', icon: <SiHelm className="text-indigo-500" /> },
  { name: 'GitHub Actions', icon: <FaGithub className="text-gray-900" /> },
  { name: 'ECS', icon: <FaAws className="text-orange-500" /> },
  { name: 'ECR', icon: <FaAws className="text-orange-500" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'Framer Motion', icon: <FaReact className="text-pink-400" /> },
  { name: 'OpenAI APIs', icon: <SiOpenai className="text-green-700" /> },
  { name: 'GenAI systems', icon: <SiOpenai className="text-green-700" /> },
  { name: 'LLM integration', icon: <SiOpenai className="text-green-700" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-blue-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-10 text-gray-900 text-center"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex flex-col items-center bg-white rounded-2xl shadow p-4 hover:shadow-lg transition group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{skill.icon}</div>
              <div className="text-sm font-medium text-gray-700">{skill.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
