"use client";

import { useEffect } from "react";

export default function ImageProtection() {
    useEffect(() => {
        // Prevent context menu (right-click) on images
        const handleContextMenu = (e: MouseEvent) => {
            if ((e.target as HTMLElement).tagName === "IMG") {
                e.preventDefault();
            }
        };

        // Prevent dragging images
        const handleDragStart = (e: DragEvent) => {
            if ((e.target as HTMLElement).tagName === "IMG") {
                e.preventDefault();
            }
        };

        // Prevent key combinations for inspect element (basic protection)
        const handleKeyDown = (e: KeyboardEvent) => {
            // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
            if (
                e.key === "F12" ||
                (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
                (e.ctrlKey && e.key === "u") ||
                (e.metaKey && e.altKey && e.key === "i") // Mac Command+Option+I
            ) {
                // We generally allow dev tools for debugging, but if strict protection is requested:
                // e.preventDefault(); 
                // Note: Blocking dev tools keys is often aggressive and can be bypassed via menu.
                // We will focus on image interactions first.
            }
        };

        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("dragstart", handleDragStart);

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("dragstart", handleDragStart);
        };
    }, []);

    return null;
}
