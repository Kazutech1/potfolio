import React, { useState, useEffect } from 'react';
import { Github, Link, Terminal } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [languageFilter, setLanguageFilter] = useState('All');
  const [languages, setLanguages] = useState(['All']);

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
  }, [languageFilter, projects]);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-red-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 flex items-center">
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
        <div className="space-y-4">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="border border-red-900/40 bg-black/50 rounded-xl p-4 hover:bg-black/70 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-red-500 text-xl font-semibold">{project.name}</h3>
                {project.language && (
                  <span className="bg-red-900/50 text-red-300 text-xs px-2 py-1 rounded-full">
                    {project.language}
                  </span>
                )}
              </div>
              <p className="text-red-400 text-sm mb-3">
                {project.description || 'No description provided'}
              </p>
              <div className="flex gap-4">
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-400 flex items-center text-sm font-medium"
                >
                  <Github size={16} className="mr-1" /> Code
                </a>
                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-red-400 flex items-center text-sm font-medium"
                  >
                    <Link size={16} className="mr-1" /> Demo
                  </a>
                )}
              </div>
            </div>
          ))}
          {filteredProjects.length === 0 && (
            <p className="text-red-400 text-sm mt-4">No projects found for this language.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
