import {generateRandomNumber} from "../src";

describe("should generate data", () => {
    it("should generate a random number", () => {
        expect(generateRandomNumber(10)).toHaveLength(10);
    });
});