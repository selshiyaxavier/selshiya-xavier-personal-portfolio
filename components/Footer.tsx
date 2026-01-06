"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer id="contact" className="relative bg-black pt-20 pb-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16">
                {/* Contact Info */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                        Let's <span className="text-neon-pink">Collaborate</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-md">
                        Looking for a host, voice artist, or storyteller for your next event?
                        Let's create something magical together.
                    </p>

                    <div className="space-y-6">
                        {/* <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neon-pink">
                                <Phone size={20} />
                            </div>
                            <span className="text-lg">+91 8122696467</span>
                        </div> */}

                        <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neon-purple">
                                <Mail size={20} />
                            </div>
                            <span className="text-lg">selshiyaxavier@gmail.com</span>
                        </div>

                        <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-blue-400">
                                <MapPin size={20} />
                            </div>
                            <span className="text-lg">Redhills, Chennai</span>
                        </div>
                    </div>

                    <div className="mt-10 flex gap-4">
                        <Link
                            href="https://instagram.com/vj_selshiya"
                            target="_blank"
                            className="flex items-center gap-4 group"
                        >
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/30">
                                <Instagram size={28} />
                            </div>
                            <span className="text-lg text-gray-300 group-hover:text-white transition-colors font-medium">@vj_selshiya</span>
                        </Link>
                        {/* Add more socials if needed */}
                    </div>
                </div>

                {/* Contact Form */}
                <div className="glass-card p-8 rounded-2xl border border-white/10">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input
                                type="text"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-pink focus:ring-1 focus:ring-neon-pink transition-all"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-pink focus:ring-1 focus:ring-neon-pink transition-all"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-pink focus:ring-1 focus:ring-neon-pink transition-all resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>
                        <button
                            type="button"
                            className="w-full bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                        >
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>

            <div className="mt-20 pt-8 border-t border-white/5 text-center px-6">
                <p className="text-gray-500 text-sm">
                    &copy; 2025 VJ Selshiya. All rights reserved. <br className="md:hidden" />
                    <span className="text-neon-pink ml-2">Signing off Tata boi boi 👋</span>
                </p>
            </div>
        </footer>
    );
}
