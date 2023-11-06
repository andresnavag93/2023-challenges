export default function groupBy(collection, it) {
  // ¡No olvides compartir tu solución en redes!
  if (typeof it === "string") {
    return collection.reduce((acc, curr) => {
      if (acc.hasOwnProperty(curr[it])) {
        acc[curr[it]].push(curr);
      } else {
        acc[curr[it]] = [curr];
      }
      return acc;
    }, {});
  }

  return collection.reduce((acc, curr) => {
    if (acc.hasOwnProperty(it(curr))) {
      acc[it(curr)].push(curr);
    } else {
      acc[it(curr)] = [curr];
    }
    return acc;
  }, {});
}

groupBy([6.1, 4.2, 6.3], Math.floor); // { 6: [6.1, 6.3], 4: [4.2] }
groupBy(["one", "two", "three"], "length"); // { 3: ['one', 'two'], 5: ['three'] }
groupBy([{ age: 23 }, { age: 24 }], "age"); // { 23: [{age: 23}], 24: [{age: 24}] }

groupBy([1397639141184, 1363223700000], (timestamp) =>
  new Date(timestamp).getFullYear()
);
// { 2013: [1363223700000], 2014: [1397639141184] }

groupBy(
  [
    { title: "JavaScript: The Good Parts", rating: 8 },
    { title: "Aprendiendo Git", rating: 10 },
    { title: "Clean Code", rating: 9 },
  ],
  "rating"
);
// { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
//   9: [{ title: 'Clean Code', rating: 9 }],
//   10: [{ title: 'Aprendiendo Git', rating: 10 }] }
