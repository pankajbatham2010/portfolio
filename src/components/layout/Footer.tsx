import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, href: 'https://github.com/pankajbatham2010', label: 'GitHub' },
        { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
    ];

    return (
        <footer className="bg-slate-950 border-t border-slate-800">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center space-y-4">
                    {/* Social Links */}
                    <div className="flex space-x-6">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                                whileHover={{ scale: 1.2, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={social.label}
                            >
                                <social.icon size={24} />
                            </motion.a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="flex items-center space-x-2 text-slate-400 text-sm">
                        <span>© {currentYear} Made with</span>
                        <Heart size={16} className="text-red-500 fill-red-500" />
                        <span>by Pankaj Batham</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
