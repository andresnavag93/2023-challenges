export default function sumPairs(numbers, result) {
  const visited = new Map();
  let complement, number, i;

  for (i = 0; i < numbers.length; i++) {
    number = numbers[i];
    complement = result - number;

    if (visited.has(complement)) {
      visited.get(complement).second = number;
    } else {
      visited.set(number, { first: number });
    }
  }
  for (const [k, v] of visited) {
    if (v.second) {
      return [v.first, v.second];
    }
  }
  return null;
}

sumPairs([3, 5, 7, 2], 10); // [3, 7]
sumPairs([-3, -2, 7, -5], 10); // null
sumPairs([2, 2, 3, 1], 4); // [2, 2]
sumPairs([6, 7, 1, 2], 8); // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6);
