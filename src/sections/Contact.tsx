import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // For now, using mailto. You can integrate with a service like Formspree later
        const mailtoLink = `mailto:your.email@example.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
        window.location.href = mailtoLink;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="py-20 md:py-32 bg-slate-950/50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl top-1/2 right-1/3" />
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
                            Get In Touch
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
                    <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                        Have a project in mind or just want to chat? Feel free to reach out!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                            <p className="text-slate-400 leading-relaxed mb-8">
                                I'm always open to discussing new projects, creative ideas, or opportunities
                                to be part of your vision.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center flex-shrink-0">
                                    <Mail className="text-cyan-400" size={24} />
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm">Email</p>
                                    <a href="mailto:your.email@example.com" className="text-white hover:text-cyan-400 transition-colors">
                                        your.email@example.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="text-cyan-400" size={24} />
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm">Location</p>
                                    <p className="text-white">Your City, Country</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-slate-300 mb-2 font-medium">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors duration-200"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-slate-300 mb-2 font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors duration-200"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-slate-300 mb-2 font-medium">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors duration-200 resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300 flex items-center justify-center space-x-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>Send Message</span>
                                <Send size={20} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
