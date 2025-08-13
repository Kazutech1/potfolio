import React from 'react';
import { Code } from 'lucide-react';

const Skills = () => {
  const techStack = {
    Frontend: ['React', 'React Native', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
    Backend: ['Node.js', 'Express', 'Python', 'REST APIs'],
    Database: ['MongoDB', 'MySQL', 'PostgreSQL'],
    DevOps: ['Docker', 'Git', 'CI/CD'],
  };

  return (
    <section className="py-20 bg-black text-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-16 flex items-center">
          <Code className="text-red-500 mr-4" />
          TECH STACK
          <div className="h-px bg-red-600 flex-grow ml-4"></div>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {Object.keys(techStack).map((category, idx) => (
            <div
              key={idx}
              className="bg-black/70 backdrop-blur-md border border-red-900/30 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-red-500">{category}</h3>
              <ul className="space-y-2">
                {techStack[category].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-red-600 rounded-full mr-3"></span>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Optional subtle background overlay for depth */}
      <div className="absolute inset-0 bg-red-900/5 pointer-events-none"></div>
    </section>
  );
};

export default Skills;
