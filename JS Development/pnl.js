function computePnl(numShares, originalPrice, currentPrice) {
    return numShares == null || originalPrice == null || currentPrice == null ? 0 :
    numShares * (currentPrice - originalPrice);
    }

module.exports = computePnl;