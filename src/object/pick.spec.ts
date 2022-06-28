import { pick } from "./pick";

interface Input {
    a: string;
    b: string;
    c: number;
}

describe("pick (util)", () => {
    it("keys which are not picked from object, shouldn't be in result", () => {
        const obj = {
            a: "A",
            b: "B",
            c: 3,
        };
        const result = pick(obj, ["a"]);
        expect(result.a).toBe("A");
        expect((result as Input).b).not.toBeDefined();
    });
});
