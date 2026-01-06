"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import ProtectedImage from "./ProtectedImage";

const roles = ["Video Jockey", "RJ", "Voice Over Artist", "Storyteller"];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentRole.substring(0, text.length + 1));
                if (text === currentRole) {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                setText(currentRole.substring(0, text.length - 1));
                if (text === "") {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-hero-gradient opacity-80" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-pink/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] animate-pulse delay-1000" />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-0 left-0 md:left-10 z-20 w-[55%] sm:w-[45%] md:w-[35%] max-w-[500px]"
            >
                <ProtectedImage
                    src="/images/landing-image.png"
                    alt="VJ Selshiya"
                    className="w-full h-auto object-contain mask-image-gradient-to-t"
                />
            </motion.div>

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-4 tracking-widest">
                        HELLO, I AM
                    </h2>
                    <h1 className="text-6xl md:text-8xl mb-6 font-eyesome text-white">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple">Selshiya</span>
                    </h1>

                    <div className="h-12 md:h-16 mb-6 flex items-center justify-center">
                        <span className="text-2xl md:text-4xl font-light text-white/90">
                            I am a <span className="font-semibold text-neon-pink">{text}</span>
                            <span className="animate-blink">|</span>
                        </span>
                    </div>

                    <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                        "Connecting souls through Voice, Video, and Words."
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <Link
                            href="#portfolio"
                            className="px-8 py-4 bg-neon-pink text-black font-bold rounded-full hover:bg-neon-pink/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,0,255,0.5)] flex items-center gap-2"
                        >
                            View Portfolio <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-4 border border-white/20 hover:border-neon-purple hover:text-neon-purple text-white font-medium rounded-full transition-all hover:bg-white/5"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-white/50 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
