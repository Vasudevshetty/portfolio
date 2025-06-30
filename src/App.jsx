import { HelmetProvider } from "react-helmet-async";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-bg-primary text-text-primary">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Services Section */}
        <Services />

        {/* Contact Section */}
        <Contact />
      </div>
    </HelmetProvider>
  );
}

export default App;
