let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};

const fromEuroToDollar = (euro) => {
    return euro * 1.07;
};
const fromDollarToYen = (dollar) => {
    return dollar / 1.07 * 156.5;
};
const fromYenToPound = (yen) => {
    return yen / 156.5 * .87;
};

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }

