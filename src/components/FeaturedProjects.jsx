import React, { useState } from 'react';
import { ChevronRight, Terminal } from 'lucide-react';

const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      name: "Crypto Investment Platform",
      description: "Full-stack solution with React, Node.js, and MongoDB",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "https://vulcanpost.com/wp-content/uploads/2022/04/Matrixport-article-005.jpg",
      link: "https://cryptowealth.onrender.com"
    },
    {
      name: "Resume Builder",
      description: "Web app Technologies",
      technologies: ["React", "MongoDB"],
      image: "https://piktochart.com/wp-content/uploads/2023/03/resume-builder-Piktochart.jpg",
      link: "https://resbuild.onrender.com/"
    },
    {
      name: "VeltoHQ",
      description: "Lightweight ERP for businesses",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "https://via.placeholder.com/600x400/ff0000/ffffff?text=VeltoHQ+ERP", // working placeholder
      link: "https://veltohq.vercel.app"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-red-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 flex items-center text-white">
          <Terminal className="text-red-500 mr-4" />
          FEATURED PROJECTS
          <div className="h-px bg-red-600 flex-grow ml-4"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative border border-red-900/50 bg-black/50 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover opacity-80 group-hover:opacity-50 transition-all duration-300"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-black/30 group-hover:bg-black/50 transition-colors duration-300">
                <div className={`transform transition-all duration-300 ${hoveredProject === idx ? 'translate-y-0' : 'translate-y-12'}`}>
                  <h3 className="text-red-500 text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="text-red-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-red-900/50 px-3 py-1 text-sm text-white">{tech}</span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-600 hover:text-red-400 font-medium"
                  >
                    View Project <ChevronRight className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
