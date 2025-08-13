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

  const subtleTransition = { duration: 0.5, ease: 'easeOut' };

  return (
    <div>
      <Navbar />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={subtleTransition}
      >
        <Header />
      </motion.div>

      {/* Featured Projects */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={subtleTransition}
        viewport={{ once: true }}
      >
        <FeaturedProjects />
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={subtleTransition}
        viewport={{ once: true }}
      >
        <Skills />
      </motion.div>

      {/* About Me */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={subtleTransition}
        viewport={{ once: true }}
      >
        <AboutMe />
      </motion.div>

      {/* Projects */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={subtleTransition}
        viewport={{ once: true }}
      >
        <Projects />
      </motion.div>

      {/* Contact */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ...subtleTransition, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ...subtleTransition, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}

export default Home;
