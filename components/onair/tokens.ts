import type { CSSProperties } from "react";

/** Theme colors from the ON AIR design props (accent = coral, amber = gold). */
export const ACCENT = "#ff4d2e";
export const AMBER = "#f2a93b";
export const INK = "#14100d";
export const CREAM = "#f4ebdd";

/** Font-family stacks bound to the next/font CSS variables set in the layout. */
export const FONT = {
    archivo: "var(--font-archivo), sans-serif",
    grotesk: "var(--font-space-grotesk), sans-serif",
    mono: "var(--font-space-mono), monospace",
    serif: "var(--font-instrument-serif), serif",
    tamil: "var(--font-anek-tamil), sans-serif",
} as const;

/** Base style for scroll-reveal elements (hidden until the observer flips them). */
export const revealStyle: CSSProperties = {
    opacity: 0,
    transform: "translateY(42px)",
    transition:
        "opacity .9s cubic-bezier(.16,.84,.44,1), transform .9s cubic-bezier(.16,.84,.44,1)",
};

/** Same as revealStyle but with a stagger delay. */
export function revealWithDelay(delay: string): CSSProperties {
    return {
        ...revealStyle,
        transition: `opacity .9s cubic-bezier(.16,.84,.44,1) ${delay}, transform .9s cubic-bezier(.16,.84,.44,1) ${delay}`,
    };
}
