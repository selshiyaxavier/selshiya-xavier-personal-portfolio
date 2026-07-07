import { FONT } from "./tokens";

interface SectionTagProps {
    index: string;
    title: string;
    /** bottom margin in px — 52 for standalone sections, 20 when a heading follows */
    mb?: number;
}

export default function SectionTag({ index, title, mb = 52 }: SectionTagProps) {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: mb }}>
            <span style={{ width: 11, height: 11, background: "var(--accent)" }} />
            <span
                style={{
                    fontFamily: FONT.mono,
                    fontSize: 13,
                    letterSpacing: ".24em",
                    color: "#a89a89",
                }}
            >
                {index} — {title}
            </span>
            <span style={{ flex: 1, height: 1, background: "rgba(244,235,221,0.12)" }} />
        </div>
    );
}
