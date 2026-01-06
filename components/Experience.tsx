"use client";

import { useState, useEffect } from "react";
import Section from "./ui/Section";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Mic, Camera, Radio, Clapperboard, Music } from "lucide-react";
import experienceData from "../data/experience.json";

const getIcon = (type: string) => {
    switch (type) {
        case "briefcase":
            return <Briefcase size={20} />;
        case "graduation":
            return <GraduationCap size={20} />;
        default:
            return <Briefcase size={20} />;
    }
};

export default function Experience() {
    const [sparkles, setSparkles] = useState<Array<{ top: string; left: string; size: string; delay: string; opacity: number }>>([]);

    useEffect(() => {
        const newSparkles = Array.from({ length: 30 }).map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: `${Math.random() * 3 + 1}px`,
            delay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.5 + 0.3,
        }));
        setSparkles(newSparkles);
    }, []);

    return (
        <Section id="experience" className="relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Sparkles */}
                {sparkles.map((sparkle, i) => (
                    <div
                        key={i}
                        className="absolute bg-white rounded-full animate-twinkle"
                        style={{
                            top: sparkle.top,
                            left: sparkle.left,
                            width: sparkle.size,
                            height: sparkle.size,
                            animationDelay: sparkle.delay,
                            opacity: sparkle.opacity,
                        }}
                    />
                ))}

                {/* Floating Icons */}
                <div className="absolute top-20 left-10 text-white/5 animate-float" style={{ animationDelay: "0s" }}>
                    <Mic size={120} />
                </div>
                <div className="absolute bottom-40 right-10 text-white/5 animate-float" style={{ animationDelay: "2s" }}>
                    <Camera size={100} />
                </div>
                <div className="absolute top-1/3 right-20 text-white/5 animate-float" style={{ animationDelay: "1s" }}>
                    <Radio size={80} />
                </div>
                <div className="absolute bottom-20 left-20 text-white/5 animate-float" style={{ animationDelay: "3s" }}>
                    <Clapperboard size={90} />
                </div>
                <div className="absolute top-1/2 left-10 text-white/5 animate-float" style={{ animationDelay: "1.5s" }}>
                    <Music size={60} />
                </div>

                {/* Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-pink/10 rounded-full blur-[100px] animate-pulse-slow" />
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative z-10">
                My <span className="text-neon-purple">Journey</span>
            </h2>

            <div className="relative max-w-3xl mx-auto z-10">
                {/* Vertical Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-pink via-neon-purple to-transparent md:-translate-x-1/2 ml-6 md:ml-0" />

                <div className="space-y-12">
                    {experienceData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.2 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Icon */}
                            <div className="absolute left-0 md:left-1/2 w-12 h-12 bg-black border-2 border-neon-pink rounded-full flex items-center justify-center z-10 md:-translate-x-1/2 ml-0 md:ml-0 shadow-[0_0_15px_rgba(255,0,255,0.5)]">
                                {getIcon(item.iconType)}
                            </div>

                            {/* Content Card */}
                            <div className="ml-16 md:ml-0 md:w-1/2">
                                <div className={`glass-card p-6 rounded-xl border-l-4 ${index % 2 === 0 ? "md:mr-12 border-l-neon-pink" : "md:ml-12 border-l-neon-purple"
                                    }`}>
                                    <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 mb-2 border border-white/10">
                                        {item.date}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                    <h4 className="text-neon-pink/80 font-medium mb-3">{item.org}</h4>
                                    <div className="text-gray-400 text-sm leading-relaxed">
                                        <ul className="space-y-2">
                                            {item.desc.map((point, i) => (
                                                <li key={i} className="flex gap-2">
                                                    <span className="text-neon-pink shrink-0">🎙️</span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
