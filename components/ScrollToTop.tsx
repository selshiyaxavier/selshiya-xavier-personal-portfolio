"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
    const pathname = usePathname();

    useLayoutEffect(() => {
        // Force scroll to top immediately
        window.scrollTo(0, 0);

        // Clear hash if present to prevent browser from jumping to it
        if (window.location.hash) {
            window.history.replaceState(null, "", window.location.pathname);
        }

        // Disable scroll restoration
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
    }, [pathname]);

    return null;
}
