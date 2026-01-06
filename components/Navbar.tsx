"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navLinks.map(link => link.href.substring(1));

            // Check if we're at the bottom of the page
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
                setActiveSection(sections[sections.length - 1]);
                return;
            }

            const triggerPoint = window.innerHeight / 2;
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= triggerPoint && rect.bottom >= triggerPoint;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            setActiveSection(targetId);
            setIsOpen(false);

            const offset = 100; // Adjust for navbar height
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            const duration = 1000; // 1 second duration for premium feel
            let start: number | null = null;

            const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

            const animation = (currentTime: number) => {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const progress = Math.min(timeElapsed / duration, 1);
                const ease = easeInOutCubic(progress);

                window.scrollTo(0, startPosition + distance * ease);

                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            };

            requestAnimationFrame(animation);
        }
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "glass border-glass-border py-4" : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-neon-pink transition-colors">
                    VJ <span className="text-neon-pink">Selshiya</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-2 bg-white/5 backdrop-blur-md p-1 rounded-full border border-white/10">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={cn(
                                    "relative px-6 py-2 text-sm font-medium transition-colors rounded-full",
                                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                                )}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="activeSection"
                                        className="absolute inset-0 bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 rounded-full border border-white/10"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10 tracking-wide">{link.name.toUpperCase()}</span>
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-neon-pink transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-gradient-to-b from-zinc-950 to-black z-50 flex flex-col md:hidden"
                    >
                        {/* Mobile Header */}
                        <div className="flex justify-between items-center p-6 border-b border-white/5">
                            <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-bold tracking-tighter">
                                VJ <span className="text-neon-pink">Selshiya</span>
                            </Link>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Nav Links */}
                        <div className="flex-1 flex flex-col justify-center items-center gap-8">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="text-3xl font-bold text-white/80 hover:text-neon-pink transition-colors tracking-wide"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Footer */}
                        <div className="p-8 border-t border-white/5 bg-white/5 backdrop-blur-lg">
                            <div className="flex flex-col gap-6">
                                <Link
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full py-4 bg-gradient-to-r from-neon-pink to-neon-purple rounded-xl text-white font-bold text-center shadow-lg shadow-neon-pink/20"
                                >
                                    Let's Talk
                                </Link>

                                <div className="flex justify-center gap-8">
                                    <a href="https://instagram.com/vj_selshiya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-pink transition-colors">
                                        <Instagram size={24} />
                                    </a>
                                    <a href="mailto:selshiyaxavier@gmail.com" className="text-gray-400 hover:text-neon-purple transition-colors">
                                        <Mail size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
