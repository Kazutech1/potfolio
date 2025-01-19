import React, { useState } from 'react';

import { ChevronRight, Terminal } from 'lucide-react';

const FeaturedProjects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div>  <section className="py-20 bg-gradient-to-b from-black to-red-950">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-16 flex items-center">
        <Terminal className="text-red-500 mr-4" />
        FEATURED PROJECTS
        <div className="h-px bg-red-600 flex-grow ml-4"></div>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project Card 1 */}
        <div 
          className="group relative border border-red-900/50 bg-black/50 backdrop-blur-sm overflow-hidden"
          onMouseEnter={() => setHoveredProject(0)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <img 
            src="https://vulcanpost.com/wp-content/uploads/2022/04/Matrixport-article-005.jpg" 
            alt="Project 1" 
            className="w-full h-64 object-cover opacity-70 group-hover:opacity-40 transition-all duration-300"
          />
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <div className={`transform transition-all duration-300 ${hoveredProject === 0 ? 'translate-y-0' : 'translate-y-12'}`}>
              <h3 className="text-red-500 text-2xl font-bold mb-2">Crypto Invesment Platform</h3>
              <p className="text-red-600 mb-4">Full-stack solution with React, Node.js, and MongoDB</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-red-900/50 px-3 py-1 text-sm rounded-full">React</span>
                <span className="bg-red-900/50 px-3 py-1 text-sm rounded-full">Node.js</span>
                <span className="bg-red-900/50 px-3 py-1 text-sm rounded-full">MongoDB</span>
              </div>
              <a href="https://be9ine.onrender.com/" className="inline-flex items-center text-red-600 hover:text-red-400">
                View Project <ChevronRight className="ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Project Card 2 */}
        <div 
          className="group relative border border-red-900/50 bg-black/50 backdrop-blur-sm overflow-hidden"
          onMouseEnter={() => setHoveredProject(1)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <img 
            src="https://piktochart.com/wp-content/uploads/2023/03/resume-builder-Piktochart.jpg" 
            alt="Project 2" 
            className="w-full h-64 object-cover opacity-70 group-hover:opacity-40 transition-all duration-300"
          />
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <div className={`transform transition-all duration-300 ${hoveredProject === 1 ? 'translate-y-0' : 'translate-y-12'}`}>
              <h3 className="text-red-600 text-2xl font-bold mb-2">Resume Builder</h3>
              <p className="text-red-600 mb-4">Web app Technologies</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-red-900/50 px-3 py-1 text-sm rounded-full">React</span>
                <span className="bg-red-900/50 px-3 py-1 text-sm rounded-full">MongoDB</span>
              </div>
              <a href="https://resbuild.onrender.com/" className="inline-flex items-center text-red-500 hover:text-red-400">
                View Project <ChevronRight className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  )
}

export default FeaturedProjects