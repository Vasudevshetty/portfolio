// Contact section with form, email, and social icons
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle sending the form data
  };

  return (
    <section id="contact" className="py-24 bg-blue-50">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8 text-gray-900 text-center"
        >
          Contact
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" required value={form.name} onChange={handleChange} className="rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" required value={form.email} onChange={handleChange} className="rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" required rows={4} value={form.message} onChange={handleChange} className="rounded-xl border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none" />
          </div>
          <button type="submit" className="bg-blue-600 text-white rounded-2xl px-6 py-3 font-semibold shadow hover:bg-blue-700 transition">Send Message</button>
          {submitted && <div className="text-green-600 font-medium mt-2">Thank you! Your message has been sent.</div>}
        </motion.form>
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-4">
          <a href="mailto:vasu@email.com" className="flex items-center gap-2 text-blue-600 hover:underline"><FaEnvelope /> vasu@email.com</a>
          <div className="flex gap-4 text-xl">
            <a href="https://github.com/vasudevgupta7" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaGithub /></a>
            <a href="https://linkedin.com/in/vasudevgupta7" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
