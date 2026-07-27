export type LineType =
    | "boot"
    | "success"
    | "info"
    | "prompt"
    | "command"
    | "output"
    | "blank";

export interface ScriptLine {
    type: LineType;
    text?: string;
}