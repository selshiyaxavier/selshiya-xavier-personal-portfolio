"use client";

import { useEffect, useRef, useState } from "react";
import { FONT } from "./tokens";

const NAV: { label: string; href: string; download?: boolean }[] = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "RUNDOWN", href: "#experience" },
    { label: "FEED", href: "#portfolio" },
    { label: "CONTACT", href: "#contact" },
    { label: "CV", href: "/VJ-Selshiya-CV.pdf", download: true },
];

const MOBILE_NAV: { label: string; href: string; accent: boolean; download?: boolean }[] = [
    { label: "Home", href: "#home", accent: false },
    { label: "About", href: "#about", accent: false },
    { label: "Rundown", href: "#experience", accent: false },
    { label: "Feed", href: "#portfolio", accent: false },
    { label: "Contact", href: "#contact", accent: true },
    { label: "Download CV", href: "/VJ-Selshiya-CV.pdf", accent: false, download: true },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const tcRef = useRef<HTMLDivElement>(null);

    // running timecode HH:MM:SS:FF (25fps frame counter)
    useEffect(() => {
        const pad = (n: number) => String(n).padStart(2, "0");
        const tick = () => {
            const el = tcRef.current;
            if (!el) return;
            const d = new Date();
            const ff = Math.floor((d.getMilliseconds() / 1000) * 25);
            el.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(
                d.getSeconds()
            )}:${pad(ff)}`;
        };
        tick();
        const id = window.setInterval(tick, 40);
        return () => window.clearInterval(id);
    }, []);

    useEffect(() => {
        const onScroll = () => setScrolled((window.scrollY || 0) > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <header
                id="onair-header"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 24,
                    padding: "18px clamp(20px,4vw,56px)",
                    borderBottom: "1px solid transparent",
                    transition: "background .35s ease, border-color .35s ease",
                    ...(scrolled
                        ? {
                              background: "rgba(20,16,13,0.85)",
                              borderBottomColor: "rgba(244,235,221,0.08)",
                              backdropFilter: "blur(14px)",
                              WebkitBackdropFilter: "blur(14px)",
                          }
                        : {}),
                }}
            >
                <a
                    href="#home"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        color: "#f4ebdd",
                        fontFamily: FONT.archivo,
                        fontWeight: 800,
                        letterSpacing: "-.02em",
                        fontSize: 19,
                    }}
                >
                    <span
                        style={{
                            width: 9,
                            height: 9,
                            borderRadius: "50%",
                            background: "var(--accent)",
                            boxShadow: "0 0 12px var(--accent)",
                            animation: "pulseDot 1.6s ease-in-out infinite",
                        }}
                    />
                    VJ&nbsp;<span style={{ color: "var(--accent)" }}>SELSHIYA</span>
                </a>

                <nav
                    className="hidden min-[900px]:flex"
                    style={{
                        alignItems: "center",
                        gap: 4,
                        padding: 5,
                        borderRadius: 999,
                        background: "rgba(244,235,221,0.05)",
                        border: "1px solid rgba(244,235,221,0.09)",
                    }}
                >
                    {NAV.map((item, i) => (
                        <a
                            key={item.href}
                            href={item.href}
                            {...(item.download ? { download: "VJ-Selshiya-CV.pdf" } : {})}
                            style={{
                                padding: "9px 16px",
                                borderRadius: 999,
                                fontFamily: FONT.mono,
                                fontSize: 12,
                                letterSpacing: ".14em",
                                color: i === 0 ? "#f4ebdd" : item.download ? "var(--amber)" : "#a89a89",
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div
                        ref={tcRef}
                        className="hidden sm:block"
                        style={{
                            fontFamily: FONT.mono,
                            fontSize: 12,
                            letterSpacing: ".12em",
                            color: "var(--amber)",
                        }}
                    >
                        00:00:00:00
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 7,
                            padding: "7px 13px",
                            borderRadius: 999,
                            border: "1px solid var(--accent)",
                        }}
                    >
                        <span
                            style={{
                                width: 7,
                                height: 7,
                                borderRadius: "50%",
                                background: "var(--accent)",
                                animation: "pulseDot 1.4s ease-in-out infinite",
                            }}
                        />
                        <span
                            style={{
                                fontFamily: FONT.mono,
                                fontSize: 11,
                                letterSpacing: ".2em",
                                color: "var(--accent)",
                            }}
                        >
                            ON AIR
                        </span>
                    </div>
                    <button
                        type="button"
                        aria-label="Open menu"
                        onClick={() => setMobileOpen(true)}
                        className="flex min-[900px]:hidden"
                        style={{
                            flexDirection: "column",
                            gap: 5,
                            width: 40,
                            height: 40,
                            alignItems: "center",
                            justifyContent: "center",
                            background: "rgba(244,235,221,0.05)",
                            border: "1px solid rgba(244,235,221,0.12)",
                            borderRadius: 12,
                            cursor: "pointer",
                        }}
                    >
                        <span style={{ width: 18, height: 2, background: "#f4ebdd", display: "block" }} />
                        <span style={{ width: 18, height: 2, background: "#f4ebdd", display: "block" }} />
                    </button>
                </div>
            </header>

            {mobileOpen && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 2000,
                        background: "#14100d",
                        display: "flex",
                        flexDirection: "column",
                        padding: 26,
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <span style={{ fontFamily: FONT.archivo, fontWeight: 800, fontSize: 19 }}>
                            VJ <span style={{ color: "var(--accent)" }}>SELSHIYA</span>
                        </span>
                        <button
                            type="button"
                            aria-label="Close menu"
                            onClick={() => setMobileOpen(false)}
                            style={{
                                width: 44,
                                height: 44,
                                borderRadius: "50%",
                                background: "rgba(244,235,221,0.06)",
                                border: "1px solid rgba(244,235,221,0.12)",
                                color: "#f4ebdd",
                                fontSize: 22,
                                cursor: "pointer",
                            }}
                        >
                            ✕
                        </button>
                    </div>
                    <div
                        style={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            gap: 26,
                        }}
                    >
                        {MOBILE_NAV.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                {...(item.download ? { download: "VJ-Selshiya-CV.pdf" } : {})}
                                onClick={() => setMobileOpen(false)}
                                style={{
                                    fontFamily: FONT.archivo,
                                    fontWeight: 800,
                                    fontSize: item.download ? 28 : 40,
                                    color: item.accent
                                        ? "var(--accent)"
                                        : item.download
                                          ? "var(--amber)"
                                          : "#f4ebdd",
                                }}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
