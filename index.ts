export class TextDump {
    private lines: string[] = [];
    constructor(private name: string, private width: number, private height: number) {}
    public Clear(): void {
        this.lines.splice(0);
    }
    public Lines(): number {
        return this.lines.length;
    }
    public AddLine(line: string): void {
        this.lines.push(line);
    }
    public Display(): void {}
}

export class LibTextDump {
    public New(name: string, width: number, height: number): TextDump {
        return new TextDump(name, width, height);
    }
}

const lib = new LibTextDump();
export default lib;
