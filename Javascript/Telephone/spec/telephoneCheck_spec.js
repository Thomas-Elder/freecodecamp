
import { TelephoneCheck } from "../Telephone.js";

describe("TelephoneCheck", () => {
    
    it("should return true if the string is at least 10 characters long", () => {
        let input = "1234567891";
        let expected = true;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return false if the string is less than 10 characters long", () => {
        let input = "123456789";
        let expected = false;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return false if the string contains forbidden characters", () => {
        let input = "55555!5555";
        let expected = false;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return false if it contains non-matching parentheses", () => {
        let input = "55555(5555";
        let expected = false;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return false if it contains non-matching parentheses", () => {
        let input = "55555)5555";
        let expected = false;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    
    // Freecodecamp test cases
    it("should return true when given 555-555-5555", () => {
        let input = "555-555-5555";
        let expected = true;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return true when given 1 555-555-5555", () => {
        let input = "1 555-555-5555";
        let expected = true;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return true when given 1 (555) 555-5555", () => {
        let input = "1 (555) 555-5555";
        let expected = true;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return true when given 5555555555", () => {
        let input = "5555555555";
        let expected = true;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return true when given 555-555-5555", () => {
        let input = "555-555-5555";
        let expected = true;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return true when given (555)555-5555", () => {
        let input = "(555)555-5555";
        let expected = true;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return true when given 1(555)555-5555", () => {
        let input = "1(555)555-5555";
        let expected = true;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return true when given 555-5555", () => {
        let input = "555-5555";
        let expected = false;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return true when given 5555555", () => {
        let input = "5555555";
        let expected = false;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return true when given 1 555)555-5555", () => {
        let input = "1 555)555-5555";
        let expected = false;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return true when given 1 555 555 5555", () => {
        let input = "1 555 555 5555";
        let expected = true;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return true when given 1 456 789 4444", () => {
        let input = "1 456 789 4444";
        let expected = true;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return false when given 123**&!!asdf#", () => {
        let input = "123**&!!asdf#";
        let expected = false;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return false when given 55555555", () => {
        let input = "55555555";
        let expected = false;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return false when given (6054756961)", () => {
        let input = "(6054756961)";
        let expected = false;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return false when given 2 (757) 622-7382", () => {
        let input = "2 (757) 622-7382";
        let expected = false;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return false when given 0 (757) 622-7382", () => {
        let input = "0 (757) 622-7382";
        let expected = false;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });
    
    it("should return false when given -1 (757) 622-7382", () => {
        let input = "-1 (757) 622-7382";
        let expected = false;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });
    
    it("should return false when given 2 757 622-7382", () => {
        let input = "2 757 622-7382";
        let expected = false;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return false when given -1 (757) 622-7382", () => {
        let input = "10 (757) 622-7382";
        let expected = false;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return false when given 27576227382", () => {
        let input = "27576227382";
        let expected = false;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return false when given (275)76227382", () => {
        let input = "(275)76227382";
        let expected = false;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return false when given 2(757)6227382", () => {
        let input = "2(757)6227382";
        let expected = false;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return false when given 2(757)622-7382", () => {
        let input = "2(757)622-7382";
        let expected = false;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return false when given 555)-555-5555", () => {
        let input = "555)-555-5555";
        let expected = false;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return false when given (555-555-5555", () => {
        let input = "(555-555-5555";
        let expected = false;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return false when given (555)5(55?)-5555", () => {
        let input = "(555)5(55?)-5555";
        let expected = false;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return false when given 55 55-55-555-5", () => {
        let input = "55 55-55-555-5";
        let expected = false;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });

    it("should return false when given 11 555-555-5555", () => {
        let input = "11 555-555-5555";
        let expected = false;

        let actual = TelephoneCheck(input);

        expect(actual).toBe(expected);
    });
});