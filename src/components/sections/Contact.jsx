import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiExternalLink,
  FiCheckCircle,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

import { Container, Section, Card, Grid, Heading, Text } from "../layout";
import { AnimatedIcon, IconButton } from "../ui/Icons";
import { contactInfo as contact } from "../../data/contact";
import { socialLinks } from "../../data/personal";

const Contact = () => {
  // Convert socialLinks array to object for easier access
  const social = socialLinks.reduce((acc, link) => {
    switch (link.name) {
      case "GitHub":
        acc.github = link.url;
        break;
      case "LinkedIn":
        acc.linkedin = link.url;
        break;
      case "LeetCode":
        acc.leetcode = link.url;
        break;
      default:
        break;
    }
    return acc;
  }, {});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: FiMail,
      label: "Email",
      value: contact.email.display,
      href: `mailto:${contact.email.primary}`,
      color: "text-accent-blue",
      bgColor: "bg-accent-blue/10",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: contact.phone.display,
      href: `tel:${contact.phone.primary}`,
      color: "text-accent-green",
      bgColor: "bg-accent-green/10",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: `${contact.location.city}, ${contact.location.country}`,
      href: `https://maps.google.com/?q=${encodeURIComponent(
        `${contact.location.city}, ${contact.location.country}`
      )}`,
      color: "text-accent-orange",
      bgColor: "bg-accent-orange/10",
    },
  ];

  const socialLinksList = [
    {
      icon: FiGithub,
      label: "GitHub",
      href: social.github,
      color: "text-text-primary hover:text-accent-blue",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      href: social.linkedin,
      color: "text-text-primary hover:text-accent-blue",
    },
    {
      icon: SiLeetcode,
      label: "LeetCode",
      href: social.leetcode,
      color: "text-text-primary hover:text-accent-orange",
    },
    {
      icon: FiTwitter,
      label: "Twitter",
      href: social.twitter || "#",
      color: "text-text-primary hover:text-accent-teal",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  return (
    <Section id="contact" className="py-20 bg-bg-primary">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent-purple/10 rounded-full mb-6"
            >
              <AnimatedIcon
                icon={FiSend}
                className="text-accent-purple"
                delay={0.2}
              />
              <Text variant="small" className="text-accent-purple font-medium">
                Get In Touch
              </Text>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Heading level={2} className="mb-6">
                Let&apos;s Build Something{" "}
                <span className="text-accent-purple">Together</span>
              </Heading>
              <Text
                variant="large"
                className="text-text-secondary max-w-3xl mx-auto"
              >
                Have a project in mind? I&apos;d love to hear about it.
                Let&apos;s discuss how we can bring your ideas to life.
              </Text>
            </motion.div>
          </div>

          <Grid className="lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <Heading level={3} className="mb-6">
                  Contact Information
                </Heading>

                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={method.label}
                      href={method.href}
                      target={
                        method.label === "Location" ? "_blank" : undefined
                      }
                      rel={
                        method.label === "Location"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center gap-4 p-4 rounded-xl bg-bg-secondary hover:bg-bg-tertiary transition-all duration-300 group"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <div
                        className={`p-3 rounded-lg ${method.bgColor} group-hover:scale-110 transition-transform`}
                      >
                        <method.icon className={`w-5 h-5 ${method.color}`} />
                      </div>
                      <div>
                        <Text
                          variant="small"
                          className="text-text-secondary font-medium"
                        >
                          {method.label}
                        </Text>
                        <Text className="text-text-primary group-hover:text-accent-blue transition-colors">
                          {method.value}
                        </Text>
                      </div>
                      {method.label === "Location" && (
                        <FiExternalLink className="w-4 h-4 text-text-secondary group-hover:text-accent-blue transition-colors ml-auto" />
                      )}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <Heading level={4} className="mb-6">
                  Connect With Me
                </Heading>

                <div className="flex gap-4">
                  {socialLinksList.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-bg-secondary hover:bg-bg-tertiary transition-all duration-300 ${social.color}`}
                      whileHover={{ y: -3, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="p-6 bg-accent-green/10 rounded-xl border border-accent-green/20"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse" />
                  <Text className="text-accent-green font-medium">
                    Available for new projects
                  </Text>
                </div>
                <Text variant="small" className="text-text-secondary">
                  Currently accepting new opportunities and collaborations.
                </Text>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={formVariants}>
              <Card className="p-8">
                <Heading level={3} className="mb-6">
                  Send a Message
                </Heading>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-16 h-16 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <FiCheckCircle className="w-8 h-8 text-accent-green" />
                    </motion.div>
                    <Heading level={4} className="mb-2 text-accent-green">
                      Message Sent!
                    </Heading>
                    <Text className="text-text-secondary">
                      Thank you for reaching out. I&apos;ll get back to you
                      soon.
                    </Text>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Grid className="md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium text-text-primary"
                        >
                          Name *
                        </label>
                        <div className="relative">
                          <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-secondary" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 bg-bg-secondary border border-border-light rounded-lg focus:outline-none focus:border-accent-blue transition-colors text-text-primary placeholder-text-tertiary"
                            placeholder="Your name"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-text-primary"
                        >
                          Email *
                        </label>
                        <div className="relative">
                          <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-secondary" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 bg-bg-secondary border border-border-light rounded-lg focus:outline-none focus:border-accent-blue transition-colors text-text-primary placeholder-text-tertiary"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                    </Grid>

                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium text-text-primary"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-bg-secondary border border-border-light rounded-lg focus:outline-none focus:border-accent-blue transition-colors text-text-primary placeholder-text-tertiary"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-text-primary"
                      >
                        Message *
                      </label>
                      <div className="relative">
                        <FiMessageSquare className="absolute left-3 top-3 w-4 h-4 text-text-secondary" />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full pl-10 pr-4 py-3 bg-bg-secondary border border-border-light rounded-lg focus:outline-none focus:border-accent-blue transition-colors text-text-primary placeholder-text-tertiary resize-none"
                          placeholder="Tell me about your project..."
                        />
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <IconButton
                        type="submit"
                        icon={isSubmitting ? undefined : FiSend}
                        variant="primary"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </div>
                        ) : (
                          "Send Message"
                        )}
                      </IconButton>
                    </motion.div>
                  </form>
                )}
              </Card>
            </motion.div>
          </Grid>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Contact;
