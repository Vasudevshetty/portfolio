// Footer component with social links and copyright
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-white/80 backdrop-blur shadow-inner mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-6 gap-4">
        <div className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Vasu. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="https://github.com/vasudevgupta7" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-xl transition-colors"><FaGithub /></a>
          <a href="https://linkedin.com/in/vasudevgupta7" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-xl transition-colors"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
}
