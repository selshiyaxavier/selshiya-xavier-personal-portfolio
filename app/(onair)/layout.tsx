import type { Metadata } from "next";
import {
    Archivo,
    Space_Grotesk,
    Space_Mono,
    Instrument_Serif,
    Anek_Tamil,
} from "next/font/google";
import "../globals.css";
import "./onair.css";
import ImageProtection from "@/components/ImageProtection";

const archivo = Archivo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-archivo",
    display: "swap",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-space-grotesk",
    display: "swap",
});

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-space-mono",
    display: "swap",
});

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    style: ["normal", "italic"],
    variable: "--font-instrument-serif",
    display: "swap",
    // Next has no fallback-metric data for this face; skip the size-adjust step.
    adjustFontFallback: false,
});

const anekTamil = Anek_Tamil({
    subsets: ["tamil"],
    weight: ["400", "600", "800"],
    variable: "--font-anek-tamil",
    display: "swap",
});

export const metadata: Metadata = {
    title: "VJ Selshiya | ON AIR",
    description:
        "VJ Selshiya — Video Jockey, RJ, Voice Over Artist and Storyteller. Connecting souls through Voice, Video & Words.",
};

const fontVars = [
    archivo.variable,
    spaceGrotesk.variable,
    spaceMono.variable,
    instrumentSerif.variable,
    anekTamil.variable,
].join(" ");

export default function OnAirLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${fontVars} onair-body antialiased`}>
                <ImageProtection />
                {children}
            </body>
        </html>
    );
}
