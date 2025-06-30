import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
  FiCode,
  FiLayers,
  FiZap,
  FiHeart,
} from "react-icons/fi";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiFramer,
  SiVite,
} from "react-icons/si";

// Import our components
import VSLogo from "./components/ui/VSLogo";
import {
  AnimatedIcon,
  IconButton,
  SocialIcon,
  TechIcon,
} from "./components/ui/Icons";
import {
  Layout,
  Container,
  Section,
  Card,
  Grid,
  Heading,
  Text,
} from "./components/layout";

function App() {
  return (
    <Layout>
      {/* Hero Section */}
      <Section className="relative overflow-hidden">
        <Container>
          <div className="text-center space-y-8">
            {/* Logo Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-center"
            >
              <VSLogo size="xl" variant="primary" />
            </motion.div>

            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <Heading level={1} gradient>
                Vasudev&apos;s Portfolio
              </Heading>
              <Text variant="lead" className="max-w-2xl mx-auto">
                Building the future with modern web technologies, unique
                designs, and exceptional user experiences.
              </Text>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center gap-4"
            >
              <SocialIcon icon={FiGithub} href="#" label="GitHub" />
              <SocialIcon icon={FiLinkedin} href="#" label="LinkedIn" />
              <SocialIcon icon={FiMail} href="#" label="Email" />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <IconButton icon={FiDownload} variant="primary" size="lg">
                Download Resume
              </IconButton>
              <IconButton icon={FiCode} variant="secondary" size="lg">
                View Projects
              </IconButton>
            </motion.div>
          </div>
        </Container>

        {/* Background Animation */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
      </Section>

      {/* Tech Stack Section */}
      <Section>
        <Container>
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <Heading level={2}>
                <AnimatedIcon icon={FiZap} size={32} className="inline mr-4" />
                Technology Stack
              </Heading>
              <Text variant="body" className="max-w-xl mx-auto">
                Modern tools and frameworks I use to create exceptional digital
                experiences
              </Text>
            </div>

            <Grid cols={4} gap={6}>
              <TechIcon
                icon={SiReact}
                name="React"
                proficiency={90}
                showProficiency
              />
              <TechIcon
                icon={SiJavascript}
                name="JavaScript"
                proficiency={95}
                showProficiency
              />
              <TechIcon
                icon={SiTypescript}
                name="TypeScript"
                proficiency={85}
                showProficiency
              />
              <TechIcon
                icon={SiNodedotjs}
                name="Node.js"
                proficiency={80}
                showProficiency
              />
              <TechIcon
                icon={SiTailwindcss}
                name="Tailwind"
                proficiency={90}
                showProficiency
              />
              <TechIcon
                icon={SiFramer}
                name="Framer Motion"
                proficiency={85}
                showProficiency
              />
              <TechIcon
                icon={SiVite}
                name="Vite"
                proficiency={88}
                showProficiency
              />
              <TechIcon
                icon={FiLayers}
                name="Design Systems"
                proficiency={82}
                showProficiency
              />
            </Grid>
          </div>
        </Container>
      </Section>

      {/* Features Demo Section */}
      <Section>
        <Container>
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <Heading level={2}>Digital Shadows Theme Demo</Heading>
              <Text variant="body" className="max-w-xl mx-auto">
                Showcasing the unique design elements and animations
              </Text>
            </div>

            <Grid cols={3} gap={8}>
              <Card variant="glass">
                <div className="space-y-4">
                  <AnimatedIcon
                    icon={FiCode}
                    size={40}
                    variant="primary"
                    animation="pulse"
                  />
                  <Heading level={4}>Clean Code</Heading>
                  <Text variant="body">
                    Modern, maintainable code following best practices
                  </Text>
                </div>
              </Card>

              <Card variant="gradient">
                <div className="space-y-4">
                  <AnimatedIcon
                    icon={FiZap}
                    size={40}
                    variant="accent"
                    animation="bounce"
                  />
                  <Heading level={4}>Performance</Heading>
                  <Text variant="body">
                    Optimized for speed and smooth animations
                  </Text>
                </div>
              </Card>

              <Card variant="glass">
                <div className="space-y-4">
                  <AnimatedIcon
                    icon={FiHeart}
                    size={40}
                    variant="error"
                    animation="pulse"
                  />
                  <Heading level={4}>User Experience</Heading>
                  <Text variant="body">
                    Designed with users in mind, accessible and intuitive
                  </Text>
                </div>
              </Card>
            </Grid>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <Section className="border-t border-gray-800">
        <Container>
          <div className="text-center space-y-4">
            <VSLogo size="sm" variant="muted" />
            <Text variant="small">
              Built with React, Framer Motion, and Tailwind CSS
            </Text>
            <Text variant="muted">© 2025 Vasudev. All rights reserved.</Text>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

export default App;
