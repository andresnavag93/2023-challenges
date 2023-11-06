export default function maxProfit(prices) {
  const PRICES_LENGTH = prices.length;
  if (PRICES_LENGTH <= 1) return -1;
  let i = 0;
  let max = -1;

  for (let j = 1; j < PRICES_LENGTH; j++) {
    if (prices[i] > prices[j]) {
      i = j;
    } else if (prices[i] < prices[j]) {
      max = Math.max(max, prices[j] - prices[i]);
    }
  }
  // ¡Y no olvides compartir tu solución en redes!
  return max;
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
maxProfit(pricesBtc); // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70];
maxProfit(pricesEth); // -> 60 (compra a 10, vende a 70)

const pricesDoge = [18, 15, 12, 11, 9, 7];
maxProfit(pricesDoge); // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3];
maxProfit(pricesAda); // -> -1 (no hay ganancia posible)
