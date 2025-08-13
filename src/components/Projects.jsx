import React, { useState, useEffect } from 'react';
import { Github, Link, Terminal } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [languageFilter, setLanguageFilter] = useState('All');
  const [languages, setLanguages] = useState(['All']);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6; // number of projects per page

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Kazutech1/repos?sort=updated&per_page=100');
        const data = await response.json();

        setProjects(data);  
        setFilteredProjects(data);  

        // Extract unique languages  
        const langs = new Set(data.map(proj => proj.language).filter(Boolean));  
        setLanguages(['All', ...Array.from(langs)]);  
      } catch (error) {  
        console.error('Error fetching GitHub projects:', error);  
      }  
    };  
    fetchGitHubProjects();
  }, []);

  useEffect(() => {
    if (languageFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(proj => proj.language === languageFilter));
    }
    setCurrentPage(1); // reset page when filter changes
  }, [languageFilter, projects]);

  // Pagination logic
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-red-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-white font-bold mb-12 flex items-center">
          <Terminal className="text-red-500 mr-4" />
          PROJECTS
          <div className="h-px bg-red-600 flex-grow ml-4"></div>
        </h2>

        {/* Language Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {languages.map(lang => (
            <button
              key={lang}
              onClick={() => setLanguageFilter(lang)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                languageFilter === lang
                  ? 'bg-red-600 text-white'
                  : 'bg-red-900/20 hover:bg-red-900/40 text-gray-300'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Project List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map(project => (
            <div
              key={project.id}
              className="relative border-4 border-red-600 bg-black/80 rounded-xl p-6 hover:scale-105 transform transition-all duration-300 shadow-2xl shadow-red-900/50"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-red-500 text-lg font-bold">{project.name}</h3>
                {project.language && (
                  <span className="bg-red-900/70 text-red-300 text-xs px-2 py-1 rounded-full">
                    {project.language}
                  </span>
                )}
              </div>
              <p className="text-red-400 text-sm mb-4">
                {project.description || 'No description provided'}
              </p>
              <div className="flex gap-4">
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-400 flex items-center text-sm font-bold uppercase"
                >
                  <Github size={16} className="mr-1" /> Code
                </a>
                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-red-400 flex items-center text-sm font-bold uppercase"
                  >
                    <Link size={16} className="mr-1" /> Demo
                  </a>
                )}
              </div>
            </div>
          ))}
          {currentProjects.length === 0 && (
            <p className="text-red-400 text-sm mt-4">No projects found for this language.</p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 gap-3 flex-wrap">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-md text-sm font-bold transition-colors ${
                  currentPage === page
                    ? 'bg-red-600 text-white'
                    : 'bg-red-900/30 text-red-300 hover:bg-red-800'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
