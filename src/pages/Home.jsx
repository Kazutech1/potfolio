import React, { useEffect } from 'react';
import { motion } from 'framer-motion';  // Importing motion from framer-motion
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
    // Set the document title dynamically when the Home component is loaded
    document.title = "Kaz Tech Portfolio";
  }, []);

  return (
    <div>
        <Navbar />
        
        {/* Header - Fade In and Slide Down */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Header />
        </motion.div>

        {/* Featured Projects - Zoom In */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <FeaturedProjects />
        </motion.div>

        {/* Skills - Slide Left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Skills />
        </motion.div>

        {/* About Me - Rotate In */}
        <motion.div
          initial={{ opacity: 0, rotate: -180 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <AboutMe />
        </motion.div>

        {/* Projects - Slide Right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Projects />
        </motion.div>

        {/* Contact - Fade In with Slight Bounce */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: 0.2,
            type: 'spring',
            stiffness: 100,
            damping: 10,
          }}
          viewport={{ once: true }}
        >
          <Contact />
        </motion.div>

        {/* Footer - Fade In with Slight Zoom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: 0.4,
            type: 'spring',
            stiffness: 100,
            damping: 20,
          }}
          viewport={{ once: true }}
        >
          <Footer />
        </motion.div>
    </div>
  );
}

export default Home;
