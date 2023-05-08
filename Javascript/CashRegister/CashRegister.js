
export { CheckCashRegister };

/**
 * Accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
 * cid is a 2D array listing available currency.
 * 
 * The checkCashRegister() function always returns an object with a status key and a change key. Examples:
 * 
 * Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
 * Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
 * 
 * Otherwise, it returns {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
 * @param {number} price 
 * @param {number} cash 
 * @param {Array} cid 
 * @returns {Object} with status and change keys 
 */
function CheckCashRegister(price, cash, cid) {

    // Currency values
    const currencyValues = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };

    let changeDue = cash - price;

    // Here we're using reduce, which passes an accumulator, and a 'current' element to a function, and an initialising amount (here zero) 
    // We can this to quickly get a total of the cash in draw.
    let totalCID = cid.reduce((acc, curr) => acc + curr[1], 0);

    if (totalCID < changeDue) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    if (totalCID === changeDue) {
        return { status: "CLOSED", change: cid };
    }

    // Here we again reduce, but reduceRight goes in reverse order.
    let changeArray = cid.reduceRight((acc, curr) => {
        let value = 0;

        while (changeDue >= currencyValues[curr[0]] && curr[1] > 0) {

            // Add the value of this denomination to value
            value += currencyValues[curr[0]];

            // Subtract the value of this denomination from changeDue
            changeDue -= currencyValues[curr[0]];

            // Subtract the value of this denomination from CashInDraw for this denomination
            curr[1] -= currencyValues[curr[0]];

            // Round changeDue
            changeDue = Math.round(changeDue * 100) / 100;
        }

        // If value is > 0, push it to the accumulator.
        if (value > 0) {
            acc.push([curr[0], value]);
        }

        return acc;
    }, []);

    if (changeArray.length < 1 || changeDue > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: changeArray };
}