export default function decodeNumber(symbols) {
  const LENGTH = symbols.length;
  if (LENGTH < 1) {
  }

  const SYMBOLS = {
    ".": 1,
    ",": 5,
    ":": 10,
    ";": 50,
    "!": 100,
  };
  let res = 0;

  for (let i = 0; i < LENGTH; i++) {
    let symbol1 = symbols[i];
    let symbol1Val = SYMBOLS[symbol1];

    if (!symbol1Val) return NaN;

    if (i + 1 >= LENGTH) {
      res += symbol1Val;
    } else {
      let symbol2 = symbols[i + 1];
      let symbol2Val = SYMBOLS[symbol2];

      if (!symbol2Val) return NaN;

      if (symbol1Val < symbol2Val) {
        res -= symbol1Val;
      } else {
        res += symbol1Val;
      }
    }
  }

  // ¡No olvides compartir tu solución en redes!
  return res;
}

decodeNumbers("..."); // 3
decodeNumbers(".,"); // 4 (5 - 1)
decodeNumbers(",."); // 6 (5 + 1)
decodeNumbers(",..."); // 8 (5 + 3)
decodeNumbers(".........!"); // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers(".;"); // 49 (50 - 1)
decodeNumbers("..,"); // 5 (-1 + 1 + 5)
decodeNumbers("..,!"); // 95 (1 - 1 - 5 + 100)
decodeNumbers(".;!"); // 49 (-1 -50 + 100)
decodeNumbers("!!!"); // 300
decodeNumbers(";!"); // 50
decodeNumbers(";.W"); // NaN
