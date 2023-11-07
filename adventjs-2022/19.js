function sortToys(toys, positions) {
  return toys
    .map((x, i) => [x, positions[i]])
    .sort((a, b) => a[1] - b[1])
    .map((x) => x[0]);
}

const toys = ["ball", "doll", "car", "puzzle"];
const positions = [2, 3, 1, 0];

sortToys(toys, positions);
// ['puzzle', 'car', 'ball', 'doll']

const moreToys = ["pc", "xbox", "ps4", "switch", "nintendo"];
const morePositions = [8, 6, 5, 7, 9];

sortToys(moreToys, morePositions);
// ['ps4', 'xbox', 'switch', 'pc', 'nintendo']
