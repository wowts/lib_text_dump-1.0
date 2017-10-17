"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TextDump {
    constructor(name, width, height) {
        this.name = name;
        this.width = width;
        this.height = height;
        this.lines = [];
    }
    Clear() {
        this.lines.splice(0);
    }
    Lines() {
        return this.lines.length;
    }
    AddLine(line) {
        this.lines.push(line);
    }
    Display() { }
}
exports.TextDump = TextDump;
class LibTextDump {
    New(name, width, height) {
        return new TextDump(name, width, height);
    }
}
exports.LibTextDump = LibTextDump;
const lib = new LibTextDump();
exports.default = lib;
