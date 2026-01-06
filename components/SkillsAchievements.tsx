"use client";

import { useState, useEffect } from "react";
import Section from "./ui/Section";
import { motion } from "framer-motion";
import { Trophy, Star, Zap, Target, Crown } from "lucide-react";
import data from "../data/skills_achievements.json";

export default function SkillsAchievements() {
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
        <Section id="skills-achievements" className="relative overflow-hidden">
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
                <div className="absolute top-5 left-5 text-white/5 animate-float" style={{ animationDelay: "0s" }}>
                    <Trophy size={100} />
                </div>
                <div className="absolute top-5 right-5 text-white/5 animate-float" style={{ animationDelay: "2s" }}>
                    <Star size={80} />
                </div>
                <div className="absolute bottom-5 right-5 text-white/5 animate-float" style={{ animationDelay: "1s" }}>
                    <Zap size={90} />
                </div>
                <div className="absolute bottom-5 left-5 text-white/5 animate-float" style={{ animationDelay: "1.5s" }}>
                    <Crown size={60} />
                </div>

                {/* Gradient Orbs */}
                <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-neon-pink/10 rounded-full blur-[100px] animate-pulse-slow" />
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10">
                {/* Key Skills */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass-card p-8 rounded-2xl border border-white/10 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="text-9xl">💪</span>
                    </div>

                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        Key <span className="text-neon-pink">Skills</span> <span className="text-2xl">💪</span>
                    </h2>

                    <ul className="space-y-4">
                        {data.skills.map((skill, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-300">
                                <span className="text-neon-pink mt-1">⚡</span>
                                <span className="text-lg">{skill}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Achievements */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass-card p-8 rounded-2xl border border-white/10 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="text-9xl">🏆</span>
                    </div>

                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="text-neon-purple">Achievements</span> <span className="text-2xl">🏆</span>
                    </h2>

                    <ul className="space-y-4">
                        {data.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-300">
                                <span className="text-neon-purple mt-1">🌟</span>
                                <span className="text-lg" dangerouslySetInnerHTML={{
                                    __html: achievement
                                        .replace("80+ attendees", "<strong>80+ attendees</strong>")
                                        .replace("132K views", "<strong>132K views</strong>")
                                        .replace("“Top performer of month”", "<strong>“Top performer of month”</strong>")
                                }} />
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </Section>
    );
}
