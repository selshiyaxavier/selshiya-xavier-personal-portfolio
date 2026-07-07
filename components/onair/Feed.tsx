"use client";

import { useState } from "react";
import { FONT } from "./tokens";
import SectionTag from "./SectionTag";
import portfolioData from "@/data/portfolio.json";

interface Reel {
    url: string;
    caption: string;
    full_caption: string;
    category: string;
    thumbnail: string;
}

const reels = portfolioData as Reel[];
const PAGE = 6;

export default function Feed() {
    const [visible, setVisible] = useState(PAGE);
    const shown = reels.slice(0, visible);
    const showLoadMore = visible < reels.length;

    return (
        <section
            id="portfolio"
            style={{
                position: "relative",
                zIndex: 5,
                scrollMarginTop: 96,
                background: "#100c0a",
                padding: "clamp(80px,10vw,150px) clamp(20px,4vw,56px)",
                borderTop: "1px solid rgba(244,235,221,0.06)",
            }}
        >
            <div style={{ maxWidth: 1400, margin: "0 auto" }}>
                <SectionTag index="04" title="THE FEED" mb={20} />

                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        gap: 20,
                        marginBottom: 52,
                    }}
                >
                    <h2
                        style={{
                            margin: 0,
                            fontFamily: FONT.archivo,
                            fontWeight: 900,
                            fontSize: "clamp(38px,6vw,92px)",
                            lineHeight: 0.9,
                            letterSpacing: "-.03em",
                        }}
                    >
                        Selected <span style={{ color: "var(--accent)" }}>transmissions</span>
                    </h2>
                    <p
                        style={{
                            margin: 0,
                            maxWidth: 360,
                            fontFamily: FONT.grotesk,
                            color: "#a89a89",
                            fontSize: 15,
                            lineHeight: 1.6,
                        }}
                    >
                        Moments on stage, on camera and behind the mic — straight from the reel grid.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-[14px] sm:gap-[22px] min-[900px]:grid-cols-3">
                    {shown.map((reel) => (
                        <a
                            key={reel.url}
                            href={reel.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="oa-feed-card"
                            style={{
                                position: "relative",
                                display: "block",
                                aspectRatio: "9/16",
                                borderRadius: 18,
                                overflow: "hidden",
                                background: "#1c1713",
                                border: "1px solid rgba(244,235,221,0.1)",
                            }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={reel.thumbnail}
                                alt={reel.caption}
                                loading="lazy"
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                            <div
                                aria-hidden
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background:
                                        "linear-gradient(to top,rgba(16,12,10,0.92) 8%,transparent 42%,rgba(16,12,10,0.55) 100%)",
                                    pointerEvents: "none",
                                }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    top: 14,
                                    left: 14,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6,
                                    padding: "5px 10px",
                                    borderRadius: 999,
                                    background: "rgba(20,16,13,0.7)",
                                    backdropFilter: "blur(6px)",
                                    WebkitBackdropFilter: "blur(6px)",
                                    border: "1px solid rgba(244,235,221,0.14)",
                                }}
                            >
                                <span
                                    style={{
                                        width: 6,
                                        height: 6,
                                        borderRadius: "50%",
                                        background: "var(--accent)",
                                    }}
                                />
                                <span
                                    style={{
                                        fontFamily: FONT.mono,
                                        fontSize: 10,
                                        letterSpacing: ".12em",
                                        color: "#f4ebdd",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    {reel.category}
                                </span>
                            </div>
                            <div
                                aria-hidden
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    pointerEvents: "none",
                                }}
                            >
                                <span
                                    style={{
                                        width: 58,
                                        height: 58,
                                        borderRadius: "50%",
                                        background: "rgba(244,235,221,0.12)",
                                        backdropFilter: "blur(8px)",
                                        WebkitBackdropFilter: "blur(8px)",
                                        border: "1px solid rgba(244,235,221,0.25)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#f4ebdd",
                                        fontSize: 20,
                                    }}
                                >
                                    ▶
                                </span>
                            </div>
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: "18px 16px",
                                    zIndex: 2,
                                }}
                            >
                                <div
                                    style={{
                                        fontFamily: FONT.archivo,
                                        fontWeight: 700,
                                        fontSize: 16,
                                        lineHeight: 1.25,
                                        color: "#f4ebdd",
                                    }}
                                >
                                    {reel.caption}
                                </div>
                                <div
                                    style={{
                                        marginTop: 6,
                                        fontFamily: FONT.mono,
                                        fontSize: 10,
                                        letterSpacing: ".12em",
                                        color: "var(--amber)",
                                    }}
                                >
                                    WATCH ON INSTAGRAM →
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {showLoadMore && (
                    <div style={{ textAlign: "center", marginTop: 44 }}>
                        <button
                            type="button"
                            onClick={() => setVisible((v) => Math.min(v + PAGE, reels.length))}
                            className="oa-loadmore"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 10,
                                padding: "15px 32px",
                                borderRadius: 999,
                                background: "transparent",
                                border: "1px solid rgba(244,235,221,0.22)",
                                color: "#f4ebdd",
                                fontFamily: FONT.archivo,
                                fontWeight: 700,
                                fontSize: 15,
                                cursor: "pointer",
                            }}
                        >
                            Load more ↓
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
