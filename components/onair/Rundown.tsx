import { FONT, revealStyle } from "./tokens";
import SectionTag from "./SectionTag";
import experienceData from "@/data/experience.json";

interface ExperienceItem {
    type: string;
    title: string;
    org: string;
    date: string;
    desc: string[];
    iconType: string;
}

const experience = experienceData as ExperienceItem[];

function formatDate(date: string) {
    return date.toUpperCase().replace(/\s-\s/g, " — ");
}

export default function Rundown() {
    return (
        <section
            id="experience"
            style={{
                position: "relative",
                zIndex: 5,
                scrollMarginTop: 96,
                background: "#100c0a",
                padding: "clamp(80px,10vw,150px) clamp(20px,4vw,56px)",
                borderTop: "1px solid rgba(244,235,221,0.06)",
                borderBottom: "1px solid rgba(244,235,221,0.06)",
            }}
        >
            <div style={{ maxWidth: 1400, margin: "0 auto" }}>
                <SectionTag index="02" title="THE RUNDOWN" mb={20} />
                <h2
                    style={{
                        margin: "0 0 60px",
                        fontFamily: FONT.archivo,
                        fontWeight: 900,
                        fontSize: "clamp(38px,6vw,92px)",
                        lineHeight: 0.9,
                        letterSpacing: "-.03em",
                    }}
                >
                    Broadcast <span style={{ color: "var(--accent)" }}>log</span>
                </h2>

                {experience.map((item, i) => {
                    const isCurrent = /present/i.test(item.date);
                    const isLast = i === experience.length - 1;
                    return (
                        <div
                            key={`${item.title}-${i}`}
                            data-reveal
                            className="grid grid-cols-[auto_1fr] gap-[clamp(20px,4vw,60px)]"
                            style={{
                                ...revealStyle,
                                padding: "38px 0",
                                borderTop: "1px solid rgba(244,235,221,0.12)",
                                ...(isLast
                                    ? { borderBottom: "1px solid rgba(244,235,221,0.12)" }
                                    : {}),
                            }}
                        >
                            <div
                                style={{
                                    fontFamily: FONT.archivo,
                                    fontWeight: 900,
                                    fontSize: "clamp(48px,7vw,110px)",
                                    lineHeight: 0.85,
                                    color: "transparent",
                                    WebkitTextStroke: "1.5px rgba(244,235,221,0.25)",
                                }}
                            >
                                {String(i + 1).padStart(2, "0")}
                            </div>
                            <div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 10,
                                        marginBottom: 14,
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: FONT.mono,
                                            fontSize: 11,
                                            letterSpacing: ".14em",
                                            padding: "5px 11px",
                                            borderRadius: 999,
                                            ...(isCurrent
                                                ? { color: "#14100d", background: "var(--amber)" }
                                                : {
                                                      color: "#c9bdac",
                                                      background: "rgba(244,235,221,0.06)",
                                                      border: "1px solid rgba(244,235,221,0.12)",
                                                  }),
                                        }}
                                    >
                                        {formatDate(item.date)}
                                    </span>
                                    {isCurrent && (
                                        <span
                                            style={{
                                                fontFamily: FONT.mono,
                                                fontSize: 11,
                                                letterSpacing: ".14em",
                                                color: "var(--accent)",
                                                border: "1px solid var(--accent)",
                                                padding: "5px 11px",
                                                borderRadius: 999,
                                            }}
                                        >
                                            NOW PLAYING
                                        </span>
                                    )}
                                </div>
                                <h3
                                    style={{
                                        margin: "0 0 4px",
                                        fontFamily: FONT.archivo,
                                        fontWeight: 800,
                                        fontSize: "clamp(24px,3vw,40px)",
                                        color: "#f4ebdd",
                                    }}
                                >
                                    {item.title}
                                </h3>
                                <div
                                    style={{
                                        fontFamily: FONT.grotesk,
                                        fontWeight: 600,
                                        fontSize: 17,
                                        color: "var(--amber)",
                                        marginBottom: 18,
                                    }}
                                >
                                    {item.org}
                                </div>
                                <ul
                                    style={{
                                        margin: 0,
                                        padding: 0,
                                        listStyle: "none",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 12,
                                        maxWidth: 760,
                                    }}
                                >
                                    {item.desc.map((d, j) => (
                                        <li
                                            key={j}
                                            style={{
                                                display: "flex",
                                                gap: 12,
                                                color: "#c9bdac",
                                                fontFamily: FONT.grotesk,
                                                fontSize: 15,
                                                lineHeight: 1.55,
                                            }}
                                        >
                                            <span style={{ color: "var(--accent)" }}>▸</span>
                                            <span>{d}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
