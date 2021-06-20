import {validateEmail, validatePhone} from "../src";

describe("it should validate the data", () => {
    it("should validate an email", () => {
        expect(validateEmail("mukherjee_pronoy@yahoo.in")).toBe(true);
    });
    it("should NOT validate an incorrect email", () => {
        expect(validateEmail("mukherjee_pronoy@yahoo")).toBe(false);
    });
    it("should validate a phone number", () => {
        expect(validatePhone("+919875045816")).toBe(true);
    });
    it("should NOT validate an incorrect phone number", () => {
        expect(validatePhone("982727272")).toBe(false);
    });
});