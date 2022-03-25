const WINNING_SUM = 123.40;

/**
@param {Array} cartItemsPrices
*/
function doesCartWinPrize(cartItemsPrices) {
    return WINNING_SUM === parseInt(cartItemsPrices.reduce((acc,curr) => acc + +curr,0) * 100) / 100
}

module.exports = doesCartWinPrize;
