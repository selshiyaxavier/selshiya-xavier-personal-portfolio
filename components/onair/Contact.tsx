import type { CSSProperties } from "react";
import { FONT } from "./tokens";
import Marquee from "./Marquee";

const inputStyle: CSSProperties = {
    width: "100%",
    background: "rgba(20,16,13,0.6)",
    border: "1px solid rgba(244,235,221,0.12)",
    borderRadius: 11,
    padding: "14px 16px",
    color: "#f4ebdd",
    fontSize: 15,
    outline: "none",
};

const labelStyle: CSSProperties = {
    display: "block",
    fontFamily: FONT.mono,
    fontSize: 11,
    letterSpacing: ".16em",
    color: "#a89a89",
    marginBottom: 9,
};

function CircleIcon({ children, solid }: { children: React.ReactNode; solid?: boolean }) {
    return (
        <span
            style={{
                width: 46,
                height: 46,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                ...(solid
                    ? {
                          background: "var(--accent)",
                          color: "#14100d",
                          fontFamily: FONT.archivo,
                          fontWeight: 800,
                          fontSize: 13,
                      }
                    : {
                          background: "rgba(244,235,221,0.06)",
                          border: "1px solid rgba(244,235,221,0.12)",
                          color: "var(--amber)",
                          fontFamily: FONT.mono,
                          fontSize: 12,
                      }),
            }}
        >
            {children}
        </span>
    );
}

export default function Contact({ pressWords }: { pressWords: string[] }) {
    const year = new Date().getFullYear();

    return (
        <>
            <Marquee
                words={pressWords}
                variant="outline"
                durationSec={30}
                reverse
                label="AS SEEN / WORKED WITH"
            />

            <footer
                id="contact"
                style={{
                    position: "relative",
                    zIndex: 5,
                    scrollMarginTop: 96,
                    padding: "clamp(80px,10vw,150px) clamp(20px,4vw,56px) 48px",
                    overflow: "hidden",
                }}
            >
                <div
                    data-parallax="0.06"
                    aria-hidden
                    style={{
                        position: "absolute",
                        bottom: "-8%",
                        right: "-4%",
                        zIndex: 0,
                        fontFamily: FONT.archivo,
                        fontWeight: 900,
                        fontSize: "22vw",
                        lineHeight: 0.8,
                        color: "transparent",
                        WebkitTextStroke: "1.5px rgba(244,235,221,0.05)",
                        pointerEvents: "none",
                    }}
                >
                    LIVE
                </div>

                <div
                    className="grid grid-cols-1 gap-[clamp(32px,5vw,72px)] min-[900px]:grid-cols-[1.1fr_0.9fr]"
                    style={{ position: "relative", zIndex: 2, maxWidth: 1400, margin: "0 auto" }}
                >
                    <div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                marginBottom: 22,
                            }}
                        >
                            <span
                                style={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: "50%",
                                    background: "var(--accent)",
                                    animation: "pulseDot 1.4s ease-in-out infinite",
                                }}
                            />
                            <span
                                style={{
                                    fontFamily: FONT.mono,
                                    fontSize: 12,
                                    letterSpacing: ".24em",
                                    color: "var(--accent)",
                                }}
                            >
                                READY TO GO LIVE
                            </span>
                        </div>
                        <h2
                            style={{
                                margin: "0 0 24px",
                                fontFamily: FONT.archivo,
                                fontWeight: 900,
                                fontSize: "clamp(44px,8vw,120px)",
                                lineHeight: 0.86,
                                letterSpacing: "-.035em",
                            }}
                        >
                            Let&apos;s
                            <br />
                            collaborate.
                        </h2>
                        <p
                            style={{
                                margin: "0 0 40px",
                                maxWidth: 420,
                                fontFamily: FONT.grotesk,
                                color: "#c9bdac",
                                fontSize: 17,
                                lineHeight: 1.6,
                            }}
                        >
                            Looking for a host, voice artist or storyteller for your next event?
                            Let&apos;s create something worth watching.
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                            <a
                                href="mailto:selshiyaxavier@gmail.com"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 16,
                                    color: "#e6dccb",
                                }}
                            >
                                <CircleIcon>✉</CircleIcon>
                                <span style={{ fontSize: 18 }}>selshiyaxavier@gmail.com</span>
                            </a>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 16,
                                    color: "#e6dccb",
                                }}
                            >
                                <CircleIcon>◉</CircleIcon>
                                <span style={{ fontSize: 18 }}>Redhills, Chennai</span>
                            </div>
                            <a
                                href="https://instagram.com/vj_selshiya"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 16,
                                    color: "#e6dccb",
                                }}
                            >
                                <CircleIcon solid>IG</CircleIcon>
                                <span style={{ fontSize: 18 }}>@vj_selshiya</span>
                            </a>
                        </div>
                    </div>

                    <div
                        style={{
                            padding: "clamp(24px,3vw,38px)",
                            borderRadius: 22,
                            background: "rgba(244,235,221,0.04)",
                            border: "1px solid rgba(244,235,221,0.1)",
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                            <div>
                                <label style={labelStyle}>NAME</label>
                                <input type="text" placeholder="Your name" style={inputStyle} />
                            </div>
                            <div>
                                <label style={labelStyle}>EMAIL</label>
                                <input type="email" placeholder="your@email.com" style={inputStyle} />
                            </div>
                            <div>
                                <label style={labelStyle}>MESSAGE</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell me about your project..."
                                    style={{ ...inputStyle, resize: "none" }}
                                />
                            </div>
                            <button
                                type="button"
                                style={{
                                    width: "100%",
                                    padding: 16,
                                    border: "none",
                                    borderRadius: 11,
                                    background: "var(--accent)",
                                    color: "#14100d",
                                    fontFamily: FONT.archivo,
                                    fontWeight: 800,
                                    fontSize: 16,
                                    cursor: "pointer",
                                    boxShadow: "0 12px 34px rgba(255,77,46,0.3)",
                                }}
                            >
                                Send message →
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className="flex flex-wrap justify-between gap-[12px]"
                    style={{
                        position: "relative",
                        zIndex: 2,
                        maxWidth: 1400,
                        margin: "80px auto 0",
                        paddingTop: 28,
                        borderTop: "1px solid rgba(244,235,221,0.1)",
                        fontFamily: FONT.mono,
                        fontSize: 12,
                        letterSpacing: ".1em",
                        color: "#6b6055",
                    }}
                >
                    <span>© {year} VJ SELSHIYA — ALL RIGHTS RESERVED</span>
                    <span style={{ color: "var(--accent)" }}>SIGNING OFF · TATA BOI BOI 👋</span>
                </div>
            </footer>
        </>
    );
}
