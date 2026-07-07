"use client";

import { useEffect, useRef, useState } from "react";
import { FONT } from "./tokens";

const ROLES = ["Video Jockey", "RJ", "Voice Over Artist", "Storyteller"];

export default function Hero() {
    const [text, setText] = useState("Video Jockey");
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const started = useRef(false);

    useEffect(() => {
        // Skip retyping the first word on mount (it renders complete for SSR parity).
        if (!started.current) {
            started.current = true;
            const t = setTimeout(() => setIsDeleting(true), 1500);
            return () => clearTimeout(t);
        }
        const current = ROLES[roleIndex];
        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    const next = current.slice(0, text.length + 1);
                    setText(next);
                    if (next === current) setTimeout(() => setIsDeleting(true), 1500);
                } else {
                    const next = current.slice(0, text.length - 1);
                    setText(next);
                    if (next === "") {
                        setIsDeleting(false);
                        setRoleIndex((p) => (p + 1) % ROLES.length);
                    }
                }
            },
            isDeleting ? 45 : 95
        );
        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);

    return (
        <section
            id="home"
            className="oa-hero"
            style={{
                position: "relative",
                minHeight: "100vh",
                scrollMarginTop: 96,
                display: "flex",
                alignItems: "flex-end",
                padding: "120px clamp(20px,4vw,56px) 0",
                overflow: "hidden",
            }}
        >
            {/* giant bg type */}
            <div
                data-parallax="0.16"
                aria-hidden
                style={{
                    position: "absolute",
                    top: "16%",
                    left: "-3%",
                    zIndex: 0,
                    fontFamily: FONT.archivo,
                    fontWeight: 900,
                    fontSize: "26vw",
                    lineHeight: 0.8,
                    color: "transparent",
                    WebkitTextStroke: "1.5px rgba(244,235,221,0.07)",
                    whiteSpace: "nowrap",
                    pointerEvents: "none",
                }}
            >
                ON AIR
            </div>
            {/* grid lines */}
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                    pointerEvents: "none",
                    backgroundImage:
                        "linear-gradient(rgba(244,235,221,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(244,235,221,0.035) 1px,transparent 1px)",
                    backgroundSize: "clamp(60px,7vw,110px) clamp(60px,7vw,110px)",
                    WebkitMaskImage:
                        "radial-gradient(80% 80% at 50% 40%,#000 30%,transparent 100%)",
                    maskImage:
                        "radial-gradient(80% 80% at 50% 40%,#000 30%,transparent 100%)",
                }}
            />
            {/* coral glow */}
            <div
                data-parallax="0.05"
                aria-hidden
                style={{
                    position: "absolute",
                    right: "6%",
                    bottom: "4%",
                    width: "min(52vw,720px)",
                    height: "min(52vw,720px)",
                    zIndex: 0,
                    background:
                        "radial-gradient(circle,rgba(255,77,46,0.28),transparent 62%)",
                    filter: "blur(20px)",
                    pointerEvents: "none",
                }}
            />

            <div
                className="oa-hero-grid grid grid-cols-1 items-end gap-8 min-[900px]:grid-cols-[1.15fr_0.85fr]"
                style={{
                    position: "relative",
                    zIndex: 5,
                    width: "100%",
                    maxWidth: 1400,
                    margin: "0 auto",
                    paddingBottom: "6vh",
                }}
            >
                {/* LEFT: text */}
                <div className="oa-hero-text" style={{ paddingBottom: "4vh" }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            marginBottom: 26,
                        }}
                    >
                        <span style={{ width: 34, height: 1, background: "var(--accent)" }} />
                        <span
                            style={{
                                fontFamily: FONT.mono,
                                fontSize: 12,
                                letterSpacing: ".28em",
                                color: "#a89a89",
                            }}
                        >
                            EST. CHENNAI
                        </span>
                        <span style={{ fontFamily: FONT.tamil, fontSize: 15, color: "var(--amber)" }}>
                            வணக்கம்
                        </span>
                    </div>
                    <div
                        style={{
                            fontFamily: FONT.grotesk,
                            fontSize: "clamp(15px,1.5vw,20px)",
                            letterSpacing: ".34em",
                            color: "#a89a89",
                            marginBottom: 6,
                        }}
                    >
                        HELLO, I AM
                    </div>
                    <h1
                        style={{
                            margin: 0,
                            fontFamily: FONT.archivo,
                            fontWeight: 900,
                            fontSize: "clamp(64px,11vw,190px)",
                            lineHeight: 0.82,
                            letterSpacing: "-.035em",
                            color: "#f4ebdd",
                        }}
                    >
                        SELSHIYA
                    </h1>
                    <div
                        style={{
                            marginTop: 22,
                            fontFamily: FONT.grotesk,
                            fontWeight: 500,
                            fontSize: "clamp(20px,2.6vw,38px)",
                            color: "#f4ebdd",
                        }}
                    >
                        I am a{" "}
                        <span style={{ color: "var(--accent)", fontWeight: 700 }}>{text}</span>
                        <span
                            style={{
                                color: "var(--accent)",
                                animation: "blink 1s step-end infinite",
                            }}
                        >
                            |
                        </span>
                    </div>
                    <p
                        style={{
                            margin: "26px 0 0",
                            maxWidth: 440,
                            fontFamily: FONT.serif,
                            fontStyle: "italic",
                            fontSize: "clamp(20px,2vw,27px)",
                            lineHeight: 1.35,
                            color: "#d8ccbb",
                        }}
                    >
                        &ldquo;Connecting souls through Voice, Video &amp; Words.&rdquo;
                    </p>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 16,
                            marginTop: 38,
                        }}
                    >
                        <a
                            href="#portfolio"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 10,
                                padding: "16px 30px",
                                borderRadius: 999,
                                background: "var(--accent)",
                                color: "#14100d",
                                fontFamily: FONT.archivo,
                                fontWeight: 800,
                                fontSize: 15,
                                letterSpacing: ".02em",
                                boxShadow: "0 14px 40px rgba(255,77,46,0.32)",
                            }}
                        >
                            Watch the feed →
                        </a>
                        <a
                            href="#contact"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 10,
                                padding: "16px 30px",
                                borderRadius: 999,
                                border: "1px solid rgba(244,235,221,0.2)",
                                color: "#f4ebdd",
                                fontFamily: FONT.archivo,
                                fontWeight: 700,
                                fontSize: 15,
                            }}
                        >
                            Book the talent
                        </a>
                    </div>
                </div>

                {/* RIGHT: portrait */}
                <div
                    className="oa-hero-portrait"
                    style={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-end",
                    }}
                >
                    <div
                        aria-hidden
                        style={{
                            position: "absolute",
                            bottom: "8%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "min(30vw,380px)",
                            height: "min(30vw,380px)",
                            borderRadius: "50%",
                            background:
                                "radial-gradient(circle,var(--accent),rgba(255,77,46,0) 70%)",
                            opacity: 0.55,
                        }}
                    />
                    <div
                        aria-hidden
                        className="oa-hero-vtamil"
                        style={{
                            position: "absolute",
                            left: "-6%",
                            top: "12%",
                            writingMode: "vertical-rl",
                            fontFamily: FONT.tamil,
                            fontWeight: 800,
                            fontSize: "clamp(40px,6vw,86px)",
                            color: "transparent",
                            WebkitTextStroke: "1px rgba(244,235,221,0.13)",
                        }}
                    >
                        செல்சியா
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        data-parallax="0.07"
                        className="oa-hero-img"
                        src="/images/landing-image.png"
                        alt="VJ Selshiya"
                        loading="eager"
                        style={{
                            position: "relative",
                            zIndex: 2,
                            width: "min(34vw,460px)",
                            height: "auto",
                            display: "block",
                            filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.55))",
                        }}
                    />
                    {/* rotating badge */}
                    <div
                        style={{
                            position: "absolute",
                            top: "2%",
                            right: "0%",
                            zIndex: 4,
                            width: "clamp(96px,10vw,132px)",
                            height: "clamp(96px,10vw,132px)",
                            animation: "floatY 6s ease-in-out infinite",
                        }}
                    >
                        <svg
                            viewBox="0 0 200 200"
                            style={{
                                width: "100%",
                                height: "100%",
                                animation: "spinSlow 14s linear infinite",
                            }}
                        >
                            <defs>
                                <path
                                    id="badgeCircle"
                                    d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0"
                                />
                            </defs>
                            <text
                                style={{
                                    fontFamily: FONT.mono,
                                    fontSize: 15,
                                    letterSpacing: "5.5px",
                                    fill: "#f4ebdd",
                                }}
                            >
                                <textPath href="#badgeCircle">
                                    AVAILABLE FOR BOOKINGS ✦ HOST + VJ ✦{" "}
                                </textPath>
                            </text>
                        </svg>
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <span
                                style={{
                                    width: 46,
                                    height: 46,
                                    borderRadius: "50%",
                                    background: "var(--accent)",
                                    color: "#14100d",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 16,
                                }}
                            >
                                ▶
                            </span>
                        </div>
                    </div>
                    {/* lower third tag */}
                    <div
                        className="oa-hero-lowerthird"
                        style={{
                            position: "absolute",
                            bottom: "14%",
                            left: "-8%",
                            zIndex: 5,
                            display: "flex",
                            alignItems: "stretch",
                            boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
                        }}
                    >
                        <span style={{ width: 5, background: "var(--accent)" }} />
                        <div
                            style={{
                                background: "rgba(20,16,13,0.9)",
                                backdropFilter: "blur(8px)",
                                WebkitBackdropFilter: "blur(8px)",
                                border: "1px solid rgba(244,235,221,0.1)",
                                borderLeft: "none",
                                padding: "10px 16px",
                            }}
                        >
                            <div
                                style={{
                                    fontFamily: FONT.mono,
                                    fontSize: 10,
                                    letterSpacing: ".2em",
                                    color: "var(--amber)",
                                }}
                            >
                                LIVE · CH 01
                            </div>
                            <div
                                style={{
                                    fontFamily: FONT.archivo,
                                    fontWeight: 800,
                                    fontSize: 16,
                                    color: "#f4ebdd",
                                }}
                            >
                                Selshiya Xavier
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* scroll indicator */}
            <div
                className="oa-scroll"
                style={{
                    position: "absolute",
                    bottom: 26,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 6,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                }}
            >
                <span
                    style={{
                        fontFamily: FONT.mono,
                        fontSize: 10,
                        letterSpacing: ".24em",
                        color: "#a89a89",
                    }}
                >
                    SCROLL
                </span>
                <span
                    style={{
                        width: 1,
                        height: 40,
                        background: "linear-gradient(to bottom,var(--accent),transparent)",
                    }}
                />
            </div>
        </section>
    );
}
