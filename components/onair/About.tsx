"use client";

import { useEffect, useState } from "react";
import { FONT, revealStyle } from "./tokens";
import SectionTag from "./SectionTag";

const SLIDES = [
    "/images/about-me-1.jpg",
    "/images/about-me-2.jpg",
    "/images/about-me-3.jpg",
    "/images/IMG_6839.jpeg",
];

const STATS = [
    { value: "132K+", label: "VIRAL VIEWS", color: "var(--accent)", big: true },
    { value: "TOP PERFORMER", label: "SEPT '25 AWARD", color: "var(--amber)", big: false },
    { value: "BILINGUAL", label: "TAMIL & ENGLISH", color: "#f4ebdd", big: false },
];

export default function About() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const id = window.setInterval(
            () => setActive((i) => (i + 1) % SLIDES.length),
            3200
        );
        return () => window.clearInterval(id);
    }, []);

    return (
        <section
            id="about"
            style={{
                position: "relative",
                zIndex: 5,
                scrollMarginTop: 96,
                maxWidth: 1400,
                margin: "0 auto",
                padding: "clamp(80px,10vw,150px) clamp(20px,4vw,56px)",
            }}
        >
            <SectionTag index="01" title="OFF SCREEN" />

            <div
                className="grid grid-cols-1 items-center gap-[clamp(32px,5vw,72px)] min-[900px]:grid-cols-[0.85fr_1.15fr]"
            >
                {/* image carousel */}
                <div data-parallax="0.04" data-reveal style={{ position: "relative" }}>
                    <div
                        aria-hidden
                        style={{
                            position: "absolute",
                            inset: -10,
                            border: "1px solid rgba(244,235,221,0.14)",
                            borderRadius: 20,
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            top: -18,
                            left: 20,
                            zIndex: 3,
                            padding: "7px 13px",
                            background: "var(--accent)",
                            color: "#14100d",
                            fontFamily: FONT.mono,
                            fontSize: 11,
                            letterSpacing: ".14em",
                        }}
                    >
                        REC ● 001
                    </div>
                    <div
                        style={{
                            position: "relative",
                            aspectRatio: "3/4",
                            width: "100%",
                            borderRadius: 16,
                            overflow: "hidden",
                            background: "#1c1713",
                            border: "1px solid rgba(244,235,221,0.1)",
                        }}
                    >
                        {SLIDES.map((src, i) => (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                key={src}
                                src={src}
                                alt="Selshiya"
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    opacity: i === active ? 1 : 0,
                                    transition: "opacity .8s ease",
                                }}
                            />
                        ))}
                        <div
                            aria-hidden
                            style={{
                                position: "absolute",
                                inset: 0,
                                background:
                                    "linear-gradient(to top,rgba(20,16,13,0.5),transparent 45%)",
                                pointerEvents: "none",
                            }}
                        />
                    </div>
                </div>

                {/* text */}
                <div data-reveal style={revealStyle}>
                    <h2
                        style={{
                            margin: "0 0 26px",
                            fontFamily: FONT.archivo,
                            fontWeight: 900,
                            fontSize: "clamp(38px,5.5vw,76px)",
                            lineHeight: 0.95,
                            letterSpacing: "-.03em",
                            color: "#f4ebdd",
                        }}
                    >
                        The person
                        <br />
                        behind the <span style={{ color: "var(--accent)" }}>mic.</span>
                    </h2>
                    <div
                        style={{
                            maxWidth: 600,
                            display: "flex",
                            flexDirection: "column",
                            gap: 18,
                            fontFamily: FONT.grotesk,
                            fontSize: "clamp(15px,1.15vw,17px)",
                            lineHeight: 1.7,
                            color: "#c9bdac",
                        }}
                    >
                        <p style={{ margin: 0 }}>
                            I work at the intersection of content, coordination and communication —
                            making sure ideas move cleanly from concept to audience. My experience
                            spans digital media execution and on-camera presentation.
                        </p>
                        <p style={{ margin: 0 }}>
                            I&apos;ve hosted the reality dance show{" "}
                            <span style={{ color: "var(--amber)", fontWeight: 600 }}>
                                STEP &apos;N&apos; WALK
                            </span>{" "}
                            on{" "}
                            <span style={{ color: "var(--amber)", fontWeight: 600 }}>
                                Raj Television Network
                            </span>
                            , leading on-stage presentation, interacting with contestants and judges,
                            and working with production to deliver a smooth broadcast.
                        </p>
                        <p style={{ margin: 0 }}>
                            Whether on camera or behind the screen, my focus is delivering content
                            that connects with audiences — and meets real-world timelines.
                        </p>
                    </div>

                    {/* stats */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3,1fr)",
                            gap: 14,
                            marginTop: 36,
                        }}
                    >
                        {STATS.map((s) => (
                            <div
                                key={s.label}
                                style={{
                                    padding: "22px 18px",
                                    borderRadius: 14,
                                    background: "rgba(244,235,221,0.04)",
                                    border: "1px solid rgba(244,235,221,0.09)",
                                }}
                            >
                                <div
                                    style={{
                                        fontFamily: FONT.archivo,
                                        fontWeight: 900,
                                        fontSize: s.big
                                            ? "clamp(26px,3vw,38px)"
                                            : "clamp(20px,2.2vw,26px)",
                                        color: s.color,
                                    }}
                                >
                                    {s.value}
                                </div>
                                <div
                                    style={{
                                        fontFamily: FONT.mono,
                                        fontSize: 11,
                                        letterSpacing: ".14em",
                                        color: "#a89a89",
                                        marginTop: 6,
                                    }}
                                >
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
