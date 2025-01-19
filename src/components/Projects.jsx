import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code, 
  Terminal, 
  User, 
  Briefcase,
  ExternalLink, 
  ChevronRight, 
  Award,
  Book,
  Clock,
  Coffee,
  Globe,
  Server,
  Database,
  Wrench,
  Link
} from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeTab, setActiveTab] = useState('experience');
  const [projectFilter, setProjectFilter] = useState('all');

  // Previous data constants remain the same...

  const projects = [
    {
      id: 1,
      title: "Crypto Investment Platform",
      description: "A platform for secure cryptocurrency investments with real-time market data.",
      longDescription: "A platform for easy crypto investments, featuring real-time data and secure transactions.",
      image: "https://vulcanpost.com/wp-content/uploads/2022/04/Matrixport-article-005.jpg",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Redux"],
      demoLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      id: 2,
      title: "AI Content Generator",
      description: "Content generation tool using OpenAI's GPT-3",
      longDescription: "Developed an AI-powered content generation tool that helps writers create engaging articles and social media posts.",
      image: "https://framerusercontent.com/images/h8rxuFv5Popq0ufVEQpFBzV7ycg.png?scale-down-to=1024",
      category: "ai",
      technologies: ["Python", "FastAPI", "React", "OpenAI"],
      demoLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      description: "Team collaboration and task management platform",
      longDescription: "Created a real-time task management system with team collaboration features and progress tracking.",
      image: "https://via.placeholder.com/600x400?text=Task+Management+Dashboard",
      category: "frontend",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      demoLink: "#",
      githubLink: "#",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Generator",
      description: "Dynamic portfolio creation tool for developers",
      longDescription: "Built a tool that helps developers create and host their portfolios with custom themes and content management.",
      image: "https://cdn.prod.website-files.com/622217130a9cad1a33ea9b0a/63cee340b3d1b871aeb92918_creative%20portfolio.png",
      category: "frontend",
      technologies: ["Vue.js", "Tailwind", "Node.js"],
      demoLink: "#",
      githubLink: "#",
      featured: false
    },
    {
      id: 5,
      title: "Resume Builder",
      description: "Create and download personalized resumes",
      longDescription: "A tool that allows users to build professional resumes with pre-built templates and customization options.",
      image: "https://piktochart.com/wp-content/uploads/2023/03/resume-builder-Piktochart.jpg",
      category: "frontend",
      technologies: ["React", "Bootstrap", "Node.js"],
      demoLink: "#",
      githubLink: "#",
      featured: false
    }
  ];
  

  const projectCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ai', label: 'AI/ML' }
  ];

  const filteredProjects = projectFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === projectFilter);

  // Add this section after the Stats Section and before any existing footer
  const ProjectsSection = () => (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-red-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 flex items-center">
          <Terminal className="text-red-500 mr-4" />
          PROJECTS
          <div className="h-px bg-red-600 flex-grow ml-4"></div>
        </h2>

        {/* Project Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          {projectCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setProjectFilter(category.id)}
              className={`px-6 py-2 rounded-sm transition-colors ${
                projectFilter === category.id
                  ? 'bg-red-600 text-white'
                  : 'bg-red-900/20 hover:bg-red-900/40 text-gray-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        {projectFilter === 'all' && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-red-500">Featured Projects</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.filter(project => project.featured).map(project => (
                <div
                  key={project.id}
                  className="group relative border border-red-900/50 bg-black/50 backdrop-blur-sm overflow-hidden"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover opacity-70 group-hover:opacity-40 transition-all duration-300"
                  />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className={`transform transition-all duration-300 ${
                      hoveredProject === project.id ? 'translate-y-0' : 'translate-y-12'
                    }`}>
                      <h3 className="text-red-900 text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-red-500 mb-4">{project.longDescription}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="bg-red-900/50 px-3 py-1 text-sm rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <a 
                          href={project.demoLink} 
                          className="flex items-center text-red-500 hover:text-red-400"
                        >
                          <Link size={16} className="mr-1" /> Live Demo
                        </a>
                        <a 
                          href={project.githubLink} 
                          className="flex items-center text-red-500 hover:text-red-400"
                        >
                          <Github size={16} className="mr-1" /> View Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="group relative overflow-hidden border border-red-900/30 bg-black/30"
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-red-500 text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-red-500 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="bg-red-900/50 px-2 py-1 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={project.demoLink} 
                      className="text-sm flex items-center text-red-500 hover:text-red-400"
                    >
                      <Link size={14} className="mr-1" /> Demo
                    </a>
                    <a 
                      href={project.githubLink} 
                      className="text-sm flex items-center text-red-500 hover:text-red-400"
                    >
                      <Github size={14} className="mr-1" /> Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Previous sections remain the same */}
      {/* Add ProjectsSection before the footer */}
      <ProjectsSection />
      {/* Footer remains the same */}
    </div>
  );
};

export default Projects;