function wrapping(gifts) {
  return gifts.reduce((machine, gift) => {
    const wrapped = "*".repeat(gift.length + 2);
    machine.push(`${wrapped}\n*${gift}*\n${wrapped}`);
    return machine;
  }, []);
}

function wrapping2(gifts) {
  return gifts.map((gift) => {
    const wrapped = "*".repeat(gift.length + 2);
    return `${wrapped}\n*${gift}*\n${wrapped}`;
  });
}

const gifts = ["cat", "game", "socks"];
const wrapped = wrapping(gifts);

console.log(wrapped);
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */
