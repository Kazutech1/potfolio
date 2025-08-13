import React, { useState } from 'react';
import { 
    User,
    Book,
    Clock,
    Coffee
} from 'lucide-react';

const AboutMe = () => {
    const [activeTab, setActiveTab] = useState('skills');

    const skills = {
        Frontend: ['React', 'React Native', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
        Backend: ['Node.js', 'Python', 'Java', 'Go', 'Express', 'REST APIs'],
        Database: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'MySQL'],
        DevOps: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Git'],
    };

    const stats = [
        { icon: Coffee, label: 'Coffee Consumed', value: '1,463' },
        { icon: Clock, label: 'Hours Coded', value: '12,846' },
        { icon: Book, label: 'Projects Completed', value: '12' },
    ];

    return (
        <div className='text-white'>
            <section id="about" className="py-20 bg-gradient-to-b from-black to-red-950 relative">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-16 flex items-center">
                        <User className="text-red-500 mr-4" />
                        ABOUT ME
                        <div className="h-px bg-red-600 flex-grow ml-4"></div>
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column - Personal Info */}
                        <div className="space-y-8 border-l-4 border-red-600 pl-6">
                            <h3 className="text-2xl font-bold mb-4">Umeh Chibuike Emmanuel</h3>
                            <p className="text-gray-300 mb-4">
                                Passionate Full Stack Developer with 2+ years experience in building scalable web applications and leading development teams. Based in Port Harcourt, Nigeria.
                            </p>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <strong className="text-red-500">Location:</strong>
                                    <p>Port Harcourt, Rivers State, Nigeria</p>
                                </div>
                                <div>
                                    <strong className="text-red-500">Experience:</strong>
                                    <p>2+ Years</p>
                                </div>
                                <div>
                                    <strong className="text-red-500">Available for:</strong>
                                    <p>Full-time positions</p>
                                </div>
                                <div>
                                    <strong className="text-red-500">Preferred Role:</strong>
                                    <p>Tech Lead / Senior Developer</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Skills */}
                        <div className="space-y-8">
                            <div className="flex space-x-4 border-b border-red-900/30">
                                <button
                                    onClick={() => setActiveTab('skills')}
                                    className={`pb-2 px-4 capitalize ${activeTab === 'skills' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400 hover:text-gray-300'}`}
                                >
                                    Skills
                                </button>
                            </div>

                            {activeTab === 'skills' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {Object.keys(skills).map((category, idx) => (
                                        <div key={idx} className="bg-black/70 backdrop-blur-md border border-red-900/30 p-6 rounded-xl shadow-md">
                                            <h4 className="text-xl font-bold mb-4 text-red-500">{category}</h4>
                                            <ul className="space-y-2">
                                                {skills[category].map((skill, i) => (
                                                    <li key={i} className="text-gray-200">• {skill}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <stat.icon className="w-8 h-8 text-red-500 mx-auto mb-4" />
                                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                                <div className="text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutMe;
