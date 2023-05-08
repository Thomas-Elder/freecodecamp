
import { CheckCashRegister } from "../CashRegister.js";

describe("CheckCashRegister", () => {

    it("when called with valid inputs returns an Object", () => {
        // Arrange
        var inputPrice = 19.5;
        var inputCash = 20;
        var inputCID = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];

        // Act
        var actual = CheckCashRegister(inputPrice, inputCash, inputCID);

        // Assert 
        expect(actual).toBeInstanceOf(Object);
    });

    it("when called with valid inputs and drawer has enough change should return OPEN", () => {
        // Arrange
        var inputPrice = 19.5;
        var inputCash = 20;
        var inputCID = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];

        // Act
        var actual = CheckCashRegister(inputPrice, inputCash, inputCID);

        // Assert 
        expect(actual["status"]).toBe("OPEN");
    });

    it("when called with valid inputs and drawer has enough change should return OPEN", () => {
        // Arrange
        var inputPrice = 3.26;
        var inputCash = 100;
        var inputCID = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];

        // Act
        var actual = CheckCashRegister(inputPrice, inputCash, inputCID);

        // Assert 
        expect(actual["status"]).toBe("OPEN");
    });

    it("when called with valid inputs and drawer does exactly enough change should return CLOSED", () => {
        // Arrange
        var inputPrice = 19.5;
        var inputCash = 20;
        var inputCID = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];

        // Act
        var actual = CheckCashRegister(inputPrice, inputCash, inputCID);

        // Assert 
        expect(actual["status"]).toBe("CLOSED");
    });
});