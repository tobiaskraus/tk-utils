import { replaceAll } from "./replaceAll";

describe("replaceAll", () => {
    it("should capitalize all vocals", () => {
        const input = "abcdefghi";
        const mapObj = {
            a: "A",
            e: "E",
            i: "I",
            o: "O",
            u: "U",
        };
        const result = replaceAll(input, mapObj);
        expect(result).toEqual("AbcdEfghI");
    });

    it("should replace all firstname and lastname", () => {
        const input = "Hello firstname lastname!";
        const mapObj = {
            firstname: "John",
            lastname: "Doe",
        };
        const result = replaceAll(input, mapObj);
        expect(result).toEqual("Hello John Doe!");
    });

    it("should replace '2.000,99 €' to '2000.99 EUR'", () => {
        const input = "2.000,99 €";
        const mapObj = {
            ".": "",
            ",": ".",
            "€": "EUR",
        };
        const result = replaceAll(input, mapObj);
        expect(result).toEqual("2000.99 EUR");
    });

    it("should replace characters which are regex special character and therefore have to be replaced", () => {
        const input = ". / \\ ( ) | { } ? ^ $ - +";
        const mapObj = {
            ".": "1",
            "/": "2",
            "\\": "3",
            "(": "4",
            ")": "5",
            "|": "6",
            "{": "7",
            "}": "8",
            "?": "9",
            "^": "10",
            $: "11",
            "-": "12",
            "+": "13",
        };
        const result = replaceAll(input, mapObj);
        expect(result).toEqual("1 2 3 4 5 6 7 8 9 10 11 12 13");
    });

    it("should replace a value with a special character in it", () => {
        const input = "someVar = {...}";
        const mapObj = {
            "{...}": "(object)",
        };
        const result = replaceAll(input, mapObj);
        expect(result).toEqual("someVar = (object)");
    });
});
