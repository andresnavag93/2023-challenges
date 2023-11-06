export default function shouldBuyFidelity(times) {
  const normalTicket = 12 * times;
  let fidelityTotal = 250;
  let fidelityTicket = 12;

  while (times > 0) {
    fidelityTicket *= 0.75;
    fidelityTotal += fidelityTicket;
    times--;
  }

  return normalTicket > fidelityTotal;
}

shouldBuyFidelity(1); // false -> Mejor comprar tickets de un sólo uso
shouldBuyFidelity(100); // true -> Mejor comprar tarjeta fidelidad
