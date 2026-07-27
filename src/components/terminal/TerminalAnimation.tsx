import { useEffect, useState } from "react";
import TerminalLine from "./TerminalLine";
import { script } from "./script";
import type { ScriptLine } from "./types";

export default function TerminalAnimation() {
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [finishedLines, setFinishedLines] = useState<ScriptLine[]>([]);

    const current = script[lineIndex];

    useEffect(() => {
        if (!current) return;

        // Las líneas en blanco aparecen inmediatamente
        if (current.type === "blank") {
            setFinishedLines(prev => [...prev, current]);
            setLineIndex(prev => prev + 1);
            setCharIndex(0);
            return;
        }

        const text = current.text ?? "";
        const speed = current.typing ? 70 : 25;

        // Sigue escribiendo
        if (charIndex < text.length) {
            const timer = setTimeout(() => {
                setCharIndex(prev => prev + 1);
            }, speed);

            return () => clearTimeout(timer);
        }

        // Terminó la línea
        const timer = setTimeout(() => {
            setFinishedLines(prev => [...prev, current]);
            setLineIndex(prev => prev + 1);
            setCharIndex(0);
        }, 300);

        return () => clearTimeout(timer);

    }, [lineIndex, charIndex]);

        const currentLine =
            current && current.type !== "blank"
                ? {
                    ...current,
                    text: current.typing
                        ? (current.text ?? "").slice(0, charIndex)
                        : current.text,
                    }
                : null;

    const finished = lineIndex >= script.length;

    return (
    <div className="space-y-2 font-mono text-sm">
        {finishedLines.map((line, index) => (
            <TerminalLine
                key={index}
                line={line}
            />
        ))}

        {currentLine && (
            <TerminalLine
                line={currentLine}
            />
        )}

        {finished && (
            <div className="flex items-center gap-2 pt-2">
                <span className="font-bold text-green-400">$</span>

                <span className="inline-block h-5 w-2 animate-pulse rounded-sm bg-accent"></span>
            </div>
        )}
    </div>
);
}