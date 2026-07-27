import type { ScriptLine } from "./types";

interface TerminalLineProps {
    line: ScriptLine;
}

export default function TerminalLine({ line }: TerminalLineProps) {
    switch (line.type) {
        case "boot":
            return (
                <div className="text-green-400">
                    {line.text}
                </div>
            );

        case "success":
            return (
                <div className="text-green-400">
                    {line.text}
                </div>
            );

        case "info":
            return (
                <div className="text-accent">
                    {line.text}
                </div>
            );

        case "prompt":
            return (
                <div className="text-purple-300 font-semibold">
                    {line.text}
                </div>
            );

        case "command":
            return (
                <div className="flex gap-2">
                    <span className="text-green-400">$</span>
                    <span className="text-text">
                        {line.text}
                    </span>
                </div>
            );

        case "output":
            return (
                <div className="text-subtext">
                    {line.text}
                </div>
            );

        case "blank":
            return <div className="h-2" />;

        default:
            return null;
    }
}