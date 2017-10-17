export declare class TextDump {
    private name;
    private width;
    private height;
    private lines;
    constructor(name: string, width: number, height: number);
    Clear(): void;
    Lines(): number;
    AddLine(line: string): void;
    Display(): void;
}
export declare class LibTextDump {
    New(name: string, width: number, height: number): TextDump;
}
declare const lib: LibTextDump;
export default lib;
