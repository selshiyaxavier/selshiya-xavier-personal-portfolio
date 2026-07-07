import type { CSSProperties } from "react";
import { FONT } from "./tokens";

type Variant = "solid" | "outline";

interface MarqueeProps {
    words: string[];
    variant?: Variant;
    durationSec?: number;
    reverse?: boolean;
    label?: string;
}

export default function Marquee({
    words,
    variant = "solid",
    durationSec = 26,
    reverse = false,
    label,
}: MarqueeProps) {
    const solid = variant === "solid";

    const groupStyle: CSSProperties = solid
        ? {
              display: "flex",
              alignItems: "center",
              gap: 38,
              paddingRight: 38,
              fontFamily: FONT.archivo,
              fontWeight: 900,
              fontSize: "clamp(28px,4vw,58px)",
              letterSpacing: "-.02em",
              color: "#14100d",
              whiteSpace: "nowrap",
          }
        : {
              display: "flex",
              alignItems: "center",
              gap: 64,
              paddingRight: 64,
              whiteSpace: "nowrap",
              fontFamily: FONT.archivo,
              fontWeight: 800,
              fontSize: "clamp(22px,2.6vw,34px)",
              color: "transparent",
              WebkitTextStroke: "1px rgba(244,235,221,0.35)",
          };

    const sepStyle: CSSProperties = solid
        ? {}
        : { color: "var(--accent)", WebkitTextStroke: "0" };

    const Group = ({ copy }: { copy: number }) => (
        <div style={groupStyle} aria-hidden={copy > 0}>
            {words.map((w, i) => (
                <span key={`${copy}-${i}`} style={{ display: "contents" }}>
                    <span>{w}</span>
                    <span style={sepStyle}>✦</span>
                </span>
            ))}
        </div>
    );

    return (
        <div
            style={{
                position: "relative",
                zIndex: 5,
                overflow: "hidden",
                ...(solid
                    ? {
                          padding: "26px 0",
                          background: "var(--accent)",
                          borderTop: "1px solid rgba(20,16,13,0.15)",
                          borderBottom: "1px solid rgba(20,16,13,0.15)",
                      }
                    : {
                          padding: "34px 0",
                          borderTop: "1px solid rgba(244,235,221,0.08)",
                          borderBottom: "1px solid rgba(244,235,221,0.08)",
                      }),
            }}
        >
            {label && (
                <div
                    style={{
                        maxWidth: 1400,
                        margin: "0 auto 20px",
                        padding: "0 clamp(20px,4vw,56px)",
                        fontFamily: FONT.mono,
                        fontSize: 12,
                        letterSpacing: ".24em",
                        color: "#a89a89",
                    }}
                >
                    {label}
                </div>
            )}
            <div
                style={{
                    display: "flex",
                    width: "max-content",
                    animation: `${reverse ? "marqueeRev" : "marquee"} ${durationSec}s linear infinite`,
                }}
            >
                <Group copy={0} />
                <Group copy={1} />
            </div>
        </div>
    );
}
