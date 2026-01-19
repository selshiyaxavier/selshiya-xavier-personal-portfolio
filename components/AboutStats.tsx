"use client";

import { useState, useEffect } from "react";
import Section from "./ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Globe, TrendingUp } from "lucide-react";
import ProtectedImage from "./ProtectedImage";

const stats = [
    {
        icon: <TrendingUp className="text-neon-pink" size={32} />,
        value: "132K+",
        label: "Viral Views",
    },
    {
        icon: <Award className="text-neon-purple" size={32} />,
        value: "Top Performer",
        label: "Sept '25 Award",
    },
    {
        icon: <Globe className="text-blue-400" size={32} />,
        value: "Bilingual",
        label: "Tamil & English",
    },
];

const images = [
    "/images/about-me-1.jpg",
    "/images/about-me-2.jpg",
    "/images/about-me-3.jpg",
    "/images/IMG_6839.jpeg",
    "/images/IMG_6836.jpeg"
];

export default function AboutStats() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Section id="about" className="bg-black/40">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image Carousel */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink to-neon-purple rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                    <div className="relative aspect-[3/4] w-full rounded-2xl bg-zinc-900 border border-white/10 overflow-hidden">
                        {images.map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: index === currentImage ? 1 : 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full bg-zinc-900"
                                style={{ zIndex: index === currentImage ? 10 : 0 }}
                            >
                                <ProtectedImage
                                    src={img}
                                    alt="VJ Selshiya"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        About <span className="text-neon-pink">Me</span>
                    </h2>
                    <div className="text-gray-300 text-lg leading-relaxed mb-8 space-y-6">
                        <p>
                            I work at the intersection of content, coordination, and communication making sure ideas move cleanly from concept to audience. My experience spans digital media execution and on camera presentation, giving me a practical understanding of both behind the scenes workflows and front facing engagement.
                        </p>
                        <p>
                            I have hosted the reality dance show <span className="text-neon-pink">STEP ‘N’ WALK</span>, aired on <span className="text-neon-pink">Raj Television Network</span>, where I led on stage presentation, interacted with contestants and judges, and worked closely with production teams to deliver a smooth broadcast experience.
                        </p>
                        <p>
                            Alongside television hosting, I have hands on experience managing social media deliverables coordinating with editors, aligning content with client requirements, crafting platform appropriate captions and ensuring timely publishing across social platforms.
                        </p>
                        <p>
                            I value clarity, consistency and execution. Whether on camera or behind the screen, my focus is on delivering content that connects with audiences and meets real world timelines.
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5, rotateX: 5, rotateY: 5 }}
                                className="glass-card p-6 rounded-xl text-center border border-white/5 hover:border-neon-pink/30 transition-colors"
                            >
                                <div className="mb-3 flex justify-center">{stat.icon}</div>
                                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                                <p className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
