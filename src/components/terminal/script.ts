import type { ScriptLine } from "./types";

export const script: ScriptLine[] = [
    {
        type: "boot",
        text: "Booting CloudJex...",
        typing: true
    },

    {
        type: "success",
        text: "✓ Loading environment"
    },

    {
        type: "success",
        text: "✓ Initializing shell"
    },

    {
        type: "success",
        text: "✓ Starting Nova CLI"
    },

    {
        type: "blank"
    },

    {
        type: "info",
        text: "Welcome back, Lesther."
    },

    {
        type: "blank"
    },

    {
        type: "prompt",
        text: "lesther@cloudjex ~/Projects"
    },

    {
        type: "command",
        text: "nova help",
        typing: true
    },

    {
        type: "blank"
    },

    {
        type: "output",
        text: "🚀 Nova CLI v1.0.0"
    },

    {
        type: "output",
        text: "CLI personal para productividad."
    },

    {
        type: "blank"
    },

    {
        type: "output",
        text: "git      Gestión de repositorios"
    },

    {
        type: "output",
        text: "docker   Contenedores Docker"
    },

    {
        type: "output",
        text: "rust     Desarrollo en Rust"
    }
];