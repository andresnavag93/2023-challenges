export default function countPackages(carriers, carrierID) {
  // ¡No olvides compartir tu solución en redes!
  const carriersInfo = {};
  const stack = [];
  for (let i = 0; i < carriers.length; i++) {
    if (!carriersInfo.hasOwnProperty(carriers[i])) {
      carriersInfo[carriers[i][0]] = carriers[i];
    }
  }

  stack.push(carrierID);
  let result = 0;

  let workerId, worker;
  while (stack.length > 0) {
    worker = carriersInfo[stack.pop()];

    for (let i = 0; i < worker[2].length; i++) {
      stack.push(worker[2][i]);
    }
    result += worker[1];
  }

  return result;
}

const carriers = [
  ["dapelu", 5, ["midu", "jelowing"]],
  ["midu", 2, []],
  ["jelowing", 2, []],
];

countPackages(carriers, "dapelu"); // 9
// 5 de dapelu, 2 de midu y 2 de jelowing = 9

const carriers2 = [
  ["lolivier", 8, ["camila", "jesuspoleo"]],
  ["camila", 5, ["sergiomartinez", "conchaasensio"]],
  ["jesuspoleo", 4, []],
  ["sergiomartinez", 4, []],
  ["conchaasensio", 3, ["facundocapua", "faviola"]],
  ["facundocapua", 2, []],
  ["faviola", 1, []],
];

countPackages(carriers2, "camila"); // 15
// 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15
