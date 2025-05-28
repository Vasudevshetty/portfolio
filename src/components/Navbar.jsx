// Navbar component for sticky navigation bar with links to each section
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: 'spring' }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur shadow-md"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#hero" className="text-2xl font-bold tracking-tight text-gray-900">Vasu.dev</a>
        <ul className="flex gap-6 text-sm font-medium">
          {navLinks.map(link => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-blue-600 transition-colors duration-200 px-2 py-1 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
