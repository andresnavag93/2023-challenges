function countTime(leds) {
  if (leds.every((x) => x === 1)) return 0;
  let result = 0;
  let allOn = false;

  while (!allOn) {
    leds = leds.map((x, i) => {
      return leds.at(i - 1) === 1 ? 1 : leds.at(i);
    });
    result += 7;
    allOn = leds.every((x) => x !== 0);
  }
  return result;
}

function countTime(leds) {
  let arr = leds.join("").split("1");
  arr[0] += arr.pop();
  return Math.max(...arr.map((led) => led.length)) * 7;
}

const leds = [0, 1, 1, 0, 1];
countTime(leds); // 7
// 7 segundos ya que en el primer cambio
// todas las luces se encendieron
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

countTime([0, 0, 0, 1]); // 21
// 21 segundos ya que necesita tres cambios:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

countTime([0, 0, 1, 0, 0]); // 28
// 28 segundos ya que necesita cuatro cambios:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]

countTime([0, 0, 0, 1, 0]); // 0
