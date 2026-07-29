import type { ScriptLine } from "./types";

export const script: ScriptLine[] = [
    {
        type: "boot",
        text: "Booting CloudJex...",
        typing: true,
    },

    {
        type: "success",
        text: "✓ Loading environment",
    },

    {
        type: "success",
        text: "✓ Starting development tools",
    },

    {
        type: "blank",
    },

    {
        type: "prompt",
        text: "developer@cloudjex ~/projects",
    },

    {
        type: "command",
        text: "git pull",
        typing: true,
    },

    {
        type: "output",
        text: "Already up to date.",
    },

    {
        type: "blank",
    },

    {
        type: "command",
        text: "cargo build",
        typing: true,
    },

    {
        type: "output",
        text: "Compiling cloudjex...",
    },

    {
        type: "output",
        text: "Finished in 1.18s",
    },

    {
        type: "blank",
    },

    {
        type: "command",
        text: "docker compose up -d",
        typing: true,
    },

    {
        type: "output",
        text: "Creating network...",
    },

    {
        type: "output",
        text: "Done.",
    },

    {
        type: "blank",
    },

    {
        type: "command",
        text: "npm run dev",
        typing: true,
    },

    {
        type: "output",
        text: "Local: http://localhost:4321",
    },

    {
        type: "blank",
    },

    {
        type: "command",
        text: "git status",
        typing: true,
    },

    {
        type: "output",
        text: "On branch main",
    },

    {
        type: "output",
        text: "Working tree clean",
    },

    {
        type: "blank",
    },

    {
        type: "command",
        text: "clear",
        typing: true,
    },
];