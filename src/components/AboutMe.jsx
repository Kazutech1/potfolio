import React, { useState } from 'react';
import { 
    User,
    Book,
    Clock,
    Coffee,
    Globe,
    Server,
    Award,
    Database,
    Wrench
} from 'lucide-react';

const AboutMe = () => {

    const [activeTab, setActiveTab] = useState('skills');

    const certifications = [
        {
            name: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            year: "2023"
        },
        {
            name: "Google Cloud Professional Developer",
            issuer: "Google",
            year: "2022"
        },
        {
            name: "MongoDB Certified Developer",
            issuer: "MongoDB",
            year: "2021"
        }
    ];

    return (
        <div>
            <section id="about" className="py-20 bg-gradient-to-b from-black to-red-950 relative">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-16 flex items-center">
                        <User className="text-red-500 mr-4" />
                        ABOUT ME
                        <div className="h-px bg-red-600 flex-grow ml-4"></div>
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column - Personal Info */}
                        <div className="space-y-8">
                            <div className="relative">
                              
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                            </div>

                            <div className="border-l-4 border-red-600 pl-6">
                                <h3 className="text-2xl font-bold mb-4">Umeh Chibuike Emmanuel</h3>
                                <p className="text-gray-300 mb-4">
                                    A passionate Full Stack Developer with 2+ years of experience in building scalable web applications and leading development teams. Based in San Francisco, CA.
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
                        </div>

                        {/* Right Column - Tabs */}
                        <div className="space-y-8">
                            <div className="flex space-x-4 border-b border-red-900/30">
                                {['skills'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-2 px-4 capitalize ${activeTab === tab ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400 hover:text-gray-300'}`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            <div className="min-h-[400px]">
                                {activeTab === 'skills' && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="text-xl font-bold mb-4 flex items-center">
                                                    <Globe className="text-red-500 mr-2" /> Frontend
                                                </h4>
                                                <div className="space-y-2">
                                                    {['React', 'Vue.js', 'TypeScript', 'Tailwind CSS'].map((skill) => (
                                                        <div key={skill} className="flex items-center">
                                                            <div className="w-full bg-red-900/20 rounded-full h-2">
                                                                <div className="bg-red-600 h-2 rounded-full" style={{width: '90%'}}></div>
                                                            </div>
                                                            <span className="ml-4 min-w-[100px]">{skill}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="text-xl font-bold mb-4 flex items-center">
                                                    <Server className="text-red-500 mr-2" /> Backend
                                                </h4>
                                                <div className="space-y-2">
                                                    {['Node.js', 'Python', 'Java', 'Go'].map((skill) => (
                                                        <div key={skill} className="flex items-center">
                                                            <div className="w-full bg-red-900/20 rounded-full h-2">
                                                                <div className="bg-red-600 h-2 rounded-full" style={{width: '80%'}}></div>
                                                            </div>
                                                            <span className="ml-4 min-w-[100px]">{skill}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="text-xl font-bold mb-4 flex items-center">
                                                    <Database className="text-red-500 mr-2" /> Database
                                                </h4>
                                                <div className="space-y-2">
                                                    {['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'].map((skill) => (
                                                        <div key={skill} className="flex items-center">
                                                            <div className="w-full bg-red-900/20 rounded-full h-2">
                                                                <div className="bg-red-600 h-2 rounded-full" style={{width: '75%'}}></div>
                                                            </div>
                                                            <span className="ml-4 min-w-[100px]">{skill}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="text-xl font-bold mb-4 flex items-center">
                                                    <Wrench className="text-red-500 mr-2" /> DevOps
                                                </h4>
                                                <div className="space-y-2">
                                                    {['Docker', 'Kubernetes', 'AWS', 'CI/CD'].map((skill) => (
                                                        <div key={skill} className="flex items-center">
                                                            <div className="w-full bg-red-900/20 rounded-full h-2">
                                                                <div className="bg-red-600 h-2 rounded-full" style={{width: '55%'}}></div>
                                                            </div>
                                                            <span className="ml-4 min-w-[100px]">{skill}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {[ 
                            { icon: Coffee, label: 'Coffee Consumed', value: '1,463' },
                            { icon: Clock, label: 'Hours Coded', value: '12,846' },
                            { icon: Book, label: 'Projects Completed', value: '12' },
                            
                        ].map((stat, index) => (
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
    )
}

export default AboutMe;
