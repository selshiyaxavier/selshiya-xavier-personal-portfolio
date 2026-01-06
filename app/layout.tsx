import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageProtection from "@/components/ImageProtection";

import ScrollToTop from "@/components/ScrollToTop";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    weight: ["300", "400", "500", "600", "700", "800"],
});

const eyesome = localFont({
    src: "./fonts/EyesomeScript.otf",
    variable: "--font-eyesome",
    display: "swap",
});

export const metadata: Metadata = {
    title: "VJ Selshiya | Portfolio",
    description: "Portfolio of VJ Selshiya - Video Jockey, RJ, Voice Over Artist, and Storyteller.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${montserrat.variable} ${eyesome.variable} font-sans bg-background text-white antialiased`}>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `history.scrollRestoration = "manual"`,
                    }}
                />
                <ScrollToTop />
                <Navbar />
                <ImageProtection />
                <main className="min-h-screen flex flex-col items-center justify-between">
                    {children}
                </main>
                <Footer />
                <Analytics />
            </body>
        </html>
    );
}
