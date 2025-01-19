import React from 'react';
import { Code } from 'lucide-react';

const Skills = () => {
  // Define the tech stack for each category
  const techStack = {
    Frontend: ['React', 'Next js', 'Tailwind CSS'],
    Backend: ['Node.js', 'Express', 'Python'],
    Database: ['MongoDB', 'MySQL'],
    DevOps: ['Docker', 'Git'],
  };

  return (
    <div>
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-red-900/5"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold mb-16 flex items-center">
            <Code className="text-red-500 mr-4" />
            TECH STACK
            <div className="h-px bg-red-600 flex-grow ml-4"></div>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Loop through each category in techStack */}
            {Object.keys(techStack).map((category, index) => (
              <div key={index} className="border border-red-900/30 p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 text-red-500">{category}</h3>
                <ul className="space-y-2">
                  {/* Loop through each technology in the category */}
                  {techStack[category].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
