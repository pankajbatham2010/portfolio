import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: [
                { name: 'React', level: 90 },
                { name: 'TypeScript', level: 85 },
                { name: 'Tailwind CSS', level: 90 },
                { name: 'Next.js', level: 80 },
            ],
        },
        {
            title: 'Backend',
            skills: [
                { name: 'Node.js', level: 85 },
                { name: 'Python', level: 80 },
                { name: 'Rust', level: 70 },
                { name: 'PostgreSQL', level: 75 },
            ],
        },
        {
            title: 'Tools & Others',
            skills: [
                { name: 'Git', level: 90 },
                { name: 'Docker', level: 75 },
                { name: 'AWS', level: 70 },
                { name: 'CI/CD', level: 75 },
            ],
        },
    ];

    return (
        <section id="skills" className="py-20 md:py-32 bg-slate-950/50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-1/4 right-1/4" />
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
                            Skills & Expertise
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold text-cyan-400 mb-6">{category.title}</h3>
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-slate-300 font-medium">{skill.name}</span>
                                            <span className="text-slate-400 text-sm">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                                                className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
