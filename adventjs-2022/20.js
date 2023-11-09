function howManyReindeers(reindeerTypes, gifts) {
  const result = [];
  const reindeerTypesSorted = reindeerTypes
    .sort((a, b) => b.weightCapacity - a.weightCapacity)
    .map((x, index) => {
      x.index = index;
      return x;
    })
    .sort((a, b) => a.weightCapacity - b.weightCapacity);
  gifts.forEach((gift) => {
    let currentWeight = 0;
    let reindeers = {};
    while (currentWeight < gift.weight) {
      for (let i = 0; i < reindeerTypesSorted.length; i++) {
        if (
          currentWeight + reindeerTypesSorted[i].weightCapacity <=
          gift.weight
        ) {
          if (reindeers.hasOwnProperty(reindeerTypesSorted[i].type)) {
            reindeers[reindeerTypesSorted[i].type].num += 1;
          } else {
            reindeers[reindeerTypesSorted[i].type] = {
              index: reindeerTypesSorted[i].index,
              num: 1,
            };
          }
          currentWeight += reindeerTypesSorted[i].weightCapacity;
        }
      }
    }
    reindeers = Object.entries(reindeers)
      .map((x) => {
        return { type: x[0], num: x[1].num, index: x[1].index };
      })
      .sort((a, b) => a.index - b.index)
      .map((x) => {
        return { type: x.type, num: x.num };
      });
    result.push({ country: gift.country, reindeers });
  });

  return result;
}

function howManyReindeers(reindeerTypes, gifts) {
  return gifts.map((gift) => {
    let max = gift.weight;
    let reindeers = reindeerTypes
      .map((x) => [x.type, x.weightCapacity])
      .filter((x) => x[1] < max)
      .sort((a, b) => a[1] - b[1]); // Menor a Mayor

    let res = reindeers.map(([type]) => ({
      type,
      num: 0,
    }));

    reindeers.map((_, i) => {
      let sliced = reindeers.slice(0, reindeers.length - i);
      let sum = sliced.reduce((sum, e) => sum + e[1], 0);
      sliced.map((_, i) => {
        res[i].num += Math.floor(max / sum);
      });
      max %= sum;
    });

    return {
      country: gift.country,
      reindeers: res.reverse(),
    };
  });
}

const reindeerTypes = [
  { type: "Nuclear", weightCapacity: 50 },
  { type: "Electric", weightCapacity: 10 },
  { type: "Gasoline", weightCapacity: 5 },
  { type: "Diesel", weightCapacity: 1 },
];

const gifts = [
  { country: "Spain", weight: 30 },
  { country: "France", weight: 17 },
  { country: "Italy", weight: 50 },
];

howManyReindeers(reindeerTypes, gifts);
// [{
//   country: 'Spain',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }, {
//   country: 'France',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 1 },
//     { type: 'Diesel', num: 2 }
//   ]
//  }, {
//   country: 'Italy',
//   reindeers: [
//     { type: 'Electric', num: 3 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }]
