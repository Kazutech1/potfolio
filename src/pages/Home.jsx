import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import FeaturedProjects from '../components/FeaturedProjects';
import Skills from '../components/Skills';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';

const Home = () => {
  useEffect(() => {
    document.title = "Kaz Tech Portfolio";
  }, []);

  const fadeScaleTransition = { duration: 0.6, ease: 'easeOut' };
  const fadeScaleProps = {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: fadeScaleTransition
  };

  return (
    <div>
      <Navbar />

      {/* Header */}
      <motion.div {...fadeScaleProps}>
        <Header />
      </motion.div>

      {/* Featured Projects */}
      <motion.div {...fadeScaleProps}>
        <FeaturedProjects />
      </motion.div>

  

      {/* About Me */}
      <motion.div {...fadeScaleProps}>
        <AboutMe />
      </motion.div>

      {/* Projects */}
      <motion.div {...fadeScaleProps}>
        <Projects />
      </motion.div>

      {/* Contact */}
      <motion.div {...fadeScaleProps}>
        <Contact />
      </motion.div>

      {/* Footer */}
      <motion.div {...fadeScaleProps}>
        <Footer />
      </motion.div>
    </div>
  );
}

export default Home;
