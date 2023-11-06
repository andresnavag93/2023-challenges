export default function getCoins(change) {
  const result = [0, 0, 0, 0, 0, 0];
  while (change > 0) {
    if (50 <= change) {
      change -= 50;
      result[5] += 1;
    } else if (20 <= change) {
      change -= 20;
      result[4] += 1;
    } else if (10 <= change) {
      change -= 10;
      result[3] += 1;
    } else if (5 <= change) {
      change -= 5;
      result[2] += 1;
    } else if (2 <= change) {
      change -= 2;
      result[1] += 1;
    } else {
      change -= 1;
      result[0] += 1;
    }
  }
  // ¡No olvides compartir tu solución en redes!
  return result;
}

getCoins(51); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(3); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
getCoins(5); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16); // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
getCoins(100); // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
