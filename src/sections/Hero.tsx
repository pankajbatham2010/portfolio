import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
                <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    {/* Greeting */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-4"
                    >
                        <span className="text-cyan-400 text-lg md:text-xl font-medium">
                            Hi, I'm
                        </span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
                    >
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                            Pankaj Batham
                        </span>
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-8 max-w-3xl mx-auto"
                    >
                        Full Stack Developer | Creative Problem Solver
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-base md:text-lg text-slate-400 mb-12 max-w-2xl mx-auto"
                    >
                        Crafting beautiful, performant web experiences with modern technologies.
                        Passionate about clean code and innovative solutions.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                    >
                        <motion.button
                            onClick={scrollToContact}
                            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get In Touch
                        </motion.button>
                        <motion.a
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.querySelector('#projects');
                                if (element) element.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Projects
                        </motion.a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex justify-center space-x-6 mb-12"
                    >
                        {[
                            { icon: Github, href: 'https://github.com/pankajbatham2010' },
                            { icon: Linkedin, href: 'https://www.linkedin.com/in/pankajbatham/' },
                            { icon: Mail, href: 'mailto:pankajbatham2010@gmail.com' },
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                                whileHover={{ scale: 1.2, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <social.icon size={28} />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex justify-center"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="text-cyan-400"
                        >
                            <ArrowDown size={32} />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
