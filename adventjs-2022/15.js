function decorateTree(base) {
  const dictionary = {
    PP: "P",
    BP: "R",
    PB: "R",
    RP: "B",
    PR: "B",
    BR: "P",
    RB: "P",
    BB: "B",
    RR: "R",
  };
  let aux = base.split(" ");
  const result = [base];
  while (aux.length > 1) {
    let aux2 = [];
    for (let i = 1; i < aux.length; i++) {
      aux2.push(dictionary[aux[i - 1] + aux[i]]);
    }
    result.unshift(aux2.join(" "));
    aux = aux2;
  }
  return result;
}

function decorateTree2(base) {
  const dict = {
    PP: "P",
    BB: "B",
    RR: "R",
    BP: "R",
    PB: "R",
    BR: "P",
    RB: "P",
    PR: "B",
    RP: "B",
  };

  base = base.split(" ");
  let list = new Array(base.length).fill(base);
  return list
    .reduce(
      (total, x) =>
        total.concat([
          new Array(total.at(-1).length - 1).fill("-").map((_, i) => {
            return dict[
              total
                .at(-1)
                .slice(i, i + 2)
                .join("")
            ];
          }),
        ]),
      [base]
    )
    .slice(0, base.length)
    .map((x) => x.join(" "))
    .reverse();
}

decorateTree("B P R P");
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

// decorateTree('B B') // ['B', 'B B']
