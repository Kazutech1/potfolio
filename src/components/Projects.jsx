import React, { useState, useEffect } from 'react';
import { Github, Terminal, Link } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Kazutech1/repos?sort=updated&per_page=100');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching GitHub projects:', error);
      }
    };
    fetchGitHubProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-red-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 flex items-center">
          <Terminal className="text-red-500 mr-4" />
          PROJECTS
          <div className="h-px bg-red-600 flex-grow ml-4"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div
              key={project.id}
              className="group relative overflow-hidden border border-red-900/30 bg-black/30 p-4"
            >
              <div className="w-full h-48 flex items-center justify-center bg-black/50 mb-4">
                <h3 className="text-red-500 text-lg font-bold text-center">
                  {project.name}
                </h3>
              </div>
              <p className="text-sm text-red-500 mb-3">
                {project.description || 'No description provided'}
              </p>
              <div className="flex gap-3">
                <a 
                  href={project.html_url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center text-red-500 hover:text-red-400"
                >
                  <Github size={14} className="mr-1" /> Code
                </a>
                {project.homepage && (
                  <a 
                    href={project.homepage} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm flex items-center text-red-500 hover:text-red-400"
                  >
                    <Link size={14} className="mr-1" /> Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
