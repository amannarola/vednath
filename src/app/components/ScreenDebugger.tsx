// components/ScreenDebugger.tsx
"use client";

import { useEffect, useState } from "react";

export default function ScreenDebugger() {
    const [size, setSize] = useState({ width: 0, height: 0 });
    const [screenClass, setScreenClass] = useState("");

    useEffect(() => {
        function updateSize() {
            const width = window.innerWidth;
            const height = window.innerHeight;
            setSize({ width, height });

            if (width < 640) setScreenClass("sm");
            else if (width < 768) setScreenClass("md");
            else if (width < 1024) setScreenClass("lg");
            else if (width < 1280) setScreenClass("xl");
            else setScreenClass("2xl");
        }

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <div className="fixed bottom-0 left-0 w-full bg-black text-white text-center p-2 text-sm">
            Width: {size.width}px | Height: {size.height}px | Class: {screenClass}
        </div>
    );
}
