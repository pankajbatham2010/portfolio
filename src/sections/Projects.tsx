import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.',
            tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
            github: 'https://github.com',
            demo: 'https://demo.com',
            gradient: 'from-cyan-500 to-blue-600',
        },
        {
            title: 'Task Management App',
            description: 'Collaborative task management tool with real-time updates, team collaboration features, and analytics.',
            tech: ['Next.js', 'TypeScript', 'Prisma', 'WebSocket'],
            github: 'https://github.com',
            demo: 'https://demo.com',
            gradient: 'from-purple-500 to-pink-600',
        },
        {
            title: 'Weather Dashboard',
            description: 'Beautiful weather application with location-based forecasts, interactive maps, and historical data visualization.',
            tech: ['React', 'Tailwind', 'OpenWeather API', 'Chart.js'],
            github: 'https://github.com',
            demo: 'https://demo.com',
            gradient: 'from-blue-500 to-cyan-600',
        },
        {
            title: 'Portfolio CMS',
            description: 'Content management system for portfolios with drag-and-drop builder, SEO optimization, and analytics.',
            tech: ['React', 'Express', 'MongoDB', 'AWS S3'],
            github: 'https://github.com',
            demo: 'https://demo.com',
            gradient: 'from-green-500 to-emerald-600',
        },
    ];

    return (
        <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-1/4 left-1/3" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
                        >
                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                            <div className="p-6 relative z-10">
                                {/* Project Title */}
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-400 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 text-xs font-medium bg-slate-800 text-cyan-400 rounded-full border border-slate-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex space-x-4">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Github size={20} />
                                        <span className="text-sm font-medium">Code</span>
                                    </motion.a>
                                    <motion.a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <ExternalLink size={20} />
                                        <span className="text-sm font-medium">Demo</span>
                                    </motion.a>
                                </div>
                            </div>

                            {/* Hover Effect Border */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/20 rounded-xl transition-all duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
