function checkStepNumbers(systemNames, stepNumbers) {
  let visited = {};
  if (systemNames.length < 1) return false;
  systemNames.forEach((x, i) => {
    visited[x] = visited[x]
      ? [...visited[x], stepNumbers[i]]
      : [stepNumbers[i]];
  });

  for (const v of Object.values(visited)) {
    const vString = v.join();
    const vString2 = v.sort((a, b) => a - b).join();
    if (vString !== vString2) {
      return false;
    }
  }
  return true;
}

function checkStepNumbers2(systemNames, stepNumbers) {
  let hashMap = new Map();

  return systemNames.every(
    (name, i, flag, value) => (
      (value = hashMap.get(name)),
      (flag = !!(!value && hashMap.set(name, stepNumbers[i]))),
      !flag &&
        ((flag = value < stepNumbers[i]), flag) &&
        hashMap.set(name, stepNumbers[i]),
      flag
    )
  );
}
const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"];
const stepNumbers = [1, 33, 10, 2, 44, 20];

checkStepNumbers(systemNames, stepNumbers); // => true

// tree_1 tiene los pasos: [1, 2]
// tree_2 tiene los pasos: [33, 44]
// house tiene los pasos: [10, 20]

// true: Los pasos de cada sistema están en orden estrictamente creciente

checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10]); // => false

// tree_1 tiene los pasos: [2, 1]
// house tiene los pasos: [10]

// false: tree_1 tiene los pasos de forma decreciente
