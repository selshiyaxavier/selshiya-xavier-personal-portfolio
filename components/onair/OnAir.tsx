"use client";

import { useEffect } from "react";
import { ACCENT, AMBER } from "./tokens";
import Header from "./Header";
import Hero from "./Hero";
import Marquee from "./Marquee";
import About from "./About";
import Rundown from "./Rundown";
import Toolkit from "./Toolkit";
import Feed from "./Feed";
import Contact from "./Contact";

const ROLE_WORDS = [
    "VIDEO JOCKEY",
    "RJ",
    "VOICE OVER ARTIST",
    "EVENT HOST",
    "STORYTELLER",
];

const PRESS_WORDS = [
    "RAJ TELEVISION NETWORK",
    "STEP 'N' WALK",
    "NICOLA FOUNDATION",
    "NUKE IT MARKETING",
];

export default function OnAir() {
    // Parallax on [data-parallax] elements + scroll-reveal on [data-reveal] elements.
    // Implemented imperatively (as in the prototype) so section markup can stay declarative.
    useEffect(() => {
        const root = document.getElementById("onair-root");
        const parallaxEls = Array.from(
            document.querySelectorAll<HTMLElement>("[data-parallax]")
        );

        let ticking = false;
        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                const y = window.scrollY || window.pageYOffset;
                for (const el of parallaxEls) {
                    const s = parseFloat(el.dataset.parallax || "0") || 0;
                    el.style.transform = `translate3d(0, ${(-y * s).toFixed(1)}px, 0)`;
                }
                ticking = false;
            });
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        let observer: IntersectionObserver | null = null;
        if ("IntersectionObserver" in window) {
            observer = new IntersectionObserver(
                (entries) => {
                    for (const e of entries) {
                        if (e.isIntersecting) {
                            const t = e.target as HTMLElement;
                            t.style.opacity = "1";
                            t.style.transform = "none";
                            observer?.unobserve(t);
                        }
                    }
                },
                { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
            );
            document
                .querySelectorAll<HTMLElement>("[data-reveal]")
                .forEach((el) => observer?.observe(el));
        } else {
            document
                .querySelectorAll<HTMLElement>("[data-reveal]")
                .forEach((el) => {
                    el.style.opacity = "1";
                    el.style.transform = "none";
                });
        }

        return () => {
            window.removeEventListener("scroll", onScroll);
            observer?.disconnect();
            if (root) root.style.transform = "";
        };
    }, []);

    return (
        <div
            id="onair-root"
            style={
                {
                    position: "relative",
                    minHeight: "100vh",
                    overflow: "hidden",
                    "--accent": ACCENT,
                    "--amber": AMBER,
                } as React.CSSProperties
            }
        >
            {/* film grain */}
            <div
                aria-hidden
                style={{
                    position: "fixed",
                    inset: "-60%",
                    zIndex: 9998,
                    pointerEvents: "none",
                    opacity: 0.05,
                    mixBlendMode: "overlay",
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    animation: "grainShift 8s steps(5) infinite",
                }}
            />
            <Header />
            <Hero />
            <Marquee words={ROLE_WORDS} variant="solid" durationSec={26} />
            <About />
            <Rundown />
            <Toolkit />
            <Feed />
            <Contact pressWords={PRESS_WORDS} />
        </div>
    );
}
