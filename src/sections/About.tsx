import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Rocket } from 'lucide-react';

const About: React.FC = () => {
    const highlights = [
        {
            icon: Code,
            title: 'Clean Code',
            description: 'Writing maintainable, scalable code that stands the test of time',
        },
        {
            icon: Rocket,
            title: 'Fast Learner',
            description: 'Constantly exploring new technologies and best practices',
        },
        {
            icon: User,
            title: 'Team Player',
            description: 'Collaborative approach to problem-solving and development',
        },
    ];

    return (
        <section id="about" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl top-1/2 left-1/4" />
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
                            About Me
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Left: Image/Avatar Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center"
                    >
                        <div className="relative">
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center overflow-hidden">
                                <div className="text-cyan-400/30 text-9xl font-bold">PB</div>
                            </div>
                            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-2xl opacity-20 -z-10" />
                        </div>
                    </motion.div>

                    {/* Right: Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-slate-300 text-lg leading-relaxed">
                            I'm a Computer Science & Engineering graduate (B.E. 2008-2012) with a passion for
                            building robust software solutions. During my studies, I developed projects including
                            a Banking System and a Training & Placement Department Website, gaining hands-on
                            experience in system design and web development.
                        </p>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            Currently, I'm focused on mastering modern technologies including Rust, JavaScript/TypeScript
                            for web development, and Python for AI/ML applications. I'm dedicated to continuous learning
                            and building a strong foundation in cutting-edge technologies.
                        </p>

                        {/* Highlights */}
                        <div className="grid gap-4 mt-8">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-start space-x-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-colors duration-300"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                                        <item.icon className="text-cyan-400" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                                        <p className="text-slate-400 text-sm">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
