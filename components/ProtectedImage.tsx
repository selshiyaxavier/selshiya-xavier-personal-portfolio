"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ProtectedImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: number; // Optional hint for aspect ratio
    height?: number;
}

export default function ProtectedImage({ src, alt, className, width, height }: ProtectedImageProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [aspectRatio, setAspectRatio] = useState<number | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = src;

        img.onload = () => {
            // Set canvas dimensions to match the image resolution
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;

            // Draw image
            ctx.drawImage(img, 0, 0);

            // Calculate aspect ratio for responsive scaling
            setAspectRatio(img.naturalHeight / img.naturalWidth);
        };

    }, [src]);

    return (
        <div
            ref={containerRef}
            className={cn("relative overflow-hidden select-none pointer-events-none", className)}
            style={aspectRatio ? { paddingBottom: `${aspectRatio * 100}%` } : undefined}
            role="img"
            aria-label={alt}
        >
            {/* 
                We use a canvas to render the pixels. 
                This makes it impossible to "drag" the image or "save image as" via standard context menu.
                The pointer-events-none on the container ensures no interaction.
             */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full object-contain"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
            />
            {/* Transparent overlay for extra protection against direct element inspection/clicks if pointer-events was auto */}
            <div className="absolute inset-0 z-10" />
        </div>
    );
}
