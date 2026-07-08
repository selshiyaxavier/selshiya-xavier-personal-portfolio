import type { CSSProperties } from "react";
import { FONT, revealStyle, revealWithDelay } from "./tokens";
import SectionTag from "./SectionTag";
import skillsData from "@/data/skills_achievements.json";

const skills = (skillsData as { skills: string[] }).skills;

// Highlight cards keep the design's curated headline/body treatment.
// They mirror data/skills_achievements.json → achievements.
const HIGHLIGHTS: {
    headline: string;
    headlineColor: string;
    big: boolean;
    accent?: boolean;
    body: React.ReactNode;
}[] = [
    {
        headline: "STEP 'N' WALK",
        headlineColor: "var(--accent)",
        big: true,
        accent: true,
        body: (
            <>
                Hosted the dance reality show{" "}
                <strong style={{ color: "#fff" }}>STEP &lsquo;N&rsquo; WALK on Raj Television Network</strong>,
                engaging live audiences and coordinating on-stage interactions with contestants
                and judges.
            </>
        ),
    },
    {
        headline: "6.5K → 10K+",
        headlineColor: "var(--amber)",
        big: true,
        body: (
            <>
                Grew Mr. Chandru&apos;s (Co-founder, Mr. Golisoda) Instagram following from{" "}
                <strong style={{ color: "#fff" }}>6.5K to 10K+ in just 28 days</strong> through
                strategic content planning and organic growth.
            </>
        ),
    },
    {
        headline: "132K",
        headlineColor: "var(--accent)",
        big: true,
        body: (
            <>
                Created viral Instagram Reel content at Nicola Foundation that crossed{" "}
                <strong style={{ color: "#fff" }}>132K views</strong>.
            </>
        ),
    },
    {
        headline: "TOP PERFORMER",
        headlineColor: "var(--amber)",
        big: false,
        body: (
            <>
                Recognised as{" "}
                <strong style={{ color: "#fff" }}>&ldquo;Top Performer of the Month&rdquo;</strong> —
                September 2025, Nicola Foundation.
            </>
        ),
    },
    {
        headline: "80+ LIVE",
        headlineColor: "#f4ebdd",
        big: false,
        body: (
            <>
                Hosted Dr. A.P.J. Abdul Kalam&apos;s Memorial &amp; Independence Day events, engaging{" "}
                <strong style={{ color: "#fff" }}>80+ attendees</strong>.
            </>
        ),
    },
];

export default function Toolkit() {
    return (
        <section
            id="skills"
            style={{
                position: "relative",
                zIndex: 5,
                scrollMarginTop: 96,
                maxWidth: 1400,
                margin: "0 auto",
                padding: "clamp(80px,10vw,150px) clamp(20px,4vw,56px)",
            }}
        >
            <SectionTag index="03" title="THE TOOLKIT" />

            <div className="grid grid-cols-1 gap-[clamp(24px,4vw,48px)] min-[900px]:grid-cols-2">
                {/* skills */}
                <div data-reveal style={revealStyle}>
                    <h2
                        style={{
                            margin: "0 0 30px",
                            fontFamily: FONT.archivo,
                            fontWeight: 900,
                            fontSize: "clamp(30px,4vw,54px)",
                            letterSpacing: "-.02em",
                        }}
                    >
                        Key <span style={{ color: "var(--accent)" }}>skills</span>
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {skills.map((skill, i) => {
                            const rowStyle: CSSProperties = {
                                display: "flex",
                                alignItems: "baseline",
                                gap: 16,
                                padding: "16px 0",
                                borderTop: "1px solid rgba(244,235,221,0.1)",
                                ...(i === skills.length - 1
                                    ? { borderBottom: "1px solid rgba(244,235,221,0.1)" }
                                    : {}),
                            };
                            return (
                                <div key={i} style={rowStyle}>
                                    <span
                                        style={{
                                            fontFamily: FONT.mono,
                                            fontSize: 12,
                                            color: "var(--amber)",
                                        }}
                                    >
                                        S{i + 1}
                                    </span>
                                    <span
                                        style={{
                                            fontFamily: FONT.grotesk,
                                            fontSize: "clamp(16px,1.4vw,20px)",
                                            color: "#e6dccb",
                                        }}
                                    >
                                        {skill}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* achievements */}
                <div data-reveal style={revealWithDelay(".12s")}>
                    <h2
                        style={{
                            margin: "0 0 30px",
                            fontFamily: FONT.archivo,
                            fontWeight: 900,
                            fontSize: "clamp(30px,4vw,54px)",
                            letterSpacing: "-.02em",
                            color: "var(--amber)",
                        }}
                    >
                        Highlights
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        {HIGHLIGHTS.map((h) => (
                            <div
                                key={h.headline}
                                style={{
                                    position: "relative",
                                    padding: 26,
                                    borderRadius: 16,
                                    overflow: "hidden",
                                    ...(h.accent
                                        ? {
                                              background:
                                                  "linear-gradient(150deg,rgba(255,77,46,0.1),rgba(244,235,221,0.02))",
                                              border: "1px solid rgba(255,77,46,0.22)",
                                          }
                                        : {
                                              background: "rgba(244,235,221,0.04)",
                                              border: "1px solid rgba(244,235,221,0.1)",
                                          }),
                                }}
                            >
                                <div
                                    style={{
                                        fontFamily: FONT.archivo,
                                        fontWeight: 900,
                                        fontSize: h.big
                                            ? "clamp(30px,4vw,46px)"
                                            : "clamp(22px,2.4vw,30px)",
                                        color: h.headlineColor,
                                        lineHeight: 1,
                                    }}
                                >
                                    {h.headline}
                                </div>
                                <div
                                    style={{
                                        marginTop: 8,
                                        fontFamily: FONT.grotesk,
                                        color: "#e6dccb",
                                        fontSize: 16,
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {h.body}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
