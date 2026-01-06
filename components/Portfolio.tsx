"use client";

import Section from "./ui/Section";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Instagram, Play } from "lucide-react";
import ProtectedImage from "./ProtectedImage";

import portfolioData from "../data/portfolio.json";

const INITIAL_COUNT = 9;
const LOAD_MORE_COUNT = 6;

export default function Portfolio() {
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

    const handleLoadMore = () => {
        setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, portfolioData.length));
    };

    return (
        <Section id="portfolio">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Selected <span className="text-neon-pink">Works</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    A collection of my best moments on stage, on camera, and behind the mic.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {portfolioData.slice(0, visibleCount).map((item: any, index: number) => (
                    <motion.div
                        key={item.url}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="w-full max-w-[300px]"
                    >
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block relative aspect-[9/16] bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 hover:border-neon-pink/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,255,0.2)]"
                        >
                            {/* Thumbnail Image */}
                            <ProtectedImage
                                src={item.thumbnail}
                                alt={item.caption}
                                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                            />

                            {/* Background Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/80 via-transparent to-black/80 group-hover:scale-105 transition-transform duration-500" />

                            {/* Decorative Elements */}
                            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black/60 to-transparent z-10" />
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/90 to-transparent z-10" />

                            {/* Center Icon */}
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-neon-pink group-hover:border-neon-pink transition-all duration-300 shadow-lg">
                                    <Play className="text-white fill-white ml-1" size={24} />
                                </div>
                            </div>

                            {/* Bottom Content */}
                            <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                                <div className="flex items-center gap-2 text-neon-pink mb-2">
                                    <Instagram size={16} />
                                    <span className="text-xs font-bold tracking-wider uppercase">{item.category}</span>
                                </div>
                                <h3 className="text-white font-bold text-lg leading-tight group-hover:text-neon-pink transition-colors mb-1">
                                    {item.caption}
                                </h3>
                                <p className="text-xs text-gray-400 group-hover:text-white transition-colors">
                                    Watch on Instagram &rarr;
                                </p>
                            </div>
                        </a>
                    </motion.div>
                ))}
            </div>

            {visibleCount < portfolioData.length && (
                <div className="mt-12 text-center">
                    <button
                        onClick={handleLoadMore}
                        className="px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-neon-pink hover:text-black hover:border-neon-pink transition-all flex items-center gap-2 mx-auto"
                    >
                        Load More <ChevronDown size={20} />
                    </button>
                </div>
            )}
        </Section>
    );
}
