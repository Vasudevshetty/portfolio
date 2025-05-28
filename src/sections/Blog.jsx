// Blog/Articles placeholder section
import { motion } from "framer-motion";

const blogs = [
  {
    title: "How AI is Transforming DevOps",
    summary: "Exploring the intersection of AI and DevOps automation.",
    link: "#",
  },
  {
    title: "Getting Started with Kubernetes",
    summary:
      "A beginner-friendly guide to deploying your first app on Kubernetes.",
    link: "#",
  },
  {
    title: "CI/CD with GitHub Actions",
    summary: "Automate your deployments and testing with GitHub Actions.",
    link: "#",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-10 text-gray-900 text-center"
        >
          Blog / Articles
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-blue-50 rounded-2xl shadow p-6 hover:shadow-lg transition"
            >
              <div className="text-lg font-semibold text-gray-900 mb-2">
                {blog.title}
              </div>
              <div className="text-gray-700 text-sm mb-4">{blog.summary}</div>
              <a
                href={blog.link}
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                Read More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
