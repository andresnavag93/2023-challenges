function dryNumber(dry, numbers) {
  return Array.from({ length: numbers }, (_, i) => i + 1).filter((x) =>
    x.toString().includes(dry.toString())
  );
}

function dryNumber2(dry, numbers) {
  return Array.from(Array(numbers).keys())
    .filter((x) => `${x + 1}`.split("").includes(`${dry}`))
    .map((x) => x + 1);
}

function dryNumber(dry, numbers) {
  let barCodes = [];
  for (let i = 0; i <= numbers; i++) {
    barCodes.push(i);
  }
  return barCodes.filter((elem) => elem.toString().includes(dry));
}
